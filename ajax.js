function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            console.log(response);
            var tabledata =""; 
            for(i=0 ; i<response.length;i++){
                tabledata +=  "<tr><td><b>"+response[i].Sl_No+"</b></td><td><b>"+response[i].Name+"</b></td><td><b>"+response[i].Quantity+"</b></td><td><b>"+response[i].Unit+"</b></td><td><b>"+response[i].Department+"</b></td><td><b>"+response[i].Notes+"</b></td></tr>";

            }
            console.log(tabledata)
            document.getElementById("table").innerHTML ="<table class='table table-striped' style='margin-top: 5%;'><thead> <td><b>Sl_No</b></td><td><b>Name</b></td><td><b>Quantity</b></td><td><b>Unit</b></td><td><b>Department</b></td><td><b>Notes</b></td></thead><tbody>"+tabledata+"</tbody></table>";
            

            
            
        }
    }
    xhttp.open("GET","product.json",true);
    xhttp.send();
}

