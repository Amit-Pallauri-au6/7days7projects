var form = document.querySelector(".form");
var button = document.querySelector("button");
var table = document.getElementById("tabled");
var t = document.querySelector("table");
var content2 = document.querySelector(".content2");
var content = document.querySelector(".content");
var arr = [];
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var no = document.getElementById("phone").value;
    
    arr.unshift(name, email, no);
        var node = document.createElement("tr");
        for( var i=0; i<3; i++){
            
            var node2 = document.createElement("td");
            var textnode = document.createTextNode(arr[i]);
            // console.log(arr[i]);
            node.appendChild(node2);
            node2.appendChild(textnode);
            table.appendChild(node); 
        }
        t.style.display = "block";
        content2.style.display = "block";

        content.style.margin =  "0 450px 0 0";
    form.reset();
    
});
