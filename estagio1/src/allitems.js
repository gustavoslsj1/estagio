const connection = require('./connection');


const allitems = async () =>{
    const [query] = await connection.execute('select * from bancos_1');
    return query;
};





module.exports = allitems;
