const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// loop starts here

while(true) {
    let userInput = prompt("Please enter a number greater than 100:");
    
    if(userInput === "" || userInput === null || parseInt(userInput) > 100) {
        break;
    }

}

userInput;

// refused.textContent += ;
// admitted.textContent += ;