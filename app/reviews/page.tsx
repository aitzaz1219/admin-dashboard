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
      <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="border rounded bg-white p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{review.user}</p>
                <p className="text-sm text-gray-600">Rating: {review.rating} ★</p>
                <p className="mt-1">{review.message}</p>
              </div>
              <button onClick={() => deleteReview(review.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}