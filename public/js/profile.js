$(document).ready(()=>{
    const userid = localStorage.getItem('userid');
    $.get('http://localhost:3000/listings', (data, status)=>{
        const listings = data.filter((el)=>{
            return (userid.toString() === el.owner.toString())
        });
        console.log(listings[0])
        let cup = document.querySelector('.cup')
        let div = document.createElement('div');
        div.className += 'row '
        for(let i=0; i<listings.length; i++){
            /*
            if(j===2){
                j = 0;
            }
            if(j===0){
               div = document.createElement('div');
              div.className += 'row '
            }
            */
            if(listings[i]) {
                const article = document.createElement('article');
                const card = document.createElement('div');
                const img = document.createElement('img');
                const cardBody = document.createElement('div');
                const h5 = document.createElement('h5');
                const p = document.createElement('p');
                const a = document.createElement('a');
                cup.appendChild(div);
                div.appendChild(article);
                article.className += 'col-sm-3 ';
                article.appendChild(card);
                card.className += 'card ';
                card.appendChild(img);
                img.className += 'card-img-top ';
                img.src = listings[i].picUrl;
                card.appendChild(cardBody);
                cardBody.className += 'card-body ';
                cardBody.appendChild(h5);
                h5.className += 'card-title ';
                h5.innerHTML = `Price: ${listings[i].price}`;
                cardBody.appendChild(p);
                p.className += 'card-text ';
                p.innerHTML = `Location: ${listings[i].location}`;
                cardBody.appendChild(a);
                a.className += 'btn btn-danger text-white ';
                a.innerHTML += 'Delete';
                a.setAttribute('id', listings[i].id);
                a.addEventListener('click',(e) => {
                    $.ajax({
                        url: 'http://localhost:3000/listings/' + e.target.id,
                        type: 'DELETE',
                        success: (result) =>{
                            alert('deleted successfully');
                        }
                    });
                })
            }
            
        }

    });
    const create = document.querySelector('.create');
    create.addEventListener('click', (e)=>{
        const data = {
                    price: document.querySelector('#price').value,
                    location: document.querySelector('#location').value,
                    picUrl: document.querySelector('#picUrl').value,
                    address: document.querySelector('#address').value
                }
                $.post('http://localhost:3000/listings', data, (value)=>{
                    //localStorage.removeItem('userid');
                    //localStorage.setItem('userid', value.id );
                    window.location.href = 'profile.html';
                })
    });
});