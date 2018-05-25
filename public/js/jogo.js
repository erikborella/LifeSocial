$(document).ready(function(){
   $('.sidenav').sidenav();
   var user;
   $.get("js/logins.json", function(data) {
      user = data[0];
      $("#nomePrincipal").html(`<h5>`+user.dados.nome+` `+user.dados.sobrenome+`</h5>`);
      $("#anos").html(`<a>Idade:  `+user.dados.idade+`</a>`);
      $("#vivo").html(`<a>Dias Vividos: `+user.dados.diasVividos+`</a>`);
    });
  
  


  $(".foto").click(function(){
    $('#file').click();
    $("#file").change(function() {
    	$("#upBotton").click();
    });
  });


  $.get("js/logins.json", function(data) {
  	console.log(data);
  });
  
  
  
});