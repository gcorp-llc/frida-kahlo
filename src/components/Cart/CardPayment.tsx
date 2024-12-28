import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
export default function CardPayment() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-80 md:w-96"
      >
        <SwiperSlide>
          <div className="card bg-base-100 image-full w-80 md:w-fit shadow-xl">
            <figure>
              <img src="/img/card/blu.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p className="text-lg font-semibold">**** **** **** 2137</p>
              <div className="card-actions justify-end">
                <button className="btn bg-amber-500 text-gray-800 rounded-3xl w-full">
                  خرید
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 image-full w-80 md:w-fit shadow-xl ">
            <figure>
              <img src="/img/card/jamara.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p className="text-lg font-semibold">**** **** **** 2137</p>
              <div className="card-actions justify-end">
                <button className="btn bg-amber-500 text-gray-800 rounded-3xl w-full">
                  خرید
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
