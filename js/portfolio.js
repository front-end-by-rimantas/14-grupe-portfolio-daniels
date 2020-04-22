const portfolioDataArray =  [
    {
        img: "./img/gallery/1.jpg",
        name: 'WEB DESIGN',
        category: ['All','Graphic']
    },
    {
        img: "./img/gallery/2.jpg",
        name: 'WEB DESIGN',
        category: ['All','Design']
    },
    {
        img: "./img/gallery/3.jpg",
        name: 'WEB DESIGN',
        category: ['All','Graphic']
    },
    {
        img: "./img/gallery/4.jpg",
        name: 'WEB DESIGN',
        category: ['All','Brand']
    },
    {
        img: "./img/gallery/5.jpg",
        name: 'WEB DESIGN',
        category: ['All','Graphic','Design' ]
    },
    {
        img: "./img/gallery/6.jpg",
        name: 'WEB DESIGN',
        category: ['All','Brand']
    },
]

renderFilter("All");

const fillerArray = document.querySelectorAll('.filter > h3');
for( let i =0 ; i < fillerArray.length ; i++){
    fillerArray[i].addEventListener('click', function(e) {    
        renderFilter(e.target.dataset.set); 
    })
}




function renderFilter(filter) {
    
    let HTML = '';
    document.querySelector('.gallery').innerHTML = HTML;
   
    for(let i = 0; i < portfolioDataArray.length; i++) {
          if(portfolioDataArray[i].category.includes(filter)) {
            HTML = `
            <div>
            <img src="${portfolioDataArray[i].img}" alt="portfolio img">
            <div class="gallery-overlay">
            <div>
             <h3> ${portfolioDataArray[i].name} </h3>
            <i class="gallery-down fa fa-chain-broken" ></i>
            <i class="gallery-zoom fa fa-search-plus" aria-hidden="true"></i>
           </div>
            </div>
            </div>`
        document.querySelector('.gallery').insertAdjacentHTML('beforeend' , HTML)
        }
           
       
    }
       
}



        
    



