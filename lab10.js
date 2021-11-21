let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
function deep() { deeper(); }
function deeper() { deepest(); }
function deepest() { console.trace(); }
const noExist = document.querySelector("asdf");
window.addEventListener("DOMContentLoaded", init);
window.onerror = TrackJS.track();
async function init() {
    window.addEventListener("error", () => {
        console.log("An error has ocurred.");        
    });

    errorBtns[0].addEventListener("click", () => {
        console.log("Console Log Demo");
    });
    errorBtns[1].addEventListener("click", () => {
        console.error("Console Error Demo");
    });
    errorBtns[2].addEventListener("click", () => {
        console.count("Count Button");  
    });
    errorBtns[3].addEventListener("click", () => {
        console.warn("Console Warn Demo");  
    });
    errorBtns[4].addEventListener("click", () => {
        const num = 2;
        const reason = "The number does not equal 3";
        console.assert(num === 3, {num, reason});
    });
    errorBtns[5].addEventListener("click", () => {
        console.clear();
    });
    errorBtns[6].addEventListener("click", () => {
        console.dir(errorBtns[6]);
    });
    errorBtns[7].addEventListener("click", () => {
        console.dirxml(errorBtns[7]);
    });
    errorBtns[8].addEventListener("click", () => {
        console.group("console.group");
    });
    errorBtns[9].addEventListener("click", () => {
        console.groupEnd("console.group");
    });
    errorBtns[10].addEventListener("click", () => {
        const lectures = [{name: "Software Engineering", num: 110}, {name: "Programming Languages", num: 130}, {name: "Advanced Software Engineering", num: 112}];
        console.table(lectures);
    });
    errorBtns[11].addEventListener("click", () => {
        console.time("Timer Button");
    });
    errorBtns[12].addEventListener("click", () => {
        console.timeEnd("Timer Button");
    });
    errorBtns[13].addEventListener("click", () => {
        deep();
    });
    errorBtns[14].addEventListener("click", () => {
        noExist.setAttribute('rel', 'not');
    });
    errorBtns[15].addEventListener("click", () => {
        try { Roulette(); console.log("Click!"); }
        catch (err) { console.log(`${err.name} ${err.message}`); }
        finally { console.log("Thanks for playing!"); }
    })
    
}

function Roulette() {
    let ouch = new OuchieError("Bang!");
    if (Math.floor(Math.random() * 6) == Math.floor(Math.random() * 6)) {
        throw ouch;
    }
}

class OuchieError extends Error {
    constructor(message) {
        super(message);
        this.name = "You done died!";
    }
}