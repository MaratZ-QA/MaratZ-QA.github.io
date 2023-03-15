const button = document.querySelector('button');
button.addEventListener('click', function() {
	alert('Спасибо за внимание :D')
})

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);