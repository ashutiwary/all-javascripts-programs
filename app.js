const questions = [
    {
        'que': 'Full form of HTML',
        'a': 'Hyper Text Markup Language',
        'b': 'High Text Markup Language',
        'c': 'Hyper Text Makup Language',
        'd': 'Hyper Markup Language',
        'correct': 'a'
    },
    {
        'que': 'Full form of PHP',
        'a': 'Hyper Text Markup Program',
        'b': 'Preformatted Language Language',
        'c': 'Hyper Text Pre processor',
        'd': 'Hyper Markup Processor',
        'correct': 'c'
    },
    {
        'que': 'What is java ?',
        'a': 'Markup Language',
        'b': 'Programming Language',
        'c': 'Scripting Language',
        'd': 'Dummy Language',
        'correct': 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0, 
    wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesbox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    ) 
}
const endQuiz = ()=>{
    document.getElementById("box").innerHTML= `
    <div style="text-align:center;">
    <h3>Thank you For Attending Quiz</h3>
    <h2>${right}/${total} are correct</h2>
    </div>
    `
}
//initial call
loadQuestion();