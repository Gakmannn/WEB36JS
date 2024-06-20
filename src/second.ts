const inp = document.createElement('input')
inp.type = 'text'
inp.placeholder = 'Введи текст'
inp.addEventListener('input', (e)=>{
  // @ts-ignore
  const event = new CustomEvent('userInput', { detail: inp.value, bubbles:true})
  inp.dispatchEvent(event)
})
document.body.prepend(inp)