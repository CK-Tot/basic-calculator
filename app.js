const btnsEL = document.querySelectorAll('button');
const resultEl = document.getElementById('result');

for (let i = 0; i < btnsEL.length; i++){
    btnsEL[i].addEventListener('click', () => {
        const btnValue =  btnsEL[i].textContent;


        if (btnValue === 'C'){
            clearResult();
        }else if (btnValue === '='){
            calResult()
        }else{
            appendValue(btnValue);
        }
    })
}


function clearResult (){
    resultEl.value = '';

}

function calResult() {
    resultEl.value = eval(resultEl.value);

}

function appendValue (btnValue) {
    resultEl.value += btnValue;

}