export default () => `
	<div id="contact" class="contact">
		<h2 class="headline">お問い合せ</h2>
		<p><span>お仕事のご依頼やご相談など、</span><span>お問い合わせはこちらからどうぞ！！</span></p>
		<form class="contact_form" action="action.php" method="post" name="contact-form">
			<div class="contact_field">
				<p>お名前</p>
				<input class="contact_input" type="text" placeholder="山田シュンチー">
				<p>メールアドレス(半角)</p>
				<input class="contact_input" type="email" placeholder="example@shunchee.com">
				<p>件名</p>
				<input class="contact_input" type="subject" placeholder="出演の依頼">
				<p>お問い合わせ内容</p>
				<textarea class="contact_textarea" placeholder="お問い合わせ内容"></textarea>
				<span class="red">*</span>は必須項目です。
				<input class="contact_submit" type="submit" value="送信">
			</div>
		</form>
	</div>
	
	<div class="bnr">
		<div class="marquee">
		<img src="img/pixel_bunner.svg" alt="bunner"><img src="img/pixel_bunner.svg" alt="bunner"><img src="img/pixel_bunner.svg" alt="bunner">
	</div>
</div>
`;