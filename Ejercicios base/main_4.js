function mostrarOpcion(){
    var opciones = document.getElementsByName("eleccion");
    console.log(opciones);
    for(let i=0;i <opciones.lenght;i++){
        
        if(opciones[i].checked){
            alert(opciones[i].value);

        }
    }
}