import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Recipe } from '../types';
import { fuzzyMatch } from '../utils/recipeFilters';

interface Props {
  searchTerm: string;
  onSearch: (term: string) => void;
  recipes: Recipe[];
}

export default function SearchBar({ searchTerm, onSearch, recipes }: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const matches = recipes
        .filter(recipe => 
          fuzzyMatch(recipe.title, searchTerm) ||
          (recipe.hindiTitle && fuzzyMatch(recipe.hindiTitle, searchTerm))
        )
        .slice(0, 5);
      setSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, recipes]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={() => searchTerm.length >= 2 && setShowSuggestions(true)}
          placeholder="Search recipes by name..."
          className="w-full pl-12 pr-10 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white shadow-sm"
        />
        {searchTerm && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100">
          {suggestions.map(recipe => (
            <button
              key={recipe.id}
              onClick={() => {
                onSearch(recipe.title);
                setShowSuggestions(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-orange-50 flex items-center justify-between"
            >
              <span>{recipe.title}</span>
              {recipe.hindiTitle && (
                <span className="text-gray-500 text-sm">{recipe.hindiTitle}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}