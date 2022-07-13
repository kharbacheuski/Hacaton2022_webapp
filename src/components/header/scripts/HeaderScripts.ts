const stickyHeaderHandler = () => {
	let headerElement: any = null
	setTimeout(() => {
		headerElement = document.getElementById("header")
	}, 100);
	
	const stickyHeaderScrollHandler = () => {
		if(headerElement !== null) {
			let scrollingFromTop = document.documentElement.scrollTop;
			let headerHeight = headerElement.offsetHeight;
	
			headerElement.classList.toggle(
				'fixed',
				scrollingFromTop > headerHeight
			);
		}
	};

	document.addEventListener('scroll', stickyHeaderScrollHandler);
};

document.addEventListener('DOMContentLoaded', stickyHeaderHandler);


export const OpenCloseHeader = (islink?) => {
	const navigation = document.getElementById('navigation');
	const burger = document.getElementById('burger')

	if(islink !== undefined && !navigation?.classList.contains('open'))
		return null

	navigation?.classList.toggle('open')
	burger?.classList.toggle('cross')

	if(navigation?.classList.contains('open')) {
		document.body.style.overflowY = 'hidden'
	}
	else {
		document.body.style.overflowY = 'scroll'
	}
}

