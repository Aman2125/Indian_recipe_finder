import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Users, Utensils } from 'lucide-react';
import { recipes } from '../data/recipes/index';
import NutritionalInfo from '../components/recipe/NutritionalInfo';
import CookingTips from '../components/recipe/CookingTips';
import RelatedRecipes from '../components/recipe/RelatedRecipes';
import Reviews from '../components/recipe/Reviews';

export default function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const relatedRecipes = recipes
    .filter(r => r.region === recipe.region && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Recipes
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recipe header section */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{recipe.title}</h1>
              {recipe.hindiTitle && (
                <h2 className="text-2xl text-gray-600 mt-2">{recipe.hindiTitle}</h2>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                {recipe.region} Indian
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                {recipe.category}
              </span>
              {recipe.isVegetarian && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                  Vegetarian
                </span>
              )}
            </div>

            <p className="text-lg text-gray-700">{recipe.description}</p>

            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Clock className="h-6 w-6 text-orange-600 mb-2" />
                <span className="text-sm text-gray-600">Time</span>
                <span className="font-semibold">{recipe.cookingTime} min</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <ChefHat className="h-6 w-6 text-orange-600 mb-2" />
                <span className="text-sm text-gray-600">Difficulty</span>
                <span className="font-semibold capitalize">{recipe.difficulty}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="h-6 w-6 text-orange-600 mb-2" />
                <span className="text-sm text-gray-600">Servings</span>
                <span className="font-semibold">{recipe.servings}</span>
              </div>
            </div>

            {recipe.culturalNote && (
              <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
                <p className="text-orange-800">{recipe.culturalNote}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Recipe content sections */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Utensils className="h-6 w-6 text-orange-600" />
                Ingredients
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <span className="h-2 w-2 bg-orange-400 rounded-full" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <Reviews recipeId={recipe.id} />
          </div>

          <div className="space-y-8">
            <NutritionalInfo recipe={recipe} />
            <CookingTips recipe={recipe} />
            <RelatedRecipes recipes={relatedRecipes} />
          </div>
        </div>
      </div>
    </div>
  );
}