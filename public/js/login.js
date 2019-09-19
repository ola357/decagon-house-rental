$('.login').click(()=>{
    // event.preventDefault();
    $.get('http://localhost:3000/users', (data, status)=>{
        const input = document.querySelector('#email').value;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if(element.email === input){
                alert("yea")
            } else {
                alert("nay")
            }
        }
    });

});