const mysql= require('mysql');

const mysqlConection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root11',
    database: 'test1',
})

mysqlConection.connect(function (err){
    if(err){
        console.log(err);
        return
    }else{
        console.log('Db is connected')
    }
});

module.exports=mysqlConection