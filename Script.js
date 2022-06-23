var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordformat = /^[0-9]{8,16}$/;

var intentosrestantes= 3;

const verificacion = {

    user: false,
    password: false


}

function Verificaruser() {
    var mail = document.getElementById("mail")
    var ErrorUser = document.getElementById("ErrorUser")
    if (mailformat.test(mail.value)) {
        mail.classList.remove('inputincorrecto')

        mail.classList.add('inputcorrecto')

        ErrorUser.innerHTML = "";
        verificacion.user = true;
    }
    else {
        mail.classList.remove('inputcorrecto')
        mail.classList.add('inputincorrecto')
        ErrorUser.innerHTML = "El user debe ser un mail";
        verificacion.user = false;
    }
}
function Verificarpass() {
    var password = document.getElementById("password")
    var errorpass = document.getElementById("ErrorPass")
    if (passwordformat.test(password.value)) {
        password.classList.remove('inputincorrecto')
        password.classList.add('inputcorrecto')
        errorpass.innerHTML = "";
        verificacion.password = true;
    }
    else {
        password.classList.remove('inputcorrecto')
        password.classList.add('inputincorrecto')
        errorpass.innerHTML = "La contrasena debe contener entre 4 y 16 caracteres numericos";
        verificacion.password = false;
    }
}

function VerifForm() {
    
    var formulario = document.getElementById("formulario")
    var InfoSubmit = document.getElementById("InfoSubmit")

    if (verificacion.password && verificacion.user) {
        if (password.value == "17877428" && mail.value == "juan@mail.com") {
            InfoSubmit.innerHTML = "Bienvenido. Sera reedirigido a otra pagina en 3, 2 ,1 ..."
            setTimeout( function() { window.location.href = "./detalle.html"; }, 3000 );
           
        }


        else {
            
            intentosrestantes-=1;
            InfoSubmit.innerHTML = "Usuario o contrasena incorrecta. Le quedan "+intentosrestantes+" intentos";
            if (intentosrestantes<=0) {
            formulario.innerHTML="<div class='block'>Se ha bloqueado la cuenta</div>"
                
            }
        }
    }



    else {
        InfoSubmit.innerHTML = "Por favor, corregir los campos incorrectos"
        
    }


}