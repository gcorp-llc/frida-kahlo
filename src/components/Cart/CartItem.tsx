export default function CartItem() {
    return (
      <>
        <div className="card card-side bg-base-100 shadow-xl relative my-2">
          <button className="btn text-white absolute top-0 right-0  opacity-90">
            <div className="badge ">900،000</div>
            تومان
          </button>
          <figure className="md:w-4/12 w-full">
            <img
              className="p-3 rounded-3xl shadow-sm "
              src="/img/product/coffee-2.avif"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <div className="flex items-center justify-between w-full">
              <p className="text-base font-black leading-none text-gray-50">
                Luxe card holder
              </p>

              <select className="select select-warning  max-w-xs">
                <option disabled selected>
                  1 عدد
                </option>
                <option> 2 عدد</option>
                <option>5 عدد</option>
                <option>10 عدد</option>
              </select>
            </div>
            <div className="card-actions flex  justify-end  pt-5">
              <button className="btn btn-primary self-end">حذف</button>
            </div>
          </div>
        </div>
      </>
    );
}