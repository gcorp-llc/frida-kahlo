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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/107x107"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Alper Kamu
                    </span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 md:p-8 lg:p-12 ">
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
              rows={4}
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
