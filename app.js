let result=document.getElementById('result')

function clearScreen(){
    result.value="";
}
function display(value){
    result.value+= value;
}
function calculate(){
    let p= result.value;
    let q=eval(p);
     result.value=q;
}
