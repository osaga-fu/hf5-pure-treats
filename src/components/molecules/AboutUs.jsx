import React from "react";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img
        src="\src\assets\images\home_background_image.svg"
        alt="home_bacground_img"
        className="home_bacground_img"
      />
      <h2 className="section-title">¿Quiénes somos?</h2>
      <p className="section-description">
        Bienvenidx a Pure Treats, donde la pasión por lo saludable se fusiona
        con la deliciosa repostería. En nuestro espacio queremos brindarte una
        experiencia única, ofreciendo productos que no sólo satisfacen tus
        antojos, sino que también cuidan de tu bienestar.<br></br>
        <br />
        Creemos en la armonía entre el placer y la salud. Nuestros expertos en
        repostería colaboran con panaderías y pastelerías locales comprometidas
        con ingredientes de calidad, cercanía y respeto por las necesidades
        dietéticas individuales. <br></br>
        En Pure Treats, filtramos cuidadosamente nuestros productos por
        cercanía, no solo para garantizar su frescura, sino también para apoyar
        prácticas sostenibles que benefician al medio ambiente. <br></br>
        Además, entendemos que cada persona tiene necesidades dietéticas únicas.
        Por eso, nos enorgullece ofrecer opciones para aquellos con
        intolerancias alimenticias, como la lactosa, fructosa, celiaquía, y para
        quienes buscan alternativas sin azúcares refinados debido a condiciones
        como la diabetes. Descubre una nueva dimensión de dulzura consciente con
        Pure Treats, donde cada bocado cuenta una historia de compromiso con la
        frescura, la calidad y la satisfacción.
      </p>

      <h2 className="section-second-title">Nuestra filosofía:</h2>
      <p className="OurFilosophy-description">
        En Pure Treats, no sólo os ofrecemos la mejor repostería, sino que
        también forjamos un compromiso con tu bienestar y el del planeta.
        Nuestra filosofía se basa en la creencia de que todos merecen disfrutar
        de delicias irresistibles sin sacrificar la salud ni el medio ambiente.
        Nos esforzamos por ofrecerte productos que no solo son exquisitos, sino
        también conscientes. <br></br><br></br>
        Colaboramos estrechamente con panaderías y
        pastelerías comprometidas con prácticas sostenibles y el uso de
        ingredientes locales y frescos. En cada creación, buscamos equilibrar el
        placer con la responsabilidad. Pure Treats es más que una marca; es un
        viaje hacia un estilo de vida indulgente y saludable. Únete a nosotros
        en esta experiencia única donde cada elección cuenta para un futuro más
        saludable y sabroso.
      </p>
      <button className="button_start">¡NAM!</button>
    </div>
  );
};

export default AboutUs;
