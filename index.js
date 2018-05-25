$(function() {
  for (var i = 0; i <= 15; i++) {
    $(".box").append("<div class='muri " + i + "'>むりくぼぉぉ。。。</div>")
    Random($("." + i + ""))
  }
  function Random(test){
    var start = Math.round( Math.random()*10 );
    var x = Math.round( Math.random()*100 );
    var y = Math.round( Math.random()*100 );
    test.css("animation-delay", "" + start + "s");
    test.css("transform", "translate(" + x + "vw," + y + "vh)");
  }
}())
