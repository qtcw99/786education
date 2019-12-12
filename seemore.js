$(document).ready(function() {
var showChar = 400;
	var ellipsestext = "...";
	var moretext = "Read more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var textsummary = content.substr(0, showChar);
var fulltext = content.substr(showChar-0, content.length - showChar);
			
			var msg = textsummary + '<span class="moreelipses">'+ellipsestext+'</span><span class="morecontent"><span>' + fulltext + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

			$(this).html(msg);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});
