"use strict"
let _txtNome, _txtEmail, _txtCommenti;
window.onload = function()
{
    _txtNome = document.getElementById("nome");
    _txtEmail = document.getElementById("email");
    _txtCommenti = document.getElementsByClassName("commenti");
}
function ValidaForm()
{
   if(_txtNome.value==""||_txtEmail.value=="")
   {
       alert("Inserire dati mancanti");
   }
   else
   {
       alert("Risposta inviata!")
       _txtEmail.value="";
       _txtNome.value="";
       _txtCommenti.value="";
   }
}
function reset() {
    _txtEmail.value="";
    _txtNome.value="";
    _txtCommenti.value="";
}