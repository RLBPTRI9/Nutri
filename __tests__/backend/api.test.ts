import { Recipe } from '../../backend/types/Recipe';
import { Ingredient } from '../../backend/types/Ingredients';
import UserModel from '../../backend/models/UserModel';
import axios from 'axios';
import mongoose, { Mongoose } from 'mongoose';
import env from 'dotenv';
env.config();

if (!process.env.DB_URI)
  throw new Error('No database URI found. Aborting tests.');

// TODO: refactor for readability
// TODO: Bug fixes!
// TODO: Fetch needs to be switched to axios

describe('API', () => {
  describe('recipes', () => {
    it('should search for a recipe', (done) => {
      fetch('http://localhost:3000/api/recipes?q=pad%20thai')
        .then((d) => d.json())
        .then((d: Recipe[]) => {
          expect(d.length).toBeGreaterThan(0);
          expect(d[0].recipeId).toBeDefined();
          done();
        });
    });

    it('should get a recipe by id', (done) => {
      fetch(
        'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
      )
        .then((d) => d.json())
        .then((d: Recipe) => {
          expect(d.recipeName).toBe('Easy Vegan Pad Thai');
          done();
        });
    });

    it('should be of type recipe', (done) => {
      fetch(
        'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
      )
        .then((d) => d.json())
        .then((d: Recipe) => {
          expect(d.recipeId).toBeDefined();
          expect(d.sourceUrl).toBeDefined();
          expect(d.recipeName).toBeDefined();
          expect(d.image).toBeDefined();
          expect(d.recipeSource).toBeDefined();
          expect(d.edemamShareUrl).toBeDefined();
          expect(d.yield).toBeDefined();
          expect(d.dietLabels).toBeDefined();
          expect(d.healthLabels).toBeDefined();
          expect(d.allergens).toBeDefined();
          expect(d.instructions).toBeDefined();
          expect(d.ingredients).toBeDefined();
          expect(d.calories).toBeDefined();
          expect(d.totalTime).toBeDefined();
          expect(d.dishType).toBeDefined();
          done();
        });
    });

    it('should get ingredients in a recipe', (done) => {
      fetch(
        'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
      )
        .then((d) => d.json())
        .then((d: Recipe) => {
          expect(d.recipeName).toBe('Easy Vegan Pad Thai');
          expect(d.instructions).toBeDefined();
          done();
        });
    });

    it('should return all allergies', (done) => {
      fetch(
        'http://localhost:3000/api/recipes?id=341a387129b0686d49709bc632c3050c'
      )
        .then((d) => d.json())
        .then((d: Recipe) => {
          expect(d.recipeName).toBe('Easy Vegan Pad Thai');
          expect(d.allergens).toBeDefined();
          done();
        });
    });

    it("should only return recipes that don't contain allergens", (done) => {
      fetch(
        'http://localhost:3000/api/recipes?q=pad%20thai&allergens=gluten,wheat,sulfites'
      )
        .then((d) => d.json())
        .then((d: Recipe[]) => {
          const withAllergens = d.filter((recipe) => {
            if (
              recipe.allergens.includes('gluten') ||
              recipe.allergens.includes('wheat') ||
              recipe.allergens.includes('sulfites')
            )
              return true;
            return false;
          });
          expect(d.length).toBeGreaterThan(0);
          expect(withAllergens.length).toBe(0);
          done();
        });
    });
  });

  // TODO: Needs sessions to work.
  xdescribe('ingredients', () => {
    let SSID: string | undefined;
    let userId: mongoose.Types.ObjectId | undefined;
    let database: Mongoose;

    // TODO: complete when sessions are added.
    // Needs to create a test user then add a session and save the session ID to SSID variable.
    beforeEach(async () => {
      await database.connect(process.env.DB_URI!);
      const user = await UserModel.create({
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
      });
      userId = user._id;
    });

    afterEach(async () => {
      await database.disconnect();
      SSID = undefined;
      userId = undefined;
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
          const user = await UserModel.findById(userId);
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
