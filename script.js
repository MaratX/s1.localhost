var globalJson;

document.getElementById("creater").onclick = function () {
    document.getElementById("Modal").style.display = "block";
}
function funct() {
    var id = this.getAttribute('name');
    for(var i = 0; i < globalJson.LPU.length; i++){
        if(id == globalJson.LPU[i].id){
            var hid = document.getElementById("hid");
            hid.setAttribute('name', globalJson.LPU[i].id);
            hid.setAttribute('value', globalJson.LPU[i].hid);
            var name = document.getElementById("name");
            name.setAttribute('value', globalJson.LPU[i].full_name);
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
    document.getElementById("tab").innerHTML = "";

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
    document.getElementById("hid").name = "";
    document.getElementById("hid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
}

function upd(){
    var id = document.getElementById("hid").getAttribute("name");
    for(var i =0; i < globalJson.LPU.length; i++){
        if(globalJson.LPU[i].id == id){
            globalJson.LPU[i].hid = document.getElementById("hid").value;
            globalJson.LPU[i].full_name = document.getElementById("name").value;
            globalJson.LPU[i].address = document.getElementById("address").value;
            globalJson.LPU[i].phone = document.getElementById("phone").value;
        }
    }
    _request_server();
    fasad();
}

function crte() {
    var maxID = 0;
    for(var i =0; i < globalJson.LPU.length; i++){
        if(maxID < globalJson.LPU[i].id){
            maxID = globalJson.LPU[i].id;
        }
    }
    var element = {};
    element.id = maxID + 1;
    element.hid = document.getElementById("hid").value;
    element.full_name = document.getElementById("name").value;
    element.address = document.getElementById("address").value;
    element.phone = document.getElementById("phone").value;
    globalJson.LPU.unshift(element);
    fasad();
};

function del() {
    var idd = document.getElementById("hid").getAttribute("name");
    for(var i = 0; i < globalJson.LPU.length; i++){
        if(globalJson.LPU[i].id == idd){
            globalJson.LPU.splice(i, 1);
        }
    }
    fasad();
}

function _request_server(){
 var _request = new  XMLHttpRequest();
 _request.open("GET", "jsonlist.php?" + "param=" + JSON.stringify(globalJson), true);
 _request.send();
 _request.onreadystatechange = function () {
     if(this.readyState == 4){
         if(this.status == 200){
            alert(this.responseText);
         }else {
             alert('error');
         }
     }
 };

}

function fasad(){
    clr();
    init();
    document.getElementById("Modal").style.display = "none";
}