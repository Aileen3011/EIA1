var Europa = 0;
var DataEurpa = [4965.7, 4616.4, 4705.8, 4615.2, 4541.5, 4436.9, 4202, 4191.6, 4247.3, 4278.7, 4209.3];
for (var i = 0; i < DataEurpa.length; i++) {
    Europa = Europa + DataEurpa[i];
}
var NorthAmerica = 0;
var DataNorthAmerica = [6600.4, 6139.9, 6375.8, 6262.8, 5998.9, 6176, 6268.9, 6048.7, 5938.3, 5920.5, 6035.6];
for (i = 0; i < DataNorthAmerica.length; i++) {
    NorthAmerica = NorthAmerica + DataNorthAmerica[i];
}
var Asia = 0;
var DataAsia = [12954.7, 13246.6, 13986.8, 14860.1, 15308.8, 15660.2, 15787.7, 15877, 15984, 16274.3, 16274.1];
for (i = 0; i < DataAsia.length; i++) {
    Asia = Asia + DataAsia[i];
}
var SouthAmerica = 0;
var DataSouthAmerica = [1132.6, 1093.1, 1164.2, 1215.5, 1262, 1308.9, 1331.3, 1321.7, 1294.7, 1279.2, 1261.5];
for (i = 0; i < DataSouthAmerica.length; i++) {
    SouthAmerica = SouthAmerica + DataSouthAmerica[i];
}
var Africa = 0;
var DataAfrica = [1028, 1041.9, 1072.1, 1073.7, 1107.1, 1134.4, 1167.1, 1174.5, 1192.1, 1207, 1235.5];
for (i = 0; i < DataAfrica.length; i++) {
    Africa = Africa + DataAfrica[i];
}
var Australia = 0;
var DataAustralia = [1993, 1875.7, 1939.1, 2035.2, 2063.2, 2014.7, 2027.6, 1986.8, 1997.4, 2001.4, 2100.5];
for (i = 0; i < DataAustralia.length; i++) {
    Australia = Australia + DataAustralia[i];
}
var EUO = DataEurpa[10] - DataEurpa[0];
var NAO = DataNorthAmerica[10] - DataNorthAmerica[0];
var AO = DataAsia[10] - DataAsia[0];
var SAO = DataSouthAmerica[10] - DataSouthAmerica[0];
var AFO = DataAfrica[10] - DataAfrica[0];
var AUO = DataAustralia[10] - DataAustralia[0];

var EUP = (EUO / Europa) * 1000;
var NAP = (NAO / NorthAmerica) * 1000;
var AP = (AO / Asia) * 1000;
var SAP = (SAO / SouthAmerica) * 1000;
var AFP = (AFO / Africa) * 1000;
var AUP = (AUO / Australia) * 1000;

var Welt = Europa + NorthAmerica + Asia + SouthAmerica + Africa + Australia;
var EPW = (Europa / Welt) * 100;
var NAW = (NorthAmerica / Welt) * 100;
var AW = (Asia / Welt) * 100;
var SAW = (SouthAmerica / Welt) * 100;
var AFW = (Africa / Welt) * 100;
var AUW = (Australia / Welt) * 100;

