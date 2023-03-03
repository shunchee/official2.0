export default () => `
	<section id="main-hero" class="main-hero">
		<div class="swiper hero-slide">
			<div id="hero-wrapper" class="swiper-wrapper"></div>
		</div>
		<div id="catches">
			<div class="catch1"></div>
			<div class="catch2"></div>
			<div class="catch3"></div>
		</div>
		<div id="hero_shun"></div>
	</section>
`;

window.addEventListener('load',function(){

const heroData = new Request("./js/hero-data.json");

fetch(heroData)
.then((response) => {return response.json();})
.then((data) => {
	//console.log(data);
	
	for (const heroImage of data.items) {
		const heroWrapper = document.querySelector('#hero-wrapper');
		const heroSlide = document.createElement('div');
		const heroImg = document.createElement('img');
		
		heroImg.src = heroImage.url;
		heroImg.alt = "heroImg";
		
		heroSlide.classList.add("swiper-slide");	
		heroSlide.appendChild(heroImg);
	    heroWrapper.appendChild(heroSlide);
		}
	});
	
const hero_swiper = new Swiper('.hero-slide', {
  speed:100,
  loop:true,
  autoplay: { disableOnInteraction:false, delay:1000, },
  slidesPerView: 1,
  centeredSlides:true,
  simulateTouch:false,
  shortSwipes:false,
  longSwipes:false,
  effect:"fade",
});
	
	
	var tl_shun =gsap.timeline({repeat:-1})
	tl_shun.to("#hero_shun",{height:"0vh",bottom:"-70vh",left:"-110vh",duration:0})
	.to("#hero_shun",{height:"200vh",bottom:"-70vh",left:"-110vh",duration:0},2)
	.to("#hero_shun",{rotate:30,duration:.1})
	.to("#hero_shun",{rotate:0,bottom:0,height:"60vh",duration:.3},3)
	.to("#hero_shun",{left:"100%",duration:3,ease:"linear"})
	.to("#hero_shun",{rotate:-30,duration:0},8)
	.to("#hero_shun",{left:"-110%",duration:1.2,ease:"linear"},8)
	.to("#hero_shun",{bottom:"-18%",duration:.2},8)
	.to("#hero_shun",{bottom:"-3%",duration:.2},8.2)
	.to("#hero_shun",{bottom:"-16%",duration:.2},8.4)
	.to("#hero_shun",{bottom:"-5%",duration:.2},8.6)
	.to("#hero_shun",{bottom:"-14%",duration:.2},8.8)
	.to("#hero_shun",{bottom:"-7%",duration:.2},9)
	.to("#hero_shun",{delay:1},9)	
});
