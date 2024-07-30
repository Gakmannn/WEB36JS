import './idbm.scss'
import axios from 'axios'

const form = document.forms[0]
const titleInput = form.children[0] as HTMLInputElement
const select = form.children[1] as HTMLSelectElement
let data = {} as any

form.addEventListener('submit', async (e)=>{
  e.preventDefault()
  if (!titleInput.value) {
    alert('Input title')
    return
  }
  // &page=2
  const url = `http://www.omdbapi.com/?apikey=a821535d&s=${titleInput.value}&type=${select.value}`
  const resp = await axios(url)
  // if (data?.Search) {
  //   data?.Search.push(...resp.data.Search)
  // } else {
    data = resp.data
  // }
  renderWithPagination(data, 0)
  // render(resp.data.Search)
})

const paginationDiv = document.querySelector('#pagination') as HTMLDivElement

paginationDiv.addEventListener('click', (e)=>{
  const target = e.target as HTMLElement
  if (!target.dataset.page) return false
  renderWithPagination(data, +target.dataset.page*3)
})

function renderWithPagination(data:any, start:number) {
  render(data.Search?.slice(start, start+3))
  const count = Math.ceil(data.Search.length/3)
  paginationDiv.innerHTML = ''
  for (let i=0; i<count;i++) {
    paginationDiv.innerHTML += `<button data-page="${i}">${i+1}</button>`
  }
}

const contentDiv = document.querySelector('#content') as HTMLDivElement
function render(arr:any[]) {
  contentDiv.innerHTML = ''
  
  arr?.forEach((el:any)=>{
    const content = `
    <div>
      <img src="${el.Poster}" alt="${el.Title}">
      <div>
        <p>${el.Type}</p>
        <b>${el.Title}</b>
        <p>${el.Year}</p>
        <button data-id="${el.imdbID}">Details</button>
      </div>
    </div>
    `
    contentDiv.insertAdjacentHTML('beforeend', content)
  })
}