const descripcion = {
    demand: true,
    alias:  'd',
    desc:   'Descripción de la tarea por hacer'  
};

const completado ={
    demand: true,
    alias:  'd',
    desc: 'Descripcion de la tarea por hacer'    
};


const argv = require('yargs')

    .command('crear','Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar','Actualizar el estado completado de una tarea', {
        descripcion, 
        completado

    })
  
    .command('borrar','Se elimino el dato', {
        descripcion
    })
 
    .help()
    .argv;

module.exports = {
    argv
}      


