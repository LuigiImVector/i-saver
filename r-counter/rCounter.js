document.getElementById("submit").onclick = function ()
{
    var text=document.getElementById("input").value;
    var rCounter=0;

    rCounter=text.split(new RegExp( "r", "gi" )).length-1;

    document.getElementById("rNumber").innerHTML = "Numero di r: " + rCounter;


}