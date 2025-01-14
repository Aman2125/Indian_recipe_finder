import React from 'react';
import { Activity } from 'lucide-react';
import type { Recipe } from '../../types';

interface Props {
  recipe: Recipe;
}

export default function NutritionalInfo({ recipe }: Props) {
  // This would typically come from an API or database
  const mockNutrition = {
    calories: Math.floor(Math.random() * 400 + 200),
    protein: Math.floor(Math.random() * 20 + 10),
    carbs: Math.floor(Math.random() * 40 + 20),
    fat: Math.floor(Math.random() * 15 + 5),
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Activity className="h-5 w-5 text-orange-600" />
        Nutritional Information
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-sm text-gray-600">Calories</div>
          <div className="font-semibold">{mockNutrition.calories} kcal</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-sm text-gray-600">Protein</div>
          <div className="font-semibold">{mockNutrition.protein}g</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-sm text-gray-600">Carbs</div>
          <div className="font-semibold">{mockNutrition.carbs}g</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-sm text-gray-600">Fat</div>
          <div className="font-semibold">{mockNutrition.fat}g</div>
        </div>
      </div>
    </div>
  );
}