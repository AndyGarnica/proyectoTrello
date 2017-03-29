//-----------------T I T U L O -----------------------.

function agrearTitulo(){
  var nuevoTitulo = document.getElementById("titulo").value;
    if(nuevoTitulo.length > 0){
      if(find_ul(nuevoTitulo)){
        var ul = document.createElement('ul');
        ul.id = nuevoTitulo;
        ul.innerHTML = nuevoTitulo;
        ul.style.fontSize = "24px";
        document.getElementById("tituloNuevo").appendChild(ul);
      }
    }
    return false;
}

function find_ul(lista){
  var el = document.getElementById("tituloNuevo").getElementsByTagName("ul");
  for (var i=0; i<el.length; i++){
    if(el[i].innerHTML == lista)
    return false;
  }
  return true;
}


//------------L I S T A     D E    P E N D I E N T E S--------------------.

function agrearNewPendientes(){
  var otrosNuevosPendientes = document.getElementById("newPendientes").value;
    if(otrosNuevosPendientes.length > 0){
      if(find_li(otrosNuevosPendientes)){
        var li = document.createElement('li');
        li.id = otrosNuevosPendientes;
        li.innerHTML = otrosNuevosPendientes;
        document.getElementById("otrosPendientes").appendChild(li);
      }
    }
    return false;
}

function find_li(lista){
  var el = document.getElementById("otrosPendientes").getElementsByTagName("li");
  for (var i=0; i<el.length; i++){
    if(el[i].innerHTML == lista)
    return false;
  }
  return true;
}
