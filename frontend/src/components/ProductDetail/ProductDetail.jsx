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
        <section>
          <img src={data.photoUrl} alt={data.name} />
          <h1>{data.name}</h1>
          <h4>{data.ingredients}</h4>
          <h3>{data.nutritionalInformation}</h3>
          <h4>{data.price} por unidad</h4>
        </section>
      )}
    </main>
  );
  
}
