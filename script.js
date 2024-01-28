document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById("testForm");
    const output = document.getElementById("outputStuff")
    const arrayOutput = document.getElementById("arrayOutputStuff")
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
 
        const question = document.getElementById("question").value;
        const answer = document.getElementById("answer").value.split(',');
        console.log(answer);

        const response = {
            question : question,
            answer : answer
        };

        console.log(response);

        const newPara = document.createElement('p');
        newPara.textContent = question;
        output.appendChild(newPara)
   

        

        answer.forEach((it)=>{
            const newArrayPara = document.createElement('p');
            newArrayPara.textContent = it.trim()
            console.log(it)
            arrayOutput.appendChild(newArrayPara)
        })
    })


})