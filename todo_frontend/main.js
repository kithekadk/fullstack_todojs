// uncompletedTodo = [];
// completedTodos = [];

// window.addEventListener('load', ()=>{   
//     let form_container = document.querySelector('#create-new-todo');
//     let togglebutton = document.querySelector('#btn-create-todo');
//     let closeform = document.querySelector('#btnclose');
//     let create_todo_form = document.querySelector('#new-todo-form');
//     let txttaskname = document.querySelector('#txttaskname');
//     let txttaskdesc = document.querySelector('#txttaskdesc');
//     let txtdeadline = document.querySelector('#txtdeadline');
//     let fill_all_error = document.querySelector('#fill-all-error')

//     togglebutton.addEventListener('click', ()=>{
//         if(form_container.style.display == 'none'){
//             form_container.style.display = "block";
//         }else{
//             form_container.style.display = 'none';
//         }
//     })

//     closeform.addEventListener('click', ()=>{
//         form_container.style.display = 'none';
//     })

//     create_todo_form.addEventListener('submit', (e)=>{
//         e.preventDefault();

//         let inputs = txttaskname.value && txttaskdesc.value && txtdeadline.value;

//         if(inputs){
//             uncompletedTodo.push({
//                 taskname: txttaskname.value,
//                 description: txttaskdesc.value,
//                 deadline: txtdeadline.value
//             })
            
            
//             // getUncompleted()
//             // console.log(uncompletedTodo)

//             // USE THIS WITH BACKEND
//             const promise = new Promise((resolve, reject)=>{
//                 fetch('http://localhost:4000/todos', {
//                     headers:{
//                         'Accept': 'application/json',
//                         'Content-type': 'application/json'
//                     },
//                     method: "POST",
//                     body:JSON.stringify({
//                         "title": txttaskname.value,
//                         "description": txttaskdesc.value,
//                         "deadline": txtdeadline.value
//                     })
//                 }).then(
//                     res=> {resolve(res.json())}
//                 ).catch(error=>{
//                     reject(error)
//                 })
//                 }
//             )

//             promise.then(data=>console.log(data)).catch(error=>console.log(error))
//             fetchTodos()

//             txttaskname.value = '';
//             txttaskdesc.value = '';
//             txtdeadline.value = '';
//         }else{
//             fill_all_error.style.display = 'block';
//             setTimeout(() => {
//                 fill_all_error.style.display = 'none';
//             }, 3000);
//         }
//     })
// })

// function getUncompleted(){
//     const pendingItem = document.querySelectorAll('.pendingTasklist .taskitem'); //this taskitem class will be created using dom

//     pendingItem.forEach(el=>el.remove())

//     uncompletedTodo.forEach(({
//         taskname,
//         description,
//         deadline
//     }, index)=>{
//         let taskTitle = document.createElement('p');
//         taskTitle.textContent = taskname;
//         taskTitle.className = 'task'

//         let taskDescription = document.createElement('p');
//         taskDescription.textContent = description;
//         taskDescription.className = 'description'

//         let taskDeadline = document.createElement('p');
//         taskDeadline.textContent = deadline;
//         taskDeadline.className = 'deadline'

//         // Create a div for the buttons and the buttons
//         let card_footer = document.createElement('div')
//         card_footer.style.display = 'flex';
//         card_footer.style.justifyContent = 'space-around';


//         let updatebtn = document.createElement('button')
//         updatebtn.textContent = 'Update'
//         updatebtn.className = 'btnupdate'
//         // updatebtn.setAttribute('onclick', `updateTask(${index})`)

//         let deletetebtn = document.createElement('button')
//         deletetebtn.textContent = 'Delete'
//         deletetebtn.className = 'btndelete'
//         deletetebtn.setAttribute('onclick', `deleteTask(${index})`)

//         let markDonebtn = document.createElement('button')
//         markDonebtn.textContent = 'Done'
//         markDonebtn.className = 'btncomplete'
//         markDonebtn.setAttribute('onclick', `markAsDone(${index})`)

//         card_footer.appendChild(updatebtn)
//         card_footer.appendChild(deletetebtn)
//         card_footer.appendChild(markDonebtn)

//         let taskItem = document.createElement('div');
//         taskItem.className = 'taskitem'

//         taskItem.appendChild(taskTitle)
//         taskItem.appendChild(taskDescription)
//         taskItem.appendChild(taskDeadline)
//         taskItem.appendChild(card_footer)
        

//         let pendingItems = document.querySelector('.pendingTasklist');

//         pendingItems.appendChild(taskItem)
//     })

// }

// function getCompleted(){
    
//     let completedItem = document.querySelectorAll('.completedTasklist .taskitem');

//     completedItem.forEach(el => el.remove());

//     completedTodos.forEach(({
//         taskname,
//         description,
//         deadline
//     }) => {
//         let taskTitle = document.createElement('p');
//         taskTitle.textContent = taskname;
//         taskTitle.className = 'task'

//         let taskDescription = document.createElement('p');
//         taskDescription.textContent = description;
//         taskDescription.className = 'description'

