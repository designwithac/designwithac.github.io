
//check there is already any text
function getHistory(){
    return document.getElementById("history-value").innerText;
}

//add history to the top
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

//check and get any previous output
function getOutput(){
    return document.getElementById("output-value").innerText;
}

//main output
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

//to create comma saperated value
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

//to replace comma with space or empty
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        } else if(this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){ //if output has value
                output = output.substring(0,output.length-1);
                printOutput(output);
            }
        } else {
                var output = getOutput();
                var history = getHistory();
                if(output == "" && history != ""){
                    //checking if the last character is an operater
                    if( isNaN( history[ history.length-1 ])){
                        history = history.substr(0,history.length-1);
                        //removing the last character
                    }
                }
                if(output !="" || history !=""){
                    output = output == ""?output:reverseNumberFormat(output);
                    history = history + output;
                    if (this.id == "=") {
                        var result = eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        history = history + this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
            
        });
}
var number = document.getElementsByClassName("number");
for(var i = 0; i<number.length ; i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN){ //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}

//change theme of the application
const toggleSwitch = document.querySelector('.theme__switch input[type="checkbox"]');

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}