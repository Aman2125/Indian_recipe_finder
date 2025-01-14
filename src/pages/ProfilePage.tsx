import React from 'react';
import { Link } from 'react-router-dom';
import { User, Heart, Clock, Settings, LogOut } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  
  if (!user) {
    return null; // Protected route will handle redirect
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              
              <nav className="space-y-2">
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-2 text-orange-600 bg-orange-50 rounded-lg"
                >
                  <User className="h-5 w-5" />
                  Profile
                </Link>
                <Link
                  to="/profile/saved"
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
                >
                  <Heart className="h-5 w-5" />
                  Saved Recipes
                </Link>
                <Link
                  to="/profile/history"
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
                >
                  <Clock className="h-5 w-5" />
                  History
                </Link>
                <Link
                  to="/profile/settings"
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Profile Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-semibold text-2xl text-orange-600">0</div>
                  <div className="text-gray-600">Saved Recipes</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-semibold text-2xl text-orange-600">0</div>
                  <div className="text-gray-600">Reviews</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-semibold text-2xl text-orange-600">{user.joinedDate}</div>
                  <div className="text-gray-600">Joined</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Recent Activity</h4>
                  <div className="bg-gray-50 p-4 rounded-lg text-gray-600">
                    No recent activity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}