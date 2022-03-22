let todos = []
contor = 0
isCompleted = 0
var input = document.getElementsByClassName("inputText")[0]

function showTasks() {
    let newTag = ''
    var cnt = 0
    var nr = 0
    todos.forEach((value, index) => {
        if (value['checked'] == false) {
            cnt++
        } else {
            nr++
        }
    }
    )
    var itemsLeft = document.querySelector('.itemsLeft')
    itemsLeft.textContent = cnt
    if (nr > 0) {
        document.getElementById('clear').style.visibility = 'visible'
    } else {
        document.getElementById('clear').style.visibility = 'hidden'
    }
    todos.forEach((value, index) => {
        if (value['checked'] == false) {
            newTag +=  `<div class="content">
            <i class="fa fa-circle-thin circle fa-2x " id="bla" onclick=isChecked(${index}) ></i>
            <p class="todo1">${value['value']}</p>
            <i class="fa fa-times delete" onclick="deleteTask(${index})"></i>
        </div>`
        } else {
            newTag += `<div class="contentChecked">
            <i class="fa fa-circle-thin circle fa-2x " id="bla"  ></i>
            <span class="checkId" onclick=isNotChecked(${index})>&checkmark;</span>
            <p class="todo2">${value['value']}</p>
            <i class="fa fa-times delete" onclick="deleteTask(${index})" ></i>
          </div>`
        }
    })
        document.querySelector('.items').innerHTML = newTag
   
}

function showActiveTasks() {
    let newTag = ''
    var cnt = 0
    var nr = 0
    todos.forEach((value, index) => {
        if (value['checked'] == false) {
            cnt++
        } else {
            nr++
        }
    }
    )
    var itemsLeft = document.querySelector('.itemsLeft')
    itemsLeft.textContent = cnt
    if (nr > 0) {
        document.getElementById('clear').style.visibility = 'visible'
    } else {
        document.getElementById('clear').style.visibility = 'hidden'
    }
    todos.forEach((value, index) => {
        if (value['checked'] == false) {
            newTag +=  `<div class="content">
            <i class="fa fa-circle-thin circle fa-2x " id="bla" onclick=_isChecked(${index}) ></i>
            <p class="todo1">${value['value']}</p>
            <i class="fa fa-times delete" onclick="deleteTaskActive(${index})"></i>
        </div>`
        }
    })
        document.querySelector('.items').innerHTML = newTag
   
}
function showCompletedTasks() {
    let newTag = ''
    var cnt = 0
    var nr = 0
    todos.forEach((value, index) => {
        if (value['checked'] == false) {
            cnt++
        }else {
            nr++
        }
    }
    )
    var itemsLeft = document.querySelector('.itemsLeft')
    itemsLeft.textContent = cnt
    if (nr > 0) {
        document.getElementById('clear').style.visibility = 'visible'
    } else {
        document.getElementById('clear').style.visibility = 'hidden'
    }
    todos.forEach((value, index) => {
        if (value['checked'] == true) {
            newTag += `<div class="contentChecked">
            <i class="fa fa-circle-thin circle fa-2x " id="bla"  ></i>
            <span class="checkId" onclick=_isNotChecked(${index})>&checkmark;</span>
            <p class="todo2">${value['value']}</p>
            <i class="fa fa-times delete" onclick="deleteTaskCompleted(${index})" ></i>
          </div>`
        }
    })
        document.querySelector('.items').innerHTML = newTag
}
function isChecked(index) {
    todos[index]['checked'] = true
    showTasks()
}
function _isChecked(index) {
    todos[index]['checked'] = true
    showActiveTasks()
}
function isNotChecked(index) {
    todos[index]['checked'] = false
    showTasks()
}
function _isNotChecked(index) {
    todos[index]['checked'] = false
    showCompletedTasks()
}
input.addEventListener("keypress", function(event){
    if (event.key === 'Enter'){
        let dict = {}
        inputText = input.value
        if (inputText != '') {
            dict['value'] = inputText
            dict['checked'] = false
            input.value = ''
            todos.push(dict)
            if (isCompleted == 0)
                showTasks()
            else 
                showCompletedTasks()
            chevronContor = 0
        }
    }
})

function deleteTask(contor) {
    todos.splice(contor, 1)
    showTasks()
}
function deleteTaskActive(contor) {
    todos.splice(contor, 1)
    showActiveTasks()
}
function deleteTaskCompleted(contor) {
    todos.splice(contor, 1)
    showCompletedTasks()
}
chevronContor = 0
var chevron = document.getElementsByClassName('chevron')[0]
chevron.addEventListener('click', function(event) {
    if (chevronContor % 2 == 0) {
        todos.forEach((value, index) => {
            todos[index]['checked'] = true
            showTasks()
        })
         
    } else {
        todos.forEach(value => {
            todos.forEach((value, index) => {
                todos[index]['checked'] = false
                showTasks()
            })
        })
    }
    chevronContor++
})

document.getElementById('clear').addEventListener('click', function(event) {
    chevronContor = 0
    for (i = 0; i < todos.length; i++) {
        if (todos[i]['checked'] == true) {
            todos.splice(i, 1)
            i--
        }
        console.log(todos)
    }
    document.getElementById('clear').style.visibility = 'hidden'
    if (isCompleted == 0)
        showTasks()
    else 
        showCompletedTasks()
})

document.getElementsByClassName('activeButton')[0].addEventListener('click', function(event) {
    isCompleted = 0
    showActiveTasks()
})
document.getElementsByClassName('allButton')[0].addEventListener('click', function(event) {
    isCompleted = 0
    showTasks()
})

document.getElementsByClassName('completedButton')[0].addEventListener('click', function(event) {
    isCompleted = 1
    showCompletedTasks()
})
