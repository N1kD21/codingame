interface arrWithNum {
  num: number[]
}

type MyArrayTypes = arrWithNum | undefined;
const arrExitGateWays = [1, 11];

const arrGateWays = [ { num: [ 1, 2 ] }, { num: [ 1, 0 ] }, { num: [ 1, 3 ] }, { num: [ 1, 4 ] }, { num: [ 11, 15 ] }, { num: [ 11, 12 ] }, { num: [ 11, 10 ] }, { num: [ 11, 13 ] }, { num: [ 11, 14 ] }, { num: [ 11, 15 ] } ];
const si = 11;

console.log(arrGateWays[1].num.indexOf(arrExitGateWays[0]));

if (arrGateWays[1].num.indexOf(arrExitGateWays[0]) != -1) {
  console.log('ssssssssss');  
}

console.log(arrGateWays[0].num.indexOf(si));

if (arrGateWays[0].num.indexOf(si) != -1) {
  console.log('1234234123');  
}


const newArr = arrGateWays.map((el) => {
  for (let index = 0; index < arrExitGateWays.length; index++) {
    if(el.num.indexOf(si) != -1 && el.num.indexOf(arrExitGateWays[index]) != -1) return el;   
  }
  return;
});
console.log(newArr);


const compare = (arr: MyArrayTypes[]) => {
  const newArr: arrWithNum[] = [];
  arr.forEach((el: arrWithNum | undefined)  => {
    if (el != undefined ) newArr.push(el);
    });
  return newArr;
}




const giveGateWay = () => {
  const res = compare(newArr);
  console.log(res);
  if (res.length) {
    console.debug(res[0]);        
    console.log(res[0].num.join(' '));
  } else {
    console.log(arrGateWays[0].num.join(' '));
  }
}

giveGateWay()

