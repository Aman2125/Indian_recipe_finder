import React from 'react';
import { X, Clock, ChefHat, Users } from 'lucide-react';
import { Recipe } from '../types';

interface Props {
  recipe: Recipe;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">{recipe.title}</h2>
            {recipe.hindiTitle && (
              <span className="text-xl text-gray-600">{recipe.hindiTitle}</span>
            )}
          </div>

          <p className="text-gray-600 mb-6">{recipe.description}</p>
          
          {recipe.culturalNote && (
            <div className="mb-6 p-4 bg-orange-50 rounded-lg">
              <p className="text-orange-800">{recipe.culturalNote}</p>
            </div>
          )}
          
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-600" />
              <span>{recipe.cookingTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-gray-600" />
              <span className="capitalize">{recipe.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-600" />
              <span>Serves {recipe.servings}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Instructions</h3>
            <ol className="list-decimal list-inside space-y-3">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="pl-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}