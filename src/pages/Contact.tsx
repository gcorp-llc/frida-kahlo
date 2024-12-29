export default function Contact() {
  return (
    <>
      <section className="body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 bg-amber-500 opacity-85"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.69414356148!2d52.54400260694076!3d29.623634309463423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb20d0c8c85f2e3%3A0x6d0c5b8aef6b4cf6!2z2LTbjNix2KfYstiMINin2LPYqtin2YYg2YHYp9ix2LPYjCDYp9uM2LHYp9mG!5e0!3m2!1sfa!2s!4v1732876361893!5m2!1sfa!2s"
            ></iframe>

            <div className="bg-amber-500 text-base-100 relative flex flex-wrap py-6 rounded-xl shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-base-100 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-base-100">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold tracking-widest text-base-100 text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:hosseinradvictor@gmail.com"
                  className="text-base-100 leading-relaxed"
                >
                  hosseinradvictor@gmail.com
                </a>
                <h2 className="title-font font-semibold tracking-widest text-xs mt-4 text-base-100">
                  PHONE
                </h2>
                <a
                  href="tel:09370290168"
                  className="leading-relaxed text-base-100"
                >
                  09370290168
                </a>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            dir="rtl"
          >
            <h2 className=" text-lg mb-1 font-medium title-font">
              ارتباط با ما
            </h2>
            <p className="leading-relaxed mb-5 ">
              شما میتوانید از طریق فرم زیر با ما در ارتباط باشید
            </p>
            <div className="relative mb-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">نام </span>
                </div>
                <input
                  type="text"
                  placeholder="نام خود را وارد نمایید"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="relative mb-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">ایمیل</span>
                </div>
                <input
                  type="text"
                  placeholder="ایمیل خود را وارد نمایید"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="relative mb-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">پیام</span>
                 
                </div>
                <textarea
                  className="textarea textarea-bordered h-32"
                  placeholder="متن پیام خود را وارد نمایید"
                ></textarea>
               
              </label>
            </div>
            <button className="btn btn-success">ارسال</button>
          
          </div>
        </div>
      </section>
    </>
  );
}
