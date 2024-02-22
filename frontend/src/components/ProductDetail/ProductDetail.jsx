import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products/${id}`);

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error al mostrar el producto", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main>
      {data && (
        <section className="detailContainer">
          <img src={data.photoUrl} alt={data.name} className="photoDetail" />
          <span className="textContainer">
            <h1>{data.name}</h1>
            <h4 className="detailIngredients">{data.ingredients}</h4>
            <h5 className="detailNutritional">{data.nutritionalInformation}</h5>
            <h4 className="detailPrice">{data.price} € por unidad</h4>
            <button className="buyButton">Comprar</button>
          </span>
        </section>
      )}
    </main>
  );
}
