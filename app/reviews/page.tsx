'use client';
import { useEffect, useState } from 'react';

type Review = {
  id: string;
  user: string;
  message: string;
  rating: number;
};

const dummyReviews: Review[] = [
  { id: '1', user: 'Ali Raza', message: 'Great service!', rating: 5 },
  { id: '2', user: 'Jane Smith', message: 'Not satisfied.', rating: 2 }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(dummyReviews);
  }, []);

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow p-5 border space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-medium">{review.user}</p>
                <p className="text-sm text-gray-600 mt-1">Rating: <span className="font-semibold">{review.rating} ★</span></p>
              </div>
              <button onClick={() => deleteReview(review.id)} className="text-red-500 text-sm hover:underline">Delete</button>
            </div>
            <p className="text-gray-700">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}