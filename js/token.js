$(function(){
	const insta_biz_id = 17841401736460495;//instagram_business_accountのID
	const limit = 10; //表示件数

	
	/*const accessToken = EAATlAiSZBGLMBADOZArrG6oCR6PORUFqh6ZBosOhj5LQfHZC46a0YkwmsCAPe7WkrIO1XvEAqOGormWjNszlGQneiRqKufYrX36iwmMxY6ZAdDhnr3KEKiI0Toz5umQ8upfsNvQ9nS6mTuTJIK9fZBVYatiqhJlQtJw0VtaOujcPLF0oDrs4t6;// アクセストークン*/

	const url = 'https://graph.facebook.com/v14.0/17841401736460495?fields=name,media.limit(10){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=EAATlAiSZBGLMBADOZArrG6oCR6PORUFqh6ZBosOhj5LQfHZC46a0YkwmsCAPe7WkrIO1XvEAqOGormWjNszlGQneiRqKufYrX36iwmMxY6ZAdDhnr3KEKiI0Toz5umQ8upfsNvQ9nS6mTuTJIK9fZBVYatiqhJlQtJw0VtaOujcPLF0oDrs4t6';
	$.ajax({url:url}).done(function(res){
		console.log(res.media);
	});
});