export default function CouponCheck() {
    return (
        <>
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
                          <h2 className="text-xl font-semibold mb-4">کد تخفیف</h2>
                          <input
                            type="text"
                            placeholder="Coupon code"
                            className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                          />
                          <button className="w-full btn btn-success py-2 rounded-lg">
                            افزودن کپن تخفیف
                          </button>
                        </div>
        </>
    )
}