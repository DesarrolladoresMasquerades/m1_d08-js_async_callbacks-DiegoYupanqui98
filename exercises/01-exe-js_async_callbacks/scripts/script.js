//Exercise 1: What is the expected output? And why?

function print() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  //1 4 3 2 -> because of the TimeOut in "setTimeOut" function
 // print(); 
  
  // ------------------------------------------------------------------------
  
  
  //Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second

  const blast = () => {

    let i = 1;
    const number = document.querySelector(".number");
    const words = document.querySelector(".words");

    const myInterval=setInterval(() => {
      number.textContent = i;
      if(i%15===0) {
        console.log("BOOM BANG!!");
        words.innerText = "BOOM BANG!!";
      }
      else if(i%3===0) {
        console.log("BOOM!!");
        words.innerText = "BOOM!!";
      }
      else if(i%5===0) {
        console.log("BANG!!");
        words.innerText = "BANG!!";
      }
      else
      words.innerText = "";

      if(i===15) clearInterval(myInterval);
      i++;
    }, 1000);
  };

  blast();
  // - For every number divisible by 3 it prints BOOM!!
  // - For every number divisible by 5 it prints a BANG!!
  // - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 
  
  
