//Variáveis
const botao = document.getElementById('botao-tema');
const body = document.body;
const header = document.getElementsByTagName('header')[0]
const fotosprojeto = document.getElementById('mais-album')


// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
  
});


//Aplicando conteúdo ao clicar no saiba mais...
function exibir(nome = '',indice = 0){
  let conteudo = document.getElementById(nome)
  let mais = document.getElementsByClassName('mais')[indice]
  if(conteudo.style.display == "block"){
      mais.innerHTML = `<i class="fa-solid fa-play"></i> Saiba mais...`
      conteudo.style.display = "none"
  }else{
    mais.innerHTML= `<i class="fa-solid fa-angle-down"></i>  Saiba mais...`
    conteudo.style.display = "block"
  }
}

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


