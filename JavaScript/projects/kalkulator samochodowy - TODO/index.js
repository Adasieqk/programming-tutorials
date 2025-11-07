const przycisk = document.querySelector("#przycisk");

const cenaBenzynyLitrInput = document.querySelector("#cenabenz");
const cenaGazuLitrInput = document.querySelector("#cenagazu");
const spalanieInput = document.querySelector("#spalanie");
const kmMiesiecznieInput = document.querySelector("#kmnamies");
const spalanieGazuInstInput = document.querySelector("#spalgazu");
const spalanieBenzynyInstInput = document.querySelector("#spalbenz");
const kosztInstalacjiInput = document.querySelector("#cenainst");
const oszczednoscLataInput = document.querySelector("#ilelat");


const htmlOszczMies = document.querySelector("#htmlOszczednoscMiesieczna");
const htmlOszczRocz = document.querySelector("#htmlOszczednoscRoczna");
const htmlPoIluMies = document.querySelector("#htmlPoIluMiesiacachZaoszczedziszNaInstalacje");
const htmlPoXLatach = document.querySelector("#htmlPoXLatachZaoszczedzisz");



przycisk.onclick = function () {
    const cenaBenzynyLitr = Number(cenaBenzynyLitrInput.value);
    const cenaGazuLitr = Number(cenaGazuLitrInput.value);
    const spalanie = Number(spalanieInput.value);
    const kmMiesiecznie = Number(kmMiesiecznieInput.value);
    const spalanieGazuInst = Number(spalanieGazuInstInput.value);
    const spalanieBenzynyInst = Number(spalanieBenzynyInstInput.value);
    const kosztInstalacji = Number(kosztInstalacjiInput.value);
    const oszczednoscLata = Number(oszczednoscLataInput.value);

    // console.log("Cena benzyny:", cenaBenzynyLitr);
    // console.log("Cena gazu:", cenaGazuLitr);
    // console.log("Spalanie benzyny:", spalanie);
    // console.log("KM miesięcznie:", kmMiesiecznie);
    // console.log("Spalanie gazu z instalacją:", spalanieGazuInst);
    // console.log("Spalanie benzyny z instalacją:", spalanieBenzynyInst);
    // console.log("Koszt instalacji:", kosztInstalacji);
    // console.log("Oszczędność po latach:", oszczednoscLata);


    // OSZCZEDNOSC MIESIECZNA

    const kosztMiesiecznyBenzyna = (cenaBenzynyLitr * spalanie) / 100 * kmMiesiecznie;
    console.log("Koszt miesięczny benzyna: ", kosztMiesiecznyBenzyna);

    const kosztMiesiecznyZGazem = ((cenaGazuLitr * spalanieGazuInst + cenaBenzynyLitr * spalanieBenzynyInst) / 100) * kmMiesiecznie;
    console.log("Koszt miesięczny z gazem: ", kosztMiesiecznyZGazem);

    const oszczednoscMiesieczna = kosztMiesiecznyBenzyna - kosztMiesiecznyZGazem;
    console.log("Oszczednosc miesieczna", oszczednoscMiesieczna);

    const oszczednoscRoczna = oszczednoscMiesieczna * 12;
    console.log("Oszczędność roczna: ", oszczednoscRoczna);

    const poIluMiesiacachSieWroci = Math.ceil(kosztInstalacji / oszczednoscMiesieczna);
    const poIluLatachSieWroci = (poIluMiesiacachSieWroci / 12).toFixed(1);
    console.log(`Koszt instalacji wróci się po ${poIluMiesiacachSieWroci} miesiącach, czyli po ${poIluLatachSieWroci} latach.`);

    const oszczednoscPoXLatach = oszczednoscLata * oszczednoscRoczna;
    const oszczednoscPoXLatachOdliczajacInstalacje = oszczednoscPoXLatach - kosztInstalacji;
    console.log(`Po ${oszczednoscLata} latach, zaoszczędzisz w sumie ${oszczednoscPoXLatach} złotych. Odliczając koszt instalacji, po ${oszczednoscLata} latach zaoszczędzisz ${oszczednoscPoXLatachOdliczajacInstalacje} złotych`);


    htmlOszczMies.textContent = `Oszczędność miesięczna na instalacji wynosi ${oszczednoscMiesieczna}`;
    htmlOszczRocz.textContent = `Oszczędność roczna na instalacji wynosi ${oszczednoscRoczna}`;
    htmlPoIluMies.textContent = `Koszt instalacji wróci się po ${poIluMiesiacachSieWroci} miesiącach, czyli po ${poIluLatachSieWroci} latach.`;
    htmlPoXLatach.innerHTML = `Po ${oszczednoscLata} latach, różnica między jazdą z instalacją i jazdą bez instalacji będzie wynosić ${oszczednoscPoXLatach} złotych. <br> Odliczając koszt instalacji, po ${oszczednoscLata} latach zaoszczędzisz ${oszczednoscPoXLatachOdliczajacInstalacje} złotych.`;


};
