$('input.search-input').focus(function(){
	if($(this).val()=='输入话题，问题……'){
		$(this).val('')
	}
})
$('input.search-input').blur(function(){
	if($(this).val()==''){
		$(this).val('输入话题，问题……')
	}
})
$('div.login-status').hover(function(){
	$(this).children('.account').addClass('active')
	$(this).children('.acc-func').fadeIn(120)
},function(){
	$(this).children('.account').removeClass('active')
	$(this).children('.acc-func').fadeOut(120)
})
$('a.show-cate').click(function(){
	if($('#subnav_bg').is(':visible')){
		$('#subnav_bg').slideUp(500)
	}else{
		$('#subnav_bg').slideDown(500)
	}
	return true
})
$('.post-ques').click(function(){
	$('.post-ques-dialog').modal()
	$('.post-ques-dialog').on('shown',function(){
		$('div.question-form .ques-title').focus()
	})
	return false;
});
$('#tags').tagsInput({
	"autocomplete_url":"/topic_suggest",
	"autocomplete":{"selectFirst":true,"width":"100px","autoFill":true,select:function (event, ui) {
		// old = $('#tags').val()
		// old=''
		// $('#tags').val(old+','+ui.item.id)
	}},
	"height":"auto",
	"width":"510px",
	"defaultText":"搜索话题",
});
$('a.post-ques-btn').click(function(){
	var title = $('div.question-form .ques-title').text(),
		desc = $('div.question-form .ques-desc').text(),
		topic = $('#tags').val();
	if(title==''){
		alert('请输入问题标题');
		return false;
	}
	if(topic==''){
		alert('请选择你要发表的话题');
		return false;
	}
	$.post('/question_save/',
		{"title":title,"desc":desc,"topic":topic},
		function(data){
			alert(data)
		},"json"
	)
	return false
});