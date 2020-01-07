const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const pug = require('pug');
// const PORT = 4009;
const cors = require('cors');
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Iamhappy2018@",
    database: "tray"
});

//Iamhappy2018@
//devu1099

db.connect(function (err) {
    if (err) {
        throw err
    };
    console.log("Connected!");
    db.query("SELECT * FROM accounts1", function (err, result, fields) {
        if (err) {
            throw err
        };
        //   console.log(result[1]);
    })
});
    


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "tray"
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 

app.get('/', function (req, res) {
    if (req.session.loggedin) {
        // res.render('index', {
        //     title: `hello ${req.session.userId}`
        // });
        console.log(req.session.name)
        res.send({ loggedIn:1 , username : req.session.name , userId : req.session.userId});
    } else {
        res.send("0");
    }

});

// app.get('/',function(req,res){
//     // if (req.session.loggedin) {
//     //     res.render('index' , {
//     //         title : `hello ${req.session.name}`
//     //     });    
//     // }else{
//         res.send('hello') ;
//     // }

// });



function hash() {
    return Math.random().toString(36).substring(2, 8)
}


app.post('/api/orders/create', (req, res) => {
    var order_name = req.body['order_name'],
        user_id = req.body['user_id'],
        group_code = req.body['group_code'],
        canteen_id = req.body['canteen_id'],
        item_id = req.body['item_id'];
        console.log(canteen_id)

    let order_hash = hash();
    db.query(`SELECT group_id FROM group_table WHERE group_code = ?`, [group_code], function (err, result, fields) {
        if (err) {
            throw err;
        } else {
           

            let group_id = result[0].group_id;
            console.log(group_id);


            db.query(`INSERT INTO orders (order_hash,order_name,user_id,group_id,canteen_id,item_id) VALUES ('${order_hash}','${order_name}','${user_id}', '${group_id}', '${canteen_id}','${item_id}')`, (err, result, fields) => {
                if (err) throw err;
                else {
                    res.send("order created , with orde_hash: " + order_hash);
                }
            });
        }
    });
   
});

app.post('/api/order/orderId',(req,res)=>{

   let order_name = req.body.order_name;
//    console.log(order_name)
   db.query(`SELECT order_id FROM orders WHERE order_name = ?`,order_name,(err,result,fields)=>{
       if(err){
           throw err
       }else{
        //    console.log(result)
           res.send(result)
       }
   })
});

app.delete('/api/orders/delete/:order_id/:user_id/:canteen_id/:item_id', (req, res) => {
    //delete the food item from food item list
    let order_id = req.params.order_id,
        user_id = req.params.user_id,
        canteen_id =req.params.canteen_id,
        item_id=req.params.item_id;

    //  console.log(req.params);

    db.query('DELETE FROM orders_content WHERE order_id = ? AND user_id = ? AND canteen_id = ? AND item_id = ?', [order_id, user_id,canteen_id,item_id], (err, result, fields) => {
        if (err) throw err;
        else {

            // let r  = JSON.parse(result);

            res.send(result);
        }
    });

});


app.post('/api/orders/additem', (req, res) => {
    //update the order_content
    var order_id = req.body['order_id'],
        user_id = req.body['user_id'],
        canteen_id = req.body['canteen_id'],
        item_id = req.body['item_id'];
        quantity = req.body['quantity'];
    db.query(`INSERT INTO  orders_content (order_id,user_id,canteen_id,item_id,quantity) VALUES('${order_id}','${user_id}','${canteen_id}','${item_id}','${quantity}')`, (err, result, fields) => {
        if (err) throw err;
        else {
            res.send("your order item added sucessfully");
        }
    })

});
// app.delete('api/orders/deleteItem/:id&&',(req,res)=>{
//     //update the order_content
//     let hashid  = res.params.hash;
//     db.query(`DELETE FROM orders_content WHERE order_hash  = ${hashid}`,(err,result,fields)=>{
//         if (err) throw err;
//         else{
//             res.send("your order deleted sucessfully");
//         }
//     });


// });

app.get('/register', (req, res)=>{
    res.render('register');
})

app.get('/login', function (req, res) {
    res.render('login', {
        title: `hey`
    });
});

app.post('/register',(req,res)=>{
      
    db.query(`INSERT INTO accounts1 (username,password) VALUES ('${req.body.username}','${req.body.Password}')`,(err , result)=>{
      if(!err)
    //   res.redirect('/login')
      res.send("1");
        // res.render('login',{
        //     title:'user registered GO TO LOGIN portal'
        // });
    } );

})





