function toggleImage() {
    const usFlag = document.getElementById('us-flag');
    const brFlag = document.getElementById('br-flag');

    if (usFlag.style.zIndex == '0') {
        usFlag.style.zIndex = '1';
        brFlag.style.zIndex = '0';
    };

    if (brFlag.style.zIndex == '0') {
        brFlag.style.zIndex = '1';
        usFlag.style.zIndex = '0';
    };

    console.log('12')

}


document.addEventListener('DOMContentLoaded', function () {  
    const sections = document.querySelectorAll('section');  

    // Função para revelar as seções ao rolar a página  
    const revealSections = () => {  
        const scrollTop = window.scrollY + window.innerHeight;  

        sections.forEach(section => {  
            const sectionTop = section.offsetTop;  
            const sectionHeight = section.offsetHeight;  

            // Adiciona a classe 'visible' se a seção estiver na viewport  
            if (scrollTop > sectionTop + sectionHeight / 5) {  
                section.classList.add('visible');  
            } else {  
                section.classList.remove('visible');  
            }  
        });  
    };  

    // Adiciona um evento de rolamento  
    window.addEventListener('scroll', revealSections);  
    
    // Chamada inicial para mostrar as seções se já estiver visíveis  
    revealSections();  

    // Opções adicionais de interação para a navegação  
    const navLinks = document.querySelectorAll('.navbar a');  
    navLinks.forEach(link => {  
        link.addEventListener('click', function(event) {  
            // Evita o comportamento padrão de navegação  
            event.preventDefault();  
            
            // Obtem o href do link para navegação  
            const targetId = this.getAttribute('href');  

            if (targetId.startsWith('#')) {  
                // Se for uma ancoragem na mesma página  
                const targetSection = document.querySelector(targetId);  
                if (targetSection) {  
                    targetSection.scrollIntoView({ behavior: 'smooth' });  
                }  
            } else {  
                // Navegação entre páginas  
                window.location.href = targetId; // Redireciona para a nova página  
            }  
        });  
    });  
});