$(document).ready(() => {
    $.get('http://localhost:3000/listings', (data, status) => {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
             
        }
    })
});