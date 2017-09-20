function init(i){
    var table = document.getElementById("tab");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = i;
    cell2.innerHTML = "two";
}
function initTable(){

}
var x = new XMLHttpRequest();
x.open("GET", "get.php?getlist=0", true);
x.onload = function () {
    init(x.responseText);
}
x.send(null);
