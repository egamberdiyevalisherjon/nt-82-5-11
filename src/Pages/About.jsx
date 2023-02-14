import React, { useState } from "react";
// import products from "../Data/products.json";

const About = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <button
        onClick={() => {
          import("../Utils/add.js").then((module) => alert(module.add(2, 2)));
        }}
      >
        2 + 2
      </button>
      <button
        onClick={() =>
          import("../Data/products.json").then((module) => {
            setProducts(module.default);
          })
        }
      >
        show
      </button>
      {products.map((p, index) => (
        <div key={index}>{p.name}</div>
      ))}
    </div>
  );
};

export default About;
