//vH6uSk
document.querySelector('.login').addEventListener('submit', function (event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const clave = document.getElementById('clave').value;

    fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ codigo, clave })
    })
    .then(response => response.json())
    .then(data => {
        if (data.login) {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = 'notas.html';
            alert('Login exitoso');
        } else {
            alert(data.mensaje);
            document.getElementById('codigo').value = '';
            document.getElementById('clave').value = '';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(' las credenciales no son válidas');
    });
});
