console.log('Winter Break is almost here!!!');

const icons = [
    '&#x1F6F7;',
    '&#x1F328;',
    '&#x1F43B;',
    '&#x1F332;',
    '&#x1F381;',
    '&#x1F936;',
    '&#x1F9E4;',
    '&#x1F9E3;',
    '&#x1F976;',
    '&#x1F31F;',
    '&#x26F8;',
    '&#x1F36A;',
    '&#x1F98C;',
    '&#x1F3C2;',
    '&#x26F7;',
    '&#x1F3BF;',
    '&#x1F3D2;',
    '&#x1F514;',
    '&#x1F6CF;',
    '&#x1F385;',
    '&#x1F3BF;',
    '&#x1F56F;',
    '&#x26c4;'
  ];

const boxes = document.querySelectorAll('.num');

function handleBoxClick(event){
  const clickedBox = event.currentTarget.dataset.day;
  const today = new Date();

  if(today.getDate() >= Number(clickedBox)){
    console.log(icons[Number(clickedBox)]);

    const day = event.currentTarget;

    day.innerHTML = icons[Number(clickedBox)];

    localStorage.setItem('clickedDays', clickedBox);
  } else {
    console.log('No peeking, you can NOT open yet!');
  }

}

boxes.forEach(function(box) {
  box.addEventListener('click',handleBoxClick);
});

function storeDaysClicked(day){

  if(!localStorage.getItem('clickedDays')){
    daysOpened = [];

  } else {
    daysOpened = JSON.parse(localStorage.getItem('clickedDays'));

  }
  if(!daysOpened.includes(day)){
    daysOpened.push(day);
  }
  localStorage.setItem('clickedDays', JSON.stringify(daysOpened));

}
