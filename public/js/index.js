$(document).ready(() => {
    $.get("http://localhost:3000/listings", (data, status) => {
        const row1 = document.querySelector('.row1');
        const row2 = document.querySelector('.row2');
        //let limit = data.length
        //let i = data.length -1;
        for (let index = 0; index < 8; index++) {
            if (data[index]) {
                const article = document.createElement('article');
                const card = document.createElement('div');
                const img = document.createElement('img');
                const cardBody = document.createElement('div');
                const h5 = document.createElement('h5');
                const p = document.createElement('p');
                const a = document.createElement('a');
                if (index < 4) {
                row1.appendChild(article);
                } else {
                row2.appendChild(article);
                }
                article.className += 'col-sm-3 ';
                article.appendChild(card);
                card.className += 'card ';
                card.appendChild(img);
                img.className += 'card-img-top ';
                img.src = data[index].picUrl;
                card.appendChild(cardBody);
                cardBody.className += 'card-body ';
                cardBody.appendChild(h5);
                h5.className += 'card-title ';
                h5.innerHTML = `Price: ${data[index].price}`;
                cardBody.appendChild(p);
                p.className += 'card-text ';
                p.innerHTML = `Location: ${data[index].location}`;
                cardBody.appendChild(a);
                a.className += 'btn btn-primary text-white ';
                a.innerHTML += 'View more';
                a.setAttribute('id', data[index].id);
                a.addEventListener('click',(e) => {
                    localStorage.removeItem('id');
                    localStorage.setItem('id', e.target.id);
                    window.location.href = 'listing.html'
                })

            }
        }
    });
});
