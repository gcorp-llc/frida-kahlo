import Hero from "../components/Hero";

export default function Home(){
    return (
      <>
        <Hero />
        <div className="m-3 card group hover:shadow sm:max-w-sm">
          <figure>
            <img
              src="https://cdn.flyonui.com/fy-assets/components/card/image-8.png"
              alt="Shoes"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </figure>
          <div className="card-body">
            <h5 className="card-title mb-2.5">Card title</h5>
            <p className="mb-6">
              Nike Air Max is a popular line of athletic shoes that feature
              Nike's signature Air cushioning technology in the sole.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-secondary btn-soft">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 w-96 shadow-xl m-5">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </>
    );
}