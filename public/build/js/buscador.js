function iniciarApp(){buscarPorFecha()}function buscarPorFecha(){addEventListener("input",(function(n){const i=n.target.value;window.location="?fecha="+i}))}addEventListener("DOMContentLoaded",(function(){iniciarApp()}));