app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.Password;
    console.log(req.body);


    if (username && password) {
        console.log(`SELECT id, username, password FROM accounts1 WHERE username = ${username} AND password = ${password}`);
        db.query('SELECT id, username, password FROM accounts1 WHERE username = ? AND password = ?', [username, password], function (err, result, fields) {
            if (err) {
                throw err;
            }
            if (result.length > 0) {
                console.log('found');
                req.session.name = username;
                req.session.loggedin = true;
                req.session.userId = result[0].id;
                // res.redirect('/');
                res.send({user : username , loggedIn : true , userId : result[0].id});
                return;
            } else {
                console.log(result);
                res.send('0');
                //res.send('incorrect username password');
            };
            res.end();
        });
    } else {
        console.log("error");
        res.end();
    }
});

app.get('/logOut', function(req,res){
    if(req.session.loggedin){
        req.session.destroy(function(){
            res.send("logged out");
        });
        
    }else{
        res.send("already logged out");
    }
});

app.get('/api/canteens', function (req, res) {
    // res.render('login' , {
    //     title : `hey`
    // });
    db.query('SELECT * FROM canteens', function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});



app.get('/api/canteens/:table_name', function (req, res) {
    var table_name = req.params.table_name;
    console.log(table_name)
    db.query(`SELECT * FROM ${table_name}`, function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            res.send(result);
            // console.log(result)
        }
    });
});

app.post('/api/creategroup', function (req, res) {
    var group_name = req.body.group_name;
    var user_id = req.body.userId;
    var group_code = Math.floor(100000 + Math.random() * 900000);
    var group_id;



    db.query(`INSERT INTO group_table (group_id, group_name, group_code) VALUES (NULL, '${group_name}', '${group_code}')`, function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            res.send(`${group_code}`);

            db.query(`SELECT group_id FROM group_table WHERE group_code = ? `, [group_code], function(err,result,fields){
                if(err){
                    throw err;
                }else{
                    // console.log(result[0].group_id)
                    group_id = result[0].group_id;
                    // console.log(group_id,user_id)

                    db.query(`INSERT INTO group_members (group_id, member_id, is_admin) VALUES (${group_id}, '${user_id}', '1')`, function (err, result, fields) {
                        if (err) {
                            throw err;
                        } else {
                            // group_id = result[0].group_id;
                            // console.log(typeof group_id);
                        }
                    });

                }
            });
        }
    });

   



    
});
// var group_id;
app.post('/api/joingroup', function (req, res) {
    var group_code = req.body.group_code;
    var member_id = req.body.userId;


    // console.log(member_id);
    // var group_id;

    db.query(`SELECT group_id FROM group_table WHERE group_code = ?`, [group_code], function (err, result, fields) {
        if (err) {
            throw err;
        } else {
           
            // group_id = result[0].group_id;
            // console.log(typeof group_id);

            let group_id = result[0].group_id;
            console.log(group_id);
            // console.log(result)
            db.query("INSERT INTO group_members (group_id, member_id) VALUES ('" + group_id + "','" + member_id + "')", function (err, result, fields) {
                if (err) {
                    throw err;
                } else {
                    //res.send(`${group_code}`);
                    res.end();
                }
            });


        }
    });

    // db.query("INSERT INTO group_members (group_id, member_id) VALUES ('"+group_id+"','"+ member_id+"')", function(err,result,fields){
    //     if (err) {
    //         throw err;
    //     }else{
    //         //res.send(`${group_code}`);
    //         res.end();
    //     }
    // });

});

app.post('/api/joingroups', function (req, res) {
    var member_id = req.session.userId;

    db.query("INSERT INTO group_members (group_id, member_id) VALUES ('" + group_id + "','" + member_id + "')", function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            //res.send(`${group_code}`);
            res.end();
        }
    });
});

// app.delete('/api/leavegroup', function (req, res) {
//     var member_id = req.body.member_id;
//     var group_id = req.body.group_id;

//     console.log(group_id, member_id)

//     db.query("DELETE FROM group_members WHERE group_id = ? AND member_id = ?", [group_id, member_id], function (err, result, fields) {
//         if (err) {
//             throw err;
//         } else {
//             console.log(result);
//         }
//     });
// });






app.post('/api/items/fetch', (req, res)=>{
    let canteen_id = req.body. canteen_id; 
    console.log(canteen_id)

    db.query(`SELECT FROM canteens WHERE canteen_id = ?`,canteen_id, (err,result,fields)=>{
          if(err){
              throw err
          }
          else{
              console.log(result)
          }
    });
});

app.post('/api/getgroupid', (req, res)=>{
    let member_id = req.body.member_id;
    let group_id; 
    console.log(member_id);

    db.query(`SELECT group_id FROM group_members WHERE member_id = ?`,group_id, (err,result,fields)=>{
          if(err){
              throw err
          }
          else{
              console.log(result);
              group_id = result[0].group_id;
              res.send(group_id);
          }
    });
});

app.listen(3005, function () {
    console.log("listening");
});