const kolo = document.getElementById('kolo');
const trojkat = document.getElementById('trojkat');
const trapez = document.getElementById('trapez');

const anulujbutton = document.getElementById('anuluj');

const kolocalc = document.getElementById('kolocalc');
const trojkatcalc = document.getElementById('trojkatcalc');
const trapezcalc = document.getElementById('trapezcalc');
const wynikdiv = document.getElementById('wynik');

kolocalc.style.display = 'none';
trojkatcalc.style.display = 'none';
trapezcalc.style.display = 'none';
wynikdiv.style.display = 'none';


kolo.addEventListener('click', function() {
    kolocalc.style.display = 'block';
    trojkat.style.display = 'none';
    trapez.style.display = 'none';
}) 

trojkat.addEventListener('click', function() {
    kolo.style.display = 'none';
    trojkat.style.display = 'block';
    trapez.style.display = 'none';

    trojkatcalc.style.display = 'block';
}) 

trapez.addEventListener('click', function() {
    kolo.style.display = 'none';
    trojkat.style.display = 'none';
    trapez.style.display = 'block';

    trapezcalc.style.display = 'block';
}) 

function anuluj() {
    kolo.style.display = '';
    trojkat.style.display = '';
    trapez.style.display = '';

    kolocalc.style.display = 'none';
    trojkatcalc.style.display = 'none';
    trapezcalc.style.display = 'none';
}



function oblicz(figura) {




    if(figura == "kolo") {

        var a = document.getElementById('kolor').value;

        if(a == "") return alert("Wypełnij wszystkie pola")

        var pole = Math.PI * a**2;

        console.log(`pole to ${pole}`)
        wynik('kolo', pole)
        
        
    } else if(figura == "trojkat") {

        var a = document.getElementById('trojkata').value;
        var h = document.getElementById('trojkath').value;

        if(a == "" || h == "") return alert("Wypełnij wszystkie pola")

        var pole = (a * h) / 2;

        console.log(`pole to ${pole}`)
        wynik('trojkat', pole)

        
    } else if(figura == "trapez") {
            
            var a = document.getElementById('trapeza').value;
            var b = document.getElementById('trapezb').value;
            var h = document.getElementById('trapezh').value;

            if(a == "" || b == "" || h == "") return alert("Wypełnij wszystkie pola")
    
            var pole = ((a + b) * h) / 2;
    
            console.log(`pole to ${pole}`)
            wynik('trapez', pole)
            
        }

}


function wynik(figura, wynik) {

    document.getElementById(`${figura}oblicz`).style.display = 'none';
    document.getElementById(`${figura}anuluj`).style.display = 'none';

    wynikdiv.style.background = `${figura == "kolo" ? "red" : figura == "trojkat" ? "yellow" : "blue"}`;
    document.getElementById('wynikp').innerHTML = `Pole figury <strong>${figura}</strong> wynosi <strong>${wynik}</strong>`;
    wynikdiv.style.display = 'block';
}

function zamknij() {
    kolo.style.display = '';
    trojkat.style.display = '';
    trapez.style.display = '';

    kolocalc.style.display = 'none';
    trojkatcalc.style.display = 'none';
    trapezcalc.style.display = 'none';

    wynikdiv.style.display = 'none';

    document.getElementById('kolooblicz').style.display = '';
    document.getElementById('koloanuluj').style.display = '';
    document.getElementById('trojkatoblicz').style.display = '';
    document.getElementById('trojkatanuluj').style.display = '';
    document.getElementById('trapezoblicz').style.display = '';
    document.getElementById('trapezanuluj').style.display = '';
}