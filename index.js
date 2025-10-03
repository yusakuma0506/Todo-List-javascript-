const priority=document.getElementById('priority');


priority.addEventListener('change', function(){
    priority.classList.remove('bg-gray-200','bg-orange-400', 'bg-yellow-400', 'bg-purple-400');

    if(priority.value ==='high'){
        priority.classList.add('bg-orange-400');
    }else if(priority.value==="middle"){
        priority.classList.add('bg-yellow-400');
    }else if(priority.value==="low"){
        priority.classList.add('bg-purple-400')
    }else{
        priority.classList.add('bg-gray-200')
    }
});

const onClick =() =>{
    const addText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = ''
    const choosePriority = document.getElementById('priority').value;
    document.getElementById('priority').classList.remove('bg-orange-400', 'bg-yellow-400', 'bg-purple-400');
    document.getElementById('priority').classList.add('bg-gray-200');
    document.getElementById('priority').value=''
    if(addText.trim()=== "" || choosePriority.trim()===""){
        alert("You forgot typing your task or choose priority.");
        return;
    }
    incompleteTodo(addText,choosePriority)
    
}
    

const incompleteTodo = (todo,priority) => {
    const list = document.getElementById('incompleteList')
    const li =document.createElement('li');
    li.className= 'bg-gray-100 p-2 flex items-center gap-2 rounded-md transform hover:rotate-[3deg]';
    const p=document.createElement('p');
    p.className='flex-1 text-lg break-words whitespace-normal';
    const span = document.createElement('span')
    if(priority ==="high"){
        span.innerHTML= "&#x1F7E0;"
    }else if (priority === "middle"){
        span.innerHTML ="&#x1F7E1;"
    }else if(priority==="low"){
        span.innerHTML ="&#x1F7E3;"
    }
    p.appendChild(span);
    p.appendChild(document.createTextNode(" " + todo)); // preserve text after emoji
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML ='&#9989;'
    completeBtn.addEventListener('click', ()=>{
        const moveTarget = completeBtn.closest('li');
        deleteBtn.remove();
        completeBtn.remove();
        const backBtn = document.createElement('button');
        backBtn.innerHTML='&#x27B0;'

        backBtn.addEventListener('click', ()=>{
            const returnText = backBtn.previousElementSibling.innerText;
            incompleteTodo(returnText);
            const returnTarget = backBtn.closest('li');
            document.getElementById('completeList').removeChild(returnTarget);
        })
        moveTarget.classList.remove('transform')
        moveTarget.classList.remove('hover:rotate-[3deg]')
        moveTarget.firstElementChild.classList.add('line-through')
        moveTarget.appendChild(backBtn);
        document.getElementById('completeList').appendChild(moveTarget);
    });
    const deleteBtn =document.createElement('button');
    deleteBtn.addEventListener('click', ()=>{
        const deleteTarget = deleteBtn.closest('li');
        document.getElementById('incompleteList').removeChild(deleteTarget);
    })
    deleteBtn.innerHTML = '&#x274C;';
    li.appendChild(p);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li)
}

const ClearAll= ()=>{
    const confirmation =document.getElementById('confirm');
    const yesbtn = document.getElementById('yesBtn');
    const nobtn = document.getElementById('noBtn');
    const allCompleteList = document.getElementById('completeList');
    if (allCompleteList.innerHTML.trim() === ''){
        alert("There is no Complete Tasks now");
        return;
    } else{
        confirmation.classList.remove('hidden');
        yesbtn.addEventListener('click', ()=>{
            alert('Delete all Complete tasks');
            allCompleteList.innerHTML ='';
            confirmation.classList.add('hidden');
        })
        nobtn.addEventListener('click', ()=>{
            confirmation.classList.add('hidden');
        })
        
    }
    
    
}