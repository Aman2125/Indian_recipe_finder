import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Dal Tadka',
    hindiTitle: 'दाल तड़का',
    region: 'North',
    category: 'Main Course',
    ingredients: [
      'Yellow Dal',
      'Cumin Seeds',
      'Turmeric',
      'Onion',
      'Tomato',
      'Coriander Leaves',
      'Ghee'
    ],
    instructions: [
      'Wash dal thoroughly and pressure cook with turmeric until soft',
      'Heat ghee in a pan and add cumin seeds',
      'Add chopped onions and sauté until golden',
      'Add tomatoes and cook until soft',
      'Add cooked dal and simmer for 5-7 minutes',
      'Garnish with fresh coriander leaves'
    ],
    cookingTime: 30,
    difficulty: 'easy',
    servings: 4,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80',
    description: 'A comforting lentil dish tempered with ghee and spices',
    culturalNote: 'Dal is a staple in Indian households, often served daily with rice or roti'
  },
  {
    id: '2',
    title: 'Jeera Rice',
    hindiTitle: 'जीरा राइस',
    region: 'North',
    category: 'Rice',
    ingredients: [
      'Basmati Rice',
      'Cumin Seeds',
      'Ghee',
      'Coriander Leaves'
    ],
    instructions: [
      'Wash and soak rice for 30 minutes',
      'Heat ghee in a pan and add cumin seeds',
      'Add drained rice and sauté for 2 minutes',
      'Add water and cook until rice is done',
      'Garnish with coriander leaves'
    ],
    cookingTime: 25,
    difficulty: 'easy',
    servings: 4,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80',
    description: 'Fragrant basmati rice cooked with cumin seeds',
    culturalNote: 'A popular accompaniment to dal and curries across India'
  }
];