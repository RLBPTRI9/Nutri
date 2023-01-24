import mongoose from 'mongoose';
import { User } from '../backend/types/User';
import env from 'dotenv';
import UserModel from '../backend/models/UserModel';
import { testUser } from './utils/testData';
import request from 'supertest';
import app from '../backend/server';
import { formatCookie, strip } from './utils/functions';
env.config({ path: '../.env' });

const DB_URI: string = process.env.MONGO_URI!;
if (!DB_URI) throw new Error('🛑 No database URI specified!');

const testApp = request(app);

describe('auth', () => {
  describe('login', () => {
    let expiration: number | undefined;
    let user: User | undefined;
    let db: typeof mongoose | undefined;
    beforeEach(async () => {
      db = await mongoose.connect(DB_URI);
      user = await UserModel.create(testUser);
      expiration = Date.now() + 864000000;
    });

    afterEach(async () => {
      await UserModel.findByIdAndDelete(user!._id);
      user = undefined;
      await db?.disconnect();
      db = undefined;
      expiration = undefined;
    });

    it('should respond with the user', async () => {
      const res = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          username: testUser.auth.username,
          password: testUser.auth.password,
        });

      const data: User = res.body;
      expect(data.auth).toBeDefined();
      expect(data.data).toBeDefined();
      expect(data.auth.avatar).toBeDefined();
      expect(data.auth.email).toBeDefined();
      expect(data.auth.name).toBeDefined();
      expect(data.auth.username).toBeDefined();
      expect(data.data.allergies).toBeDefined();
      expect(data.data.favorites).toBeDefined();
      expect(data.data.fridgeInventory).toBeDefined();
      expect(res.status).toBe(200);
    });

    it('should create an http-only cookie that expires in 10 days', async () => {
      const res = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          username: testUser.auth.username,
          password: testUser.auth.password,
        });

      const formattedCookie: {
        ssid: string;
        httponly: boolean;
        expires: string;
      } = formatCookie(res.headers['set-cookie'][0]);
      expect(formattedCookie.ssid).toBeDefined();
      expect(formattedCookie.httponly).toBe(true);
      expect(
        new Date(formattedCookie.expires).getMilliseconds()
      ).toBeGreaterThanOrEqual(expiration!);
      expect(res.status).toBe(200);
    });

    it('should respond with 401 and an error when the user does not exist', async () => {
      const res = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          username: 'not_a-real_user',
          password: 'not_a-real_password',
        });

      const data: { error: string } = res.body;

      expect(data.error).toBeDefined();
      expect(res.status).toBe(401);
    });

    it('should respond with 401 and an error when the user info is incorrect', async () => {
      const wrongUser = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          username: testUser.auth.username.replace('E', '3'),
          password: testUser.auth.password,
        });

      const wrongPass = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          username: testUser.auth.username,
          password: `${testUser.auth.password}1`,
        });

      const none = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({});

      expect(wrongUser.status).toBe(401);
      expect(wrongUser.body.error).toBeDefined();

      expect(wrongPass.status).toBe(401);
      expect(wrongPass.body.error).toBeDefined();

      expect(none.status).toBe(401);
      expect(none.body.error).toBeDefined();
    });
  });

  xdescribe('logout', () => {
    it('should remove the session cookie when a user logs out', async () => {});
  });

  describe('signup', () => {
    let expiration: number | undefined;
    let db: typeof mongoose | undefined;

    beforeEach(async () => {
      db = await mongoose.connect(DB_URI);
      expiration = Date.now() + 864000000;
    });

    afterEach(async () => {
      await UserModel.findOneAndDelete(testUser.auth);
      await db?.disconnect();
      db = undefined;
      expiration = undefined;
    });

    it('should create a user in the database', async () => {
      const res = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(testUser.auth);

      const user: User | null = await UserModel.findOne({
        username: testUser.auth.username,
        email: testUser.auth.email,
      });

      expect(user).not.toBeNull();
      expect(strip(user!, ['password']).auth).toEqual(
        strip(testUser, ['password']).auth
      );
      expect(res.status).toBe(200);
    });

    it('should return the new users information', async () => {
      const res = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(testUser.auth);

      const data: User = res.body;

      expect(strip(data, ['password']).auth).toEqual(
        strip(testUser, ['password']).auth
      );
      expect(data.data).toBeDefined();
      expect(res.status).toBe(200);
    });

    it('should create an http-only cookie that expires in 10 days', async () => {
      const res = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(testUser.auth);

      const formattedCookie: {
        ssid: string;
        httponly: boolean;
        expires: string;
      } = formatCookie(res.headers['set-cookie'][0]);
      expect(formattedCookie.ssid).toBeDefined();
      expect(formattedCookie.httponly).toBe(true);
      expect(
        new Date(formattedCookie.expires).getMilliseconds()
      ).toBeGreaterThanOrEqual(expiration!);
      expect(res.status).toBe(200);
    });

    it('should return 400 with an error when a user already exists', async () => {
      await UserModel.create(testUser);

      const res = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(testUser.auth);

      expect(res.status).toBe(400);
      expect(res.body.error).toBeDefined();
    });

    it('should return 400 and an error when missing details', async () => {
      const missingUsername = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(strip(testUser, ['username']).auth);

      const missingName = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(strip(testUser, ['name']).auth);

      const missingEmail = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(strip(testUser, ['email']).auth);

      const missingPassword = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(strip(testUser, ['password']).auth);

      const missingAvatar = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(strip(testUser, ['avatar']).auth);

      const none = await testApp
        .post('/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send({});

      expect(missingUsername.status).toBe(400);
      expect(missingUsername.body.error).toBeDefined();

      expect(missingName.status).toBe(400);
      expect(missingName.body.error).toBeDefined();

      expect(missingEmail.status).toBe(400);
      expect(missingEmail.body.error).toBeDefined();

      expect(missingPassword.status).toBe(400);
      expect(missingPassword.body.error).toBeDefined();

      expect(missingAvatar.status).toBe(400);
      expect(missingAvatar.body.error).toBeDefined();

      expect(none.status).toBe(400);
      expect(none.body.error).toBeDefined();
    });
  });

  describe('get', () => {
    it('should return the user info', async () => {
      const res = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          username: testUser.auth.username,
          password: testUser.auth.password,
        });

      const {
        ssid,
      }: {
        ssid: string;
        httponly: boolean;
        expires: string;
      } = formatCookie(res.headers['set-cookie'][0]);

      const { status, body } = await testApp
        .get('/api/user')
        .set('Cookie', `SSID=${ssid}`);

      expect(status).toBe(200);
      expect(body).toEqual(strip(testUser, ['password']));
    });

    it('should return 401 and an error when the user is not logged in', async () => {
      const res = await testApp
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send({
          username: testUser.auth.username,
          password: testUser.auth.password,
        });

      expect(res.status).toBe(400);
      expect(res.body.error).toBeDefined();
    });
  });
});
