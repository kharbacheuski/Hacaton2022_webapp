export const stickyHeaderHandler = () => {
	let header = document.getElementById("header")
	header?.classList.toggle(
		'fixed',
		document.documentElement.scrollTop > (header.offsetHeight * 1.5)
	)
};
document.addEventListener('scroll', stickyHeaderHandler);

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.navigation__link').forEach(link => 
		link.addEventListener('click', () => window.scrollTo(0, 0))
	)
})

export const OpenCloseHeader = (islink?) => {
	const navigation = document.getElementById('navigation');
	const burger = document.getElementById('burger')

	if(islink !== undefined && !navigation?.classList.contains('open')) {
		return null
	}

	navigation?.classList.toggle('open')
	burger?.classList.toggle('cross')

	if(navigation?.classList.contains('open')) {
		document.body.style.overflowY = 'hidden'
	}
	else {
		document.body.style.overflowY = 'scroll'
	}
}

