function setActive(element) {
    let currentActive = document.querySelector('a.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    element.classList.add('active');
}

const conteudo = document.querySelector('#conteudo');
function menu(link){
    fetch('pages/' + link + '.html')
    .then(response => response.text())
    .then(html => conteudo.innerHTML = html)
    .catch(error => console.innerHTML = 'Página não encontrada');
}

