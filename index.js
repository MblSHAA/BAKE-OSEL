$(document).ready(function () {
  $("#btn1").on("click", function () {
    $(".div-js").html(
      "<div id='btn2' class='box-btn2'><h3>Нажми на меня что бы понять</h3><h3>Что БАКЕ голубой</h3></div>"
    );
    $("#btn2").on("click", function () {
      $(".bake").html(
        "<b style='color: aqua'>BAKE LOX</b> <input type='checkbox' name='checkosel' id='checkosel' /> <label for='checkosel'><div style='color: black' id='btn3' class='box-btn'><h3>Нажми на меня что бы понять</h3><h3>Что БАКЕ Осел</h3></div></label><img id='osel' src='./Screenshot_1.png' />"
      );
    });
  });
});
$(document).ready(function () {
  $("#bton3").on("click", function () {
    $(".boka").html("<img src='./Screenshot_1.png'>");
  });
});
