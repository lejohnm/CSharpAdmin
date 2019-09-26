const express = require('express')
const app = express();
const mysql = require("mysql");

const PORT = process.env.PORT || 3002;

app.use(express.json());


//db connection
var connection = mysql.createConnection({
    host: "localhost",
    // db port
    port: 3002,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecommerce"
});

// connection.connect(function (err) {
//     //callback
//     if (err) {
//         throw err;

//     }
//     console.log('Connected');
// })


app.get('/products', (req, res) => {
    //connect to db
    connection.getConnection(function (err, connection) {
    connection.query("SELECT * FROM products", function (err, results, fields) {
        if (error) throw error;
   res.send(results)
    })
    })

    // res.send(test);
});
app.listen(3002, () => {
    console.log('Go to http://localhost:3002/users');
})

