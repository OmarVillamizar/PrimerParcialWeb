document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const codigo = document.getElementById('codigo').value;
        const password = document.getElementById('password').value;

        const data = { codigo, password };

        fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(user => {
            // Aquí puedes guardar el usuario en localStorage
            localStorage.setItem('user', JSON.stringify(user));
            // Luego redireccionar a otra página o realizar alguna acción
            window.location.href = 'otra_pagina.html';
        })
        .catch(error => {
            console.error('Error:', error);
            // Aquí puedes mostrar un mensaje de error en la interfaz
        });
    });
});
