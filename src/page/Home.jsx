// import useState
import { useState } from "react";

// import useEffect
import { useEffect } from "react";
import dataBerlin from "../components/data/Data";

//import dataBerlin from "../components/data/Data.jsx";
//console.log("data Berlin: ");
//console.log(dataBerlin);
// sfc
const Home = () => {

    /***********************************************************************************************
     * 
     *          Fetch 
     *          https://api.openweathermap.org/data/2.5/weather?lat=52.52406171856656&lon=13.39998492042157&appid=d0ca0011f6859dd04d0de83562d4b663
     * 
     ************************************************************************************************/

    const [getWeather, setWeather] = useState(dataBerlin);

    const [getClickValue, setClickValue] = useState(`lat=52.52406171856656&lon=13.39998492042157`);


      useEffect(() => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?${getClickValue}&appid=d0ca0011f6859dd04d0de83562d4b663`)
                .then(response => response.json())
                .then(data => {
                    setWeather(data);
                })
                .catch(error => {
                    console.log(" --> error <-- ");
                    console.log(error);
                })
    
        }, [getClickValue])


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

    console.log("getWeather von fetch: ");
console.log(getWeather)



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
<br />
                    <article>
                         <h2>Clouds in Stadt {getWeather.weather[0].description}</h2>   
                        <img src="" alt="Sonne Wolken Regen usw" />
                    </article>

                    <h3>Temperatur {((getWeather.main.temp) / 32).toFixed(2)} Grad</h3>  
                    <h4>Windgeschwindigkeit {((getWeather.wind.speed) * 1.60934).toFixed(2)} km/h </h4>   
                </section>

            </section> 
        </main>

    );
}

export default Home;