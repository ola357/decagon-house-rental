/* eslint-disable no-undef */
$('.login').click(()=>{
	// event.preventDefault();
	$.get('http://localhost:3000/users', (data, status)=>{
		for (let index = 0; index < data.length; index++) {
			const element = data[index];
			const input = document.querySelector('#email').value;
			const input2 =  document.querySelector('#pwd').value;
			if((element.email === input)&&(element.password === input2)){
				document.querySelector('.message').innerHTML = '';
				localStorage.removeItem('userid');
				localStorage.setItem('userid', element.id );
				window.location.href = 'inventory.html'
			} else {
				document.querySelector('.message').innerHTML = 'Please register';
				document.querySelector('#email').value = '';
				document.querySelector('#pwd').value = '';
			}
		}
	});
});