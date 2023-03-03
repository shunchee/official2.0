export default () => `
<section id="about" class="main-about">
	<div id="history" class="about-manga-title">
		<p>まんが<span>で</span>わかる!!</p><h1>シュンチー</h1>
	</div>
	<div class="swiper manga-slide">
		<div class="swiper-wrapper"></div>
		<div class="swiper-pagination"></div>	
	</div>
	
</section>`;

window.addEventListener('load',function(){
		
	const mangaData = new Request("./js/manga-data.json");

	fetch(mangaData)
	.then((response) => {return response.json();})
	.then((data) => {
		console.log(data.items.length);
		const totalSlidesLen = data.items.length;
		
		for (const history of data.items) {
			const swiperWrapper = document.querySelector('.manga-slide .swiper-wrapper');
			const swiperSlide = document.createElement('div');
			const mangaArticle = document.createElement('article');
			const historyImg = document.createElement('img');
		    const historyAge = document.createElement('div');
		    const historySubTitle = document.createElement('div');
		    const historyDescription = document.createElement('div');
			
			historyImg.src = history.url;
			historyImg.alt = "hisroryImg";
			
			swiperSlide.classList.add("swiper-slide");
			
			historyAge.classList.add("manga-slide-age");
			if(history.age >= 0 && history.age < 7 ){
		    historyAge.innerHTML = history.age + `<span>さい</span>`;
			}else if(history.age >= 7 && history.age < 20){
				historyAge.innerHTML = history.age + `<span>才</span>`;;
			}else if(history.age >= 20 || history.age == "?" ){
				historyAge.innerHTML = history.age + `<span>歳</span>`;;
			}
			else{historyAge.innerHTML = history.age;}
			
			historySubTitle.classList.add("manga-slide-subtitle");
		    historySubTitle.textContent = history.sub_title;
			
			historyDescription.classList.add("manga-slide-text");
		    historyDescription.innerHTML = history.text;
		
			mangaArticle.classList.add("manga-slide-article");
		    mangaArticle.appendChild(historySubTitle);
		    mangaArticle.appendChild(historyDescription);
		    
	
			swiperSlide.appendChild(historyImg);
			swiperSlide.appendChild(historyAge);
			swiperSlide.appendChild(mangaArticle);
		
		    swiperWrapper.appendChild(swiperSlide);
			
			const mangaSwiper = new Swiper('.manga-slide', {

	  			speed:1000,
	  			autoplay: { disableOnInteraction:false, delay:6000, },
	  			slidesPerView: 1,
	  			spaceBetween: 20,
	  			centeredSlides:true,
	  
	  			pagination: { el:'.swiper-pagination', dynamicBullets: true, clickable:true,},
				
	  			breakpoints: {
	    			768: { slidesPerView: 2,spaceBetween: 20},
					1000:{ slidesPerView: 2.5, spaceBetween: 30}
				}			
			});
		}
	});
	
});