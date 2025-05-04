import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

interface Review {
  id: number;
  rating: number;
  comment: string;
  user: {
    name: string;
  };
  book: {
    title: string;
  };
}

export default function ReviewsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/reviews");
      return res.data as Review[];
    },
  });

  if (isLoading) return <div className="p-4">Loading reviews...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error loading reviews</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Book Reviews</h1>

      {data?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No reviews yet</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Be the first to review!
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {data?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
