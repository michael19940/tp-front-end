//cargar datos con js / json  
const persona = '{"apellido":"Lewis", "nombre":"Lucas", "fecha_nacimiento":"1/1/1994", "nacionalidad":"Estadounidense", "cuil":"00 - 00.000.000", "direccion":"9409 Woodland St, Albuquerque", "codigo_postal": "0000", "telefono":"(957) 886-0004", "e_mail":"lewis.lucas@example.com"}';
const obj = JSON.parse(persona);
document.getElementById("apellido").innerHTML = obj.apellido;
document.getElementById("nombre").innerHTML = obj.nombre;
document.getElementById("fecha_nacimiento").innerHTML = obj.fecha_nacimiento;
document.getElementById("nacionalidad").innerHTML = obj.nacionalidad;
document.getElementById("cuil").innerHTML = obj.cuil;
document.getElementById("direccion").innerHTML = obj.direccion;
document.getElementById("cuil").innerHTML = obj.cuil;
document.getElementById("codigo_postal").innerHTML = obj.codigo_postal;
document.getElementById("telefono").innerHTML = obj.telefono;
document.getElementById("e_mail").innerHTML = obj.e_mail;

//inicio de la pagina (ocultar)
document.getElementById("texto_aptitudes").style.display = "none";
document.getElementById("texto_formacion_academica").style.display = "none";
document.getElementById("texto_experiencia_laboral").style.display = "none";
document.getElementById("texto_idioma").style.display = "none";
document.getElementById("texto_conocimientos_informaticos").style.display = "none";    
document.getElementById("mensaje").style.display = "none";    

//botones
let x_aptitudes = 1
let x_formacion_academica = 1
let x_experiencia_laboral = 1
let x_idioma = 1
let x_conocimientos_informaticos = 1
let x_mensaje = 1

document.getElementById("boton_aptitudes").addEventListener("click", function (){
        if(x_aptitudes == 0){
            document.getElementById("texto_aptitudes").style.display = "none";
            document.getElementById("boton_aptitudes").innerHTML = "mostrar";
            x_aptitudes = 1;
        }else{
            document.getElementById("texto_aptitudes").style.display = "block";
            document.getElementById("boton_aptitudes").innerHTML = "ocultar";
            x_aptitudes = 0;
        }
    })

document.getElementById("boton_formacion_academica").addEventListener("click", function (){
        if(x_formacion_academica == 0){
            document.getElementById("texto_formacion_academica").style.display = "none";
            document.getElementById("boton_formacion_academica").innerHTML = "mostrar";
            x_formacion_academica = 1;
        }else{
            document.getElementById("texto_formacion_academica").style.display = "block";
            document.getElementById("boton_formacion_academica").innerHTML = "ocultar";
            x_formacion_academica = 0;
        }
    })

document.getElementById("boton_experiencia_laboral").addEventListener("click", function (){
        if(x_experiencia_laboral == 0){
            document.getElementById("texto_experiencia_laboral").style.display = "none";
            document.getElementById("boton_experiencia_laboral").innerHTML = "mostrar";
            x_experiencia_laboral = 1;
        }else{
            document.getElementById("texto_experiencia_laboral").style.display = "block";
            document.getElementById("boton_experiencia_laboral").innerHTML = "ocultar";
            x_experiencia_laboral = 0;
        }
    })

document.getElementById("boton_idioma").addEventListener("click", function (){
        if(x_idioma == 0){
            document.getElementById("texto_idioma").style.display = "none";
            document.getElementById("boton_idioma").innerHTML = "mostrar";
            x_idioma = 1;
        }else{
            document.getElementById("texto_idioma").style.display = "block";
            document.getElementById("boton_idioma").innerHTML = "ocultar";
            x_idioma = 0;
        }
    })

document.getElementById("boton_conocimientos_informaticos").addEventListener("click", function (){
        if(x_conocimientos_informaticos == 0){
            document.getElementById("texto_conocimientos_informaticos").style.display = "none";
            document.getElementById("boton_conocimientos_informaticos").innerHTML = "mostrar";
            x_conocimientos_informaticos = 1;
        }else{
            document.getElementById("texto_conocimientos_informaticos").style.display = "block";
            document.getElementById("boton_conocimientos_informaticos").innerHTML = "ocultar";
            x_conocimientos_informaticos = 0;
        }
    })

document.getElementById("boton_mensaje").addEventListener("click", function (){
        if(x_mensaje == 0){
            document.getElementById("mensaje").style.display = "none";
            document.getElementById("boton_mensaje").innerHTML = "mostrar";
            x_mensaje = 1;
        }else{
            document.getElementById("mensaje").style.display = "block";
            document.getElementById("boton_mensaje").innerHTML = "ocultar";
            x_mensaje = 0;
        }
    })
