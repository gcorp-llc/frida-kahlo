import FaqItem from "./FaqItem";

export default function Faq() {
    return (
      <>
        <section
          className="sm:py-10 bg-amber-500 overflow-hidden"
          id="faq"
          dir="rtl"
        >
          <div className="container mx-auto px-4">
            <div className="relative py-5 px-8 bg-yelloww overflow-hidden rounded-3xl">
              <div className="relative z-10 md:max-w-7xl mx-auto">
                <div className="md:max-w-xl mb-10">
                  <span className="inline-block mb-5 text-3xl text-md text-white font-bold uppercase tracking-widest">
                    سوالات متداول در مورد قهوه
                  </span>
                  <h2 className="font-heading text-white text-2xl font-bold font-heading">
                    سوالاتی که شاید به ذهن شما هم رسیده باشند
                  </h2>
                </div>
                <div className="flex flex-wrap -m-3">
                  <FaqItem />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
