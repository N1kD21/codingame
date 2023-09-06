
interface Structure {
  [index: string]: Structure
}

class count_number {
  structure: Structure;
  constructor(str: Structure){
    this.structure = str;
  }
  get show_struct(){
    return this.structure;
  }

  setElement(obj_in: Structure, way_in: string){  
    const set_inside = (lib, keys, newValue) => {
      let key = keys.shift();
      if (keys.length) {
          set_inside(lib[key], keys, newValue)
      } else {
        const keys = Object.keys(newValue);
        if (key != undefined) {
          lib[key][keys[0]] = newValue[keys[0]]
        } else {
          lib[keys[0]] = newValue[keys[0]]
        }
      }
    }
    set_inside(this.structure, way_in.split(''), obj_in)
  }

  numInObj(num: string[]) {    
    let objRes = {[num[0]]: {}};
    num.splice(0, 1);
    if (num.length != 0) {
      const ff = (ob) => {
        ob[Object.keys(ob)[0]][num[0]] = {};
        num.splice(0, 1);
        if (num[0] != undefined) ff(ob[Object.keys(ob)[0]]);
      }
      ff(objRes)  
    }
    return objRes;
  }
  
  take_way(num_in: Array<string>, way_in: string){
    const fun = (obj: Structure, num: string[], way: string) => {
      if (obj[num[0]] != undefined) {        
        const first: any = num.shift();
        way = way + first;
        const res: Array<any> = fun(obj[first], num, way);
        way = res[1].toString();
        return [num, way];
      }      
      return [num, way]
    }
    
    return fun(this.structure, num_in, way_in)
  }
}

export const fun = (list: Array<string>) => {
  const base: Structure = {};
  let counter: Number = 0;
  const counting_numbers = new count_number(base);
  list.forEach((el) => {
    const array_substring_num: Array<string> = el.split('');
    const res: Array<any> = counting_numbers.take_way(array_substring_num, '');
    const num:any = res[0];
    const way: string = res[1];
    counter = counter + num.length;
    const object_in = counting_numbers.numInObj(num)
    counting_numbers.setElement(object_in, way)
    console.log(counter);
    
    console.log(counting_numbers.show_struct);
  })
  return counter;
}
