let hunmin = document.querySelector(".profile_1 .intro p")
let heechan = document.querySelector(".profile_2 p.intro")
console.log(heechan);

const hunminItor = "안녕하세요. 성현민입니다. <br>화곡초 어화둥둥 사물놀이단 출신입니다."
const heechanItor = "안녕하세요. 박희찬입니다.<br>제 여자친구는 <b>しのみやかぐや</b>입니다."

let count = 0;

setInterval(()=> {
  hunmin.innerHTML = hunminItor.slice(0, count)
  heechan.innerHTML = heechanItor.slice(0, count)

  count++;
}, 150)