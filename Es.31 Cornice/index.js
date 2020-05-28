"use strict"
const DIM=10;
let livello=1;
window.onload=function(){
 let _wrapper=document.getElementById("wrapper");
 for(let i=0;i<DIM;i++)
 {
     for(let j=0;j<DIM;j++)
     {
         let _div=document.createElement("div");
         _div.id="btn-"+i+"-"+j;
         _wrapper.appendChild(_div);
     }
 }
 setInterval(visualizza,500);
 function visualizza() {
  reset();
  disegnaCornice();
  livello++;
  /*if(livello==6)*/
  if(livello>DIM/2)
      livello=1;
 }
 function reset() {
     for (let i=0;i<DIM;i++)
     {
         for(let j=0;j<DIM;j++)
         {
             let _btn=document.getElementById("btn-"+i+"-"+j);
             _btn.style.backgroundColor="#CCC";
         }
     }
 }
    function disegnaCornice() {
        /*Disegno le righe*/
        let riga1=livello;
        let riga2=DIM-livello-1;
        for(let j=livello;j<DIM-livello;j++)
        {
            let _btn1=document.getElementById("btn-"+riga1+"-"+j);
            _btn1.style.backgroundColor="#f00";
            let _btn2=document.getElementById("btn-"+riga2+"-"+j);
            _btn2.style.backgroundColor="#f00";
        }
        /*Disegno le colonne*/
        let colonna1=livello;
        let colonna2=DIM-livello-1;
        for(let i=livello;i<DIM-livello;i++)
        {
            let _btn1=document.getElementById("btn-"+i+"-"+colonna1);
            _btn1.style.backgroundColor="#f00";
            let _btn2=document.getElementById("btn-"+i+"-"+colonna2);
            _btn2.style.backgroundColor="#f00";
        }
    }
}
function generaNumero(min,max){
    let n=Math.floor((max-min+1)*Math.random()+min);
    return n;
}