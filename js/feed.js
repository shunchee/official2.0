$(function(){
	let list = '';
	
	const url = 'https://graph.facebook.com/v14.0/17841401736460495?fields=name,media.limit(20){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=EAATlAiSZBGLMBADOZArrG6oCR6PORUFqh6ZBosOhj5LQfHZC46a0YkwmsCAPe7WkrIO1XvEAqOGormWjNszlGQneiRqKufYrX36iwmMxY6ZAdDhnr3KEKiI0Toz5umQ8upfsNvQ9nS6mTuTJIK9fZBVYatiqhJlQtJw0VtaOujcPLF0oDrs4t6';
	$.ajax({url: url}).done((res)=> {
		const data = res.media;
		$.each(data, function(index, val) {
			$.each(val, function(i, item) {
				console.log(item);
				if(item.media_url){
				//メディアのタイプがビデオの場合、サムネを取得
		  			media = (item.media_type == 'VIDEO' ? item.thumbnail_url : item.media_url);
		  			// 一覧を変数listに格納
		  			list += `<li><a href="${item.permalink}" target="_blank" rel="noopener"><img src="${media}"><span class="like"><i class="fa fa-heart"></i>${item.like_count}</span></a></li>`;
				}
			})
		});
		$('#insta').html(`<ul>${list}</ul>`);
	})
	.fail(function(jqXHR, status) {
	$('#insta').html('<p>読み込みに失敗しました。</p>');
	});
});