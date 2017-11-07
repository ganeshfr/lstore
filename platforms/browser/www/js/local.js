function ajouter(){
  var produit = document.getElementById("prod").value;
  var qty = document.getElementById("q").value;
  localStorage.setItem(produit,qty);
  document.getElementById("prod").value="";
  document.getElementById("q").value="";
  afficher();
}
  function modifier(){
    var produit = document.getElementById("prod").value;
    document.getElementById("q").value = localStorage.getItem(produit);
    afficher();
}
    function supprimer(){
    var produit = document.getElementById("prod").value;
    localStorage.removeItem(produit);
    document.getElementById("prod").value="";
    afficher();
}
    function doClear(){
      localStorage.clear();
      afficher();
}
    function afficher(){
    var key = "";
    var paires = "<tr class=\"first\"><td><b>Produit</b></td><td><b>Quantité</b></td></tr>";
    var i=0;
    for (i=0; i<=localStorage.length-1;i++){
    key = localStorage.key(i);
    paires +="<tr><td>"+key+"</td><td>"+localStorage.getItem(key)+"</td></tr>";
}
    if(paires == "<tr class=\"first\"><td><b>Produit</b></td><td><b>Quantité</b></td></tr>"){
      paires +="<tr><td><i>Vide</i></td><td><i>Vide</i></td></tr>"
      }
    document.getElementById('paires').innerHTML = paires;
}
