const meetDate = document.querySelector('#meetdate');
const meetBtn = document.querySelector('#meet_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(meetDate, meetBtn, resultDate, resultTime);
meetBtn.addEventListener('click',meetFunc)
function meetFunc(){
    const meet = new Date(meetDate.value);
    const today = new Date();
    console.log(meet, today)
    const meetToday = today.getTime() - meet.getTime();
    const dateFlow = Math.floor(meetToday / (1000*60*60*24));
    const timeFlow = Math.floor(meetToday / (1000*60*60));
    resultDate.textContent = dateFlow;
    resultTime.textContent = timeFlow+'시간동안 함께 했어요♥';
}