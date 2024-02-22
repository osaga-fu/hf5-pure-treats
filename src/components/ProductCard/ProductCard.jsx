import "./ProductCard.css";

export default function ProductCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      setData(response.data);
    });
  }, []);

  return data.map((product) => (
    <article className="productCard">
      <img
        className="productImage"
        src="https://cdn.pixabay.com/photo/2017/05/26/07/48/cookies-2345439_960_720.jpg"
        alt="cookie"
      />
      <section className="productTextInfo">
        <h2>{product.name}</h2>
        <h4>{product.price} €</h4>
        <button className="moreInfoButton">Más info</button>
      </section>
    </article>
  ));
}
