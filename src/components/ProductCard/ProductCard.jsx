import "./ProductCard.css";


export default function ProductCard() {

  return (
    <article className="productCard">
      <img className="productImage" src="https://cdn.pixabay.com/photo/2017/05/26/07/48/cookies-2345439_960_720.jpg" alt="cookie" />
      <section className="productTextInfo">
        <h2>Nombre galletta</h2>
        <h4>Precio</h4>
        <button className="moreInfoButton">Más info</button>
      </section>
    </article>
  )
}
