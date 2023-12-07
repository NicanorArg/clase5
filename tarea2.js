document.querySelector('#ingresar').onclick = function() {
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;

    console.log(nombreUsuario)
    document.querySelector('#display-nombre').innerText = 'Nombre(s): ' + nombreUsuario;
    document.querySelector('#display-apellido').innerText = 'Apellido(s): ' + apellidoUsuario;
    document.querySelector('#display-edad').innerText = 'Edad: ' + edadUsuario;
    document.querySelector('h1').innerText = `¡Bienvienido ${nombreUsuario}!`
}
