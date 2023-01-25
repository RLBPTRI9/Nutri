import { Schema, model } from 'mongoose';
import { User } from '../types/User';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserSchemaMethods {
  verifyJWT(jwt: string): User;
  createJWT(id: object): string;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  avatar: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  allergies: { type: Array<String>(), default: [] },
  fridgeInventory: {
    type: Array<{ itemName: string; amount: number; expires: Date }>(),
    default: [],
  },
  favorites: { type: Array<String>(), default: [] },
});

UserSchema.methods.createJWT = function (id: object) {
  const token = jwt.sign(id,process.env.JWT_SECRET_KEY!,
    { expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME }
  );

  return token;
};

type JWTInfo = {
  id: string;
  username: string;
};
// UserSchema.methods.verifyJWT = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     let token = req.cookies.ssid;
//     if (!token) {
//       return res
//         .status(403)
//         .send('Session expired, please login and try again!');
//     }

//     const verified = jwt.verify(token, process.env.JWT_SECRET_KEY!);
//     console.log(verified);
//     // @ts-ignore because stupid
//     const { id, username } = verified;

//     //TODO: figure out how to handle error
//     // req.user = verified;

//     // @ts-ignore because stupid
//     res.locals.user = { userId: id, username: username };

//     next();
//   } catch (err) {}
// };

export default model<User & UserSchemaMethods>('User', UserSchema);
