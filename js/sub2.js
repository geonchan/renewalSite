$(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();//변수 scroll에 현재 스크롤한 만큼의 거리를 저장
    console.log(scroll);
    if(scroll > 20){//스크롤이동값이 20보다 클때
      $(".topbtn").css("display","block");
    }else{//스크롤이동값이 20보다 작을때
      $(".topbtn").css("display","none");
    }
  });

  //top버튼 클릭시
  $(".topbtn").click(function(){
    $(window).scrollTop(0);//스크롤위치값(페이지상단)
  })
});