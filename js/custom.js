$(function(){
  var count = 0;
  $(".left").click(function(){
    count += 45;
    spin();
  });

  $(".right").click(function(){
    count -= 45;
    spin();
  });

  function spin(){
    var remainder = count % 45;
    count -= remainder;
    $(".bestbox").css("transform","rotateY("+count+"deg)");
  }


  var timer = setInterval(rotate,30);
  function rotate(){
    count += 0.5;
    $(".bestbox").css("transform","rotateY("+count+"deg)");
  }


  $("#BestProduct > .wrap").hover(
    function(){
      clearInterval(timer);
    },function(){
      timer = setInterval(rotate,50);
    }
  );

  $(".imgDrag").on("mousewheel",function(e){
    e.preventDefault();//window의 마우스휠이벤트를 제거
    var delta = e.originalEvent.deltaY 
    var drag = document.querySelector(".imgDrag");
    var pos = drag.scrollLeft
    if(delta > 0){
      pos += 40;
      drag.scrollLeft = pos
    }else{
      pos -= 40
      drag.scrollLeft = pos
    }
  })
  //review END

    //변수에 이미지의 갯수에 1을 뺀 값을 담는다.(1을 뺀 이유는 인덱스번호와 동일한 값으로 쓰기위해서)
    var leng = $("#banner .wrap  div").length-1;
    //왼쪽 슬라이드 효과
    var slideloop = setInterval(slide,5000);

    $("#banner .next,#banner .prev").mouseover(function(){
      clearInterval(slideloop);
    });

    $("#banner .next,#banner .prev").mouseout(function(){
      slideloop = setInterval(slide,5000);
    });

    function slide(){
      if($("#banner .wrap").is(":animated")) return false;
      var first = $("#banner .wrap  div:first");
      $("#banner .wrap").animate({"left":"-100%"},500,function(){
        $(this).append(first).css("left",0);
      })
    }
    //오른쪽 화살표버튼 클릭시
    $("#banner .next").click(function(e){
      e.preventDefault();
      slide();
    });


    //왼쪽 화살표버튼 클릭시
    $("#banner .prev").click(function(e){
      e.preventDefault();
      if($("#banner .wrap").is(":animated")) return false;
      var last = $("#banner .wrap  div:last");
      $("#banner .wrap").css("left","-100%").prepend(last).animate({"left":0},500)
    });

    $(window).scroll(function(){//window객체에 스크롤 이벤트 발생
      var scroll = $(window).scrollTop();//변수 scroll에 현재 스크롤한 만큼의 거리를 저장
      console.log(scroll);
      if(scroll > 20){//스크롤이동값이 20보다 클때 구문실행
        $(".topbtn").css("display","block");//버튼요소를 화면에 표시
      }else{//스크롤이동값이 20보다 작을때 구문실행
        $(".topbtn").css("display","none");//버튼요소를 화면에서 제거
      }
    });

    //top버튼 클릭시
    $(".topbtn").click(function(){
      $(window).scrollTop(0);//window객체의 스크롤위치값을 0(페이지상단)으로 설정
    })
});