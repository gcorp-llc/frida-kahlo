type ProductType = {
  id: number;
  name: string;
  price: number;
  discount: number;
  image: string;
};

// تعریف نوع صریح برای props
interface ProductCardProps {
  product: ProductType;
}
export default function ProductCard({ product }: ProductCardProps) {
  const { name, price, discount, image } = product;
  const finalPrice = price - (price * discount) / 100; // محاسبه قیمت نهایی با تخفیف

  return (
    <>
      <div
        dir="rtl"
        className="relative m-2 flex md:w-fit w-full flex-col overflow-hidden rounded-3xl border border-base-300 bg-amber-500 duration-300 hover:scale-105"
      >
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl "
          href="#"
        >
          <img
            className="object-cover duration-500 hover:scale-105 hover:shadow-xl w-full"
            src={image}
            alt={name}
          />
          {discount > 0 && (
            <span className="absolute  top-1 left-0 shadow-lg shadow-red-500  rounded-e-md rounded-s-full bg-red-500 p-2 text-center text-sm font-medium text-white">
              {discount}% تخفیف
            </span>
          )}
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <div className="flex justify-between">
              <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
              </div>
            </div>
          </a>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-gray-800 text-justify me-2">
              متخصص قلب و عروق.فوق تخصص اکوکاردیوگرافی پیشرفته از بیمارستان قلب
            </p>
            <p>
              <br />
            </p>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-xl font-bold text-slate-900">
              <span className="me-1">
                {new Intl.NumberFormat("fa-IR").format(finalPrice)}
              </span>
              تومان
            </p>
            {discount > 0 && (
              <p className=" text-red-900 line-through">
                <span className="me-1">
                  {new Intl.NumberFormat("fa-IR").format(price)}
                </span>
                تومان
              </p>
            )}
          </div>

          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="mx-2">افزودن به سبد خرید</span>
          </a>
        </div>
      </div>
    </>
  );
}
