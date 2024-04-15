const connection = require('./connection');


const id = async () =>{
    const [query] = await connection.execute('select `Nome Instituicao` from bancos_1  where `Codigo de compensacao` = 1  ');
    return query;
};




module.exports = id;