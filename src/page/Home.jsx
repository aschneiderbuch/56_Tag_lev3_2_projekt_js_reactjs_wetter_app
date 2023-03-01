// import useState
import { useState } from "react";

// import useEffect
import { useEffect } from "react";
import dataBerlin from "../components/data/Data";

// import css
import "./Home.scss";







const Home = () => {

    /***********************************************************************************************
     * 
     *       Fetch 
     *          Länge und Breitengrad 
     *              https://api.openweathermap.org/data/2.5/weather?lat=52.52406171856656&lon=13.39998492042157&appid={apiKey}
     * 
     *          Wetter Icon abrufen   - Info  https://openweathermap.org/weather-conditions#How-to-get-icon-URL
     *              URL is http://openweathermap.org/img/wn/{ iconCode }d@2x.png     --> weather[0].icon
     * 
     * 
     *          Suche nach Stadt direkt q
     *              https://api.openweathermap.org/data/2.5/weather?q=London&appid={apiKey}
     * 
     ************************************************************************************************/

    const apiKey = "d0ca0011f6859dd04d0de83562d4b663"

    const [getWeather, setWeather] = useState(dataBerlin);

    const [getClickValue, setClickValue] = useState(`lat=52.52406171856656&lon=13.39998492042157`);


      useEffect(() => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?${getClickValue}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setWeather(data);
                })
                .catch(error => {
                    console.log(" --> error <-- ");
                    console.log(error);
                })
    
        }, [getClickValue])



/***********************************************************************************************
 * 
 *      async Fetch
 * 
 ************************************************************************************************/

/*    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${getClickValue}&appid=d0ca0011f6859dd04d0de83562d4b663`)
                const data = await response.json()
                console.log(data)

                setWeather(data)
            } catch (error) {
                console.log(" --> error <-- ")
                console.log(error)
            }
        };
        fetchData();
    }, [getClickValue]);  */

    




    /***********************************************************************************************
     * 
     *     If else für 2tes Icon ohne Wetter Icon Api-Link
     * 
     ************************************************************************************************/

let wetterSymbol = "";
if (String(getWeather.weather[0].description) === "clear sky") {
     wetterSymbol = "☀️"
}
else if (String(getWeather.weather[0].description) === "fog") {
wetterSymbol = "😶‍🌫️"
}
else {
    wetterSymbol = "⛈️ 🤣"
}



/***********************************************************************************************
 * 
 *      Stadt Suche Input und Button
 * 
 ************************************************************************************************/
const [getStadt, setStadt] = useState("");

function suchFunktion (){
    setClickValue(`q=${getStadt}`);
}


    return (

        <main>
             <section className="sec_Home">

                <h1>Wettermonitor</h1>

                <section className="sec_Button">
                    <button onClick={(e) => setClickValue(e.target.value)} value={`lat=51.22606576271359&lon=6.770352549259979`} >Düsseldorf</button>
                    <button onClick={(e) => setClickValue(e.target.value)} value={`lat=50.94031485716163&lon=6.9432835583996715`}>Kön</button>
                  <button onClick={(e) => setClickValue(e.target.value)} value={`lat=52.52406171856656&lon=13.39998492042157`} >Berlin</button>
                    <button onClick={(e) => setClickValue(e.target.value)} value={`lat=53.55114749651508&lon=9.982747435874535`} >Hamburg</button> 
                </section>
                <section className="sec_StadtSuche">
                    <input onChange={(e) => setStadt(e.target.value)} type="text" name="stadtSuche" id="stadtSuche" />
                    <button onClick={() => suchFunktion() }>Suche Stadt</button>
                </section>


                <section className="sec_Text">
<br />
                    <article>
                         <h2>Clouds in Stadt:  {getWeather.weather[0].description}   </h2>   
                        <p>{wetterSymbol}</p>
                        <h5>Icon von Api: <span> <img src={`http://openweathermap.org/img/wn/${getWeather.weather[0].icon}@2x.png`} alt="" /> </span></h5>
                    </article>

                    <h3>Temperatur <span> {((getWeather.main.temp) / 32).toFixed(2)} </span> Grad</h3>  
                    <h4>Windgeschwindigkeit <span> {((getWeather.wind.speed) * 1.60934).toFixed(2)} </span> km/h </h4>   
                </section>

            </section> 
        </main>

    );
}

export default Home;