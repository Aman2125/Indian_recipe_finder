export interface Review {
  rating: number;
  comment: string;
  date: string;
  recipeId: string;
}

export interface Ingredient {
  id: string;
  name: string;
  category: 'Spices' | 'Vegetables' | 'Grains' | 'Lentils' | 'Dairy' | 'Herbs';
  hindiName?: string;
}

export interface Recipe {
  id: string;
  title: string;
  hindiTitle?: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central';
  category: 'Main Course' | 'Breakfast' | 'Street Food' | 'Dessert' | 'Snack' | 'Rice' | 'Bread';
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  isVegetarian: boolean;
  image: string;
  description: string;
  culturalNote?: string;
}

export interface RecipeFilters {
  region?: Recipe['region'];
  category?: Recipe['category'];
  isVegetarian?: boolean;
  sortBy: 'cookingTime' | 'difficulty';
  order: 'asc' | 'desc';
}