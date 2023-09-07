
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

  setElement(obj_in: Structure, way_in: string) {  
    const set_inside = (lib: Structure, keys: string[], newValue: Structure) => {      
      if (keys.length > 0) {
        const key: string = keys[0];
        keys.shift();
        set_inside(lib[key], keys, newValue);
      } else {
        const keys_newValue = Object.keys(newValue);
        lib[keys_newValue[0]] = newValue[keys_newValue[0]]
      }
    }    
    set_inside(this.structure, way_in.split(''), obj_in)
  }

  numInObj(num: string[]) {    
    let objRes = {};
    if (num.length > 0) {
      const key: string = num[0]
      objRes = {[key]: {}}
      num.shift()
      const ff = (ob: Structure) => {
        const newKey = num[0]
        num.shift()
        ob[Object.keys(ob)[0]][newKey] = {};
        if (num.length > 0) ff(ob[Object.keys(ob)[0]]);
      }
      if (num.length) {
        ff(objRes)
      }
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
  })
  
  return counter;
}
