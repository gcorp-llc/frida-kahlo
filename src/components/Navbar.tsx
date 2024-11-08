import { Link } from "react-router-dom";
import HomeIcon from "./icons/HoneIcon";
import MenuIcon from "./icons/MenuIcon";
import NewsIcon from "./icons/NewsIcon";
import ReviewIcon from "./icons/ReviewIcon";
import ContactIcon from "./icons/ContactIcon";
import AboutIcon from "./icons/AboutIcon";
import CartIcon from "./icons/CartIcon";
import UserIcon from "./icons/UserIcon";
import SettingIcon from "./icons/SettingIcon";
import LogOutIcon from "./icons/LogOutIcon";

export default function Navbar() {
const menuItems = [
  { to: "/", text: "کافه", icon: <HomeIcon /> },
  { to: "/menu", text: "منو", icon: <MenuIcon /> },
  { to: "/blog", text: "روزنامه", icon: <NewsIcon /> },
  { to: "/reviews", text: "نظرات", icon: <ReviewIcon /> },
  { to: "/contact", text: "ارتباط با ما", icon: <ContactIcon /> },
  { to: "/about", text: "درباره ما", icon: <AboutIcon /> },
];


    return (
      <>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"profile"} className="justify-end">
                    <span className="me-2">پروفایل</span>
                   <UserIcon/>
                  </Link>
                </li>
                <li>
                  <Link to={'setting'} className="justify-end">
                    <span className="me-2">تنطیمات</span>
                <SettingIcon/>
                  </Link>
                </li>
                <li>
                  <Link to={"logout"} className="justify-end">
                    <span className="me-2">خروچ</span>
                  <LogOutIcon/>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                <CartIcon/>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <p className="text-lg font-bold text-right">
                    {" "}
                    مجموعه سفارش : 8
                  </p>
                  <p className="text-right">جمع هزینه: 900.505</p>
                  <div className="card-actions">
                    <Link to={"/cart"} className="btn btn-primary btn-block">
                      مشاهده سبد خرید
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems.reverse().map((item, index) => (
                <li key={index}>
                  <Link className="justify-end" to={item.to}>
                    <span className="me-2">{item.text}</span>
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-ghost hidden lg:flex text-xl">فریدا کالو</a>

            <div className="">
              <div className="drawer drawer-end">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content  text-center">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-ghost lg:hidden btn-primary drawer-button"
                  >
                    <svg
                      className="w-7 h-7 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M5 7h14M5 12h14M5 17h14"
                      />
                    </svg>
                  </label>
                </div>
                <div className="drawer-side z-10">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-100 min-h-full w-80 p-4 rounded-3xl">
                    <li>
                      <Link to="/" className="text-xl text-center">
                        <img
                          className="w-10 rounded-full me-3"
                          alt="Tailwind CSS Navbar component"
                          src="./favicon.jpg"
                        />
                        <h3 className="mt-2">فریدا کالو</h3>
                      </Link>
                    </li>
                    {menuItems.reverse().map((item, index) => (
                      <li key={index}>
                        <Link className="justify-end" to={item.to}>
                          <span className="me-2">{item.text}</span>
                          {item.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}