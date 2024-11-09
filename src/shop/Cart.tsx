export default function Cart() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Payment and Shipping Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Information Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Post Code"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-4">
              Your Saved Cards
            </h3>
            <div className="flex space-x-4">
              <div className="bg-blue-600 text-white p-4 rounded-lg w-1/2">
                <p className="text-sm">Card Number</p>
                <p className="text-lg font-semibold">**** **** **** 2137</p>
                <p className="text-sm">VALID THRU 8/12</p>
                <p className="text-sm">CARD HOLDER Mushaorff Chy</p>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg w-1/2">
                <p className="text-sm">Card Number</p>
                <p className="text-lg font-semibold">**** **** **** 7616</p>
                <p className="text-sm">VALID THRU 5/14</p>
                <p className="text-sm">CARD HOLDER Naimur Rahman</p>
              </div>
            </div>
          </div>

          {/* Order Summary and Coupon Section */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Payment Information
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Trendy Ladies Pants</p>
                  <p>$59.99</p>
                </div>
                <div className="flex justify-between">
                  <p>Men’s Sendo T-shirt</p>
                  <p>$80.99</p>
                </div>
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$140.98</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping Cost</p>
                  <p>$10.99</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount</p>
                  <p>-$5.00</p>
                </div>
                <div className="flex justify-between font-semibold">
                  <p>Total Amount</p>
                  <p>$124.99</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
                Get Started
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Coupon Code</h2>
              <input
                type="text"
                placeholder="Coupon code"
                className="border border-gray-300 p-2 rounded-lg w-full mb-4"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Shipping Details Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold">Same as Personal</p>
              <p>New York, USA</p>
              <p>2707 Davis Avenue</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold">Register Now</p>
              <p>Create an account now to have multiple addresses.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 space-x-4">
              <img src="https://via.placeholder.com/50" alt="FedEx" />
              <div>
                <p className="font-semibold">FedEx Fast Delivery</p>
                <p>Delivery: Friday, 25</p>
                <p>$10.99</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 space-x-4">
              <img src="https://via.placeholder.com/50" alt="DHL" />
              <div>
                <p className="font-semibold">DHL Fast Delivery</p>
                <p>Delivery: Sunday, 27</p>
                <p>$10.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
