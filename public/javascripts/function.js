const btnNext = document.querySelectorAll('.btnControl')
const input = document.getElementById('search')

let search;


const cards = document.querySelectorAll('#lesLivres .card')

cards.forEach((card) => {
    card.addEventListener('click', function (e) {
        const id = $(this).attr('data-id')
        alert(id)
        window.location = "/livre/"+id
    })
})


input.addEventListener('keyup', function (e) {
    search = input.value
    search = search.split(' ').join("+")
    console.log(search)
    if (search.length % 3 == 0) {
        const url = '/ajax/scraping/'+search

        $.get( url, function (data) {

            $('#lesLivres').empty()

            data.forEach((book) => {
                $('#lesLivres').append(`
          
                <div class="card w-25" data-id=${book.id}>
                    <div class="card-body">
                        <p>${ book.title }</p>
                        <img src="${ book.thumbnail }" alt="">
                    </div>
                </div>
            

            `)

            })

        })
    }


})


btnNext.forEach((el) => {
    el.addEventListener('click', function (e) {
        let sens = -1;
        if (e.target.dataset.sens == 'Next') {
            sens = 1;
        }
        search = input.value
        const page = parseInt(e.target.dataset.page) + sens
        window.location = "/scraping?q=" + search + "&page=" + page
    })
})




