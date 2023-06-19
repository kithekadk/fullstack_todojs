uncompletedTod = [];
completedTodo = [];

window.addEventListener('load', ()=>{
    let form_container = document.querySelector('#create-new-todo');
    let togglebutton = document.querySelector('#btn-create-todo');
    let closeform = document.querySelector('#btnclose');

    togglebutton.addEventListener('click', ()=>{
        if(form_container.style.display == 'none'){
            form_container.style.display = "block";
        }else{
            form_container.style.display = 'none';
        }
    })

    closeform.addEventListener('click', ()=>{
        form_container.style.display = 'none';
    })

    
})