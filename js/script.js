
$(document).ready(function(){
  $("form#form34A").submit(function(event){
    var name = $("input#clientname").val();
    var email = $("input#emailA").val();
    var message = $("textarea#comment").val();
    if ($("input#clientname").val() && $("input#emailA").val()){
      alert ("We have received your response and will get back to you soon. Cheers!");
    }
    else {
      alert("Please enter your name and email address!");
    }

  });

});

$(document).ready(function(){
  $("#dev-image").click(function(){
    $("#development").show(500);
    $("#dev-image").hide(500);
  });
  $("#development").click(function(){
    $("#dev-image").show(500);
    $("#development").hide(500);
  });
});

$(document).ready(function(){
  $("#des-image").click(function(){
    $("#design").show(500);
    $("#des-image").hide(500);
  });
  $("#design").click(function(){
    $("#des-image").show(500);
    $("#design").hide(500);
  });
});

$(document).ready(function(){
  $("#prod-image").click(function(){
    $("#product").show(500);
    $("#prod-image").hide(500);
  });
  $("#product").click(function(){
    $("#prod-image").show(500);
    $("#product").hide(500);
  });
});

$(document).ready(function(){
  $("#work1").mouseenter(function(){
    $("#overlay").show(1000);
  }).mouseleave(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseenter(function(){
    $("#overlay2").show(1000);
  }).mouseleave(function(){
    $("#overlay2").hide(1000);
  });
});
$(document).ready(function(){
  $("#work3").mouseenter(function(){
    $("#overlay3").show(1000);
  }).mouseleave(function(){
    $("#overlay3").hide(1000);
  });
});
$(document).ready(function(){
  $("#work4").mouseenter(function(){
    $("#overlay4").show(1000);
  }).mouseleave(function(){
    $("#overlay4").hide(1000);
  });
});

$(document).ready(function(){
  $("#work5").mouseenter(function(){
    $("#overlay5").show(1000);
  }).mouseleave(function(){
    $("#overlay5").hide(1000);
  });
  $("#work6").mouseenter(function(){
    $("#overlay6").show(1000);
  }).mouseleave(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseenter(function(){
    $("#overlay7").show(1000);
  }).mouseleave(function(){
    $("#overlay7").hide(1000);
  });
  $("#work8").mouseenter(function(){
    $("#overlay8").show(1000);
  }).mouseleave(function(){
    $("#overlay8").hide(1000);
  });
});
