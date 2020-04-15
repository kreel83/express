const con = require('../config/db.js');
var books = require('google-books-search');


exports.pageLivre = (req, res) => {
    res.render('scrapping/test.html.twig', {'books' : results, 'pageActuelle' : page, 'search' : search})
}



exports.scrapping = (req, res) => {

    console.log(req.params.search)
    const search = req.params.search
    const page = 1

    var options = {
        offset: (page * 8) - 8,
        limit: 8,
        type: 'books',
        order: 'relevance',
        lang: 'fr'
    };
    books.search(search, options, function(error, results) {

        if ( ! error ) {
            if (page >= 0) {
                res.json(results)
            }
        } else {
            res.json(error);
        }
    });
}






exports.test = (req, res) => {
    const page = req.query.page
    const search = req.query.q
    console.log(req.query.q)
    var options = {
        offset: (page * 8) - 8,
        limit: 8,
        type: 'books',
        order: 'relevance',
        lang: 'fr'
    };
    books.search(search, options, function(error, results) {
        console.log(results)
        if ( ! error ) {
            if (page >= 0) {
                res.render('scrapping/test.html.twig', {'books' : results, 'pageActuelle' : page, 'search' : search})
            }

        } else {
            console.log(error);
        }
    });

}
