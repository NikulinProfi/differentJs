// const one = 1
// console.log(one)

// const reverseWord = (str) => {
//   console.log(str)
//   return str.split('').reverse().join('')
// }
// reverseWord('sdf sdf')

const colors = document.querySelectorAll('.element')

for (let color of colors) {
  color.style.color = 'pink'
  color.innerHTML = 'pink text'
}
