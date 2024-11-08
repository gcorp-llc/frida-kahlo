/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // daisyui: {
  //   themes: [
  //     {
  //       "frida-kahlo": {
  //         primary: "#b300ff",
  //         "primary-content": "#f0daff",
  //         secondary: "#00b898",
  //         "secondary-content": "#000c08",
  //         accent: "#00d0ff",
  //         "accent-content": "#001016",
  //         neutral: "#221518",
  //         "neutral-content": "#cacccb",
  //         "base-100": "#221518",
  //         "base-200": "#201302",
  //         "base-300": "#231a1f",
  //         "base-content": "#f7e1bc",
  //         info: "#0081ca",
  //         "info-content": "#00060f",
  //         success: "#00b300",
  //         "success-content": "#000c00",
  //         warning: "#b03600",
  //         "warning-content": "#f3d8cf",
  //         error: "#ff4262",
  //         "error-content": "#160103",

  //         "--rounded-box": "1.7rem",
  //         "--rounded-btn": "1.7rem",
  //         "--rounded-badge": "1.9rem",
  //         "--animation-btn": "0.25s",
  //         "--animation-input": "0.2s",
  //         "--btn-focus-scale": "0.95",
  //         "--border-btn": "1px",
  //         "--tab-border": "1px",
  //         "--tab-radius": "0.5rem",
  //       },
  //     },
  //   ],
  // },

  daisyui: {
    themes: [
      {
        "frida-kahlo": {
      "primary": "#2B1D1B",            // قهوه‌ای شکلاتی تیره برای المان‌های اصلی
          "primary-content": "#D4A017",    // زرد ملایم برای متن روی المان‌های اصلی
          "secondary": "#3A2A28",          // قهوه‌ای تیره‌تر برای المان‌های فرعی
          "secondary-content": "#D4A017",  // زرد ملایم برای متن روی المان‌های فرعی
          "accent": "#1F1413",             // قهوه‌ای خیلی تیره به عنوان رنگ تاکیدی
          "accent-content": "#D4A017",     // زرد ملایم برای متن روی المان‌های تاکیدی
          "neutral": "#18110F",            // نزدیک به مشکی برای پس‌زمینه اصلی
          "neutral-content": "#C8A165",    // طلایی ملایم‌تر برای متن روی پس‌زمینه تیره
          "base-100": "#251714",           // قهوه‌ای خیلی تیره برای پس‌زمینه کلی
          "base-200": "#2B1D1B",           // قهوه‌ای شکلاتی تیره‌تر برای پس‌زمینه‌های مختلف
          "base-300": "#3A2A28",           // رنگ میانی برای تفکیک بخش‌ها
          "base-content": "#D4A017",       // زرد ملایم‌تر برای متن اصلی
          "info": "#3A2A28",               // قهوه‌ای تیره‌تر برای پیام‌های اطلاع‌رسانی
          "info-content": "#D4A017",       // زرد ملایم برای متن روی پس‌زمینه پیام‌ها
          "success": "#1F1413",            // قهوه‌ای خیلی تیره برای پیام‌های موفقیت
          "success-content": "#D4A017",    // زرد ملایم برای متن پیام‌های موفقیت
          "warning": "#8C5A3C",            // قهوه‌ای مایل به نارنجی برای هشدارها
          "warning-content": "#D4A017",    // زرد ملایم برای متن هشدار
          "error": "#3A2A28",              // قهوه‌ای تیره برای پیام‌های خطا
          "error-content": "#D4A017",      // زرد ملایم برای متن پیام‌های خطا

          "--rounded-box": "1rem",
          "--rounded-btn": "1rem",
          "--rounded-badge": "1rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};
