import { useState } from "react";

export default function Reviews() {
const reviews = [
  {
    name: "Jhon Smith",
    date: "12, Dec 2024",
    rating: 4,
    content: "Quality was not good but it can be better.",
    likes: 25,
  },
  {
    name: "Jemmy Delium",
    date: "14, Dec 2025",
    rating: 5,
    content: "Absolutely fantastic!",
    likes: 55,
  },
  {
    name: "Wilium Heli",
    date: "22, April 2025",
    rating: 5,
    content: "This is one of the best product.",
    likes: 35,
  },
  ];
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      rating: 5,
      headline: "",
      review: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit logic here (e.g., send to API)
      console.log("Form submitted:", formData);
    };

  return (
    <>
      <div className="p-4 md:p-8 lg:p-12 bg-gray-100">
        {/* Customer Reviews Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full md:max-w-sm">
          <h3 className="text-xl font-bold mb-2">Customer reviews</h3>
          <div className="flex items-center">
            <div className="text-4xl font-bold text-yellow-500">4.7</div>
            <div className="ml-2 text-gray-600">out of 5</div>
          </div>
          <div className="text-gray-500">40 customer ratings</div>
          <div className="mt-4 space-y-2">
            {[
              { stars: 5, percent: 84 },
              { stars: 4, percent: 9 },
              { stars: 3, percent: 4 },
              { stars: 2, percent: 2 },
              { stars: 1, percent: 1 },
            ].map((item) => (
              <div key={item.stars} className="flex items-center">
                <span className="w-8">{item.stars} star</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mx-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
                <span className="text-gray-600">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4 mb-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <img
                  src={`https://i.pravatar.cc/40?img=${index + 1}`}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>
              <p className="mb-2">{review.content}</p>
              <div className="flex items-center text-yellow-500">
                {"⭐".repeat(review.rating)}
              </div>
              <div className="flex items-center justify-between text-gray-500 mt-2">
                <span className="text-sm">{review.likes} Likes</span>
                <button className="text-blue-500 text-sm">Reply</button>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-lg">
          <h3 className="text-xl font-bold mb-4">Write a Review</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <span className="mr-2">Click on star to review:</span>
              <div className="flex text-yellow-500 cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`${
                      formData.rating >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
            </div>
            <input
              type="text"
              name="headline"
              placeholder="Type review headline"
              value={formData.headline}
              onChange={handleChange}
              className="p-2 border rounded w-full mt-4"
              required
            />
            <textarea
              name="review"
              placeholder="Write your Review"
              value={formData.review}
              onChange={handleChange}
              className="p-2 border rounded w-full mt-4"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

