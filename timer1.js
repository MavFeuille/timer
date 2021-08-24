// code need to be run at node repl ....process.argv
// looop through input array to filter out below conditions to reach to setTimeout
// if num = "" => end immediatately (aka break)
// if num < 0 => continue
// if num !number => continue


// process.stdout.write('\x07'); <- a beep but no sound for MAC
// use visible character to stdout


const sec = process.argv
newSec = sec.slice(2);
console.log(`newSec: `, newSec);

// if (newSec[i] === "") {
//   break;
// }



const timer = function (input) {
  
  if (!input.length) return
  

  for (let i = 0 ; i < input.length; i++) {
    console.log(`input[i]: `, input[i]);
    
    if (isNaN(input[i]) || input[i] < 0) continue;
  
   

    setTimeout(() => {
      // if ( i === input.length - 1) process.stdout.write(' .  ' + "\n")  <-- in case beep sound is not available in the OS
      // else 
      process.stdout.write('\x07')
    }, input[i] * 50);
  
  }
  
};
timer(newSec)


// const timer = function (sec) {
//   for (let i = 0; i < sec.length; i++) {
//     setTimeout(() => process.stdout.write('bello'),
//     sec[i]);
//   }

// };

// timer(sec);
