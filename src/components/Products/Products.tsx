import React, { useState, useEffect } from "react";
// import data from "../data/data";
import Product from "./Product";
import {Data} from "../../types"

function Products() {
  const [products, setProducts] = useState<Data[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <div className="container">
      {products.map((each) => {
        return <Product key={each.id}  {...each} />;
      })}
    </div>
  );
}

export default Products;
