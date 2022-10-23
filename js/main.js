
// FORMULARIO 


const datos = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
}


const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const { nombre, telefono, email, mensaje } = datos;

    if (nombre === '' || telefono === '' || email === '' || mensaje === '') {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    mostrarMensaje('Mensaje enviado correctamente');
});

function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}



// JSON

const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'https://random.dog/woof.json',
            fotos: []
        }
    },
    methods: {
        fetchData(url) {

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.fotos = data
                    console.log(this.fotos)
                })

        }

    },
    created() {

        this.fetchData(this.url)
    }

}).mount('#app')






const btnSwitch = document.querySelector('#active');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('.dark');
    btnSwitch.classList.toogle('.active');
});



