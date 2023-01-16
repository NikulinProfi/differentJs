// const quastion = prompt('Введите задание на сегодня')
// const body = document.querySelector('body')
// console.log(body)
// const ul = document.createElement('ul')
// const li = document.createElement('li')
// ul.textContent += quastion.valueOf()
// console.log(ul)
// console.log(li)
// body.append('ul')

// let li = document.createElement('li')
//   li.className = 'task'
//   li.innerHTML += tasks[i]
//   todo.append(li)

// for (let e of document.body.querySelectorAll('div')) {
//   if (e.textContent.startsWith('Cola 1.5 l')) e.remove()
//   if (e.textContent.startsWith('Chocolate bar')) {
//     let newChild = document.createElement('span')
//     newChild.className = 'qty'
//     newChild.textContent = ' x 4 шт'
//     e.replaceChild(newChild, e.firstElementChild)
//     e.replaceChild(document.createTextNode('Canned Fish'), e.firstChild)
//   }
// }
const todo = document.getElementById('todo-list')
let task
while ((task = prompt('Введите пункт списка:')))
  todo.insertAdjacentHTML('beforeend', `<li>${task}</li>`)
