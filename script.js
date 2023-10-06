const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')

		fetchVerse(panel)
	})
})

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}

async function fetchVerse(panel) {
	let h3Element = panel.firstElementChild
	let prElement = h3Element.nextElementSibling

	const url = 'https://bible-search.p.rapidapi.com/random-verse'
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '780ca2a40dmsh6d8d6b0dfab05d7p183d0cjsnfd51f2fe5e63',
			'X-RapidAPI-Host': 'bible-search.p.rapidapi.com',
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		h3Element.textContent = `${result[0].book_name} ${result[0].chapter}:${result[0].verse}`
		prElement.textContent = result[0].text
	} catch (error) {
		console.error(error)
	}
}
