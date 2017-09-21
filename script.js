
function initTable(object){
    var json = JSON.parse(object);
    for(var i = 0; i < json.LPU.length; i++){
        var table = document.getElementById("tab");
        var row = table.insertRow(i);
        row.setAttribute('name', json.LPU[i].id);
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
 document.getElementsByTagName("tr").click = function () {
    alert(this);
    document.getElementById("Modal").style.display = "block";
}