function esconderInicio() {
    $("#inicio").hide();
    
    $("#comida").hide();
    $("#saude").hide();
    
    $("#lixo").hide();
    $("#fastfood").hide();
    $("#hotdog").hide();
    $("#casacomer").hide();
    $("#restaurante").hide();
    $("#chef").hide();

    $("#lixorem").hide();
    $("#casarem").hide();
    $("#apronto").hide();
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide();
}
function esconderTrabalho() {
    $("#trab").hide();
    
    $("#desonesto").hide();
    $("#honesto").hide();
    
    $("#rdinheiro").hide();
    $("#rjoias").hide();
    $("#rroupas").hide();
    $("#rcelular").hide();
    $("#banco").hide();
    $("#politico").hide();

    $("#caridade").hide();
    $("#comunitario").hide();
    $("#empacotador").hide();
    $("#professor").hide();
    $("#programador").hide();
    $("#sociologo").hide();
}
function esconderEscola() {
    $("#school").hide();
    
    $("#faculdade").hide();
    $("#mestrado").hide();
    $("#doutorado").hide();
    
    $("#sociologia").hide();
    
    $("#exclusao").hide();
    $("#filan").hide();
    $("#publicpolitic").hide();
    $("#edusocial").hide();
    $("#ambientesocial").hide();

    $("#phd").hide();
    $("#sociotec").hide();
    $("#cienciassociais").hide();
    $("#socioeco").hide();
    $("#socioind").hide();
}
function esconderMercado() {
    $("#mercado").hide();
    
    $("#supermercado").hide();
    $("#casa").hide();
    $("#carro").hide();
    $("#utencilios").hide();
    
    $("#ccomida").hide();
    $("#cremedio").hide();

    $("#quitinete").hide();
    $("#apartamento").hide();
    $("#casapq").hide();
    $("#casamd").hide();
    $("#casagd").hide();
    $("#mansao").hide();

    $("#antigo").hide();
    $("#seminovo").hide();
    $("#popular").hide();
    $("#esportivo").hide();
    $("#altaclasse").hide();

    $("#mobilia").hide();
    $("#cubo").hide();
    $("#computador").hide();
    $("#livros").hide();
    $("#escrivaninha").hide();
    $("#tv").hide();
}
function esconderTudo() {
    esconderInicio();
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
}
$(document).ready(function(){ 
    esconderTudo();
});
$("#iniciob").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
    $("#inicio").show(500);   
  });
  $("#trabb").click(function() {
    esconderInicio();
    esconderEscola();
    esconderMercado();
    $("#trab").show(500);   
  });
  $("#schoolb").click(function() {
    esconderTrabalho();
    esconderInicio();
    esconderMercado();
    $("#school").show(500);   
  });
  $("#mercadob").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderInicio();
    $("#mercado").show(500);   
  });
  $("#comidab").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
    $("#saude").hide(500);
    $("#comida").show(500);   
  });
  $("#saudeb").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
    $("#comida").hide(500);
    $("#saude").show(500);   
  });
  $("#lixob").click(function() {
    $("#hotdog").hide(); 
    $("#fastfood").hide();
    $("#casacomer").hide();
    $("#restaurante").hide();  
    $("#chef").hide(); 
    $("#lixo").show(500); 
  });
  $("#fastfoodb").click(function() {  
    $("#hotdog").hide(); 
    $("#lixo").hide();   
    $("#casacomer").hide();
    $("#restaurante").hide(); 
    $("#chef").hide();  
    $("#fastfood").show(500);    
  });
  $("#hotdogb").click(function() {
    $("#lixo").hide(); 
    $("#casacomer").hide();
    $("#fastfood").hide();
    $("#restaurante").hide();
    $("#chef").hide();   
    $("#hotdog").show(500);   
  });
  $("#ccasab").click(function() {
    $("#hotdog").hide(); 
    $("#lixo").hide(); 
    $("#fastfood").hide();
    $("#restaurante").hide(); 
    $("#chef").hide();  
    $("#casacomer").show(500);   
  });
  $("#restauranteb").click(function() {
    $("#hotdog").hide(); 
    $("#lixo").hide(); 
    $("#casacomer").hide();
    $("#fastfood").hide();
    $("#chef").hide(); 
    $("#restaurante").show(500);   
  });
  $("#chefb").click(function() {
    $("#hotdog").hide(); 
    $("#lixo").hide(); 
    $("#casacomer").hide();
    $("#fastfood").hide();
    $("#restaurante").hide(); 
    $("#chef").show(500);   
  });
  $("#rlixob").click(function() {
    $("#casarem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#lixorem").show(500);   
  });
  $("#rcasab").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#casarem").show(500);   
  });
  $("#prontosocorrob").click(function() {
    $("#casarem").hide(); 
    $("#lixorem").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#apronto").show(500);   
  });
  $("#clinicab").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#casarem").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#clinica").show(500);   
  });
  $("#medicab").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#casarem").hide();
    $("#hospital").hide(); 
    $("#medic").show(500);   
  });
  $("#hospitalb").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#casarem").hide(); 
    $("#hospital").show(500);   
  });




