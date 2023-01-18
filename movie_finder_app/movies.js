

let found = '';
let show = '';
const text = document.getElementById('search-content');
const button = document.getElementById('btn');
let searchValue = '';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

const before = (() => {
	fetch(`https://imdb8.p.rapidapi.com/title/find?q=avengers`, options)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			data.results.forEach(film => {
				show += `<li>
							<img src="${film.image.url}" alt="movie image">
							<div class="about">
								<h4>${film.title}</h4>
								<p class="movieInfo">${film.titleType}</p>
								<div class="year">${film.year}</div>
							</div>
						</li>
						`
				document.querySelector('.movie_show').innerHTML = show;
			})
		});
})

//for the seach results
button.addEventListener('click', (e) => {
	e.preventDefault();
	let found = '';
	if (text.value !== null) {
		fetch(`https://imdb8.p.rapidapi.com/title/find?q=${text.value}`, options)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			data.results.forEach(film => {
				found += `<li>
							<img src="${film.image.url}" alt="movie image">
							<div class="about">
								<h4>${film.title}</h4>
								<p class="movieInfo">${film.titleType}</p>
								<div class="year">${film.year}</div>
							</div>
						</li>
						`
				document.querySelector('.results').innerHTML = found;
				document.querySelector('.movie_show').innerHTML = '';
			})
		});
	} else {
		found = '';

	}
});



if (found === '') {
	before()
} else {
	show = '';
}