
	
	var estrutura = "";
	var HTML = "";

	document.getElementById('btnQuest').onclick = function()
	{
		var input = document.getElementById('quest').value;

		if(input == "")
			alert("Digite uma pergunta válida!");
		else
			estrutura += "<div id='quadro' class='container col s12 m6'><div class='col s12 m6'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'><i class='medium material-icons' id='face' >face</i> <p class='nome' >NOMEUSUARIO</p></span><p>"+input+"</p></div></div></div></div>"

		    HTML += "<!DOCTYPE html><html><title>Stud+ | Home</title><head>" +
		    '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
      		'<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>' +
      		'<meta name="viewport" content="width=device-width, initial-scale=1.0"/>' +
      		'<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>' +
      		'<link rel="shortcut icon" type="image/x-icon" href="./Icon.ico">' +
      		'<link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">' +

      		'<link rel="stylesheet" type="text/css" href=".\css\Stud_home.css">' +
      		'<link rel="stylesheet" type="text/css" href=".\css\Stud_modelo.css">' +
    		'</head>' +
    		'<body>' +

  			'<nav>' +
   		 	'<img class="header" class="responsive-img" src="./img/fundo3.png">' + 
    		'<div class="nav-wrapper container">' +
      		'<a href="#" class="brand-logo"><img class="logo" src=".\img\Logo_Oficial.png"></a>' +
      		'<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>' +
      		'<ul class="right hide-on-med-and-down">' +
        	'<li><a href="homeLOGADO.html">HOME</a></li>' +
        	'<li><a href="sobreLOGADO.html">SOBRE</a></li>' +
        	'<li><a href="tarefa.html">TAREFAS</a></li>' +
        	'<li><a>BEM-VINDO, NOMEUSUARIO</a></li>' +
      		'</ul>' +
    		'</div>' +
  			'</nav>' +

  			'<ul class="sidenav" id="mobile-demo">' +
    		'<li><a href="">HOME</a></li>' +
    		'<li><a href="sobre.html">SOBRE</a></li>' +
    		'<li><a href="tarefa.html">TAREFAS</a></li>' +
    		'<li><a class="blue-text">BEM-VINDO, NOMEUSUARIO</a></li>' +
  			'</ul>' +

  			'<div class="fixed-action-btn">' +
  			'<a id="menu" class="waves-effect waves-light btn-large pulse btn-floating btn modal-trigger" href="#modal1" ><i class="material-icons">tune</i></a>' +
  			'</div>' +

  			'<div id="modal1" class="modal">' +
     		'<div class="modal-content">' +
        	'<h4>MENU DE OPÇÕES</h4>' +
        
      		'<a href="home-forum.html" class="waves-effect waves-light btn-large"><i class="material-icons left">forum</i>FÓRUM</a>' +
      		'<a href="novaTarefa.html" class="waves-effect waves-light btn-large"><i class="material-icons left">add_box</i>NOVA TAREFA</a>' +
      		'<a class="waves-effect waves-light btn-large"><i class="material-icons left">feedback</i>DICAS</a>' +
      		'<a href="home.html" class="waves-effect waves-light btn-large"><i class="material-icons left">exit_to_app</i>SAIR</a>' +

      		'</div>' +
    		'</div>' +

  			'<div id="quadro" class="container col s12 m6">' +
    		'<div class="col s12 m6">' +
      		'<div class="card white darken-1">' +
        	'<div class="card-content black-text">' +
          	'<span class="card-title"><i class="medium material-icons" id="face" >face</i> <p class="nome" >NOMEUSUARIO</p></span>'+
          	'<p id="pergunta">PERGUNTA: Lorem ipsum elit venenatis sapien dictum diam, quisque donec ullamcorper blandit varius turpis faucibus, adipiscing faucibus praesent platea hac. iaculis placerat tempor viverra velit rhoncus quisque, quis potenti neque torquent enim etiam ipsum, interdum orci senectus potenti cras.</p>'+
        	'</div>' +
      		'</div>' +
    		'</div>' +
  			'</div>' +

  			'<br><br><br>' +
  			'<h2>RESPOSTAS:</h2>' +

  			'<div id="respostas"></div>' +

  			'<div id="quadro" class="container col s12 m6">' +
    		'<div class="col s12 m6">' +
      		'<div class="card white darken-1">' +
        	'<div class="card-content black-text">' +
          
          
            '<div class="row">' +
            '<form class="col s12">' +
	         '<div class="row">' +
	         '<div class="input-field col s12">' +
	         '<textarea id="textarea1" class="materialize-textarea"></textarea>' +
	         '<label for="textarea1">Sabe a resposta? Escreva-a aqui para ajudar!</label>' +
	         '</div>' +
	         '</div>' +
	         '</form>' +
	         '</div>' +

             '<button class="container btn waves-effect waves-light">RESPONDER</button>' +

        	'</div>' +
      		'</div>' +
    		'</div>' +
  			'</div>' +
      
		    '</body>' +
		    '<script type="text/javascript" src="js/materialize.min.js"></script>' +
		    '<script type="text/javascript" src="js/Stud_navbar.js"></script>' +
		    '<script type="text/javascript" src="js/Stud_paralax.js"></script>' +
		    '<script type="text/javascript" src="js/Stud_home.js"></script>' +
		    '<script type="text/javascript" src="js/Stud_modal.js"></script>' +
		    '<script type="text/javascript" src="js/Stud_modelo.js"></script>' +
  			'</html>';

			 document.getElementById('group').innerHTML = estrutura;	
	}