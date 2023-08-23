class countNumber {
  firstNumber: Array<string> = [];
  secondNumber: Array<string> = [];
  countElement: number = 0;
  max: Array<string> = [];
  min: Array<string> = [];

  constructor(){}

  comparisonNumbers(first: String, second: String) {
    this.countElement = 0;
    this.firstNumber  = first.split('');
    this.secondNumber = second.split('');
    for (let i = 0; i <= this.secondNumber.length; i++) {
      if (this.firstNumber[i] === undefined) return this.countElement += this.secondNumber.length - i;
      if (this.secondNumber[i] === undefined) return this.countElement;
      first = this.firstNumber.slice(0, i+1).join('');
      second = this.secondNumber.slice(0, i+1).join('');
      if (second !== first) this.countElement++;
    }
    return this.countElement;
  }
}

export const fun = (data: Array<string>) => {
  const n = data.length;
  let countElements: any = 0;
  const arrayPhones: Array<String> = [];
  const cN = new countNumber();
  for (let i = 0; i < n; i++) {
      const telephone: String = data[i]; 
      arrayPhones.push(telephone);
      if (arrayPhones[i-1]) {
        countElements += cN.comparisonNumbers(arrayPhones[i-1], arrayPhones[i]);
      } else {  
        countElements += arrayPhones[i].length;
      }    
  }
  return countElements;
}
