document.getElementById('convert').onclick=tempConvert;
document.getElementById('reset').onclick=clearForm;


function tempConvert()
{
    var c=document.getElementById('cinput').value;
    var k=document.getElementById('kinput').value;
    var f=document.getElementById('finput').value;

    if (c != "") 
    {
        f = (parseFloat(c)*9)/5+32;
        k = (parseFloat(c)+273.15);
    }
    else if (k != "") 
    {
        f = (parseFloat(k)-273.15)*9/5+32;
        c = (parseFloat(k)-273.15);
    }
     else if (c != "") 
    {
        c = ((parseFloat(c)-32)*5)/9;
        k = (parseFloat(c)-32)*5/9+273.15;
    }
    else
     {
        alert("PEASE ENTER THE VALUE TO CONVERT");
    }
    document.getElementById('cinput').value=parseFloat(c).toFixed(3);
    document.getElementById('kinput').value=parseFloat(k).toFixed(3);
    document.getElementById('finput').value=parseFloat(f).toFixed(3);
}
function clearForm()
 {
    document.getElementById('cinput').value=""
    document.getElementById('kinput').value=""
    document.getElementById('finput').value=""
}