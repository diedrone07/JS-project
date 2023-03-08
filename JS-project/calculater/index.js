function display(value){
document.getElementById('textarea').value += value
}

function clr(){
 document.getElementById('textarea').value=''
}

function calculate()
{   
    var value=document.getElementById('textarea').value
    var ans = eval(value)
    document.getElementById('textarea').value =ans
}