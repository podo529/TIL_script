//window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수(절대좌표)
const btn1 = document.querySelector('#btn1');
const topBtn = document.querySelector('#top');
console.log(btn1, topBtn);

btn1.addEventListener('click',()=>{
    //window.scrollTo(0, 200)/* 숫자는 자동으로 px 반환된다 */
    //추가 속성이나 메서드 연결 시에는 x y를 {객체} 문법으로 작성한다.
    window.scrollTo({left:0, top:500, behavior:'smooth'})
});
//behavior:'smooth'
//위 동작은 CSS의 body, html {scroll-behavior:'smooth';} 기능동일

topBtn.addEventListener('click',()=>{
    window.scrollTo({left:0, top:0, behavior:'smooth'})
});

//특정 위치로 바로가기, 위치속성 offsetTop 활용방법
const cafeBtn = document.querySelector('#cafe_btn');
const sections = document.querySelectorAll('section');
const navBtn = document.querySelectorAll('.nav button');
const blogBtn = document.querySelector('#blog_btn');
const newsBtn = document.querySelector('#news_btn');
const webtoonBtn = document.querySelector('#webtoon_btn');
console.log(navBtn, cafeBtn, sections, blogBtn, newsBtn, webtoonBtn)

//forEach 활용 navBtn, sections 묶기
//foeEach의 시작은 이벤트DOM 대상 권장
navBtn.forEach((Obj, ind)=>{
    console.log(Obj, ind);
    //obj 클릭이벤트 생성
    //클릭이벤트 내에서 window.scrollTo 동일인덱스의 sections top 위치이동
    Obj.addEventListener('click',()=>{
        console.log(0);//테스트
        window.scrollTo({
            left:0,
            top:sections[ind].offsetTop,
            behavior:'smooth'
        })
    })
})


/* cafeBtn.addEventListener('click',()=>{
    window.scrollTo(0, sections[1].offsetTop)
})
blogBtn.addEventListener('click',()=>{
    window.scrollTo(0, sections[0].offsetTop)
})
newsBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:sections[2].offsetTop,
        behavior:'smooth',
    })
})
webtoonBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:sections[3].offsetTop,
        behavior:'smooth',
    })
}) */


//스크롤 상대적 이동 DOM.scrollBy
//이전, 다음 버튼 클릭 시 웹툰 width만큼 가로스크롤(윈도우x, toon_wrap o) 이동하기
const toonWrap = document.querySelector('.toon_wrap');
const toonNext = document.querySelector('.toon_wrap_all .next');
const toonPrev = document.querySelector('.toon_wrap_all .prev');
console.log(toonWrap, toonNext);
toonNext.addEventListener('click',()=>{
    toonWrap.scrollBy(toonWrap.children[0].children[0].offsetWidth,0);
})
toonPrev.addEventListener('click',()=>{
    toonWrap.scrollBy(-toonWrap.children[0].children[0].offsetWidth,0);
})