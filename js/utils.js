
function inserirCardPedido() {
    let card = document.querySelector('.cards')
    let cards = '<div class="card gerado" style="background-image: url(../imgs/bgHam.jpg); background-size: cover; background-position: center;"></div>'
    card.innerHTML += cards
    contadorDiv()

    setTimeout(() => window.location = 'http://127.0.0.1:5501/telas/pedidos.html', 1000)
}

function trazerCards() {
    let card = document.querySelector('.cards')
    let cards = '<div class="card gerado" style="background-image: url(../imgs/bgHam.jpg); background-size: cover; background-position: center;"></div>'
    
    if (localStorage.getItem('contador') === 0) {return false}
    else{
        for (let i = 0; i<localStorage.getItem('contador'); i++) {
            card.innerHTML += cards
        }
    }
    
    
}

function incluirPedido() {
    
}

function finalizarPedido() {
    localStorage.clear()
    location.reload()
}

function contadorDiv() {
    let contador  = document.querySelectorAll('.gerado').length
    console.log(contador)
    localStorage.setItem('contador', contador)
}
