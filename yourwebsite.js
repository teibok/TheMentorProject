now=1;
next=2;
count=$("#scrollbar > a").length;

$(document).ready(function(){
  $("#bar").on("click",function(){
    $(".uppernavbar").slideToggle(200);
  });

  $("#scrollbar").on("mouseover",function(){
    stopSlider();
    $("#usercontrols").fadeIn(50);
  }).on("mouseleave",function(){
    $("#usercontrols").fadeOut(50);
    $("#scrollbar > a").fadeOut(300);
    otherSlider(next);
  });

  $("#scrollbar > a#1").fadeIn(300);
  slider();

  $("#leftbtn").on("click",function(){
    $("#scrollbar > a").fadeOut(300);
    otherSlider(now-1);
  });

  $("#rightbtn").on("click",function(){
    $("#scrollbar > a").fadeOut(300);
    otherSlider(now+1);
  });

});

function slider(){
  loop=setInterval(function(){
    if(next > count){
      next=1;
      now=1;
    }
    $("#scrollbar > a").fadeOut(300);
    $("#scrollbar > a#"+next).fadeIn(300);
    now=next;
    next+=1;
  },3000);
}

function otherSlider(where){
  stopSlider();
  if(where>count){
    where=1;
  }else if(where<1){
    where=count;
  }

  $("#scrollbar > a#"+where).fadeIn(300);

  now=where;
  next=where+1;

  slider();
}

function stopSlider(){
  window.clearInterval(loop);
}

