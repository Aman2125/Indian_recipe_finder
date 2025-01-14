import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import type { Recipe } from '../../types';

interface Props {
  recipes: Recipe[];
}

export default function RelatedRecipes({ recipes }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-orange-600" />
        Related Recipes
      </h3>
      <div className="space-y-4">
        {recipes.map(recipe => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="block group"
          >
            <div className="flex gap-4 items-center">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <h4 className="font-medium group-hover:text-orange-600 transition-colors">
                  {recipe.title}
                </h4>
                <p className="text-sm text-gray-600">{recipe.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}