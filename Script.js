document.getElementById("Boton").addEventListener("click", function() {

    let texto = document.getElementById("Texto").value;
    let numero = document.getElementById("Numero").value;
    let telefono = document.getElementById("Telefono").value;
    let email = document.getElementById("Correo").value;
    let contraseña = document.getElementById("Contraseña").value;
    let Fecha = document.getElementById("Fecha").value;
    let Color = document.getElementById("Color").value;

    alert(texto + " " + numero + " " + telefono + " " + email + " " + contraseña+" " + Fecha);

    console.log("Botón presionado. Texto ingresado: " + texto);
    console.log("Botón presionado. Número ingresado: " + numero);
    console.log("Botón presionado. Teléfono ingresado: " + telefono);
    console.log("Botón presionado. Email ingresado: " + email);
    console.log("Botón presionado. Contraseña ingresada: " + contraseña);
    console.log("Botón presionado. Fecha ingresada: " + Fecha);

    document.getElementsByTagName("p")[0].innerText = "Has ingresado: " + texto;
    document.getElementsByTagName("p")[1].innerText = "El número ingresado es: " + numero;
    document.getElementsByTagName("p")[2].innerText = "El teléfono ingresado es: " + telefono;
    document.getElementsByTagName("p")[3].innerText = "El correo ingresado es: " + email;
    document.getElementsByTagName("p")[4].innerText = "La contraseña ingresada es: " + contraseña;  
    document.getElementsByTagName("p")[5].innerText = "La fecha ingresada es: " + Fecha;
    document.getElementsByTagName("body")[0].style.backgroundColor = Color;
});