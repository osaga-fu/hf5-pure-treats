import "./Header.css";
import Navbar from "../molecules/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img
          src="../../../assets/images/pure_treats_logo.png"
          alt="PURE TREATS logo"
          className="pureTreatsLogo"
        />
      </Link>
      <section className="headerText">
        <h1 className="pureTreatsName">PURE TREATS</h1>
        <h2 className="pureTreatsPhrase">
          Tus Caprichos saludables sin preocuparte de nada más
        </h2>
      </section>
      <Navbar />
    </header>
  );
}
