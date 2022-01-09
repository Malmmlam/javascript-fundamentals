const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// loop starts here

people.forEach(name => {
    console.log(name)
    if(name === 'Phil' || name === 'Lola') {
        refused.textContent += `${name}, `;
    } else {
        admitted.textContent += `${name}, `;
    }
});

refused.textContent = refused.textContent.slice(0,-2);
refused.textContent += `.`;
admitted.textContent = admitted.textContent.slice(0, -2);
admitted.textContent += `.`;

// refused.textContent += ;
// admitted.textContent += ;