// const item = document.querySelectorAll('.item')
// item[1].remove()

// const swapItem = document.getElementById('cart-items')
// const newItem = document.createElement('div')
// newItem.className = 'item'
// newItem.innerHTML = 'Canned fish'
// newItem.className = ''
// swapItem.replaceChild(newItem, swapItem.children[3])

// const span = document.querySelectorAll('span')
// span[3].innerHTML = '312'

for (let e of document.body.querySelectorAll('div')) {
  if (e.textContent.startsWith('Cola 1.5 l')) e.remove()
  if (e.textContent.startsWith('Chocolate bar')) {
    let newChild = document.createElement('span')
    newChild.className = 'qty'
    newChild.textContent = ' x 4 шт'
    e.replaceChild(newChild, e.firstElementChild)
    e.replaceChild(document.createTextNode('Canned Fish'), e.firstChild)
  }
}
