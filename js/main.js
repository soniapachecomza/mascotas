

// FORMULARIO 


const datos = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
}


const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const { nombre, telefono, email, mensaje } = datos;

    if(nombre === '' || telefono === '' || email === '' || mensaje === '' ) {
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
      url:'https://random.dog/woof.json',
      fotos: []
    }
  },
  methods: {
    fetchData(url) {

      fetch(url)
          .then(response => response.json())
          .then(data => {
            this.fotos=data
            console.log(this.fotos)
          } ) 

    }

  },
  created(){

    this.fetchData(this.url)
  }

}).mount('#app')






const btnSwitch = document.querySelector('#active');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('.dark');
    btnSwitch.classList.toogle('.active');
});


const openModalv = document.querySelector('.btn-vera');
const modalv = document.querySelector('.modalv');
const closeModalv = document.querySelector('.modal__close_v');

openModalv.addEventListener('click', (e) => {
    e.preventDefault();
    modalv.classList.add('modal--show');
});

closeModalv.addEventListener('click', (e) => {
    e.preventDefault();
    modalv.classList.remove('modal--show');
});

const openModald = document.querySelector('.btn-dilan');
const modald = document.querySelector('.modal_d');
const closeModald = document.querySelector('.modal__close_d');

openModald.addEventListener('click', (e) => {
    e.preventDefault();
    modald.classList.add('modal--show');
});

closeModald.addEventListener('click', (e) => {
    e.preventDefault();
    modald.classList.remove('modal--show');
});

const openModalc = document.querySelector('.btn-cleo');
const modalc = document.querySelector('.modalcleo');
const closeModalc = document.querySelector('.modal__close_c');

openModalc.addEventListener('click', (e) => {
    e.preventDefault();
    modalc.classList.add('modal--show');
});

closeModalc.addEventListener('click', (e) => {
    e.preventDefault();
    modalc.classList.remove('modal--show');
});
const openModalm = document.querySelector('.btn-mym');
const modalm = document.querySelector('.modalmym');
const closeModalm = document.querySelector('.modal__close_mym');

openModalm.addEventListener('click', (e) => {
    e.preventDefault();
    modalm.classList.add('modal--show');
});

closeModalm.addEventListener('click', (e) => {
    e.preventDefault();
    modalm.classList.remove('modal--show');
});
const openModals = document.querySelector('.btn-silver');
const modals = document.querySelector('.modals');
const closeModals = document.querySelector('.modal__close_s');

openModals.addEventListener('click', (e) => {
    e.preventDefault();
    modals.classList.add('modal--show');
});

closeModals.addEventListener('click', (e) => {
    e.preventDefault();
    modals.classList.remove('modal--show');
});
const openModal = document.querySelector('.btn-cami');
const modal = document.querySelector('.modalk');
const closeModal = document.querySelector('.modal__close_k');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});


