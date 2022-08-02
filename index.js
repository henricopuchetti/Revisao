/* configurações do servidor */
// carregar o módulo express

const express = require('express')

//executar o módulo express
const app = express()

//definir a pasta dos arquivos ejs
app.set('views','./')

//criar uma estancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})

/* configurações do servidor - fim  */

/* configurações do banco de dados - inicio */

//importar o modulo mongoose
const mongoose = require('mongoose')

//configurar o script de conexao
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:henrico100905@fiaptecnico.jm5sh.mongodb.net/test')
}

/* configuração do banco de dados - fim */


/* rota para a requisição */
app.get('/',(req,res)=>{
    conexao()
    //res.send('Funcionando')
    res.render('index.ejs',{nome:"Henrico Puchetti",turma:"2EMIA",disciplina:"LP2"})
})