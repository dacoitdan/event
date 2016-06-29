// GO!

document.querySelector('#navtoggle').addEventListener('click', function(){
	document.querySelector('.nav-menu').classList.toggle('nav-menu-hidden')
	if(document.querySelector('#navtoggle').textContent === 'Hide Nav'){
		document.querySelector('#navtoggle').textContent = 'Show Nav';
	} else {
		document.querySelector('#navtoggle').textContent = 'Hide Nav';
	}
})

// 

document.querySelector('#guest').addEventListener('keyup', function(e){
	if(e.keyCode === 13 && document.querySelector('#guest').value !== ''){
		var li = document.createElement('li');
		li.textContent = document.querySelector('#guest').value;
		li.classList.add('guest');
		document.querySelector('.guest-list').appendChild(li);
		document.querySelector('#guest').value = '';
	}
})

//

document.querySelectorAll('#guest')[1].addEventListener('keyup', function(e){
	if(e.keyCode === 13 && document.querySelectorAll('#guest')[1].value !== ''){
		var li = document.createElement('li');
		li.textContent = document.querySelectorAll('#guest')[1].value;
		var bouton = document.createElement('button');
		bouton.textContent = 'x';
		li.appendChild(bouton);
		li.classList.add('guest');
		bouton.addEventListener('click', function(){
			bouton.parentElement.parentElement.removeChild(bouton.parentElement);
		})
		document.querySelectorAll('.guest-list')[1].appendChild(li);
		document.querySelectorAll('#guest')[1].value = '';
	}
})