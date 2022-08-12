
const cari = document.querySelector('.cari');
const img =  document.querySelector('.dua');
const input =  document.querySelector('input');
const span =  document.querySelector('.container p #span');
const p =  document.querySelector('p');

cari.addEventListener('click', ()=>{
    const s =  document.querySelector('input#cari').value;

     img.style.opacity = '1';
     p.style.opacity = '1';
     span.innerHTML = s;
})