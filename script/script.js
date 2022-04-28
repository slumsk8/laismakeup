$(function () {
  $(".sidenav").sidenav(); 
  $(".container").load("./home.html");
});

$(document).ready(function () {    
  $("#home").click(function () {
    $(function () {      
      $(".container").load("./home.html")                             
    });
  })
  $("#noivas").click(function () {
    $(function () {      
      $(".container").load("./noivas.html");                        
    });
  })
  $("#noivass").click(function () {
    $(function () {      
      $(".container").load("./noivas.html");                  
    });
  })
  $("#projetos").click(function () {
    $(function () {
      $(".container").load("./projetos.html");
    });
  })
  $("#projetoss").click(function () {
    $(function () {
      $(".container").load("./projetos.html");
    });
  })
  $("#studio").click(function () {
    $(function () {
      $(".container").load("./studio.html");
    });
  })
  $("#studios").click(function () {
    $(function () {
      $(".container").load("./studio.html");
    });
  })
  $("#contatos").click(function () {
    $(function () {
      $(".container").load("./contato.html");
    });
  })  
  $("#contatoss").click(function () {
    $(function () {
      $(".container").load("./contato.html");
    });
  })  
});


