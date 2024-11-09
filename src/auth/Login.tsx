import { Link } from "react-router-dom";

export default function Login() {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-neutral  p-4">
          <div className="w-full max-w-4xl bg-slate-200 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-right">
                ورود
              </h2>
              <p className="text-gray-600 mb-6 text-right">
                به ما بپیوندید و از مزایای انحصاری بهره مند شوید. به راحتی با
                حساب های اجتماعی وارد شوید  یا فرم زیر را پر کنید.
              </p>

              <div className="text-center font-medium text-gray-500 mb-4">
                ورود با شبکه های اجتماعی یا
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
                <button className="btn btn-ghost btn-secondary">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500">Google</span>
                </button>
                <button className="btn btn-ghost btn-secondary">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500">Facebook</span>
                </button>
              </div>

              <div className="flex flex-col gap-4 mb-6" dir="rtl">
                <input
                  type="text"
                  placeholder="ایمیل یا نام کاربری"
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className=" my-2 btn btn-success btn-block">ورود </button>
              <Link to={"/register"} className="btn btn-ghost">
                مشاهده فرم ثبت نام
              </Link>
            </div>

            {/* تصویر کناری */}
            <div className="hidden md:flex md:w-1/2 bg-blue-50 justify-center items-center">
              <img
                src="/frida-kahol.jpg"
                alt="login"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </>
    );
}