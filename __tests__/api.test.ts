import { Recipe } from '../backend/types/Recipe';
import { Ingredient } from '../backend/types/Ingredients';
import UserModel from '../backend/models/UserModel';
import { User } from '../backend/types/User';
import axios from 'axios';
import request from 'supertest';
import mongoose, { Mongoose } from 'mongoose';
import env from 'dotenv';
import app from '../backend/server';
env.config({ path: '../.env' });

const DB_URI: string = process.env.MONGO_URI!;

if (!DB_URI) throw new Error('No database URI found. Aborting tests.');

const testApp = request(app);

// TODO: refactor for readability
// TODO: Bug fixes!
// TODO: Add session support once sessions are made.

let testUser: User = {
  username: 'TEST',
  name: 'TEST',
  email: 'TEST@example.com',
  password: 'PASSWORD',
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
  avatar: 'https://http.cat/510.jpg',
  allergies: ['Peanuts', 'Gluten'],
  favorites: ['Milk', 'Shrimp'],
};

describe('API', () => {
  describe('recipes', () => {
    it('should search for a recipe', async () => {
      const res = await testApp.get('/api/recipes?q=pad%20thai');
      const data: Recipe[] = res.body;
      expect(Array.isArray(data));
      expect(data[0].recipeId).toBeDefined();
      expect(res.status).toBe(200);
    });

    it('should get a recipe by id', async () => {
      const res = await testApp.get(
        '/api/recipes?id=341a387129b0686d49709bc632c3050c'
      );
      const data: Recipe = res.body;
      expect(data.recipeName).toBe('Easy Vegan Pad Thai');
      expect(res.status).toBe(200);
    });

    it('should be of type recipe', async () => {
      const res = await testApp.get(
        '/api/recipes?id=341a387129b0686d49709bc632c3050c'
      );
      const data: Recipe = res.body;

      expect(data.recipeId).toBeDefined();
      expect(data.sourceUrl).toBeDefined();
      expect(data.recipeName).toBeDefined();
      expect(data.image).toBeDefined();
      expect(data.recipeSource).toBeDefined();
      expect(data.edemamShareUrl).toBeDefined();
      expect(data.yield).toBeDefined();
      expect(data.dietLabels).toBeDefined();
      expect(data.healthLabels).toBeDefined();
      expect(data.allergens).toBeDefined();
      expect(data.instructions).toBeDefined();
      expect(data.ingredients).toBeDefined();
      expect(data.calories).toBeDefined();
      expect(data.totalTime).toBeDefined();
      expect(data.dishType).toBeDefined();
      expect(res.status).toBe(200);
    });

    it('should get ingredients in a recipe', async () => {
      const res = await testApp.get(
        '/api/recipes?id=341a387129b0686d49709bc632c3050c'
      );
      const data: Recipe = res.body;
      expect(data.recipeName).toBe('Easy Vegan Pad Thai');
      expect(data.instructions).toBeDefined();
      expect(res.status).toBe(200);
    });

    it('should return all allergies', async () => {
      const res = await testApp.get(
        '/api/recipes?id=341a387129b0686d49709bc632c3050c'
      );
      const data: Recipe = res.body;
      expect(data.recipeName).toBe('Easy Vegan Pad Thai');
      expect(data.allergens).toBeDefined();
      expect(res.status).toBe(200);
    });

    it("should only return recipes that don't contain allergens", async () => {
      const res = await testApp.get(
        '/api/recipes?q=pad%20thai&allergens=gluten,wheat,sulfites'
      );
      const data: Recipe[] = res.body;
      const withAllergens = data.filter(
        (recipe) =>
          recipe.allergens.includes('gluten') ||
          recipe.allergens.includes('wheat') ||
          recipe.allergens.includes('sulfites')
      );

      expect(data.length).toBeGreaterThan(0);
      expect(withAllergens.length).toBe(0);
      expect(res.status).toBe(200);
    });

    it('should return a status of 404 and an error object when no recipe is found', async () => {
      const res = await testApp.get('/api/recipes?id=notARealID1234');
      const data: { error: string } = res.body;
      expect(data.error).toBeDefined();
      expect(res.status).toBe(404);
    });
  });

  describe('favorites', () => {
    let user: User | undefined;
    let SSID: string | undefined;
    let db: typeof mongoose | undefined;

    beforeEach(async () => {
      db = await mongoose.connect(DB_URI!);
      user = await UserModel.create(testUser);
      // This is where the session creation would go.
      // SSID = (await Session.create({userId: user._id}))._id; // <- should look something like this.
      SSID = 'no sessions yet';
    });

    // Test cleanup
    afterEach(async () => {
      // Remove test session
      // await Session.findOneAndDelete({ userId: user._id })
      SSID = undefined;

      // Remove test user
      await UserModel.findByIdAndDelete(user?._id);
      user = undefined;

      // disconnect from db
      await db?.disconnect();
      db = undefined;
    });

    it('should get all favorite ingredients', async () => {
      const res = await testApp
        .get('/api/favorites')
        .set('Accept', 'application/json')
        .set('Cookie', [`SSID=${SSID}`]);
      const data: string[] = res.body;

      expect(Array.isArray(data)).toBe(true);
      expect(data).toEqual(testUser.favorites);
      expect(res.status).toBe(200);
    });

    it('should add new favorite ingredients and respond with all ingredients', async () => {
      const res = await testApp
        .post('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({ newIngredients: ['Spinach', 'Chocolate'] });

      const data: string[] = res.body;

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(testUser.favorites.length + 2);
      expect(data).toEqual([...testUser.favorites, 'Spinach', 'Chocolate']);
      expect(res.status).toBe(200);
    });

    it('should update a favorite ingredient', async () => {
      const res = await testApp
        .patch('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({ update: 'Milk', to: 'Honey' });

      const data: string[] = res.body;

      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(testUser.favorites.length);
      expect(data.includes('Milk')).toBe(false);
      expect(data.includes('Honey')).toBe(true);
      expect(res.status).toBe(200);
    });

    it('should remove a favorite ingredient', async () => {
      const res = await testApp
        .delete('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({ remove: ['Milk'] });

      const data: string[] = res.body;

      expect(Array.isArray(data)).toBe(true);
      expect(data).toEqual(['Shrimp']);
      expect(res.status).toBe(200);
    });

    it('all routes should return 401 and an error when the user is not logged in', async () => {
      const get = await testApp
        .get('/api/favorites')
        .set('Accept', 'application/json');

      const create = await testApp
        .post('/api/favorites')
        .set('Content-Type', 'application/json')
        .send({ newIngredients: ['Spinach', 'Chocolate'] });

      const update = await testApp
        .patch('/api/favorites')
        .set('Content-Type', 'application/json')
        .send({ update: 'Milk', to: 'Honey' });

      const remove = await testApp
        .delete('/api/favorites')
        .set('Content-Type', 'application/json')
        .send({ remove: ['Milk'] });

      expect(get.status).toBe(401);
      expect(create.status).toBe(401);
      expect(update.status).toBe(401);
      expect(remove.status).toBe(401);
      expect(get.body.error).toBeDefined();
      expect(create.body.error).toBeDefined();
      expect(update.body.error).toBeDefined();
      expect(remove.body.error).toBeDefined();
    });

    it('create should return 400 when missing what to add', async () => {
      const res = await testApp
        .post('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.error).toBeDefined();
    });

    it('update should return 400 when missing details', async () => {
      const noUpdate = await testApp
        .patch('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({ to: 'Noodles' });

      const noTo = await testApp
        .patch('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({ update: 'Milk' });

      const none = await testApp
        .patch('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({});

      expect(noUpdate.status).toBe(400);
      expect(noTo.status).toBe(400);
      expect(none.status).toBe(400);
      expect(noUpdate.body.error).toBeDefined();
      expect(noTo.body.error).toBeDefined();
      expect(none.body.error).toBeDefined();
    });

    it('remove should return 400 when missing what to remove', async () => {
      const res = await testApp
        .delete('/api/favorites')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.error).toBeDefined();
    });
  });

  xdescribe('ingredients', () => {
    const expiration = new Date(Date.now() + 172800000);
    let user: User | undefined;
    let SSID: string | undefined;
    let db: typeof mongoose | undefined;

    beforeEach(async () => {
      db = await mongoose.connect(DB_URI!);
      user = await UserModel.create(testUser);
      // This is where the session creation would go.
      // SSID = (await Session.create({userId: user._id}))._id; // <- should look something like this.
      SSID = 'not a real session';
    });

    // Test cleanup
    afterEach(async () => {
      // Remove test session
      // await Session.findOneAndDelete({ userId: user._id })
      SSID = undefined;

      // Remove test user
      await UserModel.findByIdAndDelete(user?._id);
      user = undefined;

      // disconnect from db
      await db?.disconnect();
      db = undefined;
    });

    it('should save a new ingredient and return all ingredients', async () => {});

    it('should get all saved ingredients', async () => {});

    it('should update a saved ingredient and return all ingredients', async () => {});

    it('should remove a saved ingredient', async () => {});

    it('all routes should return 401 and an error when the user is not logged in', async () => {});

    it('create should return 400 when missing what to add', async () => {});

    it('update should return 400 when missing details', async () => {});

    it('remove should return 400 when missing what to remove', async () => {});
  });

  // TODO: Needs sessions to work.
  xdescribe('allergies', () => {
    it('should get allergies saved', () => {});
    it('should save allergies', () => {});
    it('should update an allergy saved', () => {});
    it('should remove an allergy saved', () => {});
  });
});

// https://api.edamam.com/search?app_id=1602d127&app_key=b2dd12ad584d5ca2f8e7e2a05b62b558&q=pad%20thai
