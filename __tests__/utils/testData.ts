import { User } from '../../backend/types/User';

export const testUser: User = {
  auth: {
    username: 'TEST',
    name: 'TEST',
    email: 'TEST@example.com',
    password: 'PASSWORD',
    avatar: 'https://http.cat/510.jpg',
  },
  data: {
    fridgeInventory: [
      {
        itemName: 'Milk',
        amount: 120,
        expires: new Date(Date.now() + 172800000),
      },
      {
        itemName: 'Chocolate',
        amount: 67,
        expires: new Date(Date.now() + 172800000),
      },
    ],
    allergies: ['Peanuts', 'Gluten'],
    favorites: ['Milk', 'Shrimp'],
  },
};
