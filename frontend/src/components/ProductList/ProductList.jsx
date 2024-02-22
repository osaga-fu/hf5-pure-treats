import "./ProductList.css";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductList() {
  
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/products`
        );
  
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error al buscar", error);
      }
    };

    fetchData();
  }, []);

  return data.map((product) => (
    <article className="productCard">
      <img className="productImage" src={product.photoUrl} alt={product.name} />
      <section className="productTextInfo">
        <h2>{product.name}</h2>
        <h4>{product.price} €</h4>
        <button className="moreInfoButton">Más info</button>
      </section>
    </article>
  ));
}
