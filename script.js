

function change(){
    let cardholderName = document.getElementById('name');
    let nomeDoCartao = document.getElementById('card__name');
    nomeDoCartao.innerText = cardholderName.value;
}

function changeNumber(){
    let cardNumber = document.getElementById('number');
    let numeroDoCartao = document.getElementById('card__number');
    numeroDoCartao.innerText = cardNumber.value;
}

function changeDate(){
    let ExpDate = document.getElementById('date');
    let dataDeExp = document.getElementById('card__date');
    dataDeExp.innerText = ExpDate.value;
}
function changeCvc(){
    let cvc = document.getElementById('cvc');
    let cdg = document.getElementById('cdg');
    cdg.innerText = cvc.value;
}
