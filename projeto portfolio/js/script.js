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