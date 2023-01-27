export type EdemamIngredients = {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
};

export type EdemamRecipie = {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: EdemamIngredients[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
};

export type EdemamResponse = {
  q: string;
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: { recipe: EdemamRecipie }[];
};

const dummyEdemamData = JSON.parse(`{
    "q": "pad thai",
    "from": 0,
    "to": 10,
    "more": true,
    "count": 654,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_341a387129b0686d49709bc632c3050c",
                "label": "Easy Vegan Pad Thai",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/056/056542dc72d8ef230c44a24f80855e2c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=25b488e90f541e6114b62c258d8ea46b6be466448f4e713314b96f8e803e6f67",
                "source": "Food52",
                "url": "https://food52.com/recipes/34427-easy-vegan-pad-thai",
                "shareAs": "http://www.edamam.com/recipe/easy-vegan-pad-thai-341a387129b0686d49709bc632c3050c/pad+thai",
                "yield": 4,
                "dietLabels": [
                    "High-Fiber",
                    "Low-Fat"
                ],
                "healthLabels": [
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "16 ounces Pad Thai Rice Noodles",
                    "1/2 cup Agave",
                    "1/3 cup lime juice",
                    "1/2 cup shoyu",
                    "2 tablespoons Toasted sesame seed oil",
                    "6 scallions–sliced",
                    "2 cloves of garlic–minced",
                    "1 teaspoon fresh ginger–minced",
                    "1 packet baked tofu (I used the trader Joe\\\\'s brand)",
                    "1 cup bean sprouts"
                ],
                "ingredients": [
                    {
                        "text": "16 ounces Pad Thai Rice Noodles",
                        "quantity": 16,
                        "measure": "ounce",
                        "food": "Rice Noodles",
                        "weight": 453.59237,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "1/2 cup Agave",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "Agave",
                        "weight": 166.4,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
                        "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
                    },
                    {
                        "text": "1/3 cup lime juice",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "lime juice",
                        "weight": 80.66666666666666,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                    },
                    {
                        "text": "1/2 cup shoyu",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "shoyu",
                        "weight": 127.5,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "2 tablespoons Toasted sesame seed oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "oil",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                        "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                    },
                    {
                        "text": "6 scallions–sliced",
                        "quantity": 6,
                        "measure": "<unit>",
                        "food": "scallions",
                        "weight": 83.33333333333334,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "2 cloves of garlic–minced",
                        "quantity": 2,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 6,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 teaspoon fresh ginger–minced",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "fresh ginger",
                        "weight": 2,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "1 packet baked tofu (I used the trader Joe\\\\'s brand)",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "tofu",
                        "weight": 324,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a269ixea1yf51xbfwgnq2boiwc7x",
                        "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                    },
                    {
                        "text": "1 cup bean sprouts",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "bean sprouts",
                        "weight": 104,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    }
                ],
                "calories": 2757.448560133333,
                "totalWeight": 1375.49237,
                "totalTime": 0,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2757.448560133333,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 45.224667272000005,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 5.7357513261,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.11060000000000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 22.651079980833337,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 14.866593555000001,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 523.3411122660001,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 499.30030101266675,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 24.040811253333338,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 128.83644417733333,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 118.144,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 69.34624601499999,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 7890.459780066668,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 870.9549599333334,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 315.9810844,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1681.9227110000002,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.606629923333335,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 8.047366871333333,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1405.8329927666668,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 44.32,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 56.21466666666667,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.5429486347000001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.7066123695666667,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 5.517585804366666,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.7370855221666667,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 218.2577711,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 218.2577711,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.169951607000002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 235.14800000000005,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 667.181301267,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 137.87242800666667,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 69.57641118769232,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 28.678756630499997,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 174.44703742200005,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 96.16324501333334,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 138.69249202999998,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 328.76915750277783,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 87.09549599333334,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 75.23359152380952,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 35.78558959574468,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 70.03683290740742,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 73.15788064848483,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 200.8332846809524,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 4.924444444444444,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 62.460740740740746,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 45.24571955833334,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 54.35479765897436,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 34.484911277291665,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 56.69888632051281,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 54.564442775,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 41.13301071333334,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 195.95666666666673,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 45.224667272000005,
                        "hasRDI": true,
                        "daily": 69.57641118769232,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 5.7357513261,
                                "hasRDI": true,
                                "daily": 28.678756630499997,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.11060000000000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 22.651079980833337,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 14.866593555000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 523.3411122660001,
                        "hasRDI": true,
                        "daily": 174.44703742200005,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 499.30030101266675,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 24.040811253333338,
                                "hasRDI": true,
                                "daily": 96.16324501333334,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 128.83644417733333,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 118.144,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 69.34624601499999,
                        "hasRDI": true,
                        "daily": 138.69249202999998,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 7890.459780066668,
                        "hasRDI": true,
                        "daily": 328.76915750277783,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 870.9549599333334,
                        "hasRDI": true,
                        "daily": 87.09549599333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 315.9810844,
                        "hasRDI": true,
                        "daily": 75.23359152380952,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1681.9227110000002,
                        "hasRDI": true,
                        "daily": 35.78558959574468,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.606629923333335,
                        "hasRDI": true,
                        "daily": 70.03683290740742,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 8.047366871333333,
                        "hasRDI": true,
                        "daily": 73.15788064848483,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1405.8329927666668,
                        "hasRDI": true,
                        "daily": 200.8332846809524,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 44.32,
                        "hasRDI": true,
                        "daily": 4.924444444444444,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 56.21466666666667,
                        "hasRDI": true,
                        "daily": 62.460740740740746,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.5429486347000001,
                        "hasRDI": true,
                        "daily": 45.24571955833334,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.7066123695666667,
                        "hasRDI": true,
                        "daily": 54.35479765897436,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 5.517585804366666,
                        "hasRDI": true,
                        "daily": 34.484911277291665,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.7370855221666667,
                        "hasRDI": true,
                        "daily": 56.69888632051281,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 218.2577711,
                        "hasRDI": true,
                        "daily": 54.564442775,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 218.2577711,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 6.169951607000002,
                        "hasRDI": true,
                        "daily": 41.13301071333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 235.14800000000005,
                        "hasRDI": true,
                        "daily": 195.95666666666673,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 667.181301267,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_27f4f3e8bc4b750bbdb9bc06eac03a04",
                "label": "Easy Pad Thai",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3fa/3fa3183785ff5f3758a4af255dc671b2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6bed8d68a74466df5c86eb00cf7224fb1a422a687d1c05c6ab6f8371596cb031",
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/easy-pad-thai-51222610",
                "shareAs": "http://www.edamam.com/recipe/easy-pad-thai-27f4f3e8bc4b750bbdb9bc06eac03a04/pad+thai",
                "yield": 4,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Pescatarian",
                    "Dairy-Free",
                    "Tree-Nut-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "8 ounces pad thai or lo mein noodles",
                    "2 tablespoons vegetable oil",
                    "1 clove garlic, minced",
                    "2 large eggs",
                    "1 1/2 tablespoons soy sauce",
                    "2 tablespoons fresh lime juice (from about 1 medium lime)",
                    "2 tablespoons brown sugar",
                    "1 teaspoon fish sauce",
                    "1/8 teaspoon red pepper flakes",
                    "3 green onions, sliced",
                    "1/4 bunch fresh cilantro, leaves only, roughly chopped",
                    "1/4 cup chopped, unsalted peanuts"
                ],
                "ingredients": [
                    {
                        "text": "8 ounces pad thai or lo mein noodles",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "noodles",
                        "weight": 226.796185,
                        "foodCategory": "grains",
                        "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
                        "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
                    },
                    {
                        "text": "2 tablespoons vegetable oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "1 clove garlic, minced",
                        "quantity": 1,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 1/2 tablespoons soy sauce",
                        "quantity": 1.5,
                        "measure": "tablespoon",
                        "food": "soy sauce",
                        "weight": 24,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "2 tablespoons fresh lime juice (from about 1 medium lime)",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "lime juice",
                        "weight": 30.799999999479265,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                    },
                    {
                        "text": "2 tablespoons brown sugar",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "brown sugar",
                        "weight": 18.12499999969356,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1 teaspoon fish sauce",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "fish sauce",
                        "weight": 6.000000000405769,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "1/8 teaspoon red pepper flakes",
                        "quantity": 0.125,
                        "measure": "teaspoon",
                        "food": "red pepper flakes",
                        "weight": 0.09635416667155386,
                        "foodCategory": "vegetables",
                        "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
                        "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
                    },
                    {
                        "text": "3 green onions, sliced",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "green onions",
                        "weight": 41.66666666666667,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "1/4 bunch fresh cilantro, leaves only, roughly chopped",
                        "quantity": 0.25,
                        "measure": "bunch",
                        "food": "cilantro",
                        "weight": 10,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    },
                    {
                        "text": "1/4 cup chopped, unsalted peanuts",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "peanuts",
                        "weight": 36.5,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    }
                ],
                "calories": 1580.1828712321965,
                "totalWeight": 524.9842058329168,
                "totalTime": 0,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1580.1828712321965,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 65.86307545774997,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 9.955460675708345,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.39110567285000003,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 35.633693173699996,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 15.511421300475043,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 194.50330990334047,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 182.14734881917448,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 12.355961084165987,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 25.90375963187734,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 17.58487499970269,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 57.67614406685184,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 562.5087954,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2003.1325478400981,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 240.98777412484947,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 248.98516230064516,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1311.46176431691,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 13.91792097683415,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.337197064500352,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 952.0756756416177,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 255.2204139500705,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 20.76958854151401,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.895235489591589,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.574061149141879,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 24.589482478667072,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.9434621450179896,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1016.4329417918211,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 243.05795094182096,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 455.8603318500001,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.5765089365019478,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.680388555,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.585948071999008,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 119.02403613333551,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 196.9176872578952,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 79.00914356160982,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 101.32780839653842,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 49.777303378541724,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 64.83443663444682,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 49.423844336663954,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 115.35228813370368,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 187.50293180000003,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 83.4638561600041,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 24.098777412484946,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 59.28218150015361,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 27.903441793976803,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 77.32178320463417,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 66.70179149545775,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 136.0108108059454,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 28.357823772230056,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 23.077320601682235,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 241.26962413263243,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 121.0816268570676,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 153.6842654916692,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 72.57401115522997,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 254.10823544795528,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 65.68787235424783,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 17.869257033333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 77.23965381332671,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 99.1866967777796,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 65.86307545774997,
                        "hasRDI": true,
                        "daily": 101.32780839653842,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 9.955460675708345,
                                "hasRDI": true,
                                "daily": 49.777303378541724,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.39110567285000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 35.633693173699996,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 15.511421300475043,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 194.50330990334047,
                        "hasRDI": true,
                        "daily": 64.83443663444682,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 182.14734881917448,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 12.355961084165987,
                                "hasRDI": true,
                                "daily": 49.423844336663954,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 25.90375963187734,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 17.58487499970269,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 57.67614406685184,
                        "hasRDI": true,
                        "daily": 115.35228813370368,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 562.5087954,
                        "hasRDI": true,
                        "daily": 187.50293180000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2003.1325478400981,
                        "hasRDI": true,
                        "daily": 83.4638561600041,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 240.98777412484947,
                        "hasRDI": true,
                        "daily": 24.098777412484946,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 248.98516230064516,
                        "hasRDI": true,
                        "daily": 59.28218150015361,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1311.46176431691,
                        "hasRDI": true,
                        "daily": 27.903441793976803,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 13.91792097683415,
                        "hasRDI": true,
                        "daily": 77.32178320463417,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.337197064500352,
                        "hasRDI": true,
                        "daily": 66.70179149545775,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 952.0756756416177,
                        "hasRDI": true,
                        "daily": 136.0108108059454,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 255.2204139500705,
                        "hasRDI": true,
                        "daily": 28.357823772230056,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 20.76958854151401,
                        "hasRDI": true,
                        "daily": 23.077320601682235,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.895235489591589,
                        "hasRDI": true,
                        "daily": 241.26962413263243,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.574061149141879,
                        "hasRDI": true,
                        "daily": 121.0816268570676,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 24.589482478667072,
                        "hasRDI": true,
                        "daily": 153.6842654916692,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.9434621450179896,
                        "hasRDI": true,
                        "daily": 72.57401115522997,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1016.4329417918211,
                        "hasRDI": true,
                        "daily": 254.10823544795528,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 243.05795094182096,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 455.8603318500001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.5765089365019478,
                        "hasRDI": true,
                        "daily": 65.68787235424783,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.680388555,
                        "hasRDI": true,
                        "daily": 17.869257033333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 11.585948071999008,
                        "hasRDI": true,
                        "daily": 77.23965381332671,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 119.02403613333551,
                        "hasRDI": true,
                        "daily": 99.1866967777796,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 196.9176872578952,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5879ebee0914e1f374c584f28d3c3c2c",
                "label": "Shrimp Pad Thai recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/13f/13f30899b44fc3c997680880eb04b7c4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d27cee143e5808ff93257680acd16d2715966c76e523f0536719e1b0d7077d31",
                "source": "Tasting Table",
                "url": "http://www.tastingtable.com/cook/recipes/pad-thai-noodles-recipe-shrimp-authentic",
                "shareAs": "http://www.edamam.com/recipe/shrimp-pad-thai-recipes-5879ebee0914e1f374c584f28d3c3c2c/pad+thai",
                "yield": 4,
                "dietLabels": [],
                "healthLabels": [
                    "Pescatarian",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Tree-Nut-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "8 ounces pad Thai rice noodles",
                    "1 tablespoon tamarind paste",
                    "1 tablespoon fish sauce",
                    "1 tablespoon lime juice",
                    "1 tablespoon grated palm sugar or light brown sugar",
                    "Pinch red pepper flakes",
                    "3 tablespoons vegetable oil",
                    "2 garlic cloves, minced",
                    "2 scallions, thinly sliced, greens reserved for garnish",
                    "One 1-inch piece ginger, peeled and minced",
                    "1 cup broccoli florets",
                    "8 ounces medium shrimp, peeled and deveined",
                    "1 cup bean sprouts",
                    "4 ounces pressed tofu, julienned",
                    "2 eggs, beaten",
                    "roasted peanuts",
                    "cilantro leaves",
                    "lime wedges"
                ],
                "ingredients": [
                    {
                        "text": "8 ounces pad Thai rice noodles",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "rice noodles",
                        "weight": 226.796185,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "1 tablespoon tamarind paste",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "tamarind",
                        "weight": 7.499999999873198,
                        "foodCategory": "fruit",
                        "foodId": "food_b8wxjbga5zblgbada09f7b61mz7n",
                        "image": "https://www.edamam.com/food-img/dde/dded3ea24aeb0014358a92d524065b80.jpg"
                    },
                    {
                        "text": "1 tablespoon fish sauce",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "fish sauce",
                        "weight": 18,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "1 tablespoon lime juice",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "lime juice",
                        "weight": 15.399999999739633,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                    },
                    {
                        "text": "1 tablespoon grated palm sugar or light brown sugar",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "palm sugar",
                        "weight": 9.06249999984678,
                        "foodCategory": "sugars",
                        "foodId": "food_boy2xh8bm7a0p7asp89y6b7cfu73",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "Pinch red pepper flakes",
                        "quantity": 1,
                        "measure": "pinch",
                        "food": "red pepper flakes",
                        "weight": 0.04817708339442312,
                        "foodCategory": "vegetables",
                        "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
                        "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
                    },
                    {
                        "text": "3 tablespoons vegetable oil",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 42,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "2 garlic cloves, minced",
                        "quantity": 2,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 6,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "2 scallions, thinly sliced, greens reserved for garnish",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "scallions",
                        "weight": 27.777777777777782,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "One 1-inch piece ginger, peeled and minced",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "piece ginger",
                        "weight": 60,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "1 cup broccoli florets",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "broccoli florets",
                        "weight": 71,
                        "foodCategory": "vegetables",
                        "foodId": "food_b5r3hr9b7kn0jtaegq6pgbgyr034",
                        "image": "https://www.edamam.com/food-img/b11/b11b34a0dd535bf7aabeeb5413f24954.jpeg"
                    },
                    {
                        "text": "8 ounces medium shrimp, peeled and deveined",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "shrimp",
                        "weight": 226.796185,
                        "foodCategory": "seafood",
                        "foodId": "food_bjap0xzbf5x6s3azkpwtfb14i25u",
                        "image": "https://www.edamam.com/food-img/4df/4df0fd62e878ed84b387b9e3ab48f2dc.jpg"
                    },
                    {
                        "text": "1 cup bean sprouts",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "bean sprouts",
                        "weight": 104,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    },
                    {
                        "text": "4 ounces pressed tofu, julienned",
                        "quantity": 4,
                        "measure": "ounce",
                        "food": "tofu",
                        "weight": 113.3980925,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a269ixea1yf51xbfwgnq2boiwc7x",
                        "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                    },
                    {
                        "text": "2 eggs, beaten",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 86,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "roasted peanuts",
                        "quantity": 0,
                        "measure": null,
                        "food": "peanuts",
                        "weight": 0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    },
                    {
                        "text": "cilantro leaves",
                        "quantity": 0,
                        "measure": null,
                        "food": "cilantro leaves",
                        "weight": 10.221539173606319,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    },
                    {
                        "text": "lime wedges",
                        "quantity": 1,
                        "measure": "wedge",
                        "food": "lime",
                        "weight": 8.375,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    }
                ],
                "calories": 1776.3944720480663,
                "totalWeight": 1032.375456534238,
                "totalTime": 45,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1776.3944720480663,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 58.43277850677482,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 7.225713932235824,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.36389184739999997,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 35.54987160837745,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 11.869377051772577,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 225.7835960330182,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 216.2354220985083,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 9.548173934509894,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 20.161310100272093,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 8.792437499851346,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 87.90643922139947,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 685.06185785,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2280.097481560108,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 582.7247735585862,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 274.96717774892903,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1880.435383019327,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 9.204618746566094,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.979648501201608,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1301.45540901852,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 295.45884048807665,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 100.40558658819921,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.39604340531103566,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.8084727992631355,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.278346143358775,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.7572057206133673,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 226.0698505028995,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 226.0698505028995,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.8518,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.72,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.054249630285822,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 127.05310326240726,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 647.0323885556948,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 88.81972360240331,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 89.89658231811511,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 36.12856966117912,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 75.26119867767272,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 38.192695738039575,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 175.81287844279893,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 228.3539526166667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 95.00406173167117,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 58.272477355858626,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 65.46837565450691,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 40.00926346849632,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 51.13677081425608,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 72.5422591018328,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 185.92220128836001,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 32.828760054230735,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 111.5617628757769,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 33.00361710925297,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 62.190215327933494,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 20.489663395992345,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 58.24659389333595,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 56.517462625724875,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 35.491666666666674,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 11.466666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 73.69499753523881,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 105.87758605200605,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 58.43277850677482,
                        "hasRDI": true,
                        "daily": 89.89658231811511,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 7.225713932235824,
                                "hasRDI": true,
                                "daily": 36.12856966117912,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.36389184739999997,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 35.54987160837745,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 11.869377051772577,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 225.7835960330182,
                        "hasRDI": true,
                        "daily": 75.26119867767272,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 216.2354220985083,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 9.548173934509894,
                                "hasRDI": true,
                                "daily": 38.192695738039575,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 20.161310100272093,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 8.792437499851346,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 87.90643922139947,
                        "hasRDI": true,
                        "daily": 175.81287844279893,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 685.06185785,
                        "hasRDI": true,
                        "daily": 228.3539526166667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2280.097481560108,
                        "hasRDI": true,
                        "daily": 95.00406173167117,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 582.7247735585862,
                        "hasRDI": true,
                        "daily": 58.272477355858626,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 274.96717774892903,
                        "hasRDI": true,
                        "daily": 65.46837565450691,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1880.435383019327,
                        "hasRDI": true,
                        "daily": 40.00926346849632,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 9.204618746566094,
                        "hasRDI": true,
                        "daily": 51.13677081425608,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.979648501201608,
                        "hasRDI": true,
                        "daily": 72.5422591018328,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1301.45540901852,
                        "hasRDI": true,
                        "daily": 185.92220128836001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 295.45884048807665,
                        "hasRDI": true,
                        "daily": 32.828760054230735,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 100.40558658819921,
                        "hasRDI": true,
                        "daily": 111.5617628757769,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.39604340531103566,
                        "hasRDI": true,
                        "daily": 33.00361710925297,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.8084727992631355,
                        "hasRDI": true,
                        "daily": 62.190215327933494,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 3.278346143358775,
                        "hasRDI": true,
                        "daily": 20.489663395992345,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.7572057206133673,
                        "hasRDI": true,
                        "daily": 58.24659389333595,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 226.0698505028995,
                        "hasRDI": true,
                        "daily": 56.517462625724875,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 226.0698505028995,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.8518,
                        "hasRDI": true,
                        "daily": 35.491666666666674,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.72,
                        "hasRDI": true,
                        "daily": 11.466666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 11.054249630285822,
                        "hasRDI": true,
                        "daily": 73.69499753523881,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 127.05310326240726,
                        "hasRDI": true,
                        "daily": 105.87758605200605,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 647.0323885556948,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d801657461674729c390cda18ef7f6dd",
                "label": "Pad Thai Sliders",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/539/53968d84be314efe74916a04de33e1c2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=909b064c8b2568e98300ce19fdaa16c61fe0b024bcec136f3cd31389a43d8fcb",
                "source": "The Daily Meal",
                "url": "http://www.thedailymeal.com/pad-thai-sliders-recipe",
                "shareAs": "http://www.edamam.com/recipe/pad-thai-sliders-d801657461674729c390cda18ef7f6dd/pad+thai",
                "yield": 4,
                "dietLabels": [],
                "healthLabels": [
                    "Egg-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 Ounces pad thai sauce, such as Ayara's Pad Thai Sauce*",
                    "1 Pound ground chicken",
                    "8 shrimp, peeled, de-veined, and coarsely chopped",
                    "4 Tablespoons shrimp paste with soya bean oil",
                    "4 cloves garlic, minced",
                    "Pinch of paprika",
                    "Salt and pepper, to taste",
                    "1 Tablespoon vegetable oil",
                    "8 Hawaiian dinner rolls",
                    "One ten ounce bag spinach",
                    "1 carrot, finely shredded",
                    "2 green onions, finely shredded",
                    "2 Ounces peanut sauce, such as Ayara's Peanut Sauce*"
                ],
                "ingredients": [
                    {
                        "text": "1 Pound ground chicken",
                        "quantity": 1,
                        "measure": "pound",
                        "food": "ground chicken",
                        "weight": 453.59237,
                        "foodCategory": "poultry",
                        "foodId": "food_b4430z5avkliqsbzns6gpbhdn07c",
                        "image": "https://www.edamam.com/food-img/d67/d673152269f59d682d27b0a8446354b3.jpg"
                    },
                    {
                        "text": "8 shrimp, peeled, de-veined, and coarsely chopped",
                        "quantity": 8,
                        "measure": "<unit>",
                        "food": "shrimp",
                        "weight": 25.6,
                        "foodCategory": "seafood",
                        "foodId": "food_bs4g96daz36c11bwb1x7lbzgrvqx",
                        "image": "https://www.edamam.com/food-img/33a/33ad937ee2169adc0a69cb97a48da579.jpg"
                    },
                    {
                        "text": "4 Tablespoons shrimp paste with soya bean oil",
                        "quantity": 4,
                        "measure": "tablespoon",
                        "food": "shrimp paste",
                        "weight": 31.99999999945898,
                        "foodCategory": "seafood",
                        "foodId": "food_bs4g96daz36c11bwb1x7lbzgrvqx",
                        "image": "https://www.edamam.com/food-img/33a/33ad937ee2169adc0a69cb97a48da579.jpg"
                    },
                    {
                        "text": "4 cloves garlic, minced",
                        "quantity": 4,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 12,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "Pinch of paprika",
                        "quantity": 1,
                        "measure": "pinch",
                        "food": "paprika",
                        "weight": 0.1416666668486988,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                        "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                    },
                    {
                        "text": "Salt and pepper, to taste",
                        "quantity": 0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 7.141836551664514,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and pepper, to taste",
                        "quantity": 0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 3.570918275832257,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 Tablespoon vegetable oil",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 14,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "8 Hawaiian dinner rolls",
                        "quantity": 8,
                        "measure": "<unit>",
                        "food": "dinner rolls",
                        "weight": 224,
                        "foodCategory": "bread, rolls and tortillas",
                        "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                        "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
                    },
                    {
                        "text": "One ten ounce bag spinach",
                        "quantity": 10,
                        "measure": "ounce",
                        "food": "spinach",
                        "weight": 283.49523125,
                        "foodCategory": "vegetables",
                        "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                        "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
                    },
                    {
                        "text": "1 carrot, finely shredded",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "carrot",
                        "weight": 61,
                        "foodCategory": "vegetables",
                        "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                        "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                    },
                    {
                        "text": "2 green onions, finely shredded",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "green onions",
                        "weight": 27.777777777777782,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "2 Ounces peanut sauce, such as Ayara's Peanut Sauce*",
                        "quantity": 2,
                        "measure": "ounce",
                        "food": "Peanut Sauce",
                        "weight": 56.69904625,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_bwg5yrhazye3m2at3nk2jbezrugu",
                        "image": "https://www.edamam.com/food-img/d8e/d8e7848adf62d7bdb634c5924695b631.jpg"
                    }
                ],
                "calories": 1796.4589349112002,
                "totalWeight": 1193.8770102199178,
                "totalTime": 0,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "sandwiches"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1796.4589349112002,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 76.59981112804435,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 16.458709441833022,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.4220597066875001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 34.76910371091091,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 18.597865577979633,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 153.73702078634022,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 138.36443665360224,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 15.372584132737982,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 26.997331598664708,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 129.11038616889928,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 544.2014381986368,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2851.3348549408615,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 880.5831959407359,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 444.21219367404086,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4811.012491018695,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 22.652615130804715,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 12.40170655285468,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1448.6497233864427,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1859.5249213903471,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 95.03825720345169,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.0156952609412397,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.6263437626208783,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 42.38266817765806,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.468725723176793,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 938.5787130513767,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 669.7787130513765,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 159.04000000000002,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.2575572719959967,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 13.200181652643455,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1468.6535526797668,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 814.16434045089,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 89.82294674556,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 117.84586327391438,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 82.29354720916511,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 51.24567359544674,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 61.49033653095193,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 258.22077233779856,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 181.4004793995456,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 118.80561895586924,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 88.0583195940736,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 105.76480801762877,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 102.3619678940148,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 125.84786183780398,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 112.74278684413345,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 206.94996048377752,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 206.613880154483,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 105.59806355939077,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 167.97460507843664,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 202.0264432785291,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 264.8916761103629,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 266.8250556289841,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 234.64467826284417,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 135.7315529998332,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 88.00121101762304,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1223.8779605664722,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 76.59981112804435,
                        "hasRDI": true,
                        "daily": 117.84586327391438,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 16.458709441833022,
                                "hasRDI": true,
                                "daily": 82.29354720916511,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.4220597066875001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 34.76910371091091,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 18.597865577979633,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 153.73702078634022,
                        "hasRDI": true,
                        "daily": 51.24567359544674,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 138.36443665360224,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 15.372584132737982,
                                "hasRDI": true,
                                "daily": 61.49033653095193,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 26.997331598664708,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 129.11038616889928,
                        "hasRDI": true,
                        "daily": 258.22077233779856,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 544.2014381986368,
                        "hasRDI": true,
                        "daily": 181.4004793995456,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2851.3348549408615,
                        "hasRDI": true,
                        "daily": 118.80561895586924,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 880.5831959407359,
                        "hasRDI": true,
                        "daily": 88.0583195940736,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 444.21219367404086,
                        "hasRDI": true,
                        "daily": 105.76480801762877,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4811.012491018695,
                        "hasRDI": true,
                        "daily": 102.3619678940148,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 22.652615130804715,
                        "hasRDI": true,
                        "daily": 125.84786183780398,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 12.40170655285468,
                        "hasRDI": true,
                        "daily": 112.74278684413345,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1448.6497233864427,
                        "hasRDI": true,
                        "daily": 206.94996048377752,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1859.5249213903471,
                        "hasRDI": true,
                        "daily": 206.613880154483,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 95.03825720345169,
                        "hasRDI": true,
                        "daily": 105.59806355939077,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.0156952609412397,
                        "hasRDI": true,
                        "daily": 167.97460507843664,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.6263437626208783,
                        "hasRDI": true,
                        "daily": 202.0264432785291,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 42.38266817765806,
                        "hasRDI": true,
                        "daily": 264.8916761103629,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.468725723176793,
                        "hasRDI": true,
                        "daily": 266.8250556289841,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 938.5787130513767,
                        "hasRDI": true,
                        "daily": 234.64467826284417,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 669.7787130513765,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 159.04000000000002,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.2575572719959967,
                        "hasRDI": true,
                        "daily": 135.7315529998332,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 13.200181652643455,
                        "hasRDI": true,
                        "daily": 88.00121101762304,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 1468.6535526797668,
                        "hasRDI": true,
                        "daily": 1223.8779605664722,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 814.16434045089,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_35b25ac1e802fb915afeedc9bc890de0",
                "label": "Pad Thai recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/702/7028c5a46e5d38da8472ff5e7a30fcd1?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9e19cc6afcf3c02aa181ee9092e9f26478883a36c784c71f512b7b5bd679fb0c",
                "source": "Bon Appetit",
                "url": "http://www.bonappetit.com/recipe/pad-thai",
                "shareAs": "http://www.edamam.com/recipe/pad-thai-recipes-35b25ac1e802fb915afeedc9bc890de0/pad+thai",
                "yield": 2,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Pescatarian",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Tree-Nut-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "5 ounces pad thai rice noodles",
                    "3 tablespoons vegetable oil",
                    "1 large egg, room temperature",
                    "6 medium shrimp, peeled, deveined (optional)",
                    "2 tablespoons 1x1/2x1/8' slices pressed tofu (bean curd)",
                    "1 tablespoon sweet preserved shredded radish, rinsed, chopped into 1' pieces",
                    "1 cup bean sprouts",
                    "5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water",
                    "5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water",
                    "5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water",
                    "1 1/2t tablespoons (or more) Thai fish sauce (nam pla)",
                    "1 1/2t tablespoons simple syrup, preferably made with palm sugar",
                    "4 garlic chives, 2 cut into 1' pieces",
                    "1/2 teaspoons ground dried Thai chiles, divided",
                    "2 tablespoons crushed roasted, unsalted peanuts, divided",
                    "2 lime wedges"
                ],
                "ingredients": [
                    {
                        "text": "5 ounces pad thai rice noodles",
                        "quantity": 5,
                        "measure": "ounce",
                        "food": "rice noodles",
                        "weight": 141.747615625,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "3 tablespoons vegetable oil",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 42,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "1 large egg, room temperature",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "6 medium shrimp, peeled, deveined (optional)",
                        "quantity": 6,
                        "measure": "<unit>",
                        "food": "shrimp",
                        "weight": 19.200000000000003,
                        "foodCategory": "seafood",
                        "foodId": "food_bs4g96daz36c11bwb1x7lbzgrvqx",
                        "image": "https://www.edamam.com/food-img/33a/33ad937ee2169adc0a69cb97a48da579.jpg"
                    },
                    {
                        "text": "2 tablespoons 1x1/2x1/8' slices pressed tofu (bean curd)",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "tofu",
                        "weight": 31.49999999946743,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a269ixea1yf51xbfwgnq2boiwc7x",
                        "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                    },
                    {
                        "text": "1 tablespoon sweet preserved shredded radish, rinsed, chopped into 1' pieces",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "radish",
                        "weight": 7.249999999877424,
                        "foodCategory": "vegetables",
                        "foodId": "food_bs6xkukbtd85e7b2lh5zfazpe45y",
                        "image": "https://www.edamam.com/food-img/ad7/ad78f4315cdba1dc26ccef0d7dba464b.jpg"
                    },
                    {
                        "text": "1 cup bean sprouts",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "bean sprouts",
                        "weight": 104,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    },
                    {
                        "text": "5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water",
                        "quantity": 5,
                        "measure": "tablespoon",
                        "food": "water",
                        "weight": 73.933823905,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water",
                        "quantity": 5,
                        "measure": "tablespoon",
                        "food": "water",
                        "weight": 73.933823905,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "5 tablespoons tamarind water, or 2 tablespoons plus 1 teaspoon tamarind paste mixed with 2 tablespoons plus 1 teaspoon water",
                        "quantity": 5,
                        "measure": "tablespoon",
                        "food": "water",
                        "weight": 73.933823905,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1 1/2t tablespoons (or more) Thai fish sauce (nam pla)",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "fish sauce",
                        "weight": 18,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "1 1/2t tablespoons simple syrup, preferably made with palm sugar",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "simple syrup",
                        "weight": 19.749999999666088,
                        "foodCategory": "sugars",
                        "foodId": "food_aftzb4hav0begxbvchpd3bhc9368",
                        "image": "https://www.edamam.com/food-img/198/198cf875b0112c3798592532e502e664.jpg"
                    },
                    {
                        "text": "4 garlic chives, 2 cut into 1' pieces",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "garlic chives",
                        "weight": 8,
                        "foodCategory": "vegetables",
                        "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
                        "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
                    },
                    {
                        "text": "1/2 teaspoons ground dried Thai chiles, divided",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "chiles",
                        "weight": 1.5625000000792517,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
                        "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
                    },
                    {
                        "text": "2 tablespoons crushed roasted, unsalted peanuts, divided",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "peanuts",
                        "weight": 18.249999999691447,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    },
                    {
                        "text": "2 lime wedges",
                        "quantity": 2,
                        "measure": "wedge",
                        "food": "lime",
                        "weight": 16.75,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    }
                ],
                "calories": 1203.3063208719916,
                "totalWeight": 699.8115873387817,
                "totalTime": 40,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1203.3063208719916,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 58.40478164732608,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 6.0350736018822735,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.34114,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 37.21357932726185,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 11.983701298380073,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 141.26486945782483,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 134.48172010785663,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.783149349968208,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 21.461634638489738,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 14.456999999755576,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 30.452741879564925,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 234.38400000000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1946.375844305746,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 206.85986496253273,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 134.64310359140717,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 584.0980346842957,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.686237059340673,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.538170002781219,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 528.8257269044283,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 100.28500000003804,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 27.50876250009468,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.32944076084106394,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.46775084465531797,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 4.029920730493823,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.38815339234261215,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 163.7973034678959,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 163.7973034678959,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.6734800000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.73992862716229,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 52.65549999999672,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 461.3070487636162,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 60.16531604359958,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 89.85351022665552,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 30.17536800941137,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 47.08828981927494,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 27.132597399872836,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 60.90548375912985,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 78.128,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 81.09899351273943,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 20.685986496253275,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 32.0578818074779,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 12.427617759240334,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 31.59020588522596,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 32.165181843465625,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 75.54653241491833,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 11.142777777782005,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 30.565291666771866,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 27.453396736755327,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 35.98083420425523,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 25.187004565586395,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 29.857953257124013,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 40.94932586697397,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 28.061666666666675,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.666666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 78.2661908477486,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 43.8795833333306,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 58.40478164732608,
                        "hasRDI": true,
                        "daily": 89.85351022665552,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 6.0350736018822735,
                                "hasRDI": true,
                                "daily": 30.17536800941137,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.34114,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 37.21357932726185,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 11.983701298380073,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 141.26486945782483,
                        "hasRDI": true,
                        "daily": 47.08828981927494,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 134.48172010785663,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 6.783149349968208,
                                "hasRDI": true,
                                "daily": 27.132597399872836,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 21.461634638489738,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 14.456999999755576,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 30.452741879564925,
                        "hasRDI": true,
                        "daily": 60.90548375912985,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 234.38400000000001,
                        "hasRDI": true,
                        "daily": 78.128,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1946.375844305746,
                        "hasRDI": true,
                        "daily": 81.09899351273943,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 206.85986496253273,
                        "hasRDI": true,
                        "daily": 20.685986496253275,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 134.64310359140717,
                        "hasRDI": true,
                        "daily": 32.0578818074779,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 584.0980346842957,
                        "hasRDI": true,
                        "daily": 12.427617759240334,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.686237059340673,
                        "hasRDI": true,
                        "daily": 31.59020588522596,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.538170002781219,
                        "hasRDI": true,
                        "daily": 32.165181843465625,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 528.8257269044283,
                        "hasRDI": true,
                        "daily": 75.54653241491833,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 100.28500000003804,
                        "hasRDI": true,
                        "daily": 11.142777777782005,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 27.50876250009468,
                        "hasRDI": true,
                        "daily": 30.565291666771866,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.32944076084106394,
                        "hasRDI": true,
                        "daily": 27.453396736755327,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.46775084465531797,
                        "hasRDI": true,
                        "daily": 35.98083420425523,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 4.029920730493823,
                        "hasRDI": true,
                        "daily": 25.187004565586395,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.38815339234261215,
                        "hasRDI": true,
                        "daily": 29.857953257124013,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 163.7973034678959,
                        "hasRDI": true,
                        "daily": 40.94932586697397,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 163.7973034678959,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.6734800000000001,
                        "hasRDI": true,
                        "daily": 28.061666666666675,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1,
                        "hasRDI": true,
                        "daily": 6.666666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 11.73992862716229,
                        "hasRDI": true,
                        "daily": 78.2661908477486,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 52.65549999999672,
                        "hasRDI": true,
                        "daily": 43.8795833333306,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 461.3070487636162,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4fb59dd7b43e9f2bf6378f122c7cc7ff",
                "label": "Easy Pad Thai",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c5b/c5bfca633b591b1a2b9947a7cfd60aac.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d829b181338d8004ddbb018e905b7659de96c8123204ac9dad1d54a37c0d953d",
                "source": "Delish",
                "url": "http://www.delish.com/cooking/recipe-ideas/recipes/a31265/easy-pad-thai-recipe-rbk0311/",
                "shareAs": "http://www.edamam.com/recipe/easy-pad-thai-4fb59dd7b43e9f2bf6378f122c7cc7ff/pad+thai",
                "yield": 4,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Mediterranean",
                    "Dairy-Free",
                    "Tree-Nut-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 box pad thai rice noodles",
                    "2 tbsp. peanut or canola oil",
                    "8 oz. medium shrimp",
                    "1 red bell pepper",
                    "3 fresh jalapeño or serrano chiles",
                    "2 tsp. minced garlic",
                    "1½ c. roasted shredded chicken",
                    "⅓ c. pad thai sauce",
                    "2 tsp. reduced-sodium soy sauce",
                    "2 large eggs",
                    "2 c. fresh bean sprouts",
                    "2 scallions",
                    "¼ c. fresh cilantro leaves",
                    "¼ c. dry-roasted peanuts",
                    "Lime wedges"
                ],
                "ingredients": [
                    {
                        "text": "1 box pad thai rice noodles",
                        "quantity": 1,
                        "measure": "box",
                        "food": "rice noodles",
                        "weight": 453,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "2 tbsp. peanut or canola oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "canola oil",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                        "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                    },
                    {
                        "text": "8 oz. medium shrimp",
                        "quantity": 8,
                        "measure": "ounce",
                        "food": "shrimp",
                        "weight": 226.796185,
                        "foodCategory": "seafood",
                        "foodId": "food_bjap0xzbf5x6s3azkpwtfb14i25u",
                        "image": "https://www.edamam.com/food-img/4df/4df0fd62e878ed84b387b9e3ab48f2dc.jpg"
                    },
                    {
                        "text": "1 red bell pepper",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "red bell pepper",
                        "weight": 119,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                        "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
                    },
                    {
                        "text": "3 fresh jalapeño or serrano chiles",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "serrano chiles",
                        "weight": 18.299999999999997,
                        "foodCategory": "vegetables",
                        "foodId": "food_akybxs9atrgwona5nz3jgbo3vor5",
                        "image": "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg"
                    },
                    {
                        "text": "2 tsp. minced garlic",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "garlic",
                        "weight": 5.6,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1½ c. roasted shredded chicken",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "chicken",
                        "weight": 210,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "2 tsp. reduced-sodium soy sauce",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "reduced-sodium soy sauce",
                        "weight": 9,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_af8xwhdbq4vg0tbqfqjysafu339b",
                        "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "2 c. fresh bean sprouts",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "bean sprouts",
                        "weight": 208,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    },
                    {
                        "text": "2 scallions",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "scallions",
                        "weight": 27.777777777777782,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "¼ c. fresh cilantro leaves",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "cilantro leaves",
                        "weight": 4,
                        "foodCategory": "vegetables",
                        "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                        "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                    },
                    {
                        "text": "¼ c. dry-roasted peanuts",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "peanuts",
                        "weight": 36.5,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    },
                    {
                        "text": "Lime wedges",
                        "quantity": 1,
                        "measure": "wedge",
                        "food": "Lime",
                        "weight": 8.375,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    }
                ],
                "calories": 3021.613146138889,
                "totalWeight": 1454.3489627777778,
                "totalTime": 25,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3021.613146138889,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 91.75930832127777,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 17.611221535738885,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.3613718474,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 44.460590969100004,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 23.57435200675556,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 396.00272388888897,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 377.4828016666667,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 18.519922222222224,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 17.850249722222223,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 143.21907151833332,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 894.6418578500001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1740.2114045944443,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 415.03230840000003,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 325.75272030555556,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2303.8770950666667,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.97278127311111,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 13.097304712333335,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2010.167113677778,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 471.14738888888894,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 201.48224722222224,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8241622777777778,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.2673152222222221,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 23.115464333333332,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.8317806944444441,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 371.6747777777778,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 371.6747777777778,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.541,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.42,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.634602777777781,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 170.08985000000004,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 809.329089910278,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 151.08065730694446,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 141.16816664811964,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 88.05610767869442,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 132.00090796296297,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 74.0796888888889,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 286.43814303666665,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 298.2139526166667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 72.50880852476851,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 41.50323084,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 77.56017150132276,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 49.01866159716312,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 72.07100707283949,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 119.06640647575759,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 287.1667305253968,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 52.349709876543216,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 223.86916358024695,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 68.68018981481482,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 97.48578632478632,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 144.4716520833333,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 140.90620726495723,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 92.91869444444447,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 64.20833333333333,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.133333333333333,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 84.23068518518521,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 141.7415416666667,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 91.75930832127777,
                        "hasRDI": true,
                        "daily": 141.16816664811964,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 17.611221535738885,
                                "hasRDI": true,
                                "daily": 88.05610767869442,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.3613718474,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 44.460590969100004,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 23.57435200675556,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 396.00272388888897,
                        "hasRDI": true,
                        "daily": 132.00090796296297,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 377.4828016666667,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 18.519922222222224,
                                "hasRDI": true,
                                "daily": 74.0796888888889,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 17.850249722222223,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 143.21907151833332,
                        "hasRDI": true,
                        "daily": 286.43814303666665,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 894.6418578500001,
                        "hasRDI": true,
                        "daily": 298.2139526166667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1740.2114045944443,
                        "hasRDI": true,
                        "daily": 72.50880852476851,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 415.03230840000003,
                        "hasRDI": true,
                        "daily": 41.50323084,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 325.75272030555556,
                        "hasRDI": true,
                        "daily": 77.56017150132276,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2303.8770950666667,
                        "hasRDI": true,
                        "daily": 49.01866159716312,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.97278127311111,
                        "hasRDI": true,
                        "daily": 72.07100707283949,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 13.097304712333335,
                        "hasRDI": true,
                        "daily": 119.06640647575759,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2010.167113677778,
                        "hasRDI": true,
                        "daily": 287.1667305253968,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 471.14738888888894,
                        "hasRDI": true,
                        "daily": 52.349709876543216,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 201.48224722222224,
                        "hasRDI": true,
                        "daily": 223.86916358024695,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8241622777777778,
                        "hasRDI": true,
                        "daily": 68.68018981481482,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.2673152222222221,
                        "hasRDI": true,
                        "daily": 97.48578632478632,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 23.115464333333332,
                        "hasRDI": true,
                        "daily": 144.4716520833333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.8317806944444441,
                        "hasRDI": true,
                        "daily": 140.90620726495723,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 371.6747777777778,
                        "hasRDI": true,
                        "daily": 92.91869444444447,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 371.6747777777778,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.541,
                        "hasRDI": true,
                        "daily": 64.20833333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.42,
                        "hasRDI": true,
                        "daily": 16.133333333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 12.634602777777781,
                        "hasRDI": true,
                        "daily": 84.23068518518521,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 170.08985000000004,
                        "hasRDI": true,
                        "daily": 141.7415416666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 809.329089910278,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7f2bb8f152f77575a68f1e01b8312be9",
                "label": "Pad Thai",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e8b/e8be5b1f7c0e491ee53f08db3d55fd22.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4450df60cd29cbb7170f2a9b972fb6b64e1de3310b8829446712544baef07fc",
                "source": "Cookstr",
                "url": "http://www.cookstr.com/recipes/pad-thai-5",
                "shareAs": "http://www.edamam.com/recipe/pad-thai-7f2bb8f152f77575a68f1e01b8312be9/pad+thai",
                "yield": 2,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "4 tablespoons vegetable oil, or more as needed",
                    "1 teaspoon chopped garlic",
                    "1 tablespoon dried shrimp (optional)",
                    "½ cup (165 g) sliced cooked pork (optional)",
                    "½ cup (165 g) whole shrimp, shelled and deveined",
                    "1 tablespoon shredded preserved radish",
                    "¼ lb (125 g) medium-size dried rice noodles, soaked 60 minutes in cold water and drained",
                    "5 to 6 tablespoons Pad Thai Sauce (see below)",
                    "2 large eggs",
                    "½ teaspoon ground dried hot chilies, or more to taste",
                    "2 tablespoons ground roasted peanuts",
                    "½ cup (100 g) sliced garlic chives or green onions (scallions)",
                    "2 cups (220 g) bean sprouts, rinsed, plus more for garnish",
                    "2 wedges lime",
                    "1 cup (250 ml) Tamarind Juice",
                    "1 cup (200 g) palm sugar",
                    "1 cup (250 ml) water",
                    "½ cup (125 ml) fish sauce",
                    "2 teaspoons salt"
                ],
                "ingredients": [
                    {
                        "text": "4 tablespoons vegetable oil, or more as needed",
                        "quantity": 4,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 56,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "1 teaspoon chopped garlic",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "garlic",
                        "weight": 2.8,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 tablespoon dried shrimp (optional)",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "shrimp",
                        "weight": 7.999999999864745,
                        "foodCategory": "seafood",
                        "foodId": "food_bs4g96daz36c11bwb1x7lbzgrvqx",
                        "image": "https://www.edamam.com/food-img/33a/33ad937ee2169adc0a69cb97a48da579.jpg"
                    },
                    {
                        "text": "½ cup (165 g) sliced cooked pork (optional)",
                        "quantity": 165,
                        "measure": "gram",
                        "food": "pork",
                        "weight": 165,
                        "foodCategory": "meats",
                        "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
                        "image": "https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg"
                    },
                    {
                        "text": "½ cup (165 g) whole shrimp, shelled and deveined",
                        "quantity": 165,
                        "measure": "gram",
                        "food": "shrimp",
                        "weight": 165,
                        "foodCategory": "seafood",
                        "foodId": "food_bjap0xzbf5x6s3azkpwtfb14i25u",
                        "image": "https://www.edamam.com/food-img/4df/4df0fd62e878ed84b387b9e3ab48f2dc.jpg"
                    },
                    {
                        "text": "1 tablespoon shredded preserved radish",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "radish",
                        "weight": 7.249999999877424,
                        "foodCategory": "vegetables",
                        "foodId": "food_bs6xkukbtd85e7b2lh5zfazpe45y",
                        "image": "https://www.edamam.com/food-img/ad7/ad78f4315cdba1dc26ccef0d7dba464b.jpg"
                    },
                    {
                        "text": "¼ lb (125 g) medium-size dried rice noodles, soaked 60 minutes in cold water and drained",
                        "quantity": 0.25,
                        "measure": "pound",
                        "food": "rice noodles",
                        "weight": 113.3980925,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "½ teaspoon ground dried hot chilies, or more to taste",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "hot chilies",
                        "weight": 1.41666666673852,
                        "foodCategory": "canned vegetables",
                        "foodId": "food_bumzpysb5k05cibmscqp2a0fwgpa",
                        "image": "https://www.edamam.com/food-img/c34/c343c40fbfe50bd72bbb3890c83a4315.jpeg"
                    },
                    {
                        "text": "2 tablespoons ground roasted peanuts",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "peanuts",
                        "weight": 18.249999999691447,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    },
                    {
                        "text": "½ cup (100 g) sliced garlic chives or green onions (scallions)",
                        "quantity": 100,
                        "measure": "gram",
                        "food": "garlic chives",
                        "weight": 100,
                        "foodCategory": "vegetables",
                        "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
                        "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
                    },
                    {
                        "text": "2 cups (220 g) bean sprouts, rinsed, plus more for garnish",
                        "quantity": 220,
                        "measure": "gram",
                        "food": "bean sprouts",
                        "weight": 220,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    },
                    {
                        "text": "2 wedges lime",
                        "quantity": 2,
                        "measure": "wedge",
                        "food": "lime",
                        "weight": 16.75,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    },
                    {
                        "text": "1 cup (250 ml) Tamarind Juice",
                        "quantity": 250,
                        "measure": "milliliter",
                        "food": "Tamarind",
                        "weight": 126.80258513191126,
                        "foodCategory": "fruit",
                        "foodId": "food_b8wxjbga5zblgbada09f7b61mz7n",
                        "image": "https://www.edamam.com/food-img/dde/dded3ea24aeb0014358a92d524065b80.jpg"
                    },
                    {
                        "text": "1 cup (200 g) palm sugar",
                        "quantity": 200,
                        "measure": "gram",
                        "food": "palm sugar",
                        "weight": 200,
                        "foodCategory": "sugars",
                        "foodId": "food_boy2xh8bm7a0p7asp89y6b7cfu73",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1 cup (250 ml) water",
                        "quantity": 250,
                        "measure": "milliliter",
                        "food": "water",
                        "weight": 250,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "½ cup (125 ml) fish sauce",
                        "quantity": 125,
                        "measure": "milliliter",
                        "food": "fish sauce",
                        "weight": 152.1631021608661,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "2 teaspoons salt",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 12,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    }
                ],
                "calories": 2852.206320919682,
                "totalWeight": 1702.8304464589496,
                "totalTime": 240,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2852.206320919682,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 98.79682780552042,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 16.072573172795636,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.47412000000000004,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 58.41695560293146,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 17.506254223660374,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 395.98454819254977,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 379.0297802041829,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 16.954767988366886,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 261.5745759941559,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 194.04,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 113.19059185667592,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 761.7599999996592,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 12784.405402836095,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 705.9728702429478,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 645.5799115356422,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3502.2865632659286,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.650714561364536,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 10.016463007274016,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1481.5972532072176,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 400.88674245616704,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 101.44108932377974,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.5147163786302333,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.5885539066900838,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 18.703909770557885,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 2.179072804618027,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 436.5056534613998,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 436.5056534613998,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.5540828903711565,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.825,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.943130486855221,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 289.51607238369814,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1051.3300729203913,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 142.6103160459841,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 151.99511970080064,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 80.36286586397817,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 131.9948493975166,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 67.81907195346754,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 226.38118371335185,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 253.9199999998864,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 532.6835584515039,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 70.59728702429479,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 153.70950274658148,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 74.51673538863677,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 86.94841422980298,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 91.05875461158196,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 211.65675045817397,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 44.542971384018564,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 112.71232147086639,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 209.55969821918612,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 122.19645436077568,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 116.89943606598678,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 167.62098497061746,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 109.12641336534995,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 106.42012043213153,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 18.833333333333332,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 106.2875365790348,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 241.2633936530818,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 98.79682780552042,
                        "hasRDI": true,
                        "daily": 151.99511970080064,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 16.072573172795636,
                                "hasRDI": true,
                                "daily": 80.36286586397817,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.47412000000000004,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 58.41695560293146,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 17.506254223660374,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 395.98454819254977,
                        "hasRDI": true,
                        "daily": 131.9948493975166,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 379.0297802041829,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 16.954767988366886,
                                "hasRDI": true,
                                "daily": 67.81907195346754,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 261.5745759941559,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 194.04,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 113.19059185667592,
                        "hasRDI": true,
                        "daily": 226.38118371335185,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 761.7599999996592,
                        "hasRDI": true,
                        "daily": 253.9199999998864,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 12784.405402836095,
                        "hasRDI": true,
                        "daily": 532.6835584515039,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 705.9728702429478,
                        "hasRDI": true,
                        "daily": 70.59728702429479,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 645.5799115356422,
                        "hasRDI": true,
                        "daily": 153.70950274658148,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3502.2865632659286,
                        "hasRDI": true,
                        "daily": 74.51673538863677,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.650714561364536,
                        "hasRDI": true,
                        "daily": 86.94841422980298,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.016463007274016,
                        "hasRDI": true,
                        "daily": 91.05875461158196,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1481.5972532072176,
                        "hasRDI": true,
                        "daily": 211.65675045817397,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 400.88674245616704,
                        "hasRDI": true,
                        "daily": 44.542971384018564,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 101.44108932377974,
                        "hasRDI": true,
                        "daily": 112.71232147086639,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.5147163786302333,
                        "hasRDI": true,
                        "daily": 209.55969821918612,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.5885539066900838,
                        "hasRDI": true,
                        "daily": 122.19645436077568,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 18.703909770557885,
                        "hasRDI": true,
                        "daily": 116.89943606598678,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 2.179072804618027,
                        "hasRDI": true,
                        "daily": 167.62098497061746,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 436.5056534613998,
                        "hasRDI": true,
                        "daily": 109.12641336534995,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 436.5056534613998,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.5540828903711565,
                        "hasRDI": true,
                        "daily": 106.42012043213153,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.825,
                        "hasRDI": true,
                        "daily": 18.833333333333332,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 15.943130486855221,
                        "hasRDI": true,
                        "daily": 106.2875365790348,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 289.51607238369814,
                        "hasRDI": true,
                        "daily": 241.2633936530818,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1051.3300729203913,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_43e7fee499953b03c91e1a0e6c206978",
                "label": "Pad Thai",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/40d/40d60abda5d470686cc7039d4a1b0a7f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=19e1e997bee2588e6840cda3483aa8d87ea43f744067f7460273fbb25f7455ee",
                "source": "BBC Good Food",
                "url": "http://www.bbcgoodfood.com/recipes/4397/",
                "shareAs": "http://www.edamam.com/recipe/pad-thai-43e7fee499953b03c91e1a0e6c206978/pad+thai",
                "yield": 4,
                "dietLabels": [
                    "Balanced"
                ],
                "healthLabels": [
                    "Pescatarian",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "2.0 tbsp vegetable oil",
                    "200.0g pack large cooked prawns",
                    "2.0 tsp tamarind paste",
                    "3 spring onions",
                    "1 garlic clove",
                    "75.0g bean sprouts",
                    "lime wedges, to serve",
                    "2.0 tsp sugar",
                    "250.0g pack medium rice noodles",
                    "1 egg",
                    "3.0 tbsp fish sauce",
                    "handful salted peanut , chopped to serve"
                ],
                "ingredients": [
                    {
                        "text": "2.0 tbsp vegetable oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "200.0g pack large cooked prawns",
                        "quantity": 200,
                        "measure": "gram",
                        "food": "prawns",
                        "weight": 200,
                        "foodCategory": "seafood",
                        "foodId": "food_b38bejhbq9loe2bbb7bnmbcpteft",
                        "image": "https://www.edamam.com/food-img/ebe/ebe2888b894f48d19762e1d606db0206.jpg"
                    },
                    {
                        "text": "2.0 tsp tamarind paste",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "tamarind",
                        "weight": 5.000000000253605,
                        "foodCategory": "fruit",
                        "foodId": "food_b8wxjbga5zblgbada09f7b61mz7n",
                        "image": "https://www.edamam.com/food-img/dde/dded3ea24aeb0014358a92d524065b80.jpg"
                    },
                    {
                        "text": "3 spring onions",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "spring onions",
                        "weight": 41.66666666666667,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "1 garlic clove",
                        "quantity": 1,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "75.0g bean sprouts",
                        "quantity": 75,
                        "measure": "gram",
                        "food": "bean sprouts",
                        "weight": 75,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    },
                    {
                        "text": "lime wedges, to serve",
                        "quantity": 1,
                        "measure": "wedge",
                        "food": "lime",
                        "weight": 8.375,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    },
                    {
                        "text": "2.0 tsp sugar",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "sugar",
                        "weight": 8.4,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "250.0g pack medium rice noodles",
                        "quantity": 250,
                        "measure": "gram",
                        "food": "rice noodles",
                        "weight": 250,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "1 egg",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 43,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "3.0 tbsp fish sauce",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "fish sauce",
                        "weight": 54,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "handful salted peanut , chopped to serve",
                        "quantity": 1,
                        "measure": "handful",
                        "food": "salted peanut",
                        "weight": 18.25,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_ak0gpvfanzeuffbybsjb4baxi9jx",
                        "image": "https://www.edamam.com/food-img/b51/b5115c4e224b60ca3b3f018d9f416624.jpg"
                    }
                ],
                "calories": 1574.3113333339395,
                "totalWeight": 734.6916666669202,
                "totalTime": 0,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1574.3113333339395,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 44.85356666666819,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 5.548773333334023,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.27202750000000003,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 27.347753750000464,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 8.448722083333482,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 229.33632833349185,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 220.81749500014558,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 8.518833333346267,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 17.88202083343173,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 8.3832,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 58.1040000000071,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 411.96000000000004,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5975.753166666737,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 262.6127500001877,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 236.08083333356666,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 910.4555000015927,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.176666666673768,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.4780775000002535,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1093.3316666669532,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 200.81083333333837,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 21.55145833334221,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.2847491666677521,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.4762468333337188,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 8.924707500004917,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.8668529166668342,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 184.82916666670218,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 184.82916666670218,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.8619,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.06,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 10.70021666666692,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 111.97025000000713,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 383.1976466667463,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 78.71556666669697,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 69.00548717948953,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 27.74386666667012,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 76.4454427778306,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 34.07533333338507,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 116.2080000000142,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 137.32,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 248.98971527778073,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 26.26127500001877,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 56.209722222277776,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 19.371393617055165,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 28.759259259298712,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 49.80070454545685,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 156.19023809527903,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 22.312314814815377,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 23.94606481482468,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 23.729097222312674,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 36.63437179490145,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 55.779421875030735,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 66.68099358975647,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 46.207291666675545,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 119.24583333333334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 7.066666666666666,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 71.33477777777946,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 93.30854166667261,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 44.85356666666819,
                        "hasRDI": true,
                        "daily": 69.00548717948953,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 5.548773333334023,
                                "hasRDI": true,
                                "daily": 27.74386666667012,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.27202750000000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 27.347753750000464,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 8.448722083333482,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 229.33632833349185,
                        "hasRDI": true,
                        "daily": 76.4454427778306,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 220.81749500014558,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 8.518833333346267,
                                "hasRDI": true,
                                "daily": 34.07533333338507,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 17.88202083343173,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 8.3832,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 58.1040000000071,
                        "hasRDI": true,
                        "daily": 116.2080000000142,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 411.96000000000004,
                        "hasRDI": true,
                        "daily": 137.32,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5975.753166666737,
                        "hasRDI": true,
                        "daily": 248.98971527778073,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 262.6127500001877,
                        "hasRDI": true,
                        "daily": 26.26127500001877,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 236.08083333356666,
                        "hasRDI": true,
                        "daily": 56.209722222277776,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 910.4555000015927,
                        "hasRDI": true,
                        "daily": 19.371393617055165,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.176666666673768,
                        "hasRDI": true,
                        "daily": 28.759259259298712,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.4780775000002535,
                        "hasRDI": true,
                        "daily": 49.80070454545685,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1093.3316666669532,
                        "hasRDI": true,
                        "daily": 156.19023809527903,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 200.81083333333837,
                        "hasRDI": true,
                        "daily": 22.312314814815377,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 21.55145833334221,
                        "hasRDI": true,
                        "daily": 23.94606481482468,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.2847491666677521,
                        "hasRDI": true,
                        "daily": 23.729097222312674,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.4762468333337188,
                        "hasRDI": true,
                        "daily": 36.63437179490145,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 8.924707500004917,
                        "hasRDI": true,
                        "daily": 55.779421875030735,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.8668529166668342,
                        "hasRDI": true,
                        "daily": 66.68099358975647,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 184.82916666670218,
                        "hasRDI": true,
                        "daily": 46.207291666675545,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 184.82916666670218,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.8619,
                        "hasRDI": true,
                        "daily": 119.24583333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.06,
                        "hasRDI": true,
                        "daily": 7.066666666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 10.70021666666692,
                        "hasRDI": true,
                        "daily": 71.33477777777946,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 111.97025000000713,
                        "hasRDI": true,
                        "daily": 93.30854166667261,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 383.1976466667463,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2c5fb246651824aedffa76c3abadabc6",
                "label": "Chicken Pad Thai Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/29e/29e7d4b66de15ff6195c15caccf56dc3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e77fc51d3d1b01a6a544bac51c29ac9ef80d955a37f61e60d99c6492d1ee9d8e",
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2012/09/chicken-pad-thai-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/chicken-pad-thai-recipe-2c5fb246651824aedffa76c3abadabc6/pad+thai",
                "yield": 4,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "1/3 cup tamarind pulp",
                    "1/3 cups fish sauce",
                    "2 ounces palm sugar, grated (about 1/3 cup)",
                    "1 pound skinless, boneless chicken breast, trimmed of visible fat and sliced into 1/4-inch thick strips",
                    "1/2 cup vegetable oil, divided",
                    "6 shallots, finely chopped",
                    "6 medium cloves garlic, minced (about 2 tablespoons)",
                    "1/4 cup tiny dried shrimp, soaked in hot water for 15 minutes and drained",
                    "1/4 to 1/2 teaspoon chili flakes",
                    "12 ounces dry rice stick noodles, soaked in cold water for 30 minutes, drained",
                    "2 large eggs, beaten",
                    "2 cups bean sprouts",
                    "2/3 cup toasted unroasted peanuts, finely chopped",
                    "1 bunch scallions, cut into 1-inch lengths",
                    "4 limes, cut into wedges for garnish"
                ],
                "ingredients": [
                    {
                        "text": "1/3 cup tamarind pulp",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "tamarind",
                        "weight": 40,
                        "foodCategory": "fruit",
                        "foodId": "food_b8wxjbga5zblgbada09f7b61mz7n",
                        "image": "https://www.edamam.com/food-img/dde/dded3ea24aeb0014358a92d524065b80.jpg"
                    },
                    {
                        "text": "1/3 cups fish sauce",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "fish sauce",
                        "weight": 96.00000000162305,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "2 ounces palm sugar, grated (about 1/3 cup)",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "palm sugar",
                        "weight": 48.33333333333333,
                        "foodCategory": "sugars",
                        "foodId": "food_boy2xh8bm7a0p7asp89y6b7cfu73",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1 pound skinless, boneless chicken breast, trimmed of visible fat and sliced into 1/4-inch thick strips",
                        "quantity": 1,
                        "measure": "pound",
                        "food": "chicken breast",
                        "weight": 453.59237,
                        "foodCategory": "Poultry",
                        "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                        "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                    },
                    {
                        "text": "1/2 cup vegetable oil, divided",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "vegetable oil",
                        "weight": 112.00000000189358,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "6 shallots, finely chopped",
                        "quantity": 6,
                        "measure": "<unit>",
                        "food": "shallots",
                        "weight": 354.6666666666667,
                        "foodCategory": "vegetables",
                        "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                        "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                    },
                    {
                        "text": "6 medium cloves garlic, minced (about 2 tablespoons)",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "garlic",
                        "weight": 16.999999999712582,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1/4 cup tiny dried shrimp, soaked in hot water for 15 minutes and drained",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "shrimp",
                        "weight": 16,
                        "foodCategory": "seafood",
                        "foodId": "food_bs4g96daz36c11bwb1x7lbzgrvqx",
                        "image": "https://www.edamam.com/food-img/33a/33ad937ee2169adc0a69cb97a48da579.jpg"
                    },
                    {
                        "text": "1/4 to 1/2 teaspoon chili flakes",
                        "quantity": 0.375,
                        "measure": "teaspoon",
                        "food": "chili",
                        "weight": 0.820312500041607,
                        "foodCategory": "vegetables",
                        "foodId": "food_akybxs9atrgwona5nz3jgbo3vor5",
                        "image": "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg"
                    },
                    {
                        "text": "12 ounces dry rice stick noodles, soaked in cold water for 30 minutes, drained",
                        "quantity": 12,
                        "measure": "ounce",
                        "food": "rice stick noodles",
                        "weight": 340.1942775,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "2 large eggs, beaten",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "2 cups bean sprouts",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "bean sprouts",
                        "weight": 208,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    },
                    {
                        "text": "2/3 cup toasted unroasted peanuts, finely chopped",
                        "quantity": 0.6666666666666666,
                        "measure": "cup",
                        "food": "peanuts",
                        "weight": 97.33333333333333,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    },
                    {
                        "text": "1 bunch scallions, cut into 1-inch lengths",
                        "quantity": 1,
                        "measure": "bunch",
                        "food": "scallions",
                        "weight": 113,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "4 limes, cut into wedges for garnish",
                        "quantity": 4,
                        "measure": "<unit>",
                        "food": "limes",
                        "weight": 268,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    }
                ],
                "calories": 4256.357180783559,
                "totalWeight": 2264.940293336604,
                "totalTime": 45,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4256.357180783559,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 185.26171742489248,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 20.012569605506442,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.9287914659145239,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 112.05365342149659,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 39.30745415912319,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 479.24796597030024,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 437.56883930113804,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 41.67912666916217,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 115.14595110180781,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 46.892999999999994,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 189.50388286548127,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 743.4424301,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8765.135516260716,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 722.5848228251823,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 719.0496456527777,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 5196.438752178649,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 22.545539732341464,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 13.841065248666688,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2577.1837843413573,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 260.71701277508447,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 163.26965364577046,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.943123355907976,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.059229308533976,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 62.782175076436175,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.471262507119755,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 730.0378135008289,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 730.0378135008289,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.421743977007791,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 38.28442446724618,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 309.7083149483334,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1371.569065245856,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 212.81785903917793,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 285.0180268075269,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 100.06284802753221,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 159.74932199010007,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 166.7165066766487,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 379.00776573096255,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 247.81414336666668,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 365.2139798441965,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 72.25848228251823,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 171.2022965839947,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 110.56252664209892,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 125.25299851300812,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 125.82786589696988,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 368.1691120487653,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 28.968556975009385,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 181.4107262730783,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 161.9269463256647,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 158.40225450261352,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 392.3885942277261,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 497.78942362459657,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 182.50945337520724,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 100.9059990419913,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 13.333333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 255.22949644830788,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 258.0902624569445,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 185.26171742489248,
                        "hasRDI": true,
                        "daily": 285.0180268075269,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 20.012569605506442,
                                "hasRDI": true,
                                "daily": 100.06284802753221,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.9287914659145239,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 112.05365342149659,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 39.30745415912319,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 479.24796597030024,
                        "hasRDI": true,
                        "daily": 159.74932199010007,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 437.56883930113804,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 41.67912666916217,
                                "hasRDI": true,
                                "daily": 166.7165066766487,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 115.14595110180781,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 46.892999999999994,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 189.50388286548127,
                        "hasRDI": true,
                        "daily": 379.00776573096255,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 743.4424301,
                        "hasRDI": true,
                        "daily": 247.81414336666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 8765.135516260716,
                        "hasRDI": true,
                        "daily": 365.2139798441965,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 722.5848228251823,
                        "hasRDI": true,
                        "daily": 72.25848228251823,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 719.0496456527777,
                        "hasRDI": true,
                        "daily": 171.2022965839947,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 5196.438752178649,
                        "hasRDI": true,
                        "daily": 110.56252664209892,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 22.545539732341464,
                        "hasRDI": true,
                        "daily": 125.25299851300812,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 13.841065248666688,
                        "hasRDI": true,
                        "daily": 125.82786589696988,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2577.1837843413573,
                        "hasRDI": true,
                        "daily": 368.1691120487653,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 260.71701277508447,
                        "hasRDI": true,
                        "daily": 28.968556975009385,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 163.26965364577046,
                        "hasRDI": true,
                        "daily": 181.4107262730783,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.943123355907976,
                        "hasRDI": true,
                        "daily": 161.9269463256647,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.059229308533976,
                        "hasRDI": true,
                        "daily": 158.40225450261352,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 62.782175076436175,
                        "hasRDI": true,
                        "daily": 392.3885942277261,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.471262507119755,
                        "hasRDI": true,
                        "daily": 497.78942362459657,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 730.0378135008289,
                        "hasRDI": true,
                        "daily": 182.50945337520724,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 730.0378135008289,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.421743977007791,
                        "hasRDI": true,
                        "daily": 100.9059990419913,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2,
                        "hasRDI": true,
                        "daily": 13.333333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 38.28442446724618,
                        "hasRDI": true,
                        "daily": 255.22949644830788,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 309.7083149483334,
                        "hasRDI": true,
                        "daily": 258.0902624569445,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1371.569065245856,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_038815f1df281cc9d5f84f491fd9f744",
                "label": "Pad Thai",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/799/799af11f630cedfe942a25f9884dd86c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJIMEYCIQDhDlxnMrgkp2KP8NzADci6Op1N%2Fnso45r8eTbHaM6M9gIhAKrJFCSuOuyTlyDCg25huyflAcyly853QCdr9Bdc0azrKtUECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzcniaoY1hXAMfA7CoqqQTfbZpKPHdKy9p75nl8Nc02eY0k0Y0HrGPcVDFtrHgqhgo35BXZQa2UHEYDDD9P%2B%2F9ml5ITYlnxdJbXk2bje0xNC%2BeB2Ki43NT014npOWUQNq689orwcI0a%2FGHLqz%2FwwfjQBQALmcJVWDX0%2BNUfXOj6dV3mVMywD86JVAaScnp6shNKDf0qQGA%2Fa7ShtJVbPA%2BPtJO8BvldwhlDSCQxBonrwnCAxt9vx3l%2BNY1SYMJnSUPlNsjD1%2FTURFsO3%2BS9WNTx3l72GNt9R2VQnqJcXnRfD%2BUhCOpsIsYV3jlDOAOdbRZeRT5ndyzt9F%2BbjmiM8r2LEM%2Bfpbqg6ChJ7GRj9500bATirDnIxi2Gx%2FTzjSkX2%2BggX0OC%2Ftz8xUSMtLgMUwc%2FdijtYghK1I6ct%2Fby%2BL1bRPP0i9OHkGaJhQNtl4URGRo9qPWEQ%2B8yoEU0U0ZiCQKD615Tw1f8WSKUx6FXuy5ie1vII7Zg9wIxlLXB17gbkLxYNOvz1DqS6aDUqwWk8XhAv0etOYwH%2BOw854S%2BaFfCfOOyLjs7iTR5YsoUrjoSCbuh9WHF9oIc4XMLDth%2F9ogM5dXv37GMUHqQA0SIxjwdJHBszglVinj3pKxVUILtExeectwz9NxfJIr9LlCKCRyBZXQ5Dn70RYRch2S9%2B%2FbphMiyrNHt%2FF15aPmewmLYtqw34k8kEnjPrGBEYjFy30X7zv015tMUBHizGXTURd7f9rSVMKnna48BMKi7sJ4GOqgB1Vrco5EnMtEQASTz1khyjenDMqchZPmAnMr40kVhP%2FX36qY6%2BUAzMfEJt45bB3Ox3ZvfaCRLT%2F6DHut38hbaX0K6w8Bq525QUwQqtXNNWAG0%2F0XP2PwBmt8wYEq70adfTOcq%2B6WjBIZ6PTz19b0yyefGXw1AQP66pqlL9y4W1H0FawFmCF3T1wuKp8ctQRRCFDgq3pDKAXZzXDwQ8I4axzxj9rwA2omg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230121T175454Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCUCQ3JPZ%2F20230121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bb77a210f4a6f8b2b63d96f37f6f0dd7477430ff98ba09e948cc19147fa13761",
                "source": "BBC",
                "url": "http://www.bbc.co.uk/food/recipes/padthai_67953",
                "shareAs": "http://www.edamam.com/recipe/pad-thai-038815f1df281cc9d5f84f491fd9f744/pad+thai",
                "yield": 2,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Pescatarian",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Shellfish",
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "1 tbsp dried shrimps (optional)",
                    "100g dried rice stick noodles",
                    "3 tbsp vegetable oil",
                    "2 eggs, lightly beaten",
                    "2 garlic cloves, smashed",
                    "200g small fresh prawns, peeled",
                    "100g bean sprouts, rinsed",
                    "2 spring onion greens, chopped into 3cm/1in lengths",
                    "3 tbsp thai fish sauce (nam pla)",
                    "1 tbsp tomato ketchup",
                    "2 tbsp lime juice",
                    "½ tsp dried chilli flakes or cayenne",
                    "1 tbsp palm or brown sugar",
                    "2 tbsp roasted peanuts, lightly crushed",
                    "2 tbsp coriander sprigs",
                    "1 lime, quartered"
                ],
                "ingredients": [
                    {
                        "text": "1 tbsp dried shrimps (optional)",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "shrimps",
                        "weight": 7.999999999864745,
                        "foodCategory": "seafood",
                        "foodId": "food_bs4g96daz36c11bwb1x7lbzgrvqx",
                        "image": "https://www.edamam.com/food-img/33a/33ad937ee2169adc0a69cb97a48da579.jpg"
                    },
                    {
                        "text": "100g dried rice stick noodles",
                        "quantity": 100,
                        "measure": "gram",
                        "food": "rice stick noodles",
                        "weight": 100,
                        "foodCategory": "grains",
                        "foodId": "food_bkwbi4gbu7k75ha7ad8eralgwvlk",
                        "image": "https://www.edamam.com/food-img/a83/a831dd1f26c9e2d0bf9e01bf7d5c0f0e.jpg"
                    },
                    {
                        "text": "3 tbsp vegetable oil",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 42,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "2 eggs, lightly beaten",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 86,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "2 garlic cloves, smashed",
                        "quantity": 2,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 6,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "200g small fresh prawns, peeled",
                        "quantity": 200,
                        "measure": "gram",
                        "food": "prawns",
                        "weight": 200,
                        "foodCategory": "seafood",
                        "foodId": "food_b38bejhbq9loe2bbb7bnmbcpteft",
                        "image": "https://www.edamam.com/food-img/ebe/ebe2888b894f48d19762e1d606db0206.jpg"
                    },
                    {
                        "text": "100g bean sprouts, rinsed",
                        "quantity": 100,
                        "measure": "gram",
                        "food": "bean sprouts",
                        "weight": 100,
                        "foodCategory": "vegetables",
                        "foodId": "food_a8l38voaf1algubwcsji2a8z2yh3",
                        "image": "https://www.edamam.com/food-img/ad4/ad4635efc3493d3b4f59f6479c1bd27b.jpg"
                    },
                    {
                        "text": "2 spring onion greens, chopped into 3cm/1in lengths",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "spring onion",
                        "weight": 27.777777777777782,
                        "foodCategory": "vegetables",
                        "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                        "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                    },
                    {
                        "text": "3 tbsp thai fish sauce (nam pla)",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "fish sauce",
                        "weight": 54,
                        "foodCategory": "canned soup",
                        "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
                        "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
                    },
                    {
                        "text": "1 tbsp tomato ketchup",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "tomato ketchup",
                        "weight": 17,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_au7jthtab0n3era9uue8pauakroe",
                        "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
                    },
                    {
                        "text": "2 tbsp lime juice",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "lime juice",
                        "weight": 30.799999999479265,
                        "foodCategory": "fruit",
                        "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
                        "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                    },
                    {
                        "text": "½ tsp dried chilli flakes or cayenne",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "chilli flakes",
                        "weight": 0.9,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a8iooz3aris8gba605l07brngnrx",
                        "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
                    },
                    {
                        "text": "1 tbsp palm or brown sugar",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "brown sugar",
                        "weight": 9.06249999984678,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "2 tbsp roasted peanuts, lightly crushed",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "peanuts",
                        "weight": 18.249999999691447,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_aft8y4gab0fvs5bcgjac6boztho3",
                        "image": "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg"
                    },
                    {
                        "text": "2 tbsp coriander sprigs",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "coriander",
                        "weight": 10,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_afpcy6rb44nx6gbfff63ga2cqksw",
                        "image": "https://www.edamam.com/food-img/a90/a901cee0b9028841d258f5d07b5924e7.jpg"
                    },
                    {
                        "text": "1 lime, quartered",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "lime",
                        "weight": 67,
                        "foodCategory": "fruit",
                        "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                        "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
                    }
                ],
                "calories": 1290.5358888862918,
                "totalWeight": 776.79027777666,
                "totalTime": 60,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1290.5358888862918,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 64.22686777762365,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 7.468710388869219,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.39081999999999995,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 39.81721899992445,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 12.855024555506505,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 126.70225013864498,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 114.41777791645107,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 12.28447222219391,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 22.256639722050203,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 8.792437499851346,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 59.10715833322372,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 592.0799999996591,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5922.462944443158,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 378.35587499932,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 266.05318055493706,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1224.0142916635698,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.731324861092541,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.861187083320129,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1037.4292777762748,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 287.75388888887846,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 53.11382222206046,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3970397777756634,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.7329707222217074,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 8.996832083294441,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.0335340694430963,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 243.45240277697144,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 243.45240277697144,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.303799999998999,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.92,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.406632777749444,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 93.27949999999689,
                        "unit": "µg"
                    },
                    "Sugar.alcohol": {
                        "label": "Sugar alcohol",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 507.74273527718043,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 64.52679444431459,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 98.81056581172871,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 37.343551944346096,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 42.23408337954832,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 49.13788888877564,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 118.21431666644744,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 197.35999999988638,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 246.76928935179828,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 37.835587499932004,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 63.34599537022311,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 26.042857269437654,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 42.95180478384745,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 53.2835189392739,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 148.20418253946784,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 31.972654320986496,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 59.01535802451163,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 33.08664814797196,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 56.38236324782365,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 56.23020052059026,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 79.50262072639202,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 60.86310069424286,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 137.65833333329164,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 12.8,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 102.71088518499629,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 77.73291666666407,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 64.22686777762365,
                        "hasRDI": true,
                        "daily": 98.81056581172871,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 7.468710388869219,
                                "hasRDI": true,
                                "daily": 37.343551944346096,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.39081999999999995,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 39.81721899992445,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 12.855024555506505,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 126.70225013864498,
                        "hasRDI": true,
                        "daily": 42.23408337954832,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 114.41777791645107,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 12.28447222219391,
                                "hasRDI": true,
                                "daily": 49.13788888877564,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 22.256639722050203,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 8.792437499851346,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 59.10715833322372,
                        "hasRDI": true,
                        "daily": 118.21431666644744,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 592.0799999996591,
                        "hasRDI": true,
                        "daily": 197.35999999988638,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5922.462944443158,
                        "hasRDI": true,
                        "daily": 246.76928935179828,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 378.35587499932,
                        "hasRDI": true,
                        "daily": 37.835587499932004,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 266.05318055493706,
                        "hasRDI": true,
                        "daily": 63.34599537022311,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1224.0142916635698,
                        "hasRDI": true,
                        "daily": 26.042857269437654,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.731324861092541,
                        "hasRDI": true,
                        "daily": 42.95180478384745,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.861187083320129,
                        "hasRDI": true,
                        "daily": 53.2835189392739,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1037.4292777762748,
                        "hasRDI": true,
                        "daily": 148.20418253946784,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 287.75388888887846,
                        "hasRDI": true,
                        "daily": 31.972654320986496,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 53.11382222206046,
                        "hasRDI": true,
                        "daily": 59.01535802451163,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3970397777756634,
                        "hasRDI": true,
                        "daily": 33.08664814797196,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.7329707222217074,
                        "hasRDI": true,
                        "daily": 56.38236324782365,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 8.996832083294441,
                        "hasRDI": true,
                        "daily": 56.23020052059026,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.0335340694430963,
                        "hasRDI": true,
                        "daily": 79.50262072639202,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 243.45240277697144,
                        "hasRDI": true,
                        "daily": 60.86310069424286,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 243.45240277697144,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.303799999998999,
                        "hasRDI": true,
                        "daily": 137.65833333329164,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.92,
                        "hasRDI": true,
                        "daily": 12.8,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 15.406632777749444,
                        "hasRDI": true,
                        "daily": 102.71088518499629,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 93.27949999999689,
                        "hasRDI": true,
                        "daily": 77.73291666666407,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 507.74273527718043,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            }
        }
    ]
}`);

export default dummyEdemamData;
