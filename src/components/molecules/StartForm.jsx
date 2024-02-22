import React from "react";
import "./Startform.css";

const OrderForm = () => {
    const [preferences, setPreferences] = useState([]);
    const [province, setProvince] = useState("");
  
    const handlePreferenceChange = (event) => {
      const selectedPreference = event.target.value;
  
      setPreferences((prevPreferences) => {
        if (prevPreferences.includes(selectedPreference)) {
          return prevPreferences.filter((preference) => preference !== selectedPreference);
        } else {
          return [...prevPreferences, selectedPreference];
        }
      });
    };
  
    const handleProvinceChange = (event) => {
      setProvince(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (preferences.length === 0 || province === "") {
        alert("¡Oops! Parece que olvidaste seleccionar tus preferencias alimentarias o tu provincia. Por favor introduce tus datos para darte los mejores productos para ti.");
      } else {
        alert(`¡Genial! Tus preferencias alimentarias son: ${preferences.join(", ")}, y tu provincia es: ${province}. ¡Buscando tentaciones saludables para ti!`);
     
      }
    };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Selecciona tus preferencias alimentarias:</label>
        <div>
          <input
            type="checkbox"
            id="celiac"
            value="celiac"
            checked={preferences.includes("celiac")}
            onChange={handlePreferenceChange}
          />
          <label htmlFor="celiac">Celiaquía o intolerancia al gluten</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="lactose"
            value="lactose"
            checked={preferences.includes("lactose")}
            onChange={handlePreferenceChange}
          />
          <div>
            <input
              type="checkbox"
              id="noSugarDiabetes"
              value="noSugarDiabetes"
              checked={preferences.includes("noSugarDiabetes")}
              onChange={handlePreferenceChange}
            />
            <label htmlFor="noSugarDiabetes">
              Productos sin azúcares añadidos/diabetes
            </label>
          </div>
          <label htmlFor="lactose">Intolerancia a la lactosa</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="others"
            value="others"
            checked={preferences.includes("others")}
            onChange={handlePreferenceChange}
          />
          <label htmlFor="others">Otros</label>
        </div>
      </div>

      <div>
        <label>Selecciona tu provincia:</label>
        <select id="province" value={province} onChange={handleProvinceChange}>
          <option value="" disabled>
            Elige una opción
          </option>
          <option value="alava">Álava</option>
          <option value="albacete">Albacete</option>
          <option value="alicante">Alicante</option>
          <option value="almeria">Almería</option>
          <option value="asturias">Asturias</option>
          <option value="avila">Ávila</option>
          <option value="badajoz">Badajoz</option>
          <option value="barcelona">Barcelona</option>
          <option value="burgos">Burgos</option>
          <option value="caceres">Cáceres</option>
          <option value="cadiz">Cádiz</option>
          <option value="cantabria">Cantabria</option>
          <option value="castellon">Castellón</option>
          <option value="ciudad_real">Ciudad Real</option>
          <option value="cordoba">Córdoba</option>
          <option value="cuenca">Cuenca</option>
          <option value="gerona">Gerona</option>
          <option value="granada">Granada</option>
          <option value="guadalajara">Guadalajara</option>
          <option value="guipuzcoa">Guipúzcoa</option>
          <option value="huelva">Huelva</option>
          <option value="huesca">Huesca</option>
          <option value="islas_baleares">Islas Baleares</option>
          <option value="jaen">Jaén</option>
          <option value="la_coruna">La Coruña</option>
          <option value="la_rioja">La Rioja</option>
          <option value="las_palmas">Las Palmas</option>
          <option value="leon">León</option>
          <option value="lerida">Lérida</option>
          <option value="lugo">Lugo</option>
          <option value="madrid">Madrid</option>
          <option value="malaga">Málaga</option>
          <option value="murcia">Murcia</option>
          <option value="navarra">Navarra</option>
          <option value="ourense">Ourense</option>
          <option value="palencia">Palencia</option>
          <option value="pontevedra">Pontevedra</option>
          <option value="salamanca">Salamanca</option>
          <option value="segovia">Segovia</option>
          <option value="sevilla">Sevilla</option>
          <option value="soria">Soria</option>
          <option value="tarragona">Tarragona</option>
          <option value="tenerife">Tenerife</option>
          <option value="teruel">Teruel</option>
          <option value="toledo">Toledo</option>
          <option value="valencia">Valencia</option>
          <option value="valladolid">Valladolid</option>
          <option value="vizcaya">Vizcaya</option>
          <option value="zamora">Zamora</option>
          <option value="zaragoza">Zaragoza</option>
        </select>
      </div>

      <button type="submit">Sorpréndeme</button>
    </form>
  );
};

export default StartForm;
