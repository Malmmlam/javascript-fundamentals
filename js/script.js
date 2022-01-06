let output = document.querySelector(".output");
output.innerHTML = '';

let i = 10;
while(i <= 10){
    
    const para = document.createElement('p');
    para.textContent = `${i}`;
    output.appendChild(para);

    i--;
}





