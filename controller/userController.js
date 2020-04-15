const con = require('../config/db.js');

const users = [{ id: 1, name: 'Emanuele' }, { id: 2, name: 'Tessa' }, { id: 3, name: 'jean paul' }]
  

exports.index = (req, res) => {
const rows = []
  //console.log(connexion)
  con.query('SELECT * FROM categorie', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');

     res.render('index.html.twig', { 'categories': rows });
  });
  

}


exports.test = (req, res) => {
    const test = "test"
    res.render('test.html.twig', {'test' : test})
}

