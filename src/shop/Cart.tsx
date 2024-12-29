
import CalculatingCosts from "../components/Cart/CalculatingCosts";
import CardPayment from "../components/Cart/CardPayment";
import CartItem from "../components/Cart/CartItem";
import CouponCheck from "../components/Cart/CouponCheck";
import ShippingDetails from "../components/Cart/ShippingDetails";

export default function Cart() {
  return (
    <>
      <div className="container mx-auto mt-10" dir="rtl">
        <div className="sm:flex shadow-md my-10">
          <div className=" w-full  sm:w-3/4 rounded-2xl bg-amber-500 md:p-10 p-2">
            <div className="flex justify-between pb-8">
              <h1 className="text-gray-900 text-2xl">سبد خرید</h1>
              <h2 className="text-2xl text-white">3 گزینه</h2>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />

            {/* Order Summary and Coupon Section */}
          <ShippingDetails/>
          </div>

          <div
            id="summary"
            className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
          >
            <div className="divider">
              <h1 className="text-amber-500 text-2xl pb-3">مجموعه خرید</h1>
            </div>
          <CalculatingCosts/>

            <CouponCheck/>

            <div className="bg-base-100 my-3 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mt-6 mb-4">روش پرداخت</h3>
              <div className="">
                <CardPayment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
