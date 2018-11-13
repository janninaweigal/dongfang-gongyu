// JavaScript Document
/* public.js | author:1000zhu.com */
jQuery(function(){
	//imgFull
	$(".imgFull").each(function(index, element) {
        $(".imgFull").eq(index).css("background-image", "url(" + $(".imgFull").eq(index).find("img").attr("src") + ")");
    });
	var banner = new Swiper('.banner .swiper-container',{
		loop:true,

		speed:1500,
		//effect : 'fade',
		pagination: '.banner .swiper-pagination',
		paginationClickable :true,
		resizeReInit : true,
		observer:true,
		observeParents:true,		
		onInit: function(swiper){
			swiperAnimateCache(swiper); 
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper);
		}
	});	
	var box1List = new Swiper('.box1List .swiper-container',{
		loop:true,
		autoplay : 4000,
		autoplayDisableOnInteraction : false,
		speed:600,
		slidesPerView:4,
		spaceBetween:32,
		observer:true,
		observeParents:true,
		prevButton:'.box1Prev',
		nextButton:'.box1Next',			
		breakpoints: {
			1400: {
				slidesPerView:4,
				spaceBetween:15,
            },
			1200: {
				slidesPerView:3,
				spaceBetween:15,
            },
            991: {
				slidesPerView:2,
				spaceBetween:30,
            },
            640: {
				slidesPerView:2,
				spaceBetween:15,
            },
            540: {
				slidesPerView:1,
				spaceBetween:15,
            }
        }
	})	
	var box2Lef = new Swiper('.box2Lef .swiper-container', {
		loop:true,
		autoplay : 6000,
		autoplayDisableOnInteraction : false,
		speed:1000,
		spaceBetween: 0,
		effect:"fade",
		prevButton:'.box2Prev',
		nextButton:'.box2Next',
		onSlideChangeStart:function(swiper){
			$(".box2Rig .box2RigImg").eq(swiper.realIndex).addClass("active").siblings().removeClass("active");
		}
	});
    //搜索
	$('.hdSeaBtn').click(function () {

	    var title = $(".ycInput").val();
	    if (title == "") { alert("输入关键字"); return; }
	    window.location.href = "/Search.aspx?title=" + title + "";

	});

	$('.ycInput').keydown(function (e) {
	    if (e.keyCode == 13) {
	        var title = $(".ycInput").val();
	        if (title == "") { alert("输入关键字"); return; }
	        window.location.href = "/Search.aspx?title=" + title + "";
	    }
	});
    //右侧参观提交申请
	$(".messBtn5").click(function () {

	    var mechanism = $("#mechanism").val();
	    var name = $("#name").val();
	    var tel = $("#tel").val();
	    var apartment = $("#apartment").val();
	    var notes = $("#notes").val();

	    if (name.length < 1) { alert("请填写姓名！"); return; }
	    if (tel.length < 1) { alert("请填写您的电话！"); return; }
	    if (mechanism == "") { alert("请选择要参观的机构！"); return; }
	    if (apartment == "") { alert("请选择要参观的房型！"); return; }
	

	    if (!(/^1[3|4|5|8|7|6][0-9]\d{4,8}$/.test(tel))) {
	        alert("请填写正确电话！"); return;
	    }

	    if (notes.length > 100) { alert("留言内容在100字以下！"); return; }
	    $.get("/ajax/message.ashx", {
	        rnd: Math.floor(Math.random() * 9999),
	        handle: "add",
	        apartment: apartment,
	        name: name,
	        tel: tel,
	        mechanism: mechanism,
	        notes: notes

	    }, function (data, textStatus) {
	        if (textStatus == "success") {
	            if (data == "1") {
	                alert("提交成功！");
	                location.reload();
	            }
	            else { alert("系统错误，请稍后再试！"); location.reload(); }
	        }
	    });
	});
    //内页参观提交申请
	$(".messBtn3").click(function () {

	    var mechanism = $("#mechanism3").val();
	    var name = $("#name3").val();
	    var tel = $("#tel3").val();
	    var apartment = $("#apartment3").val();
	    var notes = $("#notes3").val();
	
	    if (name.length < 1) { alert("请填写姓名！"); return; }
	    if (tel.length < 1) { alert("请填写您的电话！"); return; }
	    if (mechanism == "") { alert("请选择要参观的机构！"); return; }
	    if (apartment == "") { alert("请选择要参观的房型！"); return; }


	    if (!(/^1[3|4|5|8|7|6][0-9]\d{4,8}$/.test(tel))) {
	        alert("请填写正确电话！"); return;
	    }
	   
	    if (notes.length > 100) { alert("留言内容在100字以下！"); return; }
	    $.get("/ajax/message.ashx", {
	        rnd: Math.floor(Math.random() * 9999),
	        handle: "add",
	        apartment: apartment,
	        name: name,
	        tel: tel,
	        mechanism: mechanism,
	        notes: notes

	    }, function (data, textStatus) {
	        if (textStatus == "success") {
	            if (data == "1") {
	                alert("提交成功！");
	                location.reload();
	            }
	            else { alert("系统错误，请稍后再试！"); location.reload(); }
	        }
	    });
	});
    //机构选择
	$(".mechanism li").on("click", function () {

	    var pkid = $(this).attr("data-index");
	    $.get("/ajax/loadcase.ashx", {
	        rnd: Math.floor(Math.random() * 9999),
	        handle: "add",
	        pkid: pkid
	      
	    }, function (data, textStatus) {
	        if (textStatus == "success") {
	         
	                $(".apartment").html(data);
	         
	        }
	    });
	})
    //重新填写
	$('.messBtn4').click(function () {

	    $("#apartment3").val("");
	    $("#name").val("");
	    $("#tel").val("");
	    $(".messTit").html("请选择");
	    $("#notes").val("");

	});
    //重新填写
	$('.messBtn6').click(function () {

	    $("#mechanism").val("");
	    $("#name").val("");
	    $("#tel").val("");
	    $(".messTit").html("请选择");
	    $(".apartment").html("");
	    $("#apartment").val("");
	    $("#notes").val("");

	});
	$(".box2Rig .box2RigImg").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var box2Index = $(this).index()+1;
		 box2Lef.slideTo(box2Index, 1000, false);
	})	
	$(".box2Rig .box2RigImg").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });	
	$(".box3List li").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });
	$(".box5List li").each(function(index, element) {
        $(this).css("transition-delay",index*2/10+"s");
    });	
	$(".box6List li").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });
	$(".box7List li").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });	
	$(".proList li").each(function(index, element) {
        $(this).attr("data-wow-delay",index/20+"s");
    });
	$(".proList3 li").each(function(index, element) {
        $(this).attr("data-wow-delay",index/20+"s");
    });
	$(".artList li").each(function(index, element) {
        $(this).attr("data-wow-delay",index/20+"s");
    });
	$(".vrList li").each(function(index, element) {
        $(this).attr("data-wow-delay",index/20+"s");
    });	
	//histroy	
	//$(".hisItem").eq(0).show().siblings().hide();
	if($(".hisTop .swiper-slide").length<7&&$(".hisTop .swiper-slide").length>1){
		var hisTopHtml = $(".hisTop .swiper-wrapper").html();
		$(".hisTop .swiper-wrapper").append(hisTopHtml);
		$(".hisTop .swiper-wrapper").append(hisTopHtml);
		$(".hisTop .swiper-wrapper").append(hisTopHtml);
		var hisBotHtml = $(".hisBot").html();
		$(".hisBot").append(hisBotHtml);
		$(".hisBot").append(hisBotHtml);
		$(".hisBot").append(hisBotHtml);
	}
	if($(".hisTop .swiper-slide").length>1){
		var histroyTop = new Swiper('.hisTop .swiper-container',{
			loop:true,
			resizeReInit:true,
			resizeReInit:true,
			observer:true,
			observeParents:true,
			slideToClickedSlide: true,	
			centeredSlides : true,
			initialSlide :3,	
			slidesPerView:7,
			prevButton:'.hisPrev',
			nextButton:'.hisNext',
			breakpoints: {
				992: {
					slidesPerView:5,
				},
				640: {
					slidesPerView:3,
				}
			},
			onSlideChangeEnd: function(swiper){
				$(".hisItem").eq(swiper.realIndex).show().addClass('fadeInRight animated').siblings().hide();
			}
		});
	}else{
		var histroyTop = new Swiper('.hisTop .swiper-container',{
			resizeReInit:true,
			resizeReInit:true,
			observer:true,
			observeParents:true,
			slideToClickedSlide: true,	
			centeredSlides : true,
			initialSlide :1,	
			slidesPerView:1,
			prevButton:'.hisPrev',
			nextButton:'.hisNext',
			onSlideChangeEnd: function(swiper){
				$(".hisItem").eq(swiper.realIndex).show().addClass('fadeInRight animated').siblings().hide();
			}
		});
	}	
	$(".pro3BotTab li").click(function(){
		var clickNum = $(this).index();
		$("html,body").animate({scrollTop:$(".pro3BotCon .pro3BotItem").eq(clickNum).offset().top-$(".headerBg").height()}, 800);	
	})
	$(".proTop li").click(function(){
		var clickNum = $(this).index();
		$("html,body").animate({scrollTop:$(".proBot .proBox").eq(clickNum).offset().top-$(".headerBg").height()}, 800);	
	})	
	var conTop = new Swiper('.conTop .swiper-container',{
		loop:true,
		resizeReInit:true,
		resizeReInit:true,
		observer:true,
		observeParents:true,
		slidesPerView:4,
		spaceBetween:40,
		prevButton:'.conPrev',
		nextButton:'.conNext',
		breakpoints: {
			1400: {
				slidesPerView :4,	
				spaceBetween:25,
			},
			1200: {
				slidesPerView :3,	
				spaceBetween:25,
			},
			992: {
				slidesPerView :2,	
				spaceBetween:25,
			},
			640: {
				slidesPerView :2,	
				spaceBetween:10,
			},
			550: {
				slidesPerView :1,	
				spaceBetween:10,
			}
		}
	});
	//join
	$(".joinList li h3").click(function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).parent().find(".joinText").slideUp();
			$(this).find(".joinS4 i").addClass("fa-angle-down").removeClass("fa-angle-up");
			$(this).find(".joinS4 b").html("展开");
		}else{
			$(".joinList li").removeClass("active");
			$(this).parent().addClass("active");	
			$(".joinText").slideUp();
			$(this).parent().find(".joinText").slideDown();
			$(this).find(".joinS4 i").addClass("fa-angle-up").removeClass("fa-angle-down");
			$(this).find(".joinS4 b").html("收起");
		}
	})
	//
	if($(".banSlider .swiper-slide").length>1){
		var banSlider = new Swiper('.banSlider .swiper-container',{
			loop:true,
			autoplay:6000,
			autoplayDisableOnInteraction : false,
			speed:1000,
			resizeReInit:true,
			resizeReInit:true,
			observer:true,
			observeParents:true,
			pagination: '.banSlider .swiper-pagination',
			paginationClickable :true,
			autoHeight: true,
		});
	}else{
		$(".banSlider").addClass("none");
	}	
	$(".proBoxTs li").each(function(index, element) {
        $(this).attr("data-wow-delay",index/10+"s");
    });	
	function videoAuto(){
		var videoW = $(".mvLayer"). outerWidth();
		var videoH = videoW*(10/16);
		$(".mvLayer iframe").height(videoH);
		var marT = -(videoH/2);
		var marL = -(videoW/2);
		$(".mvLayer").css({"margin-top":marT,"margin-left":marL});
	}	
	videoAuto();
	$(".mvLayer i").click(function () {
		$(".mvLayer,.mvLayerBg").fadeOut(600);
		$("#mPPmv").attr("src", "");
	});
	$(".mvLayerBg").click(function () {
		$(".mvLayer,.mvLayerBg").fadeOut(600);
		$("#mPPmv").attr("src", "");
	});		
	$(".videoLink").click(function (event) {
		$(".mvLayer,.mvLayerBg").fadeIn(600);
		$("#mPPmv").attr("src",($(this).attr("src")));
		event.stopPropagation();
	});	
	var ghyBox3List = new Swiper('.ghyBox3List .swiper-container',{
		loop:true,
		resizeReInit:true,
		resizeReInit:true,
		observer:true,
		observeParents:true,
		slidesPerView:4,
		spaceBetween:24,
		prevButton:'.ghyBox3List .conPrev',
		nextButton:'.ghyBox3List .conNext',
		breakpoints: {
			1400: {
				slidesPerView :4,	
				spaceBetween:15,
			},
			1200: {
				slidesPerView :3,	
				spaceBetween:25,
			},
			992: {
				slidesPerView :2,	
				spaceBetween:25,
			},
			640: {
				slidesPerView :2,	
				spaceBetween:10,
			},
			550: {
				slidesPerView :1,	
				spaceBetween:10,
			}
		}
	});
	var ghyBox4List = new Swiper('.ghyBox4List .swiper-container',{
		loop:true,
		resizeReInit:true,
		resizeReInit:true,
		observer:true,
		observeParents:true,
		slidesPerView:4,
		spaceBetween:24,
		prevButton:'.ghyBox4List .conPrev',
		nextButton:'.ghyBox4List .conNext',
		breakpoints: {
			1400: {
				slidesPerView :4,	
				spaceBetween:15,
			},
			1200: {
				slidesPerView :3,	
				spaceBetween:25,
			},
			992: {
				slidesPerView :2,	
				spaceBetween:25,
			},
			640: {
				slidesPerView :2,	
				spaceBetween:10,
			},
			550: {
				slidesPerView :1,	
				spaceBetween:10,
			}
		}
	});	
	$(".ghyBox5List li").each(function(index, element) {
        $(this).attr("data-wow-delay",index/10+"s");
    });	
	//message
	$(".messTit").on("click",function(event){
		//$(".caseTopUl").slideToggle();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).next(".messUl").slideUp();
		}else{
			$(".messTit").removeClass("active");
			$(".messUl").hide();
			$(this).addClass("active");
			$(this).next(".messUl").slideDown();
		}
		event.stopPropagation();
	})
	$(document).on("click", ".messUl li", function (event) {
	    $(".messTit").removeClass("active");
	    $(".messUl").slideUp();
	    $(this).parent().prev(".messTit").text($(this).text());
	    $(this).parent().next("input").val($(this).attr("data-index"));
	})
	$(window).on("click",function(){
		$(".messUl").slideUp();
		$(".messTit").removeClass("active");
	})	
	$(".bookingBtn").click(function(event){
		$(".bookIngMask").fadeIn();
		$(".bookingBox").fadeIn();
		$('html,body').animate({scrollTop:0},0);	
		event.stopPropagation();
	})
	$(".bookIngMask").click(function(event){
		$(".bookIngMask").fadeOut();
		$(".bookingBox").fadeOut();
		event.stopPropagation();
	})
	$(".bookingClose").click(function(event){
		$(".bookIngMask").fadeOut();
		$(".bookingBox").fadeOut();
		event.stopPropagation();
	})	
	$(".top").click(function(){
		$('html,body').animate({scrollTop:0}, 800);	
	})	
	function myhegiht(divW,divN){
		var $columns = $(divW).find("li");
		var contact_inforH = 0;
		$columns.each(function(){
			if($(this).find(divN).height() > contact_inforH){
				contact_inforH = $(this).find(divN).height()
			}
		});
		$columns.height(contact_inforH);
	}
	myhegiht(".proBox3Con",".proBox3Text");	
	
	$("nav.navbar.bootsnav.no-full .navbar-collapse").css("max-height",$(window).height()-$(".navRig").height());
	
	function equip() {
		var sUserAgent = navigator.userAgent.toLowerCase(); 
		if((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
			$(".ycInput").focus(function(){$(".headerBg").css("position","absolute");})
			$(".ycInput").focus(function(){$(".headerBg").css("position","fixed");})			  
		}
	}
	equip();	
	$(window).resize(function(){
		videoAuto();
		myhegiht(".proBox3Con",".proBox3Text");
		equip();
	})
})
//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});