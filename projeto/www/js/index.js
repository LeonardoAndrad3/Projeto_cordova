var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        var btnTirarFoto = document.getElementById("btnTirarFoto");
        btnTirarFoto.addEventListener('click',this.tirarFoto);
        this.pictureSource=navigator.camera.PictureSourceType;
        this.destinationType=navigator.camera.DestinationType;
        console.dir(this.pictureSource);
        console.dir(this.destinationType);
    },

    tirarFoto: function(){
        if (!navigator.camera) {
            alert("Plugin Cordova da Camera nao Instalado", "Erro!!!");
            return;
        }

        var options =   {   quality: 50,
                            destinationType: Camera.DestinationType.FILE_URI,
                            encodingType: Camera.EncodingType.JPEG,
                            mediaType: Camera.MediaType.PICTURE,
                            sourceType: 1,   
                            encodingType: 0     
                        };

        let options2 = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: true,
            saveToPhotoAlbum: false,
            cameraDirection: 1,
            sourceType: Camera.PictureSourceType.CAMERA
        };

        navigator.camera.getPicture(
            function(imgData) {

                var imgHtmlTag = document.getElementById("imgHtmlTag");
                alert(imgHtmlTag);
                imgHtmlTag.src = "data:image/jpeg;base64,"+imgData;
            },
            function(e) {
                alert(e);
                alert('Plugin Camera Instalado, mas getPicture falhou', 'Error');
            }, options2);

        return false;     
    }            
};

app.initialize();