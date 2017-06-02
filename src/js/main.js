console.log('one')
console.log('two')
console.log('three')

function doThis() {
	let aTag = document.getElementById('one-button')
	console.log(aTag)
	if (aTag.getAttribute('aria-expanded') == 'false') {
		aTag.setAttribute('aria-expanded', 'true')
	} else aTag.setAttribute('aria-expanded', 'false')
}
