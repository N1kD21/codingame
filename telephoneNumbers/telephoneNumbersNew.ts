class countNumber {
  countElement: number = 0;

  constructor(){}

  setElement (lib, keys, newValue) {
    var key = keys.shift();
    if (keys.length) {
        this.setElement(lib[key], keys, newValue)
    } else {
        lib[key] = newValue;
    }
  }

  numInObj(num: Array<string>) {
    let objRes = {[num[0]]: {}};
    num.splice(0, 1);
    const ff = (ob) => {
      ob[Object.keys(ob)[0]][num[0]] = {};
      num.splice(0, 1);
      if (num[0] !== undefined) ff(ob[Object.keys(ob)[0]]);
    }
    ff(objRes)
    return objRes;
  }

  comparisonNumbers(num: Array<string>, obj: any, num2: Array<string>) {
    this.countElement = 0;
    
    if (obj[num[0]]) {
      const fstInNum = num.splice(0, 1);
      num2.push(fstInNum[0]);
      this.comparisonNumbers(num, obj[fstInNum[0]], num2);
    } else {
      this.countElement = num.length;
      obj = this.numInObj(num);
    }    
    return [this.countElement, obj, num2];
  }
}

export const fun = (data: Array<string>) => {
  const n = data.length;
  let countElements: any = 0;
  let objPhones: any = {};
  const cN = new countNumber();
  for (let i = 0; i < n; i++) {
      const telephone: String = data[i]; 
      const res = cN.comparisonNumbers(telephone.split(''), objPhones, []);      
      countElements += res[0];
      if (i === 0) {
        objPhones = cN.numInObj(telephone.split(''))
      } else {
        objPhones = cN.setElement(objPhones, res[2], res[1]);
      }
    }
  return countElements;
}
