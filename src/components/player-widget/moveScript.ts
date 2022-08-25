document.addEventListener("DOMContentLoaded", () => {
	const player = document.getElementById('player')
	
	const onMouseMove = (event) => {
		player.style.left = event.clientX - player.offsetWidth / 2 + 'px';
		player.style.top = event.clientY - player.offsetHeight / 2 + 'px';
	}

	player.onmousedown = (event) => { 
		document.onmousemove = onMouseMove;

		player.onmouseup = () => {
			document.onmousemove = null;
			player.onmousemove = null;
		}
	};
})

