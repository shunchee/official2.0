export default () => `
<section class="index-shop contents-module">
	<div class="module-wrapper">

		<section id ="cate_all">
			<section id = "all_hero">
			
				<h2 class="cate_all_headline">SHUNCHEE GIVES YOU EVERYTHING!!</h2>
			
				<div id="daily_bag"></div>
				<div id="daily_cusion"></div>		
			    <div id = "fasion_shun">facionshun</div>	
				<div id="daily_mcl">
					<div id = "daily_mcl01"></div>
					<div id = "daily_mcl02"></div>
					<div id = "daily_mcl03"></div>
				</div>

				
				
				<div id = "post_shun"></div>
				
				
			</section>
			
		</section>
		<div class = "headwrap">
			<h2 class="headline">SHOP</h2>
			<h3 class="subhead">シュンチーショップもできました！！<br>雰囲気から他とはちょっと違います！！</h3>
		
			<div class="contents-buttons">
				<a href="https://shop.shunchee.com/" class="button button-orange">ショップに行く→</a>
			</div>
		</div>
	</div>
</section>
`;
window.addEventListener('load',function(){  
    gsap.set("#post_shun",{rotationY:0,rotation:-30,transformOrigin:'50% 100%'});                            
    var tl = gsap.timeline({repeat:-1})	
        .to("#post_shun",{rotation:0,duration:.5})
        .to("#post_shun",{rotation:-30,duration:.5})
});

window.addEventListener('load',function(){
    const numCards = 3;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const contentsImage = document.querySelector('#all_hero');
	let i=1;                       
    function createCard(){
        let card = document.createElement("div");
        let cardClass = "card card" + i;
        card.setAttribute("class", cardClass);
        contentsImage.appendChild(card);
        return card;
    }                      
    function animateCard(card){
        let scaleFactor = Power3.easeIn(Math.random());
        let duration = gsap.utils.interpolate(3,5,1-scaleFactor);
        gsap.set(card,{zIndex:1,});            
        gsap.to(card,{repeat:-1,yoyo:true,y:"-=100" ,duration:duration,ease:"none"});
    }
    for(i = 1; i < numCards+1; i++){
        let card = createCard();
        animateCard(card);
    }
});

window.addEventListener('load',function(){
	       gsap.to("#daily_cusion",{repeat:-1,rotation:360,duration:3,})
	var tl = gsap.timeline({repeat:-1})	
        .to("#daily_cusion",{x:"100%",y:"-200%" ,duration:3,})
		.to("#daily_cusion",{x:"-100%",y:"-200%" ,duration:3,})
		.to("#daily_cusion",{x:"100%",y:"0%" ,duration:3,})
		.to("#daily_cusion",{x:"100%",y:"-200%" ,duration:3,})
})
window.addEventListener('load',function(){
	       gsap.to("#daily_bag",{repeat:-1,rotation:360,duration:3,})
	var tl = gsap.timeline({repeat:-1})	
        .to("#daily_bag",{x:"-100%",y:"200%" ,duration:3,})
		.to("#daily_bag",{x:"100%",y:"00%" ,duration:3,})
		.to("#daily_bag",{x:"-100%",y:"0%" ,duration:3,})
		.to("#daily_bag",{x:"100%",y:"-200%" ,duration:3,})
	})
window.addEventListener('load',function(){
    gsap.set("#daily_mcl01",{x:"-30%",y:"100%"}); 	
	var tl = gsap.timeline({repeat:-1,repeatDelay:3})	
        .to("#daily_mcl01",{x:"-30%",y:"100%",duration:.1})
        .to("#daily_mcl01",{x:"0%",y:"0%",duration:0.3})
		.to("#daily_mcl02",{opacity:1,duration:0.1})
		.to("#daily_mcl02",{opacity:0,duration:0.1})
		.to("#daily_mcl02",{opacity:1,duration:0.1})
		.to("#daily_mcl02",{opacity:0})
		.to("#daily_mcl01",{rotation:30,x:"50%",y:"100%",duration:1})
		.to("#daily_mcl02",{x:"50%",y:"100%",opacity:1,duration:0.1})
		.to("#daily_mcl02",{opacity:0,duration:0.1})	
		.to("#daily_mcl02",{opacity:1,duration:0.1})
		.to("#daily_mcl02",{opacity:0})	
		.to("#daily_mcl01",{rotation:0,x:"-30%",y:"100%",duration:.1})
});