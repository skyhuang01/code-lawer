$.post("../json/test01.json",{},
function(data,status){
    if (data) {
        var data = JSON.parse(data) ;
            var datalength = 0;
            for (key in data) {
                if (key) {
                    datalength++;
                    var testid = document.getElementById("testid");
                    testid.innerHTML+="<p class="+"text-style text"+datalength+">"+datalength+"."+ data[key] +"</p>";
                }
            }
    }
});