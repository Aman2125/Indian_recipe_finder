import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="relative bg-gradient-to-r from-orange-600 to-orange-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505253668822-42074d58a7c6?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-3">
            <UtensilsCrossed className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Indian Recipe Finder</h1>
          </Link>
          
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <Link 
                  to="/profile" 
                  className="flex items-center gap-2 text-white hover:text-orange-100"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </Link>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link 
                  to="/login"
                  className="px-4 py-2 text-white hover:text-orange-100"
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-orange-50"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-orange-50 max-w-2xl mx-auto">
            Discover authentic recipes from every corner of India, from street food delights to royal cuisines
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent" />
      </div>
    </header>
  );
}