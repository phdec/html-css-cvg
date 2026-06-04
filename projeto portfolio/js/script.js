const botaoTema = document.getElementById('botao-tema')
const body = document.body
const temaNormal = localStorage.getItem('tema')

tema(temaNormal === 'escuro')

function tema(temaAtual){
    if(temaAtual === true){
        body.classList.add('escuro')
    }
    else{body.classList.remove('escuro')}
}

botaoTema.addEventListener('click', () => {
    const escuro = body.classList.toggle('escuro')
    tema(escuro)
    localStorage.setItem('tema', escuro ? 'escuro' : 'claro')
})

const navLinks = document.querySelectorAll('ul a.link')

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if(target){
            const headerHeight = document.querySelector('header').offsetHeight
            const targetPosition = target.offsetTop - headerHeight - 20
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    })
})