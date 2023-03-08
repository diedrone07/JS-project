var quizdata = [
    {
        question: 'which frame work i related js?',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct: 'c'


    },
    {
        question: 'Which of the following is used in React.js to increase performance?',
        a: 'vertual dom',
        b: 'original dom',
        c: 'botha and b',
        d: 'none of the aqbove',
        correct: 'a'

    },
    {
        question: 'What is ReactJS?',
        a: 'serverside',
        b: 'userside',
        c: 'both aand b',
        d: 'none of the above',
        correct: 'b'


    },
    {
        question: 'Identify the one which is used to pass data to components from outside',
        a: 'render',
        b: 'setDtate',
        c: 'proptype',
        d: 'prop',
        correct: 'd'


    },

    {
        question: 'Who created React.js?',
        a: 'jorden mike',
        b: 'jorden walke',
        c: 'tim cook',
        d: 'jorden lee',
        correct: 'b'


    },
    {
        question: 'In which language is React.js written?',
        a: 'python',
        b: 'js',
        c: 'java',
        d: 'php',
        correct: 'b'


    },
]


var answer =document.querySelectorAll('.answer')
var question =document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn =document.getElementById('submit')

var currentQUesion =0
var quesionscore =0

lodeQuiz()

function lodeQuiz(){
 deselect()
 question.innerHTML = quizdata[currentQUesion].question
 option_a.innerHTML = quizdata[currentQUesion].a
 option_b.innerHTML = quizdata[currentQUesion].b
 option_c.innerHTML = quizdata[currentQUesion].c
 option_d.innerHTML = quizdata[currentQUesion].d
}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}


submitbtn.addEventListener('click',()=>{
 var selectedoption;
 answer.forEach(answer=>{
    if(answer.checked){
        selectedoption = answer.id
    }

 })
 if(selectedoption == quizdata[currentQUesion].correct){
    quesionscore +=1
 }
 currentQUesion += 1 
 console.log(quesionscore)
 console.log(quizdata.length)
 

 if(currentQUesion == quizdata.length){
    document.getElementById('quizdiv').innerHTML = `<h1 class="text-center">you have answerd ${quesionscore} out of ${quizdata.length}</h1>`
 }
 else{
    lodeQuiz()
 }
})