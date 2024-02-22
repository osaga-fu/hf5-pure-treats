import "./Header.css";
import Navbar from "../molecules/Navbar";

export default function Header() {
  return (
    <header>
      <img
        src="../../../assets/images/pure_treats_logo.png"
        alt="PURE TREATS logo"
        className="pureTreatsLogo"
      />
      <section className="headerText">
        <h1 className="pureTreatsName">PURE TREATS</h1>
        <h2 className="pureTreatsPhrase">Tus Caprichos saludables sin preocuparte de nada más</h2>
      </section>
      <Navbar />
    </header>
  );
}
