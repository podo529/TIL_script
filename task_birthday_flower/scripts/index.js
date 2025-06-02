//js
const userMonth = document.querySelector('input[name=month]');
const resultBtn = document.querySelector('#result_btn');
const total = document.querySelector('.result');
console.log(userMonth, resultBtn, total);
resultBtn.addEventListener('click',birthdayFunc);
function birthdayFunc(){
	if(userMonth.value >= 1 && userMonth.value <= 12){
		total.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.`
		}
    }