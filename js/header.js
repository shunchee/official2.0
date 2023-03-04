import headerView from "./views/header-view.js";

header.innerHTML=headerView();

window.addEventListener('load',function(){

	const menuBtn = document.querySelector('.icon_menu');
	const navIcons = document.querySelectorAll('.header a');
	const spNav = document.getElementById('nav_sec1');
	
	let navState=false;
	
	menuBtn.addEventListener("click", function(){
		if(navState==false){
		gsap.to("#nav_sec1",{bottom:'44px',duration:.3,ease: Power1.easeOut});
		this.classList.add("active");
		navState=true;
		console.log('Nav Opened');
		}
		else if(navState==true){	

			console.log('Nav Closed');
			closeNav();
		}
	});
	
	document.addEventListener('click', (e) => {
  		if(!e.target.closest('.header') && navState==true) {
				closeNav();
		  }
	  });
	
	function closeNav(){
		gsap.to("#nav_sec1",{bottom:'-50vh',duration:.6,ease: Power1.easeOut});
		menuBtn.classList.remove("active");
		navState=false;
	};
	
	const mediaQueryList = window.matchMedia('(min-width: 768px)');
	const listener = (event) => {
	  if (event.matches) {
	    console.log('PC用ブレークポイント用処理');
		gsap.set("#nav_sec1",{bottom:'auto',top:'0'});
		closeNav();
	  } else {
	    console.log('SP用ブレークポイント用処理');
		gsap.set("#nav_sec1",{top:'auto',bottom:'-50vh'});
		navIcons.forEach(function(target){
			target.addEventListener("click", function(){
				console.log('Nav Closed');
				closeNav();
			});
		});
	  }
	};
	mediaQueryList.addEventListener("change", listener);
	listener(mediaQueryList);
	
	console.log('header loaded');
	
		let startPos = 0,winScrollTop = 0;
	const headerHeight = header.clientHeight;
	window.addEventListener('scroll',function(){
		winScrollTop=this.scrollY;
		if(winScrollTop >= startPos){
			if(winScrollTop >= headerHeight){
				header.classList.add("hide_header");
				console.log('header hidden');
			}
		}else{
			header.classList.remove("hide_header");

			closeNav();
			console.log('header visible');
		}
		startPos = winScrollTop;
	})
});
