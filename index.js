const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://week10:week10@cluster0-aqian.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

//Métodos HTTP get -> consulta, post -> insercao, put -> alterar, delete

// Tipos de  parametros:

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (não relacional)

app.post('/', (request, response) => {
    console.log(request.body);
    return response.json({'message':'Hello World!'});
});

app.listen(3333);
 

