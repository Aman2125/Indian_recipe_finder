import { Recipe } from '../../types';
import { northIndianRecipes } from './north-indian';
import { southIndianRecipes } from './south-indian';
import { eastIndianRecipes } from './east-indian';
import { westIndianRecipes } from './west-indian';
import { centralIndianRecipes } from './central-indian';

export const recipes: Recipe[] = [
  ...northIndianRecipes,
  ...southIndianRecipes,
  ...eastIndianRecipes,
  ...westIndianRecipes,
  ...centralIndianRecipes
];