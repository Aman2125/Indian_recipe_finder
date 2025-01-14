import React, { useState } from 'react';
import IngredientSearch from '../components/IngredientSearch';
import CategoryFilter from '../components/CategoryFilter';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CulturalBackground from '../components/CulturalBackground';
import { recipes } from '../data/recipes/index';
import { filterRecipes } from '../utils/recipeFilters';
import type { Ingredient, RecipeFilters } from '../types';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<RecipeFilters>({
    sortBy: 'cookingTime',
    order: 'asc'
  });
  const navigate = useNavigate();

  const filteredRecipes = filterRecipes(recipes, searchTerm, selectedIngredients, filters);

  return (
    <div className="min-h-screen bg-orange-50">
      <CulturalBackground />
      <Header />

      <main className="relative max-w-7xl mx-auto px-4 py-12">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearch={setSearchTerm}
          recipes={recipes}
        />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What ingredients do you have?
          </h2>
          <IngredientSearch onIngredientsChange={setSelectedIngredients} />
        </section>

        <section className="mb-8">
          <CategoryFilter filters={filters} onChange={setFilters} />
        </section>

        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No recipes found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedIngredients([]);
                setFilters({ sortBy: 'cookingTime', order: 'asc' });
              }}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;