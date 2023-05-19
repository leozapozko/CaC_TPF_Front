function convertTime(unixTime) {
    let dt = new Date(unixTime * 1000)
    let h = dt.getHours()
    let m = "0" + dt.getMinutes()
    let t = h + ":" + m.substr(-2)
    return t
}

//formato de fecha y hora
/*let unix = 1684200230;
let date = new Date(unix * 1000);
console.log(date);   // 2017-10-08T14:35:44.000Z*/


document.getElementById("btn-clima").onclick = function () { climaLocal() };

function climaLocal() {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let sensacionTermica = document.getElementById('sensacion-termica')
    let iconoAnimado = document.getElementById('icono-animado')
    let humedad = document.getElementById('humedad')
    let presionAtmosferica = document.getElementById('presion')
    let vientoVelocidad = document.getElementById('viento-velocidad')
    let h_sunrise = document.getElementById('amanecer')
    let h_sunset = document.getElementById('atardecer')

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            //ubicación actual    
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=568c9ff7242e3c859da43709a11ba909`

            //ubicación por ciudad
            //const url = `https://api.openweathermap.org/data/2.5/weather?q=Bariloche&lang=es&units=metric&appid=568c9ff7242e3c859da43709a11ba909`

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {
                    //console.log(data)

                    let temp = data.main.temp.toFixed(1)
                    //console.log(temp)
                    temperaturaValor.textContent = `${temp} °C`
                    sensacionTermica.textContent = `ST ${data.main.feels_like.toFixed(1)} °C`

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name
                    humedad.textContent = `Humedad ${data.main.humidity} %`
                    presionAtmosferica.textContent = `Pres. Atm. ${data.main.pressure} hpa`
                    vientoVelocidad.textContent = `Veloc. Viento ${data.wind.speed} m/s`
                    h_sunrise.textContent = `Amanecer ${convertTime(data.sys.sunrise)} hs`
                    h_sunset.textContent = `Atardecer ${convertTime(data.sys.sunset)} hs`
                    //hora de consulta
                    console.log(convertTime(data.dt));
                    //mediante el if se determinan iconos diurnos o nocturnos
                    if ((data.dt < data.sys.sunset) && (data.dt > data.sys.sunrise)) {
                        //para determinar el tipo de icono
                        console.log(data.weather[0].main)
                        switch (data.weather[0].main) {
                            case 'Thunderstorm':
                                iconoAnimado.src = 'img/animated/thunder.svg'
                                console.log('TORMENTA');
                                break;
                            case 'Drizzle':
                                iconoAnimado.src = 'img/animated/rainy-2.svg'
                                console.log('LLOVIZNA');
                                break;
                            case 'Rain':
                                iconoAnimado.src = 'img/animated/rainy-7.svg'
                                console.log('LLUVIA');
                                break;
                            case 'Snow':
                                iconoAnimado.src = 'img/animated/snowy-6.svg'
                                console.log('NIEVE');
                                break;
                            case 'Clear':
                                iconoAnimado.src = 'img/animated/day.svg'
                                console.log('LIMPIO');
                                break;
                            case 'Atmosphere':
                                iconoAnimado.src = 'img/animated/weather.svg'
                                console.log('ATMOSFERA');
                                break;
                            case 'Clouds':
                                iconoAnimado.src = 'img/animated/cloudy-day-1.svg'
                                console.log('NUBES');
                                break;
                            default:
                                iconoAnimado.src = 'img/animated/cloudy-day-1.svg'
                                console.log('por defecto');
                        }
                    } else[      //si es de noche
                        iconoAnimado.src = 'img/animated/night.svg'
                    ]
                })
                .catch(error => {
                    console.log(error)
                })

            //elimina el boton que se presiono
            let idClima = document.getElementById("idclima");
            let boton = document.getElementById("btn-clima");
            let throwawayNode = idClima.removeChild(boton);
        })
    }
}