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
      </>
    );
}