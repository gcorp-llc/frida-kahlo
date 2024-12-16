import ProductCard from "./ProductCard";

export default function HomeProduct() {
  type ProductType = {
    id: number;
    name: string;
    price: number;
    discount: number;
    image: string;
  };
  // لیست محصولات
  const products: ProductType[] = [
    {
      id: 1,
      name: "محصول 1",
      price: 20000,
      discount: 10,
      image: "/img/product/coffee.avif",
    },
    {
      id: 2,
      name: "محصول 2",
      price: 50000,
      discount: 5,
      image: "/img/product/coffee-2.avif",
    },
    {
      id: 3,
      name: "محصول 3",
      price: 75000,
      discount: 15,
      image: "/img/product/coffee-3.avif",
    },
    {
      id: 4,
      name: "محصول 4",
      price: 100000,
      discount: 20,
      image: "/img/product/coffee-4.avif",
    },
    {
      id: 5,
      name: "محصول 5",
      price: 30000,
      discount: 0,
      image: "/img/product/ice-cream-4.jpg",
    },
    {
      id: 6,
      name: "محصول 6",
      price: 120000,
      discount: 25,
      image: "/img/product/ice-cream-3.jpg",
    },
    {
      id: 7,
      name: "محصول 7",
      price: 45000,
      discount: 10,
      image: "/img/product/ice-cream-2.jpg",
    },
    {
      id: 8,
      name: "محصول 8",
      price: 80000,
      discount: 30,
      image: "/img/product/ice-cream-1.jpg",
    },
  ];

  return (
    <>
      <div className="content-center m-3">
        <div className="grid md:grid-cols-4 grid-cols-1 m-6 md:gap-2 justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
