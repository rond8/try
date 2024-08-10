alert('lala')
confirm('lala')
confirm('lala')
 document.body.style.backgroundColor='black';
let m = "you click this button ";
let times = 0;

function gg() {
  times++;
  confirm(m + times + " times");
}

gg();
