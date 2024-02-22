import "./ProductList.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products`);

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error al buscar", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="cardContainer">
      {data.map((product) => (
        <article className="productCard" key={product.id}>
          <img
            className="productImage"
            src={product.photoUrl}
            alt={product.name}
          />
          <section className="productTextInfo">
            <h2 className="productName">{product.name}</h2>
            <h4 className="productPrice">{product.price} €</h4>
            <Link
              to={`/products/${product.id}`}
              className="moreInfoButton"
            >
              Más info
            </Link>
          </section>
        </article>
      ))}
    </main>
  );
}
