export interface Recipe {
    id: string;
    name: string;
    image: string;
    healthLabels: string[];
    url: string;
    ingredients: string[];
    source: string;
}