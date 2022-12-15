const form = document.querySelector("form")
let ismEl = document.getElementById('ism');
let resultDiv = document.getElementsByClassName("result-div");
let resultIsm = document.getElementById('result-ism')
let resultText = document.getElementById('result-text')
let rasmEl = document.getElementById('rasm');
let bmi = 1;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let vazn = form.vazn.value;
    console.log(vazn);
    let uzunlik = form.uzunlik.value / 100;
    console.log(uzunlik);
    bmi = Math.round(vazn / (uzunlik ** 2));
    console.log(bmi);
    form.style.display = "none"
    resultDiv[0].style.display = 'flex'
    if (0 < form.vazn.value && form.uzunlik.value > 0) {
        if (bmi < 18.5) {
            resultIsm.textContent = `Hurmatli ${ismEl.value}`;
            resultText.textContent = `BMI -- '${bmi}' bu juda past. ko'rsatkich. Siz juda ozg'insiz.`
            rasmEl.src = "./images/under-weight.jpg"
        } else
        if (bmi >= 18.5 && bmi < 24.9) {
            resultIsm.textContent = `Hurmatli ${ismEl.value}`;
            resultText.textContent = `BMI -- '${bmi}' bu juda yaxshi. Siz normal odamsiz.`
            rasmEl.src = "./images/normal.jpg"
        } else if (bmi >= 25 && bmi < 29.9) {
            resultIsm.textContent = `Hurmatli ${ismEl.value}`;
            resultText.textContent = `BMI -- '${bmi}' bu biroz yaxshi emas. Dieta qiling.`
            rasmEl.src = "./images/ovew-weight.jpg"
        } else if (bmi >= 30 && bmi < 34.9) {
            resultIsm.textContent = `Hurmatli ${ismEl.value}`;
            resultText.textContent = `BMI -- '${bmi}' bu yomon. Sport bilan shug'ullaning.`
            rasmEl.src = "./images/obesity-1.jpg"
        } else if (bmi >= 35 && bmi < 39.9) {
            resultIsm.textContent = `Hurmatli ${ismEl.value}`;
            resultText.textContent = `BMI -- '${bmi}' bu juda yomon. Doktorga murojaat qiling.`
            rasmEl.src = "./images/obesity-2.jpg"
        } else if (bmi >= 40) {
            resultIsm.textContent = `Hurmatli ${ismEl.value}`;
            resultText.textContent = `BMI -- '${bmi}' bu nimasi? Siz havf ostidasiz.`
            rasmEl.src = "./images/extreme-obesity.jpg"
        }
    } else {
        resultIsm.textContent = `Hurmatli ${ismEl.value}`;
        resultText.textContent = `Siz noto'g'ri qiymat kiritdingiz orqaga qaytib qaytadan uruning.`
        rasmEl.display = "none"


    }

})