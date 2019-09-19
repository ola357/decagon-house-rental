$('.register').submit((event)=>{
    event.preventDefault();
    
    const data = {
        firstname: document.querySelector('#firstname').value,
        lastname: document.querySelector('#lastname').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#passwword').value
    }
    $.post('http://localhost:3000/users', data, (value)=>{
        alert('yello')
    })

});


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