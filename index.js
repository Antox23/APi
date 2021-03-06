const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('Conectado com Sucesso!');
        
        Tabelas.init(conexao);

        const app = customExpress();
        var port = 3000
        app.listen(port, ()  => console.log('Servidor subiu na porta ' + port));
    }
})