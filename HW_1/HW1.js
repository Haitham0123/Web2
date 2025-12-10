let Km;
document.getElementById("btConvert").onclick = function(){
 Km = parseFloat(document.getElementById("KmInput").value);
  document.getElementById("result").textContent = `Mile = ${Km * 0.621371}`
}

document.getElementById("btClear").onclick=function(){
 document.getElementById("KmInput").value="";
 document.getElementById("result").textContent="";  
}