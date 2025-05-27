// 프로젝트소개 팝업 알고리즘
// 1. 팝업 숨기기(popup_bg)
// 2. 썸네일 이미지(a) 클릭 시 팝업 보이기(popup_bg)
// 3. (팝업 실행 기준) 배경클릭 시(popup_bg) 팝업 숨기기(popup_bg)
// 프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
// 1. 클릭한 대상의 이미지 경로 확인
// 2. 위 경로를 팝업 이미지의 경로에 대입

//알고리즘 기준 반복해야하는 데이터를 변수로 생성하기
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design a');
console.log(popupBg, thumbNailA);
//1. 팝업 숨기기
popupBg.style.display = 'none';
//2. 썸네일 이미지 클릭 시 팝업 보이기
//변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다.
thumbNailA[0].addEventListener('click', function(){
    console.log(0);//작동테스트
    console.log(this);//이벤트객체 자동인식하는지 확인
    console.log(this.children[0].src);
    console.log(popupBg.children[0].children[0].src);//팝업bg의 자식의 자식의 src확인
    popupShow(); //팝업 출력 함수 호출
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[1].addEventListener('click', function(){
    console.log(this);
    console.log(this.children[0].src);
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[2].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[3].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[4].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[5].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[6].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[7].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[8].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[9].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[10].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[11].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[12].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[13].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[14].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[15].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[16].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[17].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[18].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[19].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[20].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});
thumbNailA[21].addEventListener('click', function(){
    popupShow();
    popupBg.children[0].children[0].src = this.children[0].src;
});

function popupShow(){
    return popupBg.style.display = 'flex';
}
// 3. (팝업 실행 기준) 배경클릭 시(popup_bg) 팝업 숨기기
popupBg.addEventListener('click', popupHide);
function popupHide(){
    return popupBg.style.display = 'none';
}