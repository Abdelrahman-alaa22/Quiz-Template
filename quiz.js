const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');




form.addEventListener('submit', e => {
    e.preventDefault();

    //Matching Answers
    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // To go to the top of the page after submiting
    scrollTo(0,0); 

    //result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    // Adding number animation

    let ouput = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${ouput}%`;
        if(ouput === score){
            clearInterval(timer);
        } else {
            ouput++;
        }
    }, 10);


});



