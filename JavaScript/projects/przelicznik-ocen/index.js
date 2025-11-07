
// let procent;
// procent = window.prompt("Wpisz procent"); 
// console.log(procent, typeof(procent));
// switch(true){
//     case procent > 100:
//         window.alert("Błąd! Liczba jest większa od 100");
//         break;
//     case procent >= 91:
//         window.alert("Masz 5");
//         break;
//     case procent >= 75:
//         window.alert("Masz 4");
//         break;
//     case procent >= 51:
//         window.alert("Masz 3");
//         break;
//     case procent >= 31:
//         window.alert("Masz 2");
//         break;
//     case procent >= 0:
//         window.alert("Masz 1");
//         break;
//     default:
//         window.alert("Dane wejściowe nie jest liczbą");
//         break;
// }



document.getElementById("przelicz").onclick = function(){
    let procent;
    procent = document.getElementById("wprpro").value;
    console.log(procent, typeof(procent));

    switch(true){
        case procent > 100:
            window.alert("Wprowadzona liczba (" + procent + ") nie jest procentem, ponieważ wynosi ponad 100");
            break;
        case procent >= 91:
            document.getElementById("wynik").innerHTML = "Masz 5";
            break;
        case procent >= 75:
            document.getElementById("wynik").innerHTML = "Masz 4";
            break;
        case procent >= 51:
            document.getElementById("wynik").innerHTML = "Masz 3";
            break;
        case procent >= 31:
            document.getElementById("wynik").innerHTML = "Masz 2";
            break;
        case procent >= 0:
            document.getElementById("wynik").innerHTML = "Masz 1";
            break;
        default:
            window.alert("Dane wejściowe nie jest liczbą");
            break;
    }
}