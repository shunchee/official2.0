export default () => `

<a href="#" class="logo_btn" title="ページのトップに戻る"></a>							

<div id="news_letter">
	<p>NEWS LETTER</p>
	<form class="mailMagazineSubscribe_form" name="frmLMM" method="post" action="https://api.lolipop.jp/api/api.php?cmd=mm" target="_blank">
		<div class="x_mailMagazineSubscribe_field mailMagazineSubscribe_field">
			<input type="hidden" name="account" value="news">
			<input type="hidden" name="domain" value="mm.shunchee.com"> 
			<input class="mailMagazineSubscribe_input" type="text" name="user_mail" maxlength="255" placeholder="メールアドレス" required>
			<input class="mailMagazineSubscribe_submit" type="submit" name="join" value="登録">
		</div>
	</form>
</div>

<div id="footer_info">
	<ul><li><a href="privacy.html">プライバシーポリシー</a></li>
		<li><a href="law.html">特定商取引法に基づく表記</a></li>
	</ul>
	<p>©SHUNCHEE All Rights Reserve</p>
</div>

<div class="social">
	<div class="social_btns">
		<a href="https://www.facebook.com/" target="_blank" title="facebook">
			<div class="icon icon_fb"></div></a>
		<a href="https://twitter.com/" target="_blank" title="twitter">
			<div class="icon icon_twt"></div></a>
		<a href="https://www.instagram.com/" target="_blank" title="instagram">
			<div class="icon icon_insta"></div></a>
		<a href="https://line.me/" target="_blank" title="line">
			<div class="icon icon_line"></div></a>
		<a href="https://youtube.com/" target="_blank" title="youtube">
			<div class="icon icon_yt"></div></a>
	</div>
</div>

`;