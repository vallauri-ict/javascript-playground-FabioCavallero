"use strict"
const  DIM=10;
window.onload=function(){
  let _body=document.getElementsByTagName("body")[0];
  let _table=document.createElement("table");
  _table.style.textAlign="center"; //Centratura contenuto
  _table.style.margin="0 auto";//Centratura tabella rispetto al genitore
  _body.appendChild(_table);
  //Creazione celle
    for(let i=0;i<DIM;i++)
    {
        let _tr = document.createElement("tr");
        _table.appendChild(_tr);
        for(let j=0;j<DIM;j++)
        {
            let _td= document.createElement("td");
            _tr.appendChild(_td);
            let _btn=document.createElement("button");
            _btn.classList.add("btnStyle");
            _btn.setAttribute("id","btn-"+i+"-"+j);
            _btn.addEventListener("click",visualizza);
            _td.appendChild(_btn);
        }
    }
    function visualizza() {
        //Lettura coordinate
        let id=this.getAttribute("id");
        id=id.split("-");
        let i=id[1];
        let j=id[2];
        this.innerHTML=i+" - "+ j; //Visualizzazione
        this.style.backgroundColor="red";
        this.disabled=true;
    }
}
function generaNumero(min,max){
    let n=Math.floor((max-min+1)*Math.random()+min);
    return n;
}