const input_color = document.getElementById('color')
const hexColor = document.querySelectorAll('.hex-color')
const previewcolor = document.querySelector('.preview-color')
const colorHistory = document.querySelector('.color-history')
const countColors = document.querySelector('#color-count')
const thiscolor = document.querySelectorAll('.this-color')
const clearbtn = document.querySelector('#clear-btn')

clearbtn.addEventListener('click', ()=> {
    thiscolor.forEach((node) => node.remove())
})

input_color.addEventListener('change', ()=>{
    let color_value = input_color.value
    hexColor.textContent = color_value
    hexColor.forEach((value) => value.textContent = color_value)
    
    if (document.querySelectorAll('.this-color').length != 8){
        createElement(color_value)
        
    }
    
    previewcolor.style.backgroundColor  = color_value
    
    
    let total_color = document.querySelectorAll('.this-color').length
    
    
    countColors.textContent = (`${total_color} colors`)
    console.log(total_color)
    
})

function createElement(color){
    console.log("here")
    colorHistory.innerHTML += `
    <div class="this-color">
        <div class="previos-color" style="background-color:  ${color};"></div>
        <span class="hex-color" >${color}</span>
    </div>
    `
}
