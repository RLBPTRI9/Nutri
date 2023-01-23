import { Recipe } from '../../backend/types/Recipe';
import { Ingredient } from '../../backend/types/Ingredients';
import UserModel from '../../backend/models/UserModel';
import { User } from '../../backend/types/User';
import axios from 'axios';
import request from 'supertest';
import mongoose, { Mongoose } from 'mongoose';
import env from 'dotenv';
import { app } from '../../backend/server';
env.config();

if (!process.env.DB_URI)
  throw new Error('No database URI found. Aborting tests.');

const testApp = request(app);

// TODO: refactor for readability
// TODO: Bug fixes!
// TODO: axios should be replaced by supertest...

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
    it('should search for a recipe', (done) => {
      axios
        .get('http://localhost:3000/api/recipes?q=pad%20thai', {})
        .then((d) => {
          const res: Recipe[] = d.data;
          expect(Array.isArray(res));
          expect(res[0].recipeId).toBeDefined();
          expect(d.status).toBe(200);
          done();
        });
    });

    it('should get a recipe by id', (done) => {
      axios
        .get(
          'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
        )
        .then((d) => {
          const res: Recipe = d.data;
          expect(res.recipeName).toBe('Easy Vegan Pad Thai');
          expect(d.status).toBe(200);
          done();
        });
    });

    it('should be of type recipe', (done) => {
      axios
        .get(
          'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
        )
        .then((d) => {
          const res: Recipe = d.data;
          expect(res.recipeId).toBeDefined();
          expect(res.sourceUrl).toBeDefined();
          expect(res.recipeName).toBeDefined();
          expect(res.image).toBeDefined();
          expect(res.recipeSource).toBeDefined();
          expect(res.edemamShareUrl).toBeDefined();
          expect(res.yield).toBeDefined();
          expect(res.dietLabels).toBeDefined();
          expect(res.healthLabels).toBeDefined();
          expect(res.allergens).toBeDefined();
          expect(res.instructions).toBeDefined();
          expect(res.ingredients).toBeDefined();
          expect(res.calories).toBeDefined();
          expect(res.totalTime).toBeDefined();
          expect(res.dishType).toBeDefined();
          expect(d.status).toBe(200);
          done();
        });
    });

    it('should get ingredients in a recipe', (done) => {
      axios
        .get(
          'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
        )
        .then((d) => {
          const res: Recipe = d.data;
          expect(res.recipeName).toBe('Easy Vegan Pad Thai');
          expect(res.instructions).toBeDefined();
          expect(d.status).toBe(200);
          done();
        });
    });

    it('should return all allergies', (done) => {
      axios
        .get(
          'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
        )
        .then((d) => {
          const res: Recipe = d.data;
          expect(res.recipeName).toBe('Easy Vegan Pad Thai');
          expect(res.allergens).toBeDefined();
          expect(d.status).toBe(200);
          done();
        });
    });

    it("should only return recipes that don't contain allergens", (done) => {
      axios
        .get(
          'http://localhost:3000/api/recipes?q=pad%20thai&allergens=gluten,wheat,sulfites'
        )
        .then((d) => {
          const res: Recipe[] = d.data;
          const withAllergens = res.filter((recipe) => {
            if (
              recipe.allergens.includes('gluten') ||
              recipe.allergens.includes('wheat') ||
              recipe.allergens.includes('sulfites')
            )
              return true;
            return false;
          });
          expect(res.length).toBeGreaterThan(0);
          expect(withAllergens.length).toBe(0);
          expect(d.status).toBe(200);
          done();
        });
    });

    it('should return a status of 404 and an error object when no recipe is found', (done) => {
      axios
        .get('http://localhost:3000/api/recipes?id=notARealID1234')
        .then((d) => {
          const res: { error: string } = d.data;
          expect(res.error).toBeDefined();
          expect(d.status).toBe(404);
          done();
        });
    });
  });

  describe('favorites', () => {
    let user: User | undefined;
    let SSID: string | undefined;
    let db: typeof mongoose | undefined;

    beforeEach(async () => {
      db = await mongoose.connect(process.env.DB_URI!);
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
        .get('/api/ingredients')
        .set('Accept', 'application/json')
        .set('Cookie', [`SSID=${SSID}`]);
      const data: string[] = res.body;

      expect(Array.isArray(data)).toBe(true);
      expect(data).toEqual(testUser.favorites);
      expect(res.status).toBe(200);
    });

    it('should add new favorite ingredients and respond with all ingredients', async () => {
      const res = await testApp
        .post('/api/ingredients')
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
        .patch('/api/ingredients')
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
        .delete('/api/ingredients')
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
        .get('/api/ingredients')
        .set('Accept', 'application/json');

      const create = await testApp
        .post('/api/ingredients')
        .set('Content-Type', 'application/json')
        .send({ newIngredients: ['Spinach', 'Chocolate'] });

      const update = await testApp
        .patch('/api/ingredients')
        .set('Content-Type', 'application/json')
        .send({ update: 'Milk', to: 'Honey' });

      const remove = await testApp
        .delete('/api/ingredients')
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
        .post('/api/ingredients')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.error).toBeDefined();
    });

    it('update should return 400 when missing details', async () => {
      const noUpdate = await testApp
        .patch('/api/ingredients')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({ to: 'Noodles' });

      const noTo = await testApp
        .patch('/api/ingredients')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({ update: 'Milk' });

      const none = await testApp
        .patch('/api/ingredients')
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
        .delete('/api/ingredients')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`SSID=${SSID}`])
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.error).toBeDefined();
    });
  });

  // TODO: Needs sessions to work.
  xdescribe('ingredients', () => {
    let user: User | undefined;
    let SSID: string | undefined;
    let db: typeof mongoose | undefined;

    beforeEach(async () => {
      db = await mongoose.connect(process.env.DB_URI!);
      user = await UserModel.create(testUser);
      // This is where the session creation would go.
      // SSID = (await Session.create({userId: user._id}))._id; // <- should look something like this.
    });

    // Test cleanup
    afterEach(async () => {
      // Remove test session
      // await Session.findOneAndDelete({ userId: user._id })

      // Remove test user
      await UserModel.findByIdAndDelete(user?._id);
      user = undefined;

      // disconnect from db
      await db?.disconnect();
      db = undefined;
    });

    it('should save a new ingredient and return all ingredients', (done) => {
      const expiration = new Date(Date.now() + 172800000);
      fetch('http://localhost:3000/api/ingredients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemName: 'Eggs',
          amount: 200,
          // Expires in 2 days
          expires: expiration,
        }),
      })
        .then((d) => d.json())
        .then(async (d: Ingredient[]) => {
          expect(Array.isArray(d)).toBe(true);
          expect(d.length).toBe(3);

          expect(
            d.filter((ingredient) => ingredient.itemName === 'Eggs')[0]
          ).toEqual({
            itemName: 'Eggs',
            amount: 200,
            // Expires in 2 days
            expires: expiration,
          });

          expect(
            user?.fridgeInventory.filter(
              (ingredient) => ingredient.itemName === 'Eggs'
            )
          ).toEqual({ itemName: 'Eggs', amount: 200, expires: expiration });
          done();
        });
    });

    it('should get all saved ingredients', (done) => {
      fetch('http://localhost:3000/api/ingredients')
        .then((d) => d.json())
        .then((d: Ingredient[]) => {
          expect(Array.isArray(d)).toBe(true);
          expect(d.length).toBe(2);
          done();
        });
    });

    it('should update a saved ingredient and return all ingredients', (done) => {
      fetch('http://localhost:3000/api/ingredients', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemName: 'Milk',
          updates: {
            itemName: 'Half and Half',
            amount: 2,
          },
        }),
      })
        .then((d) => d.json())
        .then((d: Ingredient[]) => {
          expect(Array.isArray(d)).toBe(true);

          const halfnhalf = d.filter(
            (ingredient) => ingredient.itemName === 'Half and Half'
          )[0];

          expect(
            d.filter((ingredient) => ingredient.itemName === 'Milk').length
          ).toBe(0);

          expect(halfnhalf.itemName).toBe('Half and Half');
          expect(halfnhalf.amount).toBe(120);

          expect(d.length).toBe(2);
          done();
        });
    });

    it('should remove a saved ingredient', (done) => {
      fetch('http://localhost:3000/api/ingredients', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemName: 'Milk',
        }),
      })
        .then((d) => d.json())
        .then((d: Ingredient[]) => {
          expect(Array.isArray(d)).toBe(true);
          expect(
            d.filter((ingredient) => ingredient.itemName === 'Milk').length
          ).toBe(0);

          expect(d.length).toBe(1);
          done();
        });
    });

    it('should respond with status 401 and error if the user is not authorized', () => {});
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
