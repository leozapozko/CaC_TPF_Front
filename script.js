// JS para insertar el header y el footer en las paginas

var elem = document.getElementById("idheader");

elem.innerHTML = `
<div class="header-logo-text">
<a href="index.html" class="logo">
    <img src="img/Logo-heart.png" alt="logo" class="logo">
</a>
<h1>Heart Travel, turismo de la Patagonia Argentina en el corazón</h1>
</div>

<nav class="header">
<input type="checkbox" id="check">
<label for="check" class="checkbtn">
    <img src="img/bx-menu-alt-right.svg" class="img-hamb" alt="menu bars">
</label>
<ul>
    <li><a href="index.html">INICIO</a></li>
    <li><a href="servicios.html">SERVICIOS</a></li>
    <li><a href="notas.html">NOTAS</a></li>
    <li><a href="nosotros.html">NOSOTROS</a></li>
    <li><a href="contacto.html">CONTACTO</a></li>
</ul>

</nav>

<div class="intro">
<div>
<h2 class="intro animate__animated animate__flash ">Somos expertos en turismo patagónico</h2>
<p>Armamos itinerarios acorde a tus necesidades</p>
</div>
<div>
<a class="boton" href="nosotros.html">Conocé más</a>
</div>
`


var elem = document.getElementById("idfooter");

elem.innerHTML = `
<div class="footer-container-1">
                <a href="https://www.argentina.tur.ar/#!/ar/home" target="_blank"> <img src="img/logo-w-argentina.svg"
                        alt="imagen de argentina"></a>
                <div class="overlay">
                    <a href="https://www.argentina.tur.ar/#!/ar/home" target="_blank">Viajá por Argentina</a>
                </div>
            </div>

            <div class="footer-container-2">
                <div>
                    <a class="boton" href="contacto.html">Contactanos</a>
                </div>
                <div>
                    <h3>Si querés hacernos una consulta</h3>

                </div>
                <div>
                    <img src="img/home-heart.svg" class="icon-contacto" alt="home" /></a>
                    <p>Riobamba 800, CABA, Argentina</p>
                </div>
                <div>
                    <img src="img/phone-call.svg" class="icon-contacto" alt="telefono" /></a>
                    <p>+54-4505-4488</p>
                </div>
                <div>
                    <img src="img/envelope.svg" class="icon-contacto" alt="email" /></a>
                    <p>heart-travel@email.com.ar</p>

                </div>
                <div>
                    <p><br></p>
                </div>
            </div>

            <div class="footer-container-3">
                <div>
                    <h3>Como llegar a Heart Travel</h3>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30356.37000340383!2d-58.408688419782514!3d-34.59610022312133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabfdf0e5ac7%3A0xef519d4d727f9a41!2sRiobamba%20800%2C%20C1056%20CABA!5e0!3m2!1ses!2sar!4v1681615406541!5m2!1ses!2sar"
                        width="100%" height="180  " style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="footer-container-4">
                <h3>Seguinos en RedesSociales</h3>
                <section>
                    <a href="https://www.facebook.com/" class="icon-net" target="_blank"><img
                            src="img/facebook-icon.svg" alt="facebook" /></a>

                    <a href="https://twitter.com/" class="icon-net" target="_blank"> <img src="img/twitter-icon.svg"
                            class="icon-net" alt="twitter" /></a>

                    <a href="https://www.instagram.com/" class="icon-net" target="_blank"> <img
                            src="img/instagram-icon.svg" class="icon-net" alt="instagram" /></a>

                    <a href="https://web.whatsapp.com/" class="icon-net" target="_blank"> <img
                            src="img/whatsapp-icon.svg" class="icon-net" alt="whatsapp" /></a>

                    <a href="https://www.youtube.com/" class="icon-net" target="_blank"> <img src="img/youtube-icon.svg"
                            class="icon-net" alt="youtube" /></a>

                    <a href="https://t.me/" class="icon-net" target="_blank"> <img src="img/telegram-icon.svg"
                            class="icon-net" alt="telegram" /></a>
                </section>

                <img src="img/Las-Malvinas-son-Argentinas.png" alt="">

            </div>
`




// Definicion de la validacion del formulario de contacto
function validar(event) {
    var formulario = document.getElementById('formulario'),
        elementos = formulario.elements;

    if (formulario.nombre.value.length < 3) {
        alert("Completa el campo con un nombre válido");
        formulario.nombre.focus();
        return false;
    }

    if (formulario.apellido.value.length < 3) {
        alert("Completa el campo con un apellido válido");
        formulario.apellido.focus();
        return false;
    }

    if (formulario.pais.value.length < 3) {
        alert("Completa el campo con un país válido");
        formulario.pais.focus();
        return false;
    }

    if (formulario.email.value.indexOf("@") == -1 || email.length < 6) {
        alert("Completa con un email válido");
        formulario.email.focus();
        return false;
    }

    if (isNaN(formulario.phone.value) || formulario.phone.value.length != 10) {
        alert("Completa con un teléfono válido");
        formulario.phone.focus();
        return false;
    }

    if (formulario.message.value.length <= 40) {
        alert("Su consulta debe tener más de 40 caracteres");
        formulario.message.focus();
        return false;
    }

    // return true;
    //el formulario se envia
    //alert("Su consulta se envió exitosamente!");
    handleSubmit(event);
}

var form = document.getElementById("formulario");

async function handleSubmit(event) {

    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            //status.innerHTML = "Su consulta se envió exitosamente!";
            alert("Su consulta se envió exitosamente!");
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    //status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    //devuelve el mensaje que envia el servidor
                    alert(data["errors"].map(error => error["message"]).join(", "))
                    //alert(status.innerHTML);
                } else {
                    //status.innerHTML = "Hubo un problema al enviar el formulario"
                    alert("Hubo un problema al enviar el formulario");
                }
            })
        }
    }).catch(error => {
        //status.innerHTML = ""
        alert("Hubo un problema al enviar el formulario");
    });

}

//form.addEventListener("submit", handleSubmit)


// JS para el carrousel //
const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (carrusel.scrollLeft === 0) {
            step = step * -1;
        }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
    stop();
});

carrusel.addEventListener("mouseout", () => {
    start();
});

start();


function borrarDiv(titulo) {

    if (titulo == "Heart Travel Turismo Contacto") {
        var d = document.getElementById("idfooter");
        var d_nested = document.getElementsByClassName("footer-container-3")[0];
        var throwawayNode = d.removeChild(d_nested);
    }
}


