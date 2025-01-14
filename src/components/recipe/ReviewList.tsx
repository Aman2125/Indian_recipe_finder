import React from 'react';
import Rating from './Rating';
import { Review } from '../../types';

interface Props {
  reviews: Review[];
}

export default function ReviewList({ reviews }: Props) {
  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Rating value={review.rating} readonly />
            <span className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}