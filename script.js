document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de navegação

        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Slider de imagens (carrossel)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

// Função para mostrar o slide atual
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    }

    // Esconde todos os slides
    slides.forEach(slide => {
        slide.style.opacity = '0';
        slide.style.transform = 'scale(0.9)';
    });

    // Mostra o slide atual
    slides[currentSlide].style.opacity = '1';
    slides[currentSlide].style.transform = 'scale(1)';
}

// Exibe o primeiro slide por padrão
showSlide(currentSlide);

// Função para navegar para o próximo slide
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Função para navegar para o slide anterior
function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Muda os slides automaticamente a cada 3 segundos
setInterval(nextSlide, 5000);

// Efeito de hover nos botões
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)'; // Aumenta o tamanho do botão
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)'; // Retorna ao tamanho original
    });
});

// Efeito de animação ao rolar a página
const sections = document.querySelectorAll('section');
const produtosSection = document.querySelector('.produtos');

function revealOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight * 0.8) {
            section.classList.add('visible'); // Adiciona a classe para ativar a animação
        }
    });
}
// Adiciona o evento de rolagem
window.addEventListener('scroll', revealOnScroll);

// Chama a função para verificar as seções visíveis no carregamento da página
revealOnScroll();

// Função para revelar seções conforme o usuário rola a página
document.addEventListener('scroll', function () {
    if (produtosSection) {
        let produtosTop = produtosSection.getBoundingClientRect().top;
        if (produtosTop <= window.innerHeight * 0.8) {
            produtosSection.classList.add('reveal');
        }
    }
});


// Função para filtrar os produtos
function filterProducts() {
    var input, filter, cards, productName, i;
    input = document.getElementById('search-input');
    filter = input.value.toLowerCase();
    cards = document.querySelectorAll('.produto-card');
    
    // Loop para verificar cada card de produto
    cards.forEach(function(card) {
        productName = card.querySelector('h3').textContent;
        if (productName.toLowerCase().indexOf(filter) > -1) {
            card.style.display = "";  // Mostrar o produto
        } else {
            card.style.display = "none";  // Ocultar o produto
        }
    });
}
