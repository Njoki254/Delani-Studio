
$(document).ready(function(){
  $("form#form34A").submit(function(event){
    // event.preventDefault();
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
  $("#development-image").click(function(){
    $("#development-image").hide();
    $("#development").show();

  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").hide();
    $("#design").show();

  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").hide();
    $("#product").show();

  })

//Project Portfolios Hover functions

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
