const advice = document.querySelector("#advice");
const textMain = document.querySelector("#textMain");
const button = document.querySelector("#button");

function onBtnClick(){
    // console.log('testando')
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            advice.innerText = `ADVIVE #${jsonData['slip']['id']}`;
            textMain.innerText = jsonData['slip']['advice'];
        });
        
}

button.addEventListener('click', onBtnClick)

onBtnClick()