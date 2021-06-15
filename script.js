function insert(num) {document.getElementById('tela').innerHTML= document.getElementById("tela").innerHTML + num;}
function limpar(){document.getElementById('tela').innerHTML='';}
function calcular(){
    var resultado = document.getElementById('tela').innerHTML;
    if(resultado){
    document.getElementById('tela').innerHTML = eval(resultado);}
}
