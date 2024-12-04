const wrapper = document.querySelector('.wrapper');
const logiinLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const reg = document.querySelector('.btnreg');
const log = document.querySelector('.btn');



registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

logiinLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

/* PARA LA VALIDACION, NUMEROS LETRASS YESO */

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.form-box.register form');
    const loginForm = document.querySelector('.form-box.login form');
    const closeIcon = document.querySelector('.icon-close');
    const popup = document.querySelector('.wrapper');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');


    //por si no sirve el botón para ver la contraseña y esas cosas
    /*
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordField = button.previousElementSibling;
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                button.textContent = 'Ocultar';
            } else {
                passwordField.type = 'password';
                button.textContent = 'Mostrar';
            }
        });
    });
*/
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!regex.test(password)) {
            alert('La contraseña debe tener al menos una mayúscula, un número y más de 8 dígitos.');
            return;
        }
        
        if (password.includes(email.split('@')[0])) {
            alert('La contraseña no debe parecerse al correo electrónico.');
            return;
        }
        
        alert('Registro exitoso');
        popup.style.display = 'none';
    });
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        alert('Inicio de sesión exitoso');
        popup.style.display = 'none';
    });

    closeIcon.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    document.querySelectorAll('.btnLogin-popup, .login-link, .register-link').forEach(button => {
        button.addEventListener('click', function() {
            popup.style.display = 'flex';
        });
    });
});
