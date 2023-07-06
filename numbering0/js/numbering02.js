// 상단 슬라이드 메뉴바
$(function(){
    $(".nav1 >li >a").on("mouseenter",function(){
        $(".nav1 li a").css("background","none");
        $(".sub").stop().slideUp(500);

        $(this).next().stop().slideDown(500);
    });
    //마우스 가져대면 메뉴판 배경, 글꼴, 메뉴판 내려오기
       $(".pcmenu").on("mouseleave",function(){
        $(".sub").stop().slideUp(500);
       });
       //슬라이드 올려서 메뉴판 올리기
    });

//상단메뉴바 언어 아이콘
$(function(){
    $(".k-tmenu>ul>li>a").mouseenter(function(){
        $(this).next().stop().slideDown(500);
    });

    $(".k-tmenu>ul>li").mouseleave(function(){
        //$(".sub",this).stop().slideUp(500);
        //$("this").children(".sub").stop().slideUp(500);
        //위에 두가지로도 적용가능 밑에 값이랑 다 같은 의미
        $(this).find(".k-sub2").stop().slideUp(500);
    });
});

