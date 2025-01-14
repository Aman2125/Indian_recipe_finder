import React from 'react';
import { Recipe, RecipeFilters } from '../types';

interface Props {
  filters: RecipeFilters;
  onChange: (filters: RecipeFilters) => void;
}

export default function CategoryFilter({ filters, onChange }: Props) {
  const regions: Recipe['region'][] = ['North', 'South', 'East', 'West', 'Central'];
  const categories: Recipe['category'][] = [
    'Main Course',
    'Breakfast',
    'Street Food',
    'Dessert',
    'Snack',
    'Rice',
    'Bread'
  ];

  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={filters.region || ''}
        onChange={(e) => onChange({
          ...filters,
          region: e.target.value as Recipe['region'] || undefined
        })}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="">All Regions</option>
        {regions.map(region => (
          <option key={region} value={region}>{region} Indian</option>
        ))}
      </select>

      <select
        value={filters.category || ''}
        onChange={(e) => onChange({
          ...filters,
          category: e.target.value as Recipe['category'] || undefined
        })}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        value={filters.sortBy}
        onChange={(e) => onChange({
          ...filters,
          sortBy: e.target.value as RecipeFilters['sortBy']
        })}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="cookingTime">Cooking Time</option>
        <option value="difficulty">Difficulty</option>
      </select>

      <select
        value={filters.order}
        onChange={(e) => onChange({
          ...filters,
          order: e.target.value as RecipeFilters['order']
        })}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.isVegetarian}
          onChange={(e) => onChange({
            ...filters,
            isVegetarian: e.target.checked || undefined
          })}
          className="rounded border-gray-300"
        />
        Vegetarian Only
      </label>
    </div>
  );
}