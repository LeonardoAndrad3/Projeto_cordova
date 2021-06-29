//document.addEventListener('deviceready', onDeviceReady, false);

let app = {

    contatoSelecionado: null,

    inicialize: function(){
        console.log("inicializar: function(){...");  
        document.addEventListener('deviceready', app.onDeviceReady, false);
        },

onDeviceReady: function() {

    console.log('#####+> Running cordova -' + cordova.platformId + '@' + cordova.version);
    document.getElementById("btnSelecionarCont").addEventListener('click', app.selecionarCont);
},

returnPrimeiroPlano: function(onResumeEvent){
    console.log('#####=> ReturnFunction .....');
    

},

selecionarCont: function(){
    console.log("selecinarCont: function{... ");
    navigator.contacts.pickContact(function(c){
        console.log("#####=> Contato Selecionado");
        console.log(c);
        app.contatoSelecionado = c;
        console.log(c.displayName);

        let spanElement = document.getElementById("contactName").innerHTML=c.displayName;
        console.log(spanElement);
        console.log(c);
        console.log(c.photos);
        let imgElement = document.getElementById("contactImg");
        imgElement.src = c.photos[0].value;
        console.log(imgElement);    
        console.log(c.photos[0].value);
      

}, function(err){
    console.log("#####=> Contato nao selecionado");
    console.log(err);
});
}
}

app.inicialize();