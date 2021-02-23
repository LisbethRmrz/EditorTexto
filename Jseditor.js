
var editor;

function $(id){
    return document.getElementById(id);
}

//Para darle formato como negrita, subrayado, etc
function formato(f){
    editor.execCommand(f, false, null);
}
//Fin formato

//Esto es para todos los alineados implementados
function Alineado(l)
{
    editor.execCommand(l, false, null);
}
//Fin alineado


function rev(t)    {
    return t.split("<").join("&lt;").split(">").join("&gt;").split("\"").join("&quot;");
}

//Funcion para insertar enlace
function insertarEnlace(){
    var u;

    if(!(u=prompt('ingresar url')))return;
    editor.execCommand("CreateLink",false,u);
}
//Fin enlace

//Funcion para insertar imagen

function insertarImagen(){
    var u;
    editor.body.focus();
    if(!(u=prompt('ingresar url')))return;
    editor.execCommand("InsertImage",false,u);
}

//Fin imagen

//Colores
function color(c){
editor.execCommand("forecolor",false,c);
}

function colorFondo(c){
    var h=window.ActiveXObject?'backcolor':'hilitecolor';
    editor.execCommand(h,false,c);
}

//Fin colores

//Funcion para ingresar codigo html
function inHTML(){
    var u,u2;
    if(!(u=prompt('ingresar html','')))return;
        try{
            editor.execCommand("inserthtml",false,u);
        }catch(e){
            try{
                editor.body.focus();
                u2=editor.selection.createRange();
                u2.pasteHTML(u);
            }catch(E){
                alert('nop');
            }
        }
}

//Aca termina la funcion para ingresar codigo html

//con esta funciom se muestra el texto o los elementos ingresados en forma de html para copiar
function htmlOEditor(e){
e=e || window.event;
ob=e.target || e.srcElement
$('edit').style.display=(ob.value=='html')?'none':'block';
$('ht').style.display=(ob.value!='html')?'none':'block';
$('ht').innerHTML=rev(editor.body.innerHTML);
ob.value=(ob.value=='html')?'editor':'html';
}
window.onload=function(){
    editor=$('edit').contentDocument || $('edit').contentWindow.document;
    editor.designMode='on';
}
//Aca termina

//Para las paletas de colores
function mostrar(){
    document.getElementById('texto').style.display = 'block';}

    function ocultar(){
        document.getElementById('texto').style.display = 'none';}

        function mostrando(){
            document.getElementById('fondo').style.display = 'block';}
        
            function ocultando(){
                document.getElementById('fondo').style.display = 'none';}

//Fin paletas de colores

//tablas

function crear(){
    
    var col = document.getElementById("cols").value;
    var filas = document.getElementById("rows").value;
    var tabla="<table border='1'>";
    for(i=0;i<filas;i++){
    tabla+="<tr>";
    for(j=0;j<col;j++){
    tabla+="<td> &nbsp; </td>";
    }
    tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado").innerHTML=tabla;
    }
    function crear2(){
    document.getElementById("resultado").innerHTML="";
    }

    //mostrando y ocultando los comandos para tabla

    function tabla(){
        document.getElementById('ftabla').style.display = 'block';}
    
        function oculto(){
            document.getElementById('ftabla').style.display = 'none';}

//Fin prueba tablas

//Codigo para los tamaños de letras
function t1(l)
{
    editor.execCommand("fontSize", false, "1px"); 
}

function t2(l)
{
    editor.execCommand("fontSize", false, "2px");
}

function t3(l)
{
    editor.execCommand("fontSize", false, "3px");
}

function t4(l)
{
    editor.execCommand("fontSize", false, "4px");
}

function t5(l)
{
    editor.execCommand("fontSize", false, "5px");
}

function t6(l)
{
    editor.execCommand("fontSize", false, "6px");
}

function t7(l)
{
    editor.execCommand("fontSize", false, "7px");
}
// Aca terminan los tamaños de letra

// Fuentes

function fuente(fontName) {
    editor.execCommand("fontName", false, fontName);
}
//

// Listas
function Lista(l)
{
    editor.execCommand(l, false, null);
}

//Prueba de Crear tabla

  