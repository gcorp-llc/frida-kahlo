export default function Cart() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="sm:flex shadow-md my-10">
          <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                <p className="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">
                    ,000
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                <p className="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">
                    ,000
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div
            id="summary"
            className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
              
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

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
