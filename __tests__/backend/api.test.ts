import { Recipie } from '../../backend/types/Recipie';
import { Ingredient } from '../../backend/types/Ingredients';
import UserModel from '../../backend/models/UserModel';
import axios from 'axios';
import mongoose, { Mongoose } from 'mongoose';
import env from 'dotenv';
env.config();

if (!process.env.DB_URI)
  throw new Error('No database URI found. Aborting tests.');

describe('API', () => {
  describe('recipies', () => {
    it('should search for a recipie', (done) => {
      fetch('http://localhost:3000/api/recipies?q=pad%20thai')
        .then((d) => d.json())
        .then((d: Recipie[]) => {
          expect(d.length).toBeGreaterThan(0);
          expect(d[0].recipeId).toBeDefined();
          done();
        });
    });

    it('should get a recipie by id', (done) => {
      fetch(
        'http://localhost:3000/api/recipies?id=341a387129b0686d49709bc632c3050c'
      )
        .then((d) => d.json())
        .then((d: Recipie) => {
          expect(d.recipeName).toBe('Easy Vegan Pad Thai');
          expect(d.instructions).toEqual([
            '16 ounces Pad Thai Rice Noodles',
            '1/2 cup Agave',
            '1/3 cup lime juice',
            '1/2 cup shoyu',
            '2 tablespoons Toasted sesame seed oil',
            '6 scallions–sliced',
            '2 cloves of garlic–minced',
            '1 teaspoon fresh ginger–minced',
            "1 packet baked tofu (I used the trader Joe\\\\'s brand)",
            '1 cup bean sprouts',
          ]);
          expect(d.allergens).toEqual(['Gluten', 'Wheat', 'Sulfites']);
          expect(d.healthLabels).toEqual([
            'Vegan',
            'Vegetarian',
            'Pescatarian',
            'Dairy-Free',
            'Egg-Free',
            'Peanut-Free',
            'Tree-Nut-Free',
            'Fish-Free',
            'Shellfish-Free',
            'Pork-Free',
            'Red-Meat-Free',
            'Crustacean-Free',
            'Celery-Free',
            'Mustard-Free',
            'Lupine-Free',
            'Mollusk-Free',
            'Alcohol-Free',
            'Kosher',
          ]);
          done();
        });
    });

    it('should get ingredients in a recipie', (done) => {
      fetch(
        'http://localhost:3000/api/recipies?id=341a387129b0686d49709bc632c3050c'
      )
        .then((d) => d.json())
        .then((d: Recipie) => {
          expect(d.recipeName).toBe('Easy Vegan Pad Thai');
          expect(d.instructions).toEqual([
            '16 ounces Pad Thai Rice Noodles',
            '1/2 cup Agave',
            '1/3 cup lime juice',
            '1/2 cup shoyu',
            '2 tablespoons Toasted sesame seed oil',
            '6 scallions–sliced',
            '2 cloves of garlic–minced',
            '1 teaspoon fresh ginger–minced',
            "1 packet baked tofu (I used the trader Joe\\\\'s brand)",
            '1 cup bean sprouts',
          ]);
          done();
        });
    });

    it('should return all allergies', (done) => {
      fetch(
        'http://localhost:3000/api/recipies?id=341a387129b0686d49709bc632c3050c'
      )
        .then((d) => d.json())
        .then((d: Recipie) => {
          expect(d.recipeName).toBe('Easy Vegan Pad Thai');
          expect(d.allergens).toEqual(['Gluten', 'Wheat', 'Sulfites']);
          done();
        });
    });

    it('should only return recipies not containing allergins', (done) => {
      fetch(
        'http://localhost:3000/api/recipies?q=pad%20thai&allergens=gluten,wheat,sulfites'
      )
        .then((d) => d.json())
        .then((d: Recipie[]) => {
          const withAllergens = d.filter((recipie) => {
            if (
              recipie.allergens.includes('gluten') ||
              recipie.allergens.includes('wheat') ||
              recipie.allergens.includes('sulfites')
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

  describe('ingredients', () => {
    let SSID: string | undefined;
    let userId: mongoose.Types.ObjectId | undefined;
    let database: Mongoose;

    // TODO: complete when sessions are added.
    // Needs to create a test user then add a session and save the session ID to SSID variable.
    beforeEach(async () => {
      await database.connect(process.env.DB_URI!);
      const user = UserModel.create({
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
        ],
      });
      userId = (await user)._id;
    });

    afterEach(async () => {
      await database.disconnect();
      SSID = undefined;
      userId = undefined;
    });

    it('should save a new ingredient and return all ingredients', (done) => {
      fetch('http://localhost:3000/api/ingredients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemName: 'Eggs',
          amount: 200,
          // Expires in 2 days
          expires: new Date(Date.now() + 172800000),
        }),
      })
        .then((d) => d.json())
        .then((d: Ingredient[]) => {
          expect(Array.isArray(d)).toBe(true);
          expect(
            d.filter((ingredient) => ingredient.itemName === 'Eggs').length
          ).toBe(1);
          expect(
            d.filter((ingredient) => ingredient.itemName === 'Milk').length
          ).toBe(1);
          done();
        });
    });

    it('should get all saved ingredients', (done) => {
      fetch('http://localhost:3000/api/ingredients')
        .then((d) => d.json())
        .then((d: Ingredient[]) => {
          expect(d[0]).toBeDefined();
          expect(d[0].itemName).toBe('Milk');
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
          expect(
            d.filter((ingredient) => ingredient.itemName === 'Milk').length
          ).toBe(0);
          expect(d[0].itemName).toBe('');
        });
    });

    it('should remove a saved ingredient', (done) => {});

    it('should respond with status 401 and error if the user is not authorized', () => {});
  });

  describe('healthlabels', () => {
    it('should get healthlabels', () => {});
    it('should save a new healthlabel', () => {});
    it('should update a saved healthlabel', () => {});
    it('should remove a saved healthlabel', () => {});
  });

  describe('allergies', () => {
    it('should get allergies saved', () => {});
    it('should save allergies', () => {});
    it('should update an allergy saved', () => {});
    it('should remove an allergy saved', () => {});
  });
});

// https://api.edamam.com/search?app_id=1602d127&app_key=b2dd12ad584d5ca2f8e7e2a05b62b558&q=pad%20thai
