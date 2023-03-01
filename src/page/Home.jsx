// import useState
import { useState } from "react";

// import useEffect
import { useEffect } from "react";

import dataBerlin from "../components/data/Data.jsx";
console.log("data Berlin: ");
console.log(dataBerlin);
// sfc
const Home = () => {



    const data = {...dataBerlin};
    console.log("data: ");
    console.log(data);


    console.log(data.weather[0].description)
    console.log(data.main.temp)
    console.log(data.wind.speed)
    return (

        <main>
            <section>

                <h1>Home</h1>

                <section>
                    <button>Düsseldorf</button>
                    <button>Kön</button>
                    <button>Berlin</button>
                    <button>Hamburg</button>
                </section>


                <section>

                    <article>
                        <h2>Clouds in Stadt {data.weather[0].description}</h2>
                        <img src="" alt="Sonne Wolken Regen usw" />
                    </article>

                    <h3>Current: 43.11 {(data.main.temp)/32} Grad</h3>   {/* // ! das ! Vorsicht evtl F nicht Celsius  => :32 */}
                    <h4>Wind Speed:5.82 {(data.wind.speed)*1.60934} km/h </h4>   {/* // ! das mi/hr => km/   => * 1,60934  */}

                </section>

            </section>
        </main>

    );
}

export default Home;