
// Comando para establecer 

var socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado al servidor');
});

socket.on('estadoActual', function(respuesta){
    label.text(respuesta.actual);
});

$('button').on('click', function(){
    // console.log('click')

    socket.emit('siguienteTicket', null, function(siguienteTicket){


        label.text(siguienteTicket);


    });




})