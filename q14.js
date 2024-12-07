// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const obj1 = { number: 6043, age: 21, pt: 96 };


const func = ({number, age, pt}) => {
    return [number, age, pt]
  }
  const test = func(obj1);
  console.log(test); 


// ___________________________________________________

const obj2 = { number: 6043, age: 21, pt: 96 };
console.log(Object.values(obj1));
