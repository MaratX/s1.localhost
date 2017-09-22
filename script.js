function funct() {
    var hid = document.getElementById("hid");
    hid.setAttribute('value', this.event.target.tagName());
    /**var name = document.getElementById("name");
    name.setAttribute('value', );
    var address = document.getElementById("address");
    address.setAttribute('value', );
    var phone = document.getElementById("phone");
    phone.setAttribute('value', );*/
    document.getElementById("Modal").style.display = "block";
}
var span = document.getElementById("span");
span.onclick = function(){
    document.getElementById("Modal").style.display = "none";
}
function initTable(object){
    var json = JSON.parse(object);
    for(var i = 0; i < json.LPU.length; i++){
        var table = document.getElementById("tab");
        var row = table.insertRow(i);
        row.setAttribute('name', json.LPU[i].id);
        row.onclick = funct;
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        if(json.LPU[i].hid != null) {
            cell1.innerHTML = json.LPU[i].hid;
        }else {
            cell1.innerHTML = "";
        }
        if(json.LPU[i].full_name != null){
            cell2.innerHTML = json.LPU[i].full_name;
        }else{
            cell2.innerHTML ="";
        }

        if(json.LPU[i].address != null){
            cell3.innerHTML = json.LPU[i].address;
        }else{
            cell3.innerHTML = "";
        }

        if(json.LPU[i].phone != null){
            cell4.innerHTML = json.LPU[i].phone;
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