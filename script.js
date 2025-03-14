let tesouroEstaVisivel = false 
function abreBau(){ 
    tesouroEstaVisivel = !tesouroEstaVisivel 
    bau.classList.toggle('active', tesouroEstaVisivel);
} 
bau.addEventListener('click', abreBau)
