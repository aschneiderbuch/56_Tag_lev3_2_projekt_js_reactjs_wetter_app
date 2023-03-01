// import useState
import { useState } from "react";

// import useEffect
import { useEffect } from "react";

import dataBerlin from "../components/data/Data.jsx";
console.log("data Berlin: ");
console.log(dataBerlin);
// sfc
const Home = () => {

    /***********************************************************************************************
     * 
     *          Fetch 
     *          https://api.openweathermap.org/data/2.5/weather?lat=52.52406171856656&lon=13.39998492042157&appid=d0ca0011f6859dd04d0de83562d4b663
     * 
     ************************************************************************************************/

    const [getWeather, setWeather] = useState();

    const [getClickValue, setClickValue] = useState("lat=52.52406171856656&lon=13.39998492042157");

    console.log("getClickValue: ");
    console.log(setClickValue)
    console.log("getWeather: ");

/*     useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?${getClickValue}&appid=d0ca0011f6859dd04d0de83562d4b663`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setWeather(data);
            })
            .catch(error => {
                console.log(" --> error <-- ");
                console.log(error);
            })

    }, [getClickValue]) */



    let data = getWeather;
 data = { ...dataBerlin };    /* // !!! daten aus Backup */
    console.log("data: ");
    console.log(data);


    console.log(data.main.temp)
    console.log(data.wind.speed)

    return (

        <main>
            <section>

                <h1>Home</h1>

                <section>
                    <button>Düsseldorf</button>
                    <button>Kön</button>
                    <button onClick={(e) => setClickValue(e.target.value)} value={`lat=52.52406171856656&lon=13.39998492042157`} >Berlin</button>
                    <button onClick={(e) => setClickValue(e.target.value)} value={`lat=53.55114749651508&lon=9.982747435874535`} >Hamburg</button>
                </section>


                <section>

                    <article>
                        <h2>Clouds in Stadt {data.weather[0].description}</h2>
                        <img src="" alt="Sonne Wolken Regen usw" />
                    </article>

                    <h3>Current: 43.11 {(data.main.temp) / 32} Grad</h3>   {/* // ! das ! Vorsicht evtl F nicht Celsius  => :32 */}
                    <h4>Wind Speed:5.82 {(data.wind.speed) * 1.60934} km/h </h4>   {/* // ! das mi/hr => km/   => * 1,60934  */}

                </section>

            </section>
        </main>

    );
}

export default Home;