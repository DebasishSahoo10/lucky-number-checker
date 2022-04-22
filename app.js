var date = document.querySelector ('#birth-date')
var number = document.querySelector ('#lucky-number')
var button = document.querySelector ('#check-button') 
var output = document.querySelector ('#output-box')




function checker() {
    var numbersFromDate = date.value.replaceAll("-","");
    let sum = 0;
    for (let i=0; i<date.value.length; i++) {
        sum = sum + Number(numbersFromDate.charAt(i));
    }
    if (sum%number.value === 0) {
        output.innerText = "Yayyy. Your Birthdate is lucky";
        console.log("lucky")
    } else {
        output.innerText = "Sorry. Your Birthdate is not that lucky";
    }

    console.log (sum);
}









button.addEventListener ("click", checker)