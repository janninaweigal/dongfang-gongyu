$().ready(function(){
	/*新闻列表*/
	$("#newsitem1").mouseover(function(){
		$("#newspic1").removeClass("newsitem-img-smaller");
		$("#newspic1").addClass("newsitem-img-larger");
		$("#news-title1").addClass("news-title");
	});
	$("#newsitem1").mouseleave(function(){
		$("#newspic1").addClass("newsitem-img-smaller");
		$("#newspic1").removeClass("newsitem-img-larger");
		$("#news-title1").removeClass("news-title");
	});
	$("#newsitem2").mouseover(function(){
		$("#newspic2").removeClass("newsitem-img-smaller");
		$("#newspic2").addClass("newsitem-img-larger");
		$("#news-title2").addClass("news-title");
	});
	$("#newsitem2").mouseleave(function(){
		$("#newspic2").addClass("newsitem-img-smaller");
		$("#newspic2").removeClass("newsitem-img-larger");
		$("#news-title2").removeClass("news-title");
	});
	$("#newsitem3").mouseover(function(){
		$("#newspic3").removeClass("newsitem-img-smaller");
		$("#newspic3").addClass("newsitem-img-larger");
		$("#news-title3").addClass("news-title");
	});
	$("#newsitem3").mouseleave(function(){
		$("#newspic3").addClass("newsitem-img-smaller");
		$("#newspic3").removeClass("newsitem-img-larger");
		$("#news-title3").removeClass("news-title");
	});
	$("#newsitem4").mouseover(function(){
		$("#newspic4").removeClass("newsitem-img-smaller");
		$("#newspic4").addClass("newsitem-img-larger");
		$("#news-title4").addClass("news-title");
	});
	$("#newsitem4").mouseleave(function(){
		$("#newspic4").addClass("newsitem-img-smaller");
		$("#newspic4").removeClass("newsitem-img-larger");
		$("#news-title4").removeClass("news-title");
	});
	$("#newsitem5").mouseover(function(){
		$("#newspic5").removeClass("newsitem-img-smaller");
		$("#newspic5").addClass("newsitem-img-larger");
		$("#news-title5").addClass("news-title");
	});
	$("#newsitem5").mouseleave(function(){
		$("#newspic5").addClass("newsitem-img-smaller");
		$("#newspic5").removeClass("newsitem-img-larger");
		$("#news-title5").removeClass("news-title");
	});
	$("#newsitem6").mouseover(function(){
		$("#newspic6").removeClass("newsitem-img-smaller");
		$("#newspic6").addClass("newsitem-img-larger");
		$("#news-title6").addClass("news-title");
	});
	$("#newsitem6").mouseleave(function(){
		$("#newspic6").addClass("newsitem-img-smaller");
		$("#newspic6").removeClass("newsitem-img-larger");
		$("#news-title6").removeClass("news-title");
	});
	/*页面淡入*/
	$(".row").hide();
	$(".row").fadeIn(1000);
});