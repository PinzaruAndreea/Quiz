const correctAnswers = ["B", "B", "B", "B"];
const form= document.querySelector(".quiz-form");
const results= document.querySelector(".result_container");
let scores= document.querySelector(".score");
const retry = document.querySelector(".retry img");



form.addEventListener("submit", e=> {
    e.preventDefault();

    let score = 0;
    const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });
    scrollTo(0,0);
    results.style.display = "block";

    let output = 0;
    const timer= setInterval(() => {
        scores.innerText = output + "%";
        if (output === score) {
            clearInterval(timer);
        } else {
            output ++;
        }
    }, 10);

    retry.style.display= "block";
});

retry.addEventListener("click", ()=> {
    scrollTo(0,0);
    location.reload();
})





 
