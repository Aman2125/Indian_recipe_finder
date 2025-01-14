import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { Review } from '../../types';

interface Props {
  recipeId: string;
}

export default function Reviews({ recipeId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleSubmitReview = (review: { rating: number; comment: string }) => {
    const newReview: Review = {
      ...review,
      date: new Date().toISOString(),
      recipeId
    };
    setReviews([newReview, ...reviews]);
  };

  const averageRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-orange-600" />
        Reviews {reviews.length > 0 && `(${averageRating}★)`}
      </h3>

      <div className="mb-8">
        <ReviewForm onSubmit={handleSubmitReview} />
      </div>

      {reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p className="text-gray-500 text-center py-4">
          Be the first to review this recipe!
        </p>
      )}
    </div>
  );
}