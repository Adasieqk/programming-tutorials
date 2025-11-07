
let skl1;
let skl2;

document.getElementById("obliczsume").onclick = function(){
    skl1 = document.getElementById("skladnik1").valueAsNumber;
    skl2 = document.getElementById("skladnik2").valueAsNumber; 
    let suma = skl1 + skl2;
    document.getElementById("wyswietlsume").innerHTML = suma;
}


let odj1;
let odj2;

document.getElementById("obliczroznice").onclick = function(){
    odj1 = document.getElementById("odjemna").valueAsNumber;
    odj2 = document.getElementById("odjemnik").valueAsNumber; 
    let roznica = odj1 - odj2;
    document.getElementById("wyswietlroznice").innerHTML = roznica;
}


let czy1;
let czy2;

document.getElementById("oblicziloczyn").onclick = function(){
    czy1 = document.getElementById("czynnik1").valueAsNumber;
    czy2 = document.getElementById("czynnik2").valueAsNumber; 
    let iloczyn = czy1 * czy2;
    document.getElementById("wyswietliloczyn").innerHTML = iloczyn;
}


let dzi1;
let dzi2;

document.getElementById("oblicziloraz").onclick = function(){
    dzi1 = document.getElementById("dzielna").valueAsNumber;
    dzi2 = document.getElementById("dzielnik").valueAsNumber; 
    let iloraz = dzi1 / dzi2;
    document.getElementById("wyswietliloraz").innerHTML = iloraz;
}
