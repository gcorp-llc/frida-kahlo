export default function CalculatingCosts() {
    return (
      <>
        <div className="bg-base-100 my-3 p-6 rounded-2xl shadow-lg">
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>هزینه سفارش</p>
              <button className="pe-2 text-white">
                <div className="badge badge-secondary me-2">8000,222</div>
                تومان
              </button>
            </div>
            <div className="flex justify-between">
              <p>مالیات بر ارزش افزوده</p>
              <button className="pe-2 text-white">
                <div className="badge badge-secondary me-2">10%</div>
               درصد
              </button>
            </div>
            <div className="flex justify-between">
              <p>هزینه ارسال</p>
              <button className="pe-2 text-white">
                <div className="badge badge-secondary me-2">630,222</div>
                تومان
              </button>
            </div>
            <div className="flex justify-between">
              <p>میزان تخفیف</p>
              <button className="pe-2 text-white">
                <div className="badge badge-secondary me-2">0</div>
                تومان
              </button>
            </div>
            <div className="divider">جمع فاکتور</div>
            <div className="flex justify-between">
              <p>هزینه تمام شده</p>

              <button className="btn text-white">
                <div className="badge badge-secondary">9000,222</div>
                تومان
              </button>
            </div>
          </div>
        </div>
      </>
    );
}