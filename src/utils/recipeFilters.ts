import { Recipe, RecipeFilters, Ingredient } from '../types';

// Fuzzy search to match similar terms
export function fuzzyMatch(text: string, query: string): boolean {
  text = text.toLowerCase();
  query = query.toLowerCase();
  
  let i = 0;
  let j = 0;
  
  while (i < text.length && j < query.length) {
    if (text[i] === query[j]) {
      j++;
    }
    i++;
  }
  
  return j === query.length;
}

export function filterRecipes(
  recipes: Recipe[],
  searchTerm: string,
  selectedIngredients: Ingredient[],
  filters: RecipeFilters
): Recipe[] {
  return recipes
    .filter(recipe => {
      // Search by name with fuzzy matching
      const matchesSearch = searchTerm === '' || 
        fuzzyMatch(recipe.title, searchTerm) ||
        (recipe.hindiTitle && fuzzyMatch(recipe.hindiTitle, searchTerm));

      const matchesIngredients = selectedIngredients.length === 0 ||
        selectedIngredients.every(ing =>
          recipe.ingredients.includes(ing.name)
        );
      
      const matchesRegion = !filters.region || recipe.region === filters.region;
      const matchesCategory = !filters.category || recipe.category === filters.category;
      const matchesVeg = !filters.isVegetarian || recipe.isVegetarian;
      
      return matchesSearch && matchesIngredients && matchesRegion && matchesCategory && matchesVeg;
    })
    .sort((a, b) => {
      const modifier = filters.order === 'asc' ? 1 : -1;
      if (filters.sortBy === 'difficulty') {
        const difficultyMap = { easy: 0, medium: 1, hard: 2 };
        return (difficultyMap[a.difficulty] - difficultyMap[b.difficulty]) * modifier;
      }
      return (a[filters.sortBy] - b[filters.sortBy]) * modifier;
    });
}