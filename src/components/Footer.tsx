import React from 'react';

export default function Footer() {
  const regions = ['North Indian', 'South Indian', 'East Indian', 'West Indian', 'Central Indian'];
  const categories = ['Main Course', 'Breakfast', 'Street Food', 'Desserts', 'Snacks'];

  return (
    <footer className="bg-orange-900 text-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Regional Cuisines</h3>
            <ul className="space-y-2">
              {regions.map(region => (
                <li key={region} className="hover:text-orange-300 cursor-pointer">
                  {region} Cuisine
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category} className="hover:text-orange-300 cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-orange-200 mb-4">
              Discover the rich and diverse flavors of Indian cuisine through our carefully curated collection of authentic recipes.
            </p>
            <p className="text-orange-200">
              From traditional family recipes to modern interpretations, explore the culinary heritage of India.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-orange-800 text-center text-orange-300">
          <p>© 2024 Indian Recipe Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}