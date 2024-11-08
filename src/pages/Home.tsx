import Hero from "../components/Hero";

export default function Home(){
    return (
      <>
        <Hero />
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