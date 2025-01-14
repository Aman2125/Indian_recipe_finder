import React from 'react';
import { Lightbulb } from 'lucide-react';
import type { Recipe } from '../../types';

interface Props {
  recipe: Recipe;
}

export default function CookingTips({ recipe }: Props) {
  // These would typically come from an API or database
  const tips = [
    'Prep all ingredients before starting',
    'Keep heat at medium-high for best results',
    'Let spices bloom in oil for more flavor',
    'Adjust seasoning to taste at the end',
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-orange-600" />
        Cooking Tips
      </h3>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="h-2 w-2 bg-orange-400 rounded-full mt-2" />
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}