// LOOP CALCULATOR

// Global Vars


// Event Listeners
document.getElementById('mult-13-btn').addEventListener('click',mult13);
document.getElementById('mult-any1').addEventListener('click',multA);
document.getElementById('mult-any2').addEventListener('click', multB);

// Event Functions
function mult13(){
    document.getElementById('mult-result1').innerHTML = '';
    for(let i=13; i<=3000; i+=13){
        document.getElementById('mult-result1').innerHTML += i + ' ';
    }
}

function multA(){
    document.getElementById('mult-result2').innerHTML = '';
    let num = Number(document.getElementById('mult-input1').value);
    console.log(num);
    if(num > 5000 || num <= 0){
        document.getElementById('mult-result2').innerHTML += 'Enter a number between 1 and 5000';
    } else {
        for(let i = num; i <= 5000; i += num){
     
            document.getElementById('mult-result2').innerHTML += i + ' ';
        }
    }
    
}

function multB(){
    document.getElementById('mult-result3').innerHTML = '';
    let num = Number(document.getElementById('mult-input2').value);
    let max = Number(document.getElementById('max-input').value);
    
    if (num < max){
        for(let i = num; i <= max; i += num){
            document.getElementById('mult-result3').innerHTML += i + ' ';
        }
    } else {
        document.getElementById('mult-result3').innerHTML = 'Number must be less than Maximum';
    }
    

}