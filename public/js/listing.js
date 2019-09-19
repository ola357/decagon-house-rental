const id = localStorage.getItem('id')
let url = "http://localhost:3000/listings/" + id;
$(document).ready(()=>{
    $.get(url, (data, status) =>{
        console.log(data);
        document.querySelector('img').src = data.picUrl;
        document.querySelector('.price').textContent = data.price;
        document.querySelector('.location').textContent = data.location;
        document.querySelector('.address').textContent = data.address;
    })
});