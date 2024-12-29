export default function CouponCheck() {
    return (
      <>
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">کد تخفیف</h2>
          <input
            type="text"
            placeholder="کد تخفیف خود را وارد نمایید"
            className="input input-bordered w-full my-3"
          />
          <button className="w-full btn btn-success py-2 rounded-lg">
            افزودن کد تخفیف
          </button>
        </div>
      </>
    );
}