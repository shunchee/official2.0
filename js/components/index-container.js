import indexArt from "../components/module-art.js";
import indexMusic from "../components/module-music.js";
import indexShop from "../components/module-shop.js";

export default function () {
	main.innerHTML += `<section class="index-contents"></section>`;

	const indexContents = document.querySelector('.index-contents');
	
	indexContents.innerHTML = indexArt();
	indexContents.innerHTML += indexMusic();
	indexContents.innerHTML += indexShop();

};