const slideactif = document.querySelector('.banner-img')
const tagLineactif = document.querySelector('.tagLine')
const dotslide = document.querySelector('.dots')
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slidevisible = 0

const flechegauche = document.querySelector('.arrow_left')
flechegauche.addEventListener('click', ()=> {
	if (slidevisible === 0){
		slidevisible = slides.length-1
	}
	else {
		slidevisible --
	}
	slideactif.src = "./assets/images/slideshow/"+slides[slidevisible].image
	tagLineactif.innerHTML = slides[slidevisible].tagLine
	activerdot()
})

const flechedroite = document.querySelector('.arrow_right')
flechedroite.addEventListener('click', ()=>{
	if (slidevisible === slides.length-1) {
		slidevisible = 0
	}
	else {
		slidevisible ++
	}
	slideactif.src = "./assets/images/slideshow/"+slides[slidevisible].image
	tagLineactif.innerHTML = slides[slidevisible].tagLine
	activerdot()
})

function activerdot () { 
	dotslide.innerHTML = ""
	slides.forEach((slide,i)=>{
		if (slidevisible === i) {
			dotslide.innerHTML += "<div class='dot dot_selected'></div>"
		}
		else {
			dotslide.innerHTML += "<div class='dot'></div>"
		}
	})
}

activerdot()