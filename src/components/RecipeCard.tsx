import React from 'react';
import { Clock, ChefHat, Users } from 'lucide-react';
import { Recipe } from '../types';
import ImageWithFallback from './ImageWithFallback';

interface Props {
  recipe: Recipe;
  onClick: () => void;
}

export default function RecipeCard({ recipe, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
    >
      <ImageWithFallback
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{recipe.title}</h3>
          {recipe.hindiTitle && (
            <span className="text-gray-600">{recipe.hindiTitle}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookingTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span className="capitalize">{recipe.difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Serves {recipe.servings}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
            {recipe.region} Indian
          </span>
          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
            {recipe.category}
          </span>
          {recipe.isVegetarian && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Vegetarian
            </span>
          )}
        </div>
      </div>
    </div>
  );
}