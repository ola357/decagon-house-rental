$(document).ready(()=>{
    $('.register').click(()=>{
        // event.preventDefault();
        let mail = document.querySelector('#email').value
        console.log(mail);
        $.get('http://localhost:3000/users', (values, status)=>{
            const boolean = values.filter((el)=>{
                return (mail === el.email)
            });
            if(boolean.length === 0){
                console.log('hurray')
                const data = {
                    firstname: document.querySelector('#firstname').value,
                    lastname: document.querySelector('#lastname').value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#pwd').value
                }
                $.post('http://localhost:3000/users', data, (value)=>{
                    localStorage.removeItem('userid');
				    localStorage.setItem('userid', value.id );
                    window.location.href = 'inventory.html';
                })
            
            } else {
                document.querySelector('.message').innerHTML = 'user already registered'
            }
        });
        
       
    });
    
})

/*
$(document).ready(()=>{
    $.get('http://localhost:3000/users', (data, status)=>{
        $('.register').submit((event)=>{
            event.preventDefault();
            const email = $('#email').val()
            const user = data.filter((element)=>{
                return element.email === email
            });
            if (user){
                $('.message').text('You are already a member, please login')
            }
            if(!user){
                $.post('http://localhost:3000/users',
                {
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    email: $('#email').val(),
                    password: $('#password').val()
                }, (data, status)=>{
                    $('.message').text('Thank you for signing up')
                })
            }
        });
    });
});
*/