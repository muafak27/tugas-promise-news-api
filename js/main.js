const searchButton = document.querySelector('.search-button');
searchButton.addEventListener ('click', function() {
    const inputKeyword = document.querySelector('.input-keywords');

    fetch('https://newsapi.org/v2/everything?q=' + inputKeyword.value +  '&apiKey=b56fb12d4abd4cc48ff1d4c42c0fb7c1&pageSize=6')
    .then(response => response.json())
    .then(response => {
        const news = response.articles;
        let cards = '';
        news.forEach(element => cards += `
        <div class="card" style="width: 18rem;">
        <img src="${element.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.author} - ${element.publishedAt}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.description}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal" >Detail</a>
        </div>
      </div>`);
        const newsData = document.querySelector('.data-news')
        newsData.innerHTML = cards;

        // ketika Detail di click
        // const modalDetailNews = document.querySelectorAll('.btn');
        // modalDetailNews.forEach(btn => {
        //     btn.addEventListener('click', function() {
        //         console.log(this);
        //     })
        // });
    })
    .catch(err => {
        alert("Maaf system error");
    }); 
});