var globalJson;
function funct() {
    var id = this.getAttribute('name');
    for(var i = 0; i < globalJson.LPU.length; i++){
        if(id === globalJson.LPU[i].id){
            var hid = document.getElementById("hid");
            hid.setAttribute('name', globalJson.LPU[i].id);
            hid.setAttribute('value', globalJson.LPU[i].hid);
            var name = document.getElementById("name");
            name.setAttribute('value', globalJson.LPU[i].name);
            var address = document.getElementById("address");
            address.setAttribute('value', globalJson.LPU[i].address);
            var phone = document.getElementById("phone");
            phone.setAttribute('value', globalJson.LPU[i].phone);
            document.getElementById("Modal").style.display = "block";
        }
    }


}

var span = document.getElementById("span");
span.onclick = function(){
    document.getElementById("Modal").style.display = "none";
}
function initTable(object){
    globalJson = JSON.parse(object);
    init();
}
function init(){
    for(var i = 0; i < globalJson.LPU.length; i++){
        var table = document.getElementById("tab");
        var row = table.insertRow(i);
        row.setAttribute('name', globalJson.LPU[i].id);
        row.onclick = funct;
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        if(globalJson.LPU[i].hid != null) {
            cell1.innerHTML = globalJson.LPU[i].hid;
        }else {
            cell1.innerHTML = "";
        }
        if(globalJson.LPU[i].full_name != null){
            cell2.innerHTML = globalJson.LPU[i].full_name;
        }else{
            cell2.innerHTML ="";
        }

        if(globalJson.LPU[i].address != null){
            cell3.innerHTML = globalJson.LPU[i].address;
        }else{
            cell3.innerHTML = "";
        }

        if(globalJson.LPU[i].phone != null){
            cell4.innerHTML = globalJson.LPU[i].phone;
        }else{
            cell4.innerHTML = "";
        }

    }
}
var x = new XMLHttpRequest();
x.open("GET", "get.php?getlist=0", true);
x.onload = function () {
    initTable(x.responseText);
}
x.send(null);

function clr() {
    document.getElementById("hid").setAttribute('name', "");
    document.getElementById("hid").setAttribute('value', "");
    document.getElementById("name").setAttribute('value', "");
    document.getElementById("address").setAttribute('value', "");
    document.getElementById("phone").setAttribute('value', "");
}
function upd(){

}
function crt() {

}
function del() {
    var idd = document.getElementById("hid").getAttribute("name");
    for(var i = 0; i < globalJson.LPU.length; i++){
        if(globalJson.LPU[i].id == idd){
            delete globalJson.LPU[i];
        }
    }
    crt();
    init();

}
//var tablet = document.getElementById("tab");
//var trr = document.getElementsByTagName('tr');
//trr.onclick = document.getElementById("Modal").style.display = "display";
//document.getElementsByTagName('tr').addEventListener('click',function (e) {
  //  document.getElementById("Modal").style.display = 