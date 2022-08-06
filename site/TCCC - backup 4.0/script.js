function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

//fim da parte do menu//

//interação ao entrar no site//

windowalert('Bem vindo(a) ao Ilumina ENEM, lugar certo para se preparar para as provas do ENEM.')

windowprompt('Digite seu nome no campo abaixo:')

//fim da interação ao entrar no site//