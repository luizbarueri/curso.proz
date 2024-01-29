function calcular(a,b) {
    let total = 0;
    total = a + b;
    console.log(`${a} + ${b} = ${total}`);  //4 + 5 = 9
    total = a - b;
    console.log(`${a} - ${b} = ${total}`); //4 - 5 = -1
    total = a * b;
    console.log(`${a} X ${b} = ${total}`) //4 x 5 = 20
    if (b > 0) total = a / b; else total = 0;
    console.log(`${a} / ${b} = ${total}`) //4 / 5 = 0.8 
  }
  
  calcular(4,5);