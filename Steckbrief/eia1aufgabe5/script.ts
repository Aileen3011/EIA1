var Europa = 0;
var DataEurpa = [4965.7 , 4616.4 , 4705.8 , 4615.2 , 4541.5 , 4436.9 , 4202 , 4191.6 , 4247.3 , 4278.7 , 4209.3];
for (var i = 0; i < DataEurpa.length; i++) {
    Europa = Europa + DataEurpa[i];
  }

var NorthAmerica = 0; 
var DataNorthAmerica = [6600.4 , 6139.9 , 6375.8 , 6262.8 , 5998.9 , 6176 , 6268.9 , 6048.7 , 5938.3 , 5920.5 , 6035.6];
for (var i = 0; i < DataNorthAmerica.length; i++) {
NorthAmerica = NorthAmerica + DataNorthAmerica[i];
}

var Asia:number = 0;
var DataAsia = [12954.7 , 13246.6 , 13986.8 , 14860.1 , 15308.8 , 15660.2 , 15787.7 , 15877 , 15984 , 16274.3 , 16274.1];
for (var i = 0; i < DataAsia.length; i++) {
    Asia = Asia + DataAsia[i];
}

var SouthAmerica = 0;
var DataSouthAmerica = [1132.6 , 1093.1 , 1164.2 , 1215.5 , 1262 , 1308.9 , 1331.3 , 1321.7 , 1294.7 , 1279.2 , 1261.5];
for (var i = 0; i < DataSouthAmerica.length; i++) {
    SouthAmerica = SouthAmerica + DataSouthAmerica[i];
}

var Africa = 0;
var DataAfrica = [1028 , 1041.9 , 1072.1 , 1073.7 , 1107.1 , 1134.4 , 1167.1 , 1174.5 , 1192.1 , 1207 , 1235.5];
for (var i = 0; i < DataAfrica.length; i++) {
    Africa = Africa + DataAfrica[i];
}

var Australia = 0;
var DataAustralia = [1993 , 1875.7 , 1939.1 , 2035.2 , 2063.2 , 2014.7 , 2027.6 , 1986.8 , 1997.4 , 2001.4 , 2100.5];
for (var i = 0; i < DataAustralia.length; i++) {
    Australia = Australia + DataAustralia[i];
}

var EUO: number = DataEurpa[10] - DataEurpa[0];
var NAO: number = NorthAmerica[10] - NorthAmerica[0];
var AO: number = DataAsia[10] - DataAsia[0];
var SAO: number = DataSouthAmerica[10] - DataSouthAmerica[0];
var AFO: number = DataAfrica[10] - DataAfrica[0];
var AUO: number = DataAustralia[10] - DataAustralia[0];


var EUP: number = (EUO / Europa) * 100;
var NAP: number = (NAO / NorthAmerica) * 100;
var AP: number = (AO / Asia) * 100;
var SAP: number = (SAO / SouthAmerica) * 100;
var AFP: number = (AFO / Africa) * 100;
var AUP: number = (AUO / Australia) * 100;

// tslint:disable-next-line: variable-name
var Welt: number = Europa + NorthAmerica + Asia + SouthAmerica + Africa + Australia;

var EPW: number = (Europa / Welt) * 100;
var NAW: number = (NorthAmerica / Welt) * 100;
var AW: number = (Asia / Welt) * 100;
var SAW: number = (SouthAmerica / Welt) * 100;
var AFW: number = (Africa / Welt) * 100;
var AUW: number = (Australia / Welt) * 100;



console.log(`Die Emission von Europa ist: ${Europa} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit ${EPW} %`);
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ${EUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${EUO} kg CO2`);

console.log(`Die Emission von NorthAmerica ist: ${NorthAmerica} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht NorthAmerica damit ${NAW}%`);
console.log(`Für NorthAmerica hat sich 2018 im Vergleich zu 2008 die Emission um ${NAP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${NAO} kg CO2`);

console.log(`Die Emission von Asia ist: ${Asia} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Asia damit ${AW}%`);
console.log(`Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um ${AP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${AO} kg CO2`);

console.log(`Die Emission von SouthAmerica ist: ${SouthAmerica} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht SouthAmerica damit ${SAW}%`);
console.log(`Für SouthAmerica hat sich 2018 im Vergleich zu 2008 die Emission um ${SAP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${SAO} kg CO2`);

console.log(`Die Emission von Africa ist: ${Africa} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Africa damit ${AFW}%`);
console.log(`Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um ${AFP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${AFO} kg CO2`);

console.log(`Die Emission von Australia ist: ${Australia} kg CO2`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Australia damit ${AUW}%`);
console.log(`Für Australia hat sich 2018 im Vergleich zu 2008 die Emission um ${AUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${AUO} kg CO2`);

window.onload = function() {
   
document.getElementById("inputEUabs2018").innerHTML=String(DataEurpa[10])+" kg CO2";
document.getElementById("percenttoWorld").innerHTML=String(EPW.toLocaleString(
    undefined, { minimumFractionDigits: 2 }
  )+" %");
document.getElementById("percent2008to18").innerHTML=String(EUP.toLocaleString(
    undefined, { minimumFractionDigits: 2 }
  )+" %");
document.getElementById("2008to18abs").innerHTML=String(EUO.toLocaleString(
    undefined, { minimumFractionDigits: 2 }
  ))+" kg CO2";

} 