$( document ).ready(function(){$(".button-collapse").sideNav();});

document.write(
'<nav>'+
    '<div style="background-color:#563C4E;" class="nav-wrapper">'+
      '<a href="index.html" class="brand-logo"><img id="logo" src="res/img/logo_text.png"/></a>'+
      '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>'+
      '<ul class="right hide-on-med-and-down">'+
        '<li><a href="game.html">Jeu</a></li>'+
        '<li><a href="team.html">Équipe</a></li>'+
        '<li><a href="http://172.17.104.123/">Site Officiel</a></li>'+
      '</ul>'+
      '<ul class="side-nav" id="mobile-demo">'+
        '<li><a href="game.html">Jeu</a></li>'+
        '<li><a href="team.html">Équipe</a></li>'+
        '<li><a href="http://172.17.104.123/">Site Officiel</a></li>'+
      '</ul>'+
    '</div>'+
  '</nav>'
);