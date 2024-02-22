import "./ProductList.css";

export default function ProductList() {
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
        src={product.photoUrl}
        alt={product.name}
      />
      <section className="productTextInfo">
        <h2>{product.name}</h2>
        <h4>{product.price} €</h4>
        <button className="moreInfoButton">Más info</button>
      </section>
    </article>
  ));
}