//         let taskDeadline = document.createElement('p');
//         taskDeadline.textContent = deadline;
//         taskDeadline.className = 'deadline'


//         let TaskItem = document.createElement('div')
//         TaskItem.className = 'taskitem'

//         TaskItem.appendChild(taskTitle)
//         TaskItem.appendChild(taskDescription)
//         TaskItem.appendChild(taskDeadline)

//         let completedTasks = document.querySelector('.completedTasklist');

//         completedTasks.appendChild(TaskItem);
        
//     })
// }

// function deleteTask(index){
//     uncompletedTodo.splice(index, 1);
//     getUncompleted()
// }

// function markAsDone(index){
//     let task = uncompletedTodo[index];
    
//     uncompletedTodo.splice(index, 1);

//     completedTodos.push(task)

//     getUncompleted();
//     getCompleted();
// }

/**
 * 
 * 
 * 
 * THIS WORKS WITH THE DATABASE
 * 
 * 
 * 
 */


window.addEventListener('load', ()=>{   

    fetchTodos();

    let form_container = document.querySelector('#create-new-todo');
    let togglebutton = document.querySelector('#btn-create-todo');
    let closeform = document.querySelector('#btnclose');
    let create_todo_form = document.querySelector('#new-todo-form');
    let txttaskname = document.querySelector('#txttaskname');
    let txttaskdesc = document.querySelector('#txttaskdesc');
    let txtdeadline = document.querySelector('#txtdeadline');
    let fill_all_error = document.querySelector('#fill-all-error')

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

    create_todo_form.addEventListener('submit', (e)=>{
        e.preventDefault();

        let inputs = txttaskname.value && txttaskdesc.value && txtdeadline.value;

        if(inputs){
            const promise = new Promise((resolve, reject)=>{
                fetch('http://localhost:4000/todos', {
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body:JSON.stringify({
                        "title": txttaskname.value,
                        "description": txttaskdesc.value,
                        "deadline": txtdeadline.value
                    })
                }).then(
                    res=> {resolve(res.json())}
                ).catch(error=>{
                    reject(error)
                })
                }
            )

            promise.then(data=>console.log(data)).catch(error=>console.log(error))
            fetchTodos()

            txttaskname.value = '';
            txttaskdesc.value = '';
            txtdeadline.value = '';
        }else{
            fill_all_error.style.display = 'block';
            setTimeout(() => {
                fill_all_error.style.display = 'none';
            }, 3000);
        }
    })
})

async function DBdeleteTask(id){
    const DeleteTodo = new Promise((resolve, reject)=>{
        fetch(`http://localhost:4000/todos/${id}`,{
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "DELETE"
        }).then((res)=>resolve(res.json()))
        .catch(err=>reject(err));
    })
    DeleteTodo.then(data=>console.log(data)).catch(error=>console.log(error))

    fetchTodos();
}

function fetchTodos(){
    new Promise((resolve, reject)=>{
    fetch('http://localhost:4000/todos',{
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: "GET"
    }).then((res)=>resolve(res.json()))
    .catch(err=>reject(err));
}).then(data => {
    console.log(data);
    const pendingItem = document.querySelectorAll('.pendingTasklist .taskitem'); //this taskitem class will be created using dom

    pendingItem.forEach(el=>el.remove())

    data.forEach(({
        title,
        description,
        deadline,
        id
    })=>{
        let taskTitle = document.createElement('p');
        taskTitle.textContent = title;
        taskTitle.className = 'task'

        let taskDescription = document.createElement('p');
        taskDescription.textContent = description;
        taskDescription.className = 'description'

        let taskDeadline = document.createElement('p');
        taskDeadline.textContent = Date(deadline);
        taskDeadline.className = 'deadline'

        // Create a div for the buttons and the buttons
        let card_footer = document.createElement('div')
        card_footer.style.display = 'flex';
        card_footer.style.justifyContent = 'space-around';

        let updatebtn = document.createElement('button')
        updatebtn.textContent = 'Update'
        updatebtn.className = 'btnupdate'
        // updatebtn.setAttribute('onclick', `updateTask(${index})`)

        let deletetebtn = document.createElement('button')
        deletetebtn.textContent = 'Delete'
        deletetebtn.className = 'btndelete'
        deletetebtn.addEventListener('click', function(){
            DBdeleteTask(id);
            fetchTodos()
        })

        let markDonebtn = document.createElement('button')
        markDonebtn.textContent = 'Done'
        markDonebtn.className = 'btncomplete'
        markDonebtn.setAttribute('onclick', `markAsDone(${id})`)

        card_footer.appendChild(updatebtn)
        card_footer.appendChild(deletetebtn)
        card_footer.appendChild(markDonebtn)

        let taskItem = document.createElement('div');
        taskItem.style.background='green';
        taskItem.className = 'taskitem'

        taskItem.appendChild(taskTitle)
        taskItem.appendChild(taskDescription)
        taskItem.appendChild(taskDeadline)
        taskItem.appendChild(card_footer)

        let pendingItems = document.querySelector('.pendingTasklist');

        pendingItems.appendChild(taskItem)
    })
})
}
