$(document).on('click','#cadastro',function(){
  var parametros = {
    "marca": $("#marca").val(),
    "modelo": $("#modelo").val(),
    "ano": $("#ano").val(),
    "cor": $("#cor").val(),
    "valor": $("#valor").val()
  }

  $.ajax({
    type:"post",
    url:"https://crud3i2-dsdan7.c9users.io/cadastra.php",
    data:parametros,
    success:function(data){
      $("#marca").val(" ");
      $("#modelo").val(" ");
      $("#ano").val(" ");
      $("#cor").val(" ");
      $("#valor").val(" ");
      navigator.notification.alert(data);
    },
    error:function(data){
      navigator.notification.alert(data);
    }
  });
});