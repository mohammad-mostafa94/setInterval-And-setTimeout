const arr = [1,2,3,4];
const result = arr.reduce((previousValue, currentValue)=>{
    return previousValue + currentValue;
},100);
console.log(result);

/*
initialValue = 100
1-> previousValue = 100  then  currentValue = 1; previousValue += currentValue
2-> previousValue = 101  then  currentValue = 2; previousValue += currentValue
3-> previousValue = 103  then  currentValue = 3; previousValue += currentValue
4-> previousValue = 106  then  currentValue = 4; previousValue += currentValue

5-- previousValue = 110  then  result = 110;
*/ 