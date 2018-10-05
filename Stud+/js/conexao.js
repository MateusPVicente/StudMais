const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000; //porta padrão
const sql = require('mssql');
const conexaoStr = "Server=regulus;Database=PR118171;User Id=PR118171;Password=PR118171;";

//conexao com BD
sql.connect(conexaoStr)
.then(conexao => global.conexao = conexao)
.catch(erro => console.log(erro));

// configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//definindo as rotas
const rota = express.Router();
rota.get('/', (requisicao, resposta) => resposta.json({ mensagem: 'Funcionando!'}));
app.use('/', rota);

//inicia servidor
app.listen(porta);
console.log('API Funcionando!');

function execSQL(sql, resposta) {
	global.conexao.request()
	.query(sql)
	.then(resultado => resposta.json(resultado.recordset))
	.catch(erro => resposta.json(erro));
}
rota.get('/pacientel1', (requisicao, resposta) =>{
	execSQL('SELECT * FROM PacienteL1', resposta);
})

//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/pacientel1/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
filtro = ' WHERE ID=' + parseInt(requisicao.params.id);
execSQL('SELECT * from PacienteL1' + filtro, resposta);
})