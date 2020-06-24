
var socket = io();

socket.on('connect', function(){
    console.log('conectado al servidor');
});

// On = son para Escuchar 
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

// emit= son para Enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Francisco',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log(resp)
});

socket.on('enviarMensaje',  function(mensaje){

    console.log('Servido:', mensaje)
})
