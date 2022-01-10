const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// loop starts here

let userInput = prompt("Please enter a number:");

function isPrime(num) {
    for(let i = 2; i < num; i++) 
        if(num % i === 0) return false;
    return num > 1;
}

for(let i = 0; i < userInput; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}


// refused.textContent += ;
// admitted.textContent += ;