window.onload = function () {
    document.getElementById("titleRegion").innerHTML = "Europe";
    document.getElementById("titleRegion2").innerHTML = "Europe";
    document.getElementById("inputAbs").innerHTML = String(DataEurpa[10]) + " kg CO2";
    document.getElementById("rel").innerHTML = String(EPW.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rate").innerHTML = String(EUP.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rateAbs").innerHTML = String(EUO.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " kg CO2";
    document.getElementById("chart").style.height = String(Math.round(EPW)) + "%";
    document.getElementById("eu").style.borderBottomWidth="2px";
    document.getElementById("eu").style.borderStyle="solid";
    
    
   
document.getElementById('eu').addEventListener("click",Europa);
document.getElementById('na').addEventListener("click",NA);
document.getElementById('sa').addEventListener("click",SA);
document.getElementById('af').addEventListener("click",AF);
document.getElementById('as').addEventListener("click",AS);
document.getElementById('au').addEventListener("click",AU);

    function Europa(){
    document.getElementById("titleRegion").innerHTML = "Europe";
    document.getElementById("titleRegion2").innerHTML = "Europe";
    document.getElementById("inputAbs").innerHTML = String(DataEurpa[10]) + " kg CO2";
    document.getElementById("rel").innerHTML = String(EPW.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rate").innerHTML = String(EUP.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rateAbs").innerHTML = String(EUO.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " kg CO2";
    document.getElementById("chart").style.height = String(Math.round(EPW)) + "%";
    document.getElementById("eu").style.borderBottomWidth="2px";
    document.getElementById("eu").style.borderStyle="solid";
    document.getElementById("na").style.borderStyle="none";
    document.getElementById("sa").style.borderStyle="none";
    document.getElementById("af").style.borderStyle="none";
    document.getElementById("as").style.borderStyle="none";
    document.getElementById("au").style.borderStyle="none";
}
    function NA(){
    document.getElementById("titleRegion").innerHTML = "North America";
    document.getElementById("titleRegion2").innerHTML = "North America";
    document.getElementById("inputAbs").innerHTML = String(DataNorthAmerica[10]) + " kg CO2";
    document.getElementById("rel").innerHTML = String(NAW.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " %";
    document.getElementById("rate").innerHTML = String(NAP.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " %";
    document.getElementById("rateAbs").innerHTML = String(NAO.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " kg CO2";
    document.getElementById("chart").style.height = String(Math.round(NAW)) + "%";
    document.getElementById("na").style.borderBottomWidth="2px";
    document.getElementById("na").style.borderStyle="solid";
    document.getElementById("eu").style.borderStyle="none";
    document.getElementById("sa").style.borderStyle="none";
    document.getElementById("af").style.borderStyle="none";
    document.getElementById("as").style.borderStyle="none";
    document.getElementById("au").style.borderStyle="none";
}
    function SA(){
    document.getElementById("titleRegion").innerHTML = "South America";
    document.getElementById("titleRegion2").innerHTML = "South America";
    document.getElementById("inputAbs").innerHTML = String(DataSouthAmerica[10]) + " kg CO2";
    document.getElementById("rel").innerHTML = String(SAW.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rate").innerHTML = String(SAP.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rateAbs").innerHTML = String(SAO.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " kg CO2";
    document.getElementById("chart").style.height = String(Math.round(SAW)) + "%";
    document.getElementById("sa").style.borderBottomWidth="2px";
    document.getElementById("sa").style.borderStyle="solid";
    document.getElementById("na").style.borderStyle="none";
    document.getElementById("eu").style.borderStyle="none";
    document.getElementById("af").style.borderStyle="none";
    document.getElementById("as").style.borderStyle="none";
    document.getElementById("au").style.borderStyle="none";
}
    function AF(){
    document.getElementById("titleRegion").innerHTML = "Africa";
    document.getElementById("titleRegion2").innerHTML = "Africa";
    document.getElementById("inputAbs").innerHTML = String(DataAfrica[10]) + " kg CO2";
    document.getElementById("rel").innerHTML = String(AFW.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rate").innerHTML = String(AFP.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rateAbs").innerHTML = String(AFO.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " kg CO2";
    document.getElementById("chart").style.height = String(Math.round(AFW)) + "%";
    document.getElementById("af").style.borderBottomWidth="2px";
    document.getElementById("af").style.borderStyle="solid";
    document.getElementById("na").style.borderStyle="none";
    document.getElementById("sa").style.borderStyle="none";
    document.getElementById("eu").style.borderStyle="none";
    document.getElementById("as").style.borderStyle="none";
    document.getElementById("au").style.borderStyle="none";
}
    function AS(){
    document.getElementById("titleRegion").innerHTML = "Asia";
    document.getElementById("titleRegion2").innerHTML = "Asia";
    document.getElementById("inputAbs").innerHTML = String(DataAsia[10]) + " kg CO2";
    document.getElementById("rel").innerHTML = String(AW.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rate").innerHTML = String(AP.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rateAbs").innerHTML = String(AO.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " kg CO2";
    document.getElementById("chart").style.height = String(Math.round(AW)) + "%";
    document.getElementById("as").style.borderBottomWidth="2px";
    document.getElementById("as").style.borderStyle="solid";
    document.getElementById("na").style.borderStyle="none";
    document.getElementById("sa").style.borderStyle="none";
    document.getElementById("af").style.borderStyle="none";
    document.getElementById("eu").style.borderStyle="none";
    document.getElementById("au").style.borderStyle="none";
}
    function AU(){
    document.getElementById("titleRegion").innerHTML = "Australia";
    document.getElementById("titleRegion2").innerHTML = "Australia";
    document.getElementById("inputAbs").innerHTML = String(DataAustralia[10]) + " kg CO2";
    document.getElementById("rel").innerHTML = String(AUW.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rate").innerHTML = String(AUP.toLocaleString(undefined, { minimumFractionDigits: 2 }) + " %");
    document.getElementById("rateAbs").innerHTML = String(AUO.toLocaleString(undefined, { minimumFractionDigits: 2 })) + " kg CO2";
    document.getElementById("chart").style.height = String(Math.round(AUW)) + "%";
    document.getElementById("au").style.borderBottomWidth="2px";
    document.getElementById("au").style.borderStyle="solid";
    document.getElementById("na").style.borderStyle="none";
    document.getElementById("sa").style.borderStyle="none";
    document.getElementById("af").style.borderStyle="none";
    document.getElementById("as").style.borderStyle="none";
    document.getElementById("eu").style.borderStyle="none";
}
};



















