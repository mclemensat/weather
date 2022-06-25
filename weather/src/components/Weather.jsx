import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getWeatherByCity } from "../../services/api";

export default function Weather() {
  const [city, setCity] = useState("");
  const [queryString] = useSearchParams();
  console.log(city);

  useEffect(() => {
    (async function getWeather() {
      const city = queryString.get("city");
      setCity(await getWeatherByCity(city));
    })();
  }, []);

  if (!city) {
    return null;
  }

  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-12">
          <label htmlFor="city" className="text-black">
            City:
          </label>
          <input
            className="bg-slate-100"
            type="text"
            id="city"
            name="city"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div>{city.location.name} {city.current.condition.text}</div>
      </form>
    </>
  );
}
