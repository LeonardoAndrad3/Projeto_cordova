document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //conferir o objeto sqlitePlugin;

    console.log(window.sqlitePlugin); 

        let db;
        let dadosDoBanco = {
            name:'my.db',
            location:'default',
            andoirdDatabaseProvider: 'system'
        }

    function inserir(){

        let  userName = document.getElementById("txtlogin").value;
        let userPass =   document.getElementById("txtlogin").value;

        db.transaction(function(tx){
            tx.executeSql('insert into usuario values (??)', [userName,userPass]);
        }, function(err){
                console.log(err.message);
        }, function(){
            alert("inserido com seucesso");
        });
    }

    function listar(){
            db.executeSql('SELECT login AS uLogin, pass AS uPass FROM usuarios',[],function(rs){

            alert(JSON.stringify(rs));
            alert(rs.rows.length);

                let i = 0;
                for(i = 0; i < rs.rows.length; i++){
                alert("item "+i);
                let recordItem = rs.rows.item(i);
                alert(JSON.stringify(recordItem));

                }
              
            },
            function(err){
                alert(err.message)

        });
    
    }

   
    document.getElementById("btnInserir").addEventListener("click",inserir);
    //add func pro evento click do btn inserir 
   
    document.getElementById("btnListar").addEventListener("click",listar);
 //add func pro evento click btn listar
 
    db = window.sqlitePlugin.openDatabase(dadosDoBanco);
   //criar e abrir o banco de dados

        db.transaction(function(tx){
            tx.executeSql('create table if not exist usuarios(login, pass)');
        }, function(err){
                console.log(err.message);
        }, function(){
            alert("Tabela criada com seucesso");
        });
  //criar a table com duas colunas usuario e senha
}
