import indexHero from "../components/index-hero.js";
import greeting from "../components/talk-greeting.js";
import banner from "../components/banner.js";
import manga from "../components/manga.js";
import interlude from "../components/talk-interlude.js";
import indexContainer from "../components/index-container.js";
import closing from "../components/talk-closing.js";
import contact from "../components/index-contact.js";




export default function(){

	main.innerHTML = indexHero();
	main.innerHTML += greeting();
	main.innerHTML += banner();
	main.innerHTML += manga();
	main.innerHTML += interlude();
	indexContainer();
	main.innerHTML += closing();
	main.innerHTML += contact();
	
}
