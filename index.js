const colors = ["blue", "green", "red","yellow"];

const paras = document.querySelectorAll('.para');

paras.forEach((para) => { 
    para.addEventListener('click', (e) => { 
        if (colors.length === 0) { alert('All colors used up!'); } 
        // Pick a random color from the remaining colors
         const randomColorIndex = Math.floor(Math.random() * colors.length); 
        const randomColor = colors[randomColorIndex]; 
         // Apply the random color to the clicked paragraph
        para.style.color = randomColor; 
        // Remove the selected color from the colors array 
        colors.splice(randomColorIndex, 1); 
        // Remove 'para' class and add 'event' class 
        removeClassName(para); 
        para.classList.add('event'); 
        e.preventDefault(); }); 
    }); 

    function removeClassName(para) { 
        para.classList.remove('para');
    }