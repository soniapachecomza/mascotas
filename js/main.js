const btnSwitch = document.querySelector('#active');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('.dark');
    btnSwitch.classList.toogle('.active');
});


const openModalv = document.querySelector('.btn-vera');
const modalv = document.querySelector('.modalv');
const closeModalv = document.querySelector('.modal__close_v');

openModalv.addEventListener('click', (e)=>{
    e.preventDefault();
    modalv.classList.add('modal--show');
});

closeModalv.addEventListener('click', (e)=>{
    e.preventDefault();
    modalv.classList.remove('modal--show');
});

const openModald = document.querySelector('.btn-dilan');
const modald = document.querySelector('.modal_d');
const closeModald = document.querySelector('.modal__close_d');

openModald.addEventListener('click', (e)=>{
    e.preventDefault();
    modald.classList.add('modal--show');
});

closeModald.addEventListener('click', (e)=>{
    e.preventDefault();
    modald.classList.remove('modal--show');
});

const openModalc = document.querySelector('.btn-cleo');
const modalc = document.querySelector('.modalcleo');
const closeModalc = document.querySelector('.modal__close_c');

openModalc.addEventListener('click', (e)=>{
    e.preventDefault();
    modalc.classList.add('modal--show');
});

closeModalc.addEventListener('click', (e)=>{
    e.preventDefault();
    modalc.classList.remove('modal--show');
});
const openModalm = document.querySelector('.btn-mym');
const modalm = document.querySelector('.modalmym');
const closeModalm = document.querySelector('.modal__close_mym');

openModalm.addEventListener('click', (e)=>{
    e.preventDefault();
    modalm.classList.add('modal--show');
});

closeModalm.addEventListener('click', (e)=>{
    e.preventDefault();
    modalm.classList.remove('modal--show');
});
const openModals = document.querySelector('.btn-silver');
const modals = document.querySelector('.modals');
const closeModals = document.querySelector('.modal__close_s');

openModals.addEventListener('click', (e)=>{
    e.preventDefault();
    modals.classList.add('modal--show');
});

closeModals.addEventListener('click', (e)=>{
    e.preventDefault();
    modals.classList.remove('modal--show');
});
const openModal = document.querySelector('.btn-cami');
const modal = document.querySelector('.modalk');
const closeModal = document.querySelector('.modal__close_k');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
