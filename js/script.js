// Animaciones de cards

// Formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación 
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!nombre || !email) {
                showMessage('Por favor completa los campos obligatorios.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor ingresa un email válido.', 'error');
                return;
            }
            
            // Simular envío exitoso
            showMessage('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
            
            // Limpiar formulario
            contactForm.reset();
            
            // Redirigir a WhatsApp con los datos
            setTimeout(() => {
                const telefono = document.getElementById('telefono').value;
                const edad = document.getElementById('edad').value;
                const nivel = document.getElementById('nivel').value;
                const modalidad = document.getElementById('modalidad').value;
                const mensaje = document.getElementById('mensaje').value;
                
                let whatsappMessage = `Hola Macarena, soy ${nombre}.\n`;
                whatsappMessage += `Email: ${email}\n`;
                if (telefono) whatsappMessage += `Teléfono: ${telefono}\n`;
                if (edad) whatsappMessage += `Edad del estudiante: ${edad}\n`;
                if (nivel) whatsappMessage += `Nivel actual: ${nivel}\n`;
                if (modalidad) whatsappMessage += `Modalidad preferida: ${modalidad}\n`;
                if (mensaje) whatsappMessage += `Mensaje: ${mensaje}\n`;
                whatsappMessage += `\nMe interesa información sobre las clases de inglés.`;
                
                const whatsappUrl = `https://wa.me/5493413404334?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank');
            }, 2000);
        });
    }
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar mensajes
function showMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

// Funciones para modales
function showTips() {
    document.getElementById('tipsModal').style.display = 'block';
}

function closeTips() {
    document.getElementById('tipsModal').style.display = 'none';
}

function startTest() {
    document.getElementById('testModal').style.display = 'block';
}

function closeTest() {
    document.getElementById('testModal').style.display = 'none';
}

// Función para descargar recursos
// function downloadResource(resource) {
//      if (resource === 'ingles-basico-1') {
//        const link = document.createElement('a');
//        link.href = 'archivos/ingles-basico-1.pdf';
//         link.download = 'Ingles_Basico_1.pdf';
//        document.body.appendChild(link);
//         link.click();
//        document.body.removeChild(link);
//         return;
//     }
//     const messages = {
//         'guia-niveles': 'Para descargar la Guía de Niveles completa, contáctame por WhatsApp y te la envío gratuitamente.'
//     };
    
//     alert(messages[resource] || 'Recurso no disponible');
    
//     const whatsappUrl = `https://wa.me/5493413404334?text=Hola%20Macarena,%20me%20interesa%20descargar%20la%20${resource.replace('-', '%20')}`;
//     window.open(whatsappUrl, '_blank');
// }

// Cerrar modales al hacer clic fuera
window.addEventListener('click', function(event) {
    const tipsModal = document.getElementById('tipsModal');
    const testModal = document.getElementById('testModal');
    
    if (event.target === tipsModal) {
        tipsModal.style.display = 'none';
    }
    
    if (event.target === testModal) {
        testModal.style.display = 'none';
    }
});

// Animaciones al scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .method-card, .testimonial, .success-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animaciones
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función que actualiza el link activo según la sección visible
function updateActiveNavigation() {
    const sections = document.querySelectorAll('.section'); 
    const menuLinks = document.querySelectorAll('.menu a');
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        const top = section.offsetTop - 80; 
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
            menuLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.menu a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}

// Escuchar scroll para actualizar navegación activa
window.addEventListener('scroll', updateActiveNavigation);

// Inicializar al cargar la página
window.addEventListener('load', updateActiveNavigation);

// Función toggle de posts del blog 
function togglePost(button) {
    const post = button.closest('.blog-post');

    post.classList.toggle('active');

    if (post.classList.contains('active')) {
        button.textContent = 'Leer menos';
    } else {
        button.textContent = 'Leer más';
    }
}

// Widget de WhatsApp flotante
function createWhatsAppWidget() {
    const widget = document.createElement('div');
    widget.innerHTML = `
        <a href="https://wa.me/5493413404334?text=Hola%20Macarena,%20me%20interesa%20información%20sobre%20las%20clases%20de%20inglés" 
           target="_blank" 
           style="position: fixed; bottom: 20px; right: 20px; background: #25D366; color: white; 
                  width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; 
                  justify-content: center; font-size: 1.5rem; text-decoration: none; z-index: 1000; 
                  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); transition: all 0.3s;"
           onmouseover="this.style.transform='scale(1.1)'"
           onmouseout="this.style.transform='scale(1)'">
            📱
        </a>
    `;
    document.body.appendChild(widget);
}

// Crear widget al cargar la página
window.addEventListener('load', function() {
    createWhatsAppWidget();
});