export default function ShippingDetails() {
    return (
      <>
        <div className="bg-amber-600 p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-xl text-gray-800 mb-4">تحویل </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold">نشانی تحویل </p>
              <div className="bg-slate-200 p-4 rounded-lg border border-gray-200 mt-2">
                <p>شیراز</p>
                <p>2707 Davis Avenue</p>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg border border-gray-200">
              <p className="font-semibold">افزودن آدرس</p>
              <p>لطفا آدرس جدید را وارد نمایید</p>
              <textarea
                className="textarea bg-slate-300  w-full mt-2"
                placeholder="Bio"
              ></textarea>
              <button className="btn bg-gray-800 mt-2 w-full">
                ثبت آدرس
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 space-x-4">
              <img
                className="m-3 w-1/3"
                src="/img/delivery/fast.png"
                alt="DHL"
              />
              <div>
                <p className="">ارسال سریع</p>
                <p>زمان انتظار: 25 روز</p>
                <p>$10.99</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 space-x-4">
              <img
                className="m-3 w-1/3"
                src="/img/delivery/normal.png"
                alt="DHL"
              />
              <div>
                <p className="">ارسال معمولی</p>
                <p>زمان انتظار: 5 روز</p>
                <p>$10.99</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}