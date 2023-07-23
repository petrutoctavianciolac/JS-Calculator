let panou = document.getElementById("panou");
let cifre = document.querySelectorAll('.numere');
let clear = document.getElementById('ac');
let impartire = document.getElementById('impartire');
let procent = document.getElementById("procent")
let inmultire = document.getElementById("inmultire");
let scadere = document.getElementById("scadere");
let adunare = document.getElementById("adunare");
let virgula = document.getElementById("virgula");
let undo = document.getElementById("backspace");
let egal = document.getElementById("egal");

cifre.forEach(numere =>{
    numere.addEventListener('click', function()
    {
        panou.innerHTML += numere.value;
    })
});

clear.addEventListener('click', function ()
{
    panou.innerHTML = "";
});

impartire.addEventListener('click', function()
{
    if(panou.innerHTML.length > 0)
        panou.innerHTML += "/"
});

procent.addEventListener('click', function()
{
    if(panou.innerHTML.length > 0)
        panou.innerHTML += '%';
});

inmultire.addEventListener('click', function()
{
    if(panou.innerHTML.length > 0)
        panou.innerHTML += '*';
});

adunare.addEventListener('click', function()
{
    if(panou.innerHTML.length > 0)
        panou.innerHTML += '+';
});

scadere.addEventListener('click', function()
{
        panou.innerHTML += '-';
});

virgula.addEventListener('click', function()
{
    if(panou.innerHTML.length > 0)
        panou.innerHTML += '.';
});

egal.addEventListener('click', function()
{   
    ec = panou.innerHTML;
    ec = eval(ec);  
    ec = ec.toFixed(3);
    panou.innerHTML = ec;
})