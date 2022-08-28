
const btn = document.querySelector('button')
const fix = document.querySelector('.fix')
const audio = document.querySelector('audio')
const span = document.querySelector('span.jumlah')
const spanW = document.querySelector('span.waktu')
let banyak = 0;
btn.addEventListener('click', ()=>{
    banyak++;
    btn.classList.toggle('anim')
    span.innerHTML = `Skor ${banyak}`;
    
})
let count = 10;
let st = setInterval(()=>{
    spanW.innerHTML = `Waktu ${count}`;
    count--;
    if (count == 0) {
        clearInterval(st);
        spanW.innerHTML = `Waktu Anda Habis`;
        
        fix.style.width='100%';
        fix.style.height='100vh';
        
        
        const playdata = () => {      
      const dataPlay = audio.getAttribute('data-Play');
            
      if(dataPlay === 'false') {
       	audio.setAttribute('data-Play', 'true');
       	audio.play()
      }
    }
    playdata();
    
    }
    
}, 1000)
