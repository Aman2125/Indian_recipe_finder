import { Ingredient, Recipe } from '../types';

export const ingredients: Ingredient[] = [
  { id: '1', name: 'Chicken Breast', category: 'Protein' },
  { id: '2', name: 'Rice', category: 'Grains' },
  { id: '3', name: 'Tomatoes', category: 'Vegetables' },
  { id: '4', name: 'Onions', category: 'Vegetables' },
  { id: '5', name: 'Garlic', category: 'Vegetables' },
  { id: '6', name: 'Olive Oil', category: 'Oils' },
  // Add more ingredients as needed
];

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Chicken Stir-Fry',
    ingredients: ['Chicken Breast', 'Rice', 'Onions', 'Garlic'],
    instructions: [
      'Cut chicken into bite-sized pieces',
      'Cook rice according to package instructions',
      'Sauté onions and garlic in olive oil',
      'Add chicken and cook until done',
      'Serve over rice'
    ],
    cookingTime: 30,
    difficulty: 'easy',
    calories: 450,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80',
    tags: ['Dinner', 'High-Protein']
  },
  // Add more recipes as needed
];