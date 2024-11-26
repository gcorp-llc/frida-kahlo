
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation} from "swiper/modules";

import "swiper/css";
import { Link } from "react-router-dom";
export default function MenuItems() {
  return (
    <>
      <div className="bg-neutral pt-[110px] pb-3">
        <Swiper
          spaceBetween={20}
          // slidesPerView={4}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper p-5 rounded-lg"
        >
          <SwiperSlide>
            <Link to={"/"}>
              <div className="card glass opacity-60">
                <figure className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M109 64.5c-4.1 0-7.8 1.6-10.7 4.1-.3-4.8-.8-8.8-1.1-11.4-.1-.9-.2-2-.3-2.3 0-.2 0-.4-.1-.6C95.5 44.4 61 43.9 54 43.9c-7.2 0-42.8.5-43 10.9 0 0 0 .1 0 .1 0 .3-.1 1.3-.3 2.3C9.6 66.7 5.9 95.7 21.2 113c7.6 8.6 18.6 12.9 32.8 12.9s25.2-4.3 32.8-12.9c5.5-6.3 8.6-14.1 10.2-22 2.9 3.4 7.2 5.5 12 5.5 8.8 0 16-7.2 16-16S117.8 64.5 109 64.5zM54 49.9c20.8 0 33.2 3 36.4 5-3.3 2-15.7 5-36.4 5s-33.2-3-36.4-5C20.8 52.9 33.2 49.9 54 49.9zM82.3 109c-6.4 7.2-15.9 10.9-28.3 10.9s-21.9-3.7-28.3-10.9c-12.2-13.8-10.6-37.3-9.4-48.2 10.3 4.7 32.2 5 37.7 5s27.4-.3 37.7-5C92.9 71.8 94.5 95.2 82.3 109zM109 90.5c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10S114.5 90.5 109 90.5zM19.4 37.5c-.8 0-1.5-.3-2.1-.9-7.7-7.7-7.7-20.2 0-27.9C21 5 25.9 3 31 3c8 0 14.1 5.2 19.4 9.8C58 19.4 62 22.3 68 16.2c.1-.1.1-.1.2-.2l4.9-4.2c3.8-3.2 9.4-3.5 13.5-.7l3.8 2.6c2.2 1.5 4.8 2.3 7.5 2.3 0 0 0 0 0 0 1.6 0 3 1.3 3 3 0 1.7-1.3 3-3 3 0 0-.1 0-.1 0-3.9 0-7.6-1.1-10.8-3.3l-3.8-2.6c-1.9-1.3-4.5-1.2-6.3.3l-4.8 4.1c-10.2 10.1-18.8 2.8-25.6-3.1C41.7 13.3 36.8 9 31 9c-3.5 0-6.9 1.4-9.5 4-5.3 5.3-5.3 14 0 19.4 1.2 1.2 1.2 3.1 0 4.2C20.9 37.2 20.2 37.5 19.4 37.5zM123 22h-10c-1.7 0-3-1.3-3-3s1.3-3 3-3h10c1.7 0 3 1.3 3 3S124.7 22 123 22z"
                      fill="#FFB600"
                    />
                  </svg>
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">قهوه و چای</h2>
                  <p className="text-center">نوشیدنی هاس گرم</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="card glass opacity-60">
                <figure className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M35.15625 2.0117188C34.60225 1.9267188 34.098719 2.29875 34.011719 2.84375L33.498047 6.0703125C33.004047 6.0273125 32.505 6 32 6C23.367 6 16.134719 12.516 15.136719 21L13.720703 21C12.858703 21 12.094266 21.548187 11.822266 22.367188L10.490234 26.367188C10.287234 26.975188 10.388672 27.649922 10.763672 28.169922C11.139672 28.689922 11.745719 29 12.386719 29L15.117188 29L19.011719 60.123047C19.074719 60.624047 19.499906 61 20.003906 61L43.945312 61C44.449312 61 44.8745 60.625 44.9375 60.125L48.880859 29L51.611328 29C52.253328 29 52.859375 28.689922 53.234375 28.169922C53.609375 27.649922 53.712766 26.976187 53.509766 26.367188L52.177734 22.367188C51.904734 21.549187 51.142297 21 50.279297 21L48.863281 21C48.003281 13.686 42.506563 7.8460938 35.476562 6.3710938L35.986328 3.15625C36.073328 2.61125 35.70125 2.0987188 35.15625 2.0117188 z M 32 8C32.399 8 32.792594 8.0275937 33.183594 8.0585938L31.123047 21.003906L17.164062 21.013672C18.145063 13.637672 24.46 8 32 8 z M 35.162109 8.3476562C41.242109 9.6656562 45.989031 14.692 46.832031 21L46 21C45.447 21 45 21.448 45 22C45 22.552 45.447 23 46 23L47.949219 23L50.279297 23L51.611328 27L12.388672 27L13.720703 23L15.927734 23C15.952734 23.002 15.975953 23.015625 16.001953 23.015625L31.818359 23.001953C31.818359 23.001953 31.820312 23.003906 31.820312 23.003906C31.874312 23.011906 31.926516 23.015625 31.978516 23.015625C32.003516 23.015625 32.025781 23.003953 32.050781 23.001953L34.001953 23C34.553953 23 35 22.550047 35 21.998047C35 21.446047 34.552 21 34 21L33.998047 21L33.148438 21.001953L35.162109 8.3476562 z M 38 21C37.447 21 37 21.448 37 22C37 22.552 37.447 23 38 23L42 23C42.553 23 43 22.552 43 22C43 21.448 42.553 21 42 21L38 21 z M 17.132812 29L46.865234 29L43.064453 59L20.886719 59L17.132812 29 z M 25.757812 34C25.491813 34 25.237781 34.105969 25.050781 34.292969L20.808594 38.535156C20.620594 38.722156 20.515625 38.977187 20.515625 39.242188C20.515625 39.507187 20.620594 39.761219 20.808594 39.949219L25.050781 44.191406C25.237781 44.379406 25.491812 44.484375 25.757812 44.484375C26.022812 44.484375 26.276844 44.380359 26.464844 44.193359L30.707031 39.949219C31.098031 39.558219 31.098031 38.926156 30.707031 38.535156L26.464844 34.292969C26.277844 34.104969 26.023813 34 25.757812 34 z M 25.757812 36.414062L28.585938 39.242188L25.757812 42.072266L22.929688 39.242188L25.757812 36.414062 z M 33 42C32.447 42 32 42.448 32 43L32 49C32 49.552 32.447 50 33 50L39 50C39.553 50 40 49.552 40 49L40 43C40 42.448 39.553 42 39 42L33 42 z M 34 44L38 44L38 48L34 48L34 44 z M 24.173828 53C23.621828 53 23.173828 53.448 23.173828 54L23.173828 56C23.173828 56.552 23.621828 57 24.173828 57C24.725828 57 25.173828 56.552 25.173828 56L25.173828 54C25.173828 53.448 24.725828 53 24.173828 53 z M 29.392578 53C28.839578 53 28.392578 53.448 28.392578 54L28.392578 56C28.392578 56.552 28.839578 57 29.392578 57C29.945578 57 30.392578 56.552 30.392578 56L30.392578 54C30.392578 53.448 29.945578 53 29.392578 53 z M 34.607422 53C34.054422 53 33.607422 53.448 33.607422 54L33.607422 56C33.607422 56.552 34.054422 57 34.607422 57C35.160422 57 35.607422 56.552 35.607422 56L35.607422 54C35.607422 53.448 35.160422 53 34.607422 53 z M 39.826172 53C39.273172 53 38.826172 53.448 38.826172 54L38.826172 56C38.826172 56.552 39.273172 57 39.826172 57C40.379172 57 40.826172 56.552 40.826172 56L40.826172 54C40.826172 53.448 40.379172 53 39.826172 53 z"
                      fill="#FFB600"
                    />
                  </svg>
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">کولد کافه </h2>
                  <p className="text-center">قهوه و نوشیدنی های سرد </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="card glass opacity-60">
                <figure className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M32 1C26.495178 1 22 5.4951777 22 11C22 11.815567 22.109211 12.606901 22.294922 13.369141C20.726049 13.812665 19.259268 14.642675 18.091797 15.792969C16.232797 17.571969 15.093781 20.13 15.050781 22.75C14.985781 25.364 16.006234 28.029594 17.865234 29.933594C19.714234 31.842594 22.368781 32.981 25.050781 33C26.387781 32.996 27.73075 32.728938 28.96875 32.210938C30.102744 31.72743 31.126904 31.019535 32.003906 30.169922C32.876808 31.021099 33.902647 31.72547 35.029297 32.210938C36.269297 32.730938 37.609219 33 38.949219 33C41.629219 32.98 44.290859 31.839688 46.130859 29.929688C47.990859 28.029688 49.009219 25.36 48.949219 22.75C48.909219 20.13 47.770156 17.569063 45.910156 15.789062C44.739918 14.637905 43.272934 13.811738 41.705078 13.369141C41.890396 12.607328 42 11.815426 42 11C42 5.4951777 37.504822 1 32 1 z M 32 4C35.883178 4 39 7.1168223 39 11C39 11.702129 38.896118 12.377297 38.705078 13.013672C37.238129 13.042954 35.787451 13.407202 34.470703 14.070312C35.370703 14.880313 36.019219 15.79 36.449219 16.5C37.229219 16.17 38.089219 16 38.949219 16C40.729219 16.03 42.450156 16.779063 43.660156 18.039062C44.870156 19.309062 45.509219 21.04 45.449219 22.75C45.399219 24.46 44.649688 26.090469 43.429688 27.230469C42.229687 28.390469 40.589219 29.03 38.949219 29C37.309219 29 35.690469 28.360703 34.480469 27.220703C34.387901 27.135256 34.303947 27.0402 34.216797 26.949219C34.789272 25.620394 35.089061 24.18056 35.050781 22.75C35.002781 20.132 33.863094 17.569734 31.996094 15.802734C30.204241 14.078645 27.763355 13.068756 25.294922 13.011719C25.104107 12.375303 25 11.702585 25 11C25 7.1168223 28.116822 4 32 4 z M 25.050781 16C26.826781 15.992 28.572531 16.739297 29.769531 18.029297C30.973531 19.310297 31.612781 21.041 31.550781 22.75C31.495781 24.461 30.742484 26.090656 29.521484 27.222656C28.305484 28.357656 26.693781 28.999 25.050781 29C23.406781 29.033 21.766406 28.394422 20.566406 27.232422C19.354406 26.088422 18.600781 24.463 18.550781 22.75C18.493781 21.043 19.129797 19.310016 20.341797 18.041016C21.555797 16.778016 23.275781 16.026 25.050781 16 z M 15.240234 31.539062L29 62C29 62 30 63 32 63C34 63 35 62 35 62L48.529297 32.039062C46.659297 33.159063 43.559063 34.590625 41.039062 35.140625C39.539062 35.470625 38.350469 36.599844 37.980469 38.089844L36 46C36 46 35 47 34 46L32.630859 39.140625C32.270859 37.350625 30.730156 36.019688 28.910156 35.929688C21.510156 35.599688 18.61 34.06 17 33C16.59 32.73 15.870234 32.109063 15.240234 31.539062 z"
                      fill="#FFB600"
                    />
                  </svg>
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">بستنی ها </h2>
                  <p className="text-center">بستنی های خوشمزه</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="card glass opacity-60">
                <figure className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M40.328125 2.6582031C39.413125 3.1882031 38.705844 3.7294219 37.964844 4.3574219C37.243844 4.9814219 36.56775 5.6695 35.96875 6.4375C35.37775 7.2155 34.870953 8.0766719 34.501953 9.0136719C34.268303 9.6365199 34.127344 10.291647 34.056641 10.955078C32.170788 10.832985 30 10.725645 30 15C30 17.761 32.239 20 35 20C37.761 20 40 17.761 40 15C40 11.728985 37.996805 11.141846 36.171875 11.033203C36.267755 10.643013 36.392992 10.260503 36.572266 9.8925781C36.913266 9.2335781 37.357859 8.6168281 37.880859 8.0488281C38.414859 7.4868281 39.020969 6.9775781 39.667969 6.5175781C40.300969 6.0705781 41.041875 5.6267969 41.671875 5.3417969L40.328125 2.6582031 z M 21 12C5.3 17.26 3 25 3 25C3 25 29.79 26.77 62 25C54.27 21.6 47.389844 19.059922 41.589844 17.169922C40.629844 19.879922 38.04 21.820312 35 21.820312C31.13 21.820312 28 18.680312 28 14.820312C28 14.290312 28.020312 13.810859 28.070312 13.380859C23.500312 12.310859 21 12 21 12 z M 61.949219 27.140625C61.699219 27.360625 59.74 29 56 29C54.28 29 53 28.000469 50 27.980469C49.72 27.970469 49.309844 27.98 48.839844 28C47.589844 28.07 46.379453 28.129453 45.189453 28.189453C44.439453 28.359453 43.839687 28.950703 43.679688 29.720703C43.559688 30.300703 43.430547 30.949297 43.310547 31.529297C43.130547 32.389297 42.370234 33 41.490234 33C40.620234 33 39.869687 32.389063 39.679688 31.539062L39.349609 30.029297C39.169609 29.199297 38.499453 28.590703 37.689453 28.470703L36.669922 28.5C35.739922 28.6 35.000625 29.319766 34.890625 30.259766L34.640625 32.640625C34.560625 33.370625 33.960234 33.919219 33.240234 33.949219C32.520234 33.979219 31.890234 33.489063 31.740234 32.789062L31.189453 30.179688C30.989453 29.269687 30.199531 28.619609 29.269531 28.599609L28.259766 28.599609C25.999766 28.599609 25.250547 29.160781 22.810547 29.550781C20.480547 29.930781 19.419062 28.600703 17.039062 28.470703L16.679688 28.470703L16.5 28.460938C16.16 28.450937 15.810937 28.449453 15.460938 28.439453C14.500937 28.419453 13.670938 29.069766 13.460938 30.009766L13.339844 30.570312C13.139844 31.460312 12.339688 32.080781 11.429688 32.050781C10.579688 32.020781 9.8601562 31.429375 9.6601562 30.609375L9.4492188 29.740234C9.2292188 28.870234 8.4703125 28.250703 7.5703125 28.220703C7.0003125 28.200703 6.4298437 28.180156 5.8398438 28.160156L5.8300781 28.160156C4.4000781 28.160156 3.2490625 28.920313 3.0390625 29.070312C3.1390625 31.830312 3.3002344 34.409062 3.4902344 36.789062C15.940234 38.239062 47.349063 36.500156 61.289062 34.660156C61.729062 30.760156 61.940234 27.810625 61.990234 27.140625L61.949219 27.140625 z M 60.669922 39.679688C34.979922 45.029687 10.889297 44.770312 4.2792969 44.570312C4.4592969 46.010312 4.6403125 47.320469 4.8203125 48.480469C17.130312 48.650469 42.569141 47.77 60.119141 43.25C60.319141 42.05 60.499922 40.849688 60.669922 39.679688 z M 59.740234 45.410156C43.340234 49.460156 20.659219 50.5 7.6992188 50.5C6.7992187 50.5 5.940625 50.490469 5.140625 50.480469C5.620625 53.400469 6 55 6 55C6 55 27.22 54.85 59 49C59.27 47.84 59.510234 46.630156 59.740234 45.410156 z"
                      fill="#FFB600"
                    />
                  </svg>
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">کیک </h2>
                  <p className="text-center">سفارش کیک های تازه</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="card glass opacity-60">
                <figure className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M18.558594 9.683594L20.101563 14.316406L22 13.683594L20.457031 9.050781C20.046875 7.824219 18.902344 7 17.609375 7L16.4375 7L16.621094 6.453125C16.808594 5.890625 16.738281 5.273438 16.425781 4.769531C16.113281 4.261719 15.59375 3.925781 15.019531 3.84375L5.691406 2.367188C4.789063 2.238281 3.984375 2.695313 3.605469 3.484375C3.269531 4.179688 3.363281 4.992188 3.847656 5.597656L5.90625 8.167969L3.019531 15.320313C2.496094 16.777344 2.734375 18.375 3.667969 19.699219C4.683594 21.140625 6.320313 22 8.050781 22L14.050781 22C15.78125 22 17.417969 21.140625 18.433594 19.699219C19.367188 18.375 19.601563 16.777344 19.066406 15.28125L16.535156 9L17.609375 9C18.039063 9 18.421875 9.273438 18.558594 9.683594 Z M 14.722656 5.820313L14.332031 7L7.53125 7L5.394531 4.34375 Z M 5.304688 18.546875C4.75 17.761719 4.601563 16.828125 4.886719 16.027344L7.726563 9L14.375 9L15.992188 13L8.03125 13L6.960938 15.65625C6.378906 17.285156 7.042969 18.96875 8.300781 20L8.050781 20C6.988281 20 5.933594 19.441406 5.304688 18.546875Z"
                      fill="#FFB600"
                    />
                  </svg>
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">نوشیدنی</h2>
                  <p className="text-center">نوشیدنی های تازه</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="card glass opacity-60">
                <figure className="mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M20,5h-1h-1H4.3C3.352,5,2.811,6.082,3.38,6.84l0.777,1.036C4.704,8.605,5,9.493,5,10.406V14h13h1h1c1.654,0,3-1.346,3-3 V8C23,6.346,21.654,5,20,5z M21,11c0,0.552-0.448,1-1,1h-1V7h1c0.552,0,1,0.448,1,1V11z"
                      opacity=".35"
                      fill="#FFB600"
                    />
                    <path
                      d="M5,5h14v0c0-1.657-1.343-3-3-3H8C6.343,2,5,3.343,5,5L5,5z"
                      fill="#FFB600"
                    />
                    <circle cx="12" cy="3" r="2" fill="#FFB600" />
                    <path
                      d="M19,14H5v4c0,1.657,1.343,3,3,3h8c1.657,0,3-1.343,3-3V14z"
                      fill="#FFB600"
                    />
                    <rect width="2" height="8" x="11" y="7" fill="#FFB600" />
                  </svg>
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">دمنوش ها</h2>
                  <p className="text-center">دمنوش های تخصصی </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
