import { Link } from "react-router-dom";

export default function Hero() {
    return (
      <>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/img/coffee-shop.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">فریدا کالو</h1>
              <p className="mb-5">خوش آمدید به کافه فریدا کال</p>
              <button className="btn btn-primary">سفارش روز</button>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 md:my-[-95px] mt-[-95px]">
          <div
            className="hero-content flex-col lg:flex-row-reverse text-justify px-3"
            dir="rtl"
          >
            <img
              src="/frida-kahol.jpg"
              className="max-w-lg  m-3 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-bold">
                چگونه فریدا کالو به محبوب‌ترین نقاش زن تاریخ تبدیل شد؟
              </h1>
              <p className="py-6">
                فریدا رویای پزشک‌ شدن در سر داشت و در کلاس‌های زیست‌شناسی،
                جانورشناسی و کالبدشناسی شرکت می‌کرد. او علم و دانشی که در این
                دوران به‌دست آورد را بعدها به پرتره‌هایش تزریق کرد تا
                واقع‌گرایانه‌تر شوند. او همچنین علاقه‌ی شدیدی به فلسفه داشت و
                همواره می‌خواست با چیزهایی که می‌داند، فخر بفروشد. «هایدن هررا»،
                نویسنده‌ی کتاب «فریدا: زندگی‌نامه‌ای از فریدا کالو» می‌گوید او
                جلوی دوستش «آلخاندرو گومز آریاس» گریه می‌کرد تا بتواند یکی از
                آثار فیلسوف آلمانی «اسوالد اشپنگلر» را قرض بگیرد و در اتوبوس
                بخواند.
              </p>
              <Link to={"/about"} className="btn btn-primary">بیشتر بخوانید</Link>
            
            </div>
          </div>
        </div>
      </>
    );
}