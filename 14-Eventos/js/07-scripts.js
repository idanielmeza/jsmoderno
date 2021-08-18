const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e)=>{
    if(e.target.classList.contains('titulo')){
        console.log('Titulo');
    }else if(e.target.classList.contains('precio')){
        console.log('precio');
    }else if(e.target.classList.contains('card')){
        console.log('card');
    }
});