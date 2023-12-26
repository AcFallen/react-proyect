import React, { useEffect, useState } from "react";
import { CardProduct } from "../components/CardProduct";
import { PaginationProduct } from "../components/PaginationProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [page, setPage] = useState(0)

  // const increasePage = () =>{
  //   setPage(currentPage*10)
  // }

  useEffect(() => {

    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      // console.log(data)
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  // console.log(products)

  return (
    <section className="py-8 px-6 bg-slate-50">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <h3 className="mb-4 text-2xl font-bold">Productos</h3>
        <PaginationProduct  currentPage={currentPage} setCurrentPage={setCurrentPage}></PaginationProduct>

        <ul className="flex flex-wrap gap-6 justify-center">
          {products.map((product) => {
            return (
              <CardProduct
                key={product.id}
                image={product.thumbnail}
                price={product.price}
                title={product.title}
                description={product.description}
              ></CardProduct>
            );
          })}
        </ul>
        <PaginationProduct  currentPage={currentPage} setCurrentPage={setCurrentPage}></PaginationProduct>
      </div>
    </section>
  );
};

export default Products;
