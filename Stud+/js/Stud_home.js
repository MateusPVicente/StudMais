function voltarAoTopo()
{
     window.scroll({
      top:  0,
      left: 0, 
      behavior: 'smooth'
    });
}

 function hoverSeta()
 {
 	var img = document.getElementById("imagem");
 	img = document.getElementById("imagem").src = "./img/seta2.png";
 }

 function sairHoverSeta()
 {
 	var img = document.getElementById("imagem");
 	img = document.getElementById("imagem").src = "./img/seta.png";
 }


 history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });

 document.getElementById('imga').onmouseover = function()
 {
 	document.getElementById('imga').src = 'img/cadastro2.png'
 }

  document.getElementById('imga').onmouseout = function()
 {
 	document.getElementById('imga').src = 'img/cadastro.png'
 }

 


