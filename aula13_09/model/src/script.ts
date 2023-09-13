class Cabecalho extends HTMLElement{
constructor(){
super();
this.innerHTML = `
<a href="../html/turmasprof.html">   
<img class="Rectangle1" src="/view/img/logo-senai1.png"></a>
<div class="Ellipse1"></div>
<div class="Professor">Professor</div>
`


}

}

customElements.define('cabecalho-simples', Cabecalho)