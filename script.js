function confirmBox() {
    var datos = "Datos de participación:"
    var nombre = document.form1.nombre.value;
    var apellidos = document.form1.apellidos.value;
    var email = document.form1.email.value;
    var telefono = document.form1.telefono.value;
    var fechaNacimiento = document.form1.fechaNacimiento.value;
    var pais = document.form1.pais.value;

    datos = datos + "\n   Nombre: " + nombre +
        "\n   Apellidos: " + apellidos +
        "\n   email: " + email +
        "\n   Telefono: " + telefono +
        "\n   Fecha nacimiento: " + fechaNacimiento +
        "\n   Pais: " + pais;

    if (confirm(datos)) {
        return true;
    } else {
        return false;
    }
}