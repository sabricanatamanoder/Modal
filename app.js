
//Variables
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close')


//*Buttons
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
//Escape (Esc)'e tıklandığında closeModal fonksiyonunu çağırır ve çalıştırır.
document.body.addEventListener("keydown", e => {
    if (e.key === 'Escape') {
        closeModal();
    }
})

//Functions
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block"
}

//closeModal
function closeModal() {
    modalContent.classList.add("slide-up")

    //setTimeout metodu, kendisine belirtilen bir fonksiyonu milisaniye cinsinde belirtilen süre kadar gecikmeli çağırır.ÖR: aşağıda 500ms gecikmeyle içerideki arrow fonksiyonu çağırır.
    setTimeout(() => {
        modal.style.display = "none"
        modalContent.classList.remove("slide-up")
    }, 500)
}