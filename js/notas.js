document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('codigo').textContent = `Código: ${user.codigo}`;
        document.getElementById('nombre').textContent = `Nombre: ${user.nombre}`;
        fetch(`https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students/${user.codigo}/notas`)
            .then(response => response.json())
            .then(data => {
                const notas = data.notas;
                const tbody = document.querySelector('#notas-table tbody');
                let totalCreditos = 0;
                let sumatoriaDefCreditos = 0;
                notas.forEach(nota => {
                    const def = ((parseFloat(nota.n1) + parseFloat(nota.n2) + parseFloat(nota.n3)) / 3) * 0.7 + (parseFloat(nota.ex) * 0.3);
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${nota.asignatura}</td><td>${nota.creditos}</td><td>${nota.n1}</td><td>${nota.n2}</td><td>${nota.n3}</td><td>${nota.ex}</td><td>${def.toFixed(2)}</td>`;
                    tbody.appendChild(row);
                    totalCreditos += parseFloat(nota.creditos);
                    sumatoriaDefCreditos += parseFloat(nota.creditos) * def;
                });
                const promedio = sumatoriaDefCreditos / totalCreditos;
                const promedioDiv = document.getElementById('promedio');
                promedioDiv.textContent = `Promedio: ${promedio.toFixed(2)}`;
            })
            .catch(error => console.error('Error al obtener las notas:', error));
    } else {
        console.error('No se encontró un usuario en el localStorage');
    }
});
function logout(){
    window.location.href = 'index.html';
};
