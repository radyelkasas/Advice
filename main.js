let btn = document.getElementById('btn');
let advice = document.getElementById('advice');
let adviceNumber = document.getElementById('advice-num');

btn.addEventListener('click', ()=> {
    fetch("https://api.adviceslip.com/advice")
    .then(Response=>Response.json())
    .then(data => {
        advice.innerHTML = `"${data.slip.advice}."`;
        adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
    })
})