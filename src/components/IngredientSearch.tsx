import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Ingredient } from '../types';
import { ingredients } from '../data/ingredients';

interface Props {
  onIngredientsChange: (ingredients: Ingredient[]) => void;
}

export default function IngredientSearch({ onIngredientsChange }: Props) {
  const [search, setSearch] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);

  const filteredIngredients = ingredients.filter(
    ing => (ing.name.toLowerCase().includes(search.toLowerCase()) ||
           ing.hindiName?.toLowerCase().includes(search.toLowerCase())) &&
    !selectedIngredients.find(s => s.id === ing.id)
  );

  const handleSelect = (ingredient: Ingredient) => {
    const updated = [...selectedIngredients, ingredient];
    setSelectedIngredients(updated);
    onIngredientsChange(updated);
    setSearch('');
  };

  const handleRemove = (ingredient: Ingredient) => {
    const updated = selectedIngredients.filter(i => i.id !== ingredient.id);
    setSelectedIngredients(updated);
    onIngredientsChange(updated);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search ingredients (English or Hindi)..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        {search && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
            {filteredIngredients.map(ingredient => (
              <button
                key={ingredient.id}
                onClick={() => handleSelect(ingredient)}
                className="w-full px-4 py-2 text-left hover:bg-orange-50 first:rounded-t-lg last:rounded-b-lg"
              >
                <span>{ingredient.name}</span>
                {ingredient.hindiName && (
                  <span className="ml-2 text-gray-500">({ingredient.hindiName})</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {selectedIngredients.map(ingredient => (
          <span
            key={ingredient.id}
            className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full flex items-center gap-2"
          >
            {ingredient.name}
            <button
              onClick={() => handleRemove(ingredient)}
              className="hover:text-orange-600"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}