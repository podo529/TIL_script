//BOM(browser object model) 내장함수
/* const msg1 = window.alert('잠시 기다려 주세요')
const msg2 = window.alert('잘못 접근하겼습니다')
console.log(msg1); */
/* const userAge = window.prompt('나이를 입력하세요');
console.log(userAge); */
/* const userPrint = window.confirm('인쇄하시겠습니까');
console.log(userPrint); */
//const userInfo = window.open('https://google.com','_blenk');
/* const userWrite = window.document.write('hello js');
window.document.write('안녕하세요'); */
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 선언할 필요 없이 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM 내장 함수 : prompt(), confirm()
//window.print();
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수애 담아야 한다.
//==============================DOM -HTML Node
const pTag = document.getElementsByTagName('p');
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');
const liCls = document.getElementsByClassName('list');
const activeCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
const dlCls = document.getElementsByClassName('define');
const dtId = document.getElementById('title');
const ddCls = document.getElementsByClassName('contents');
const dtTag = document.getElementsByTagName('dt')[1];
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(activeCls);
console.log(wrapId);
console.log(dlCls);
console.log(dtId);
console.log(ddCls);
console.log(dtTag);
//=========================DOM 객체 속성
//객체.style = 'CSS속성:값';
pTag[0].style = 'background-color:yellow';
pTag[1].style = 'background-color:pink';
ulCls[0].style = 'border:2px solid red';
liCls[0].style = 'border-bottom:1px solid green';
liCls[1].style = 'border-bottom:1px solid blue';
liCls[2].style = 'border-bottom:1px solid orange';
liCls[3].style = 'border-bottom:1px solid black';
activeCls[0].style = 'color:blue';
activeCls[1].style = 'color:purple';
wrapId.style = 'padding:30px';
func.style = 'color:red';
dlCls[0].style = 'background-color:lime';
dtId.style = 'background-color:rgba(255,255,255,0.5)';
ddCls[0].style = 'background-color:lightyellow';
ddCls[1].style = 'background-color:#b1c2e3';
dtTag.style = 'background-color:skyblue';
//위와 같이 style속성을 이용한 CSS는 일반 CSS선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹브라우저 F12 개발자도구에서만 확인 가능하다.
//CSS 우선순의 : 자바스크립트 style속성 > ID > Class > Tag
console.log('==================================');
//ES6 querySelector 이용 DOM선택하기
const orderO1 = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item');
console.log(orderO1);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
orderLi[0].style = 'font-size:1.25rem;';
orderToday.style = 'font-weight:700';
orderItem.style = 'line-height:2';
console.log('==================================');
const nav = document.querySelector('nav');
const gnbUl = document.querySelector('.gnb');
const lnbUl = document.querySelector('.lnb');
const aTag = document.querySelectorAll('nav a');
const gnbLi = document.querySelectorAll('.gnb > li');
const lnbLi = document.querySelectorAll('.lnb > li');
console.log(nav);
console.log(gnbUl);
console.log(lnbUl);
console.log(aTag);
console.log(gnbLi);
console.log(lnbLi);
nav.style = 'background-color:#eee';
gnbUl.style = 'background-color:rgba(100,0,0,0.5)';
lnbUl.style = 'background-color:rgba(0,200,200,0.4)';
aTag[0].style = 'color:#000';
aTag[1].style = 'color:#000';
aTag[2].style = 'color:#000';
aTag[3].style = 'color:#000';
gnbLi[0].style = 'border:1px solid #000';
gnbLi[1].style = 'border:1px solid #000';
lnbLi[0].style = 'border:2px solid rgba(0,100,100,0.5)';
//lnbLi[1].style = 'border:2px solid rgba(0,100,100,0.5)';
///객체.속성 = '값';
//객체.속성.속성 = '값';
lnbUl.style.backgroundColor = 'lime';
lnbUl.style.padding = '30px';
lnbUl.style.borderTop = '2px solid red';
console.log('==========================================');
let a = 10;
let b = "10";
console.log(a, typeof a);//10 number
console.log(b, typeof b);//10 string
//let age = prompt('당신의 나이는?');
//alert(typeof age);
//prompt로 사용자가 입력한 값은 무조건 문자(string)으로 처리된다.(암시적 형변환)
//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고싶다면 명시적형변환 중 숫자로 변환해주는 Number() 내장함수를 사용한다.
//Number(숫자로 변환하고 싶은 데이터  또는  함수)
//const age = prompt('당신의 나이는?');
//1. prompt('당신의 나이는?') 사용자가 입력한 값을 문자로 자동변환
//2. Number() : prompt가 문자로 변환한 값을 숫자로 명시적변환
//3. age = : 변수 age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}살입니다.`);
//console.log(`올해 당신의 나이는 ${Number(age)+1}살입니다.`);
console.log('=========================쇼핑몰 구입 알고리즘');
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요'));
const eventNum = productQa;//이벤트 증정 개수
const total = price*productQa; //최종 결제 가격
console.log(`구입할 물건은 ${productQa}개이고 이벤트상품 ${eventNum}개가 추가됩니다. 총 결제 금액은 ${total}원입니다.`);