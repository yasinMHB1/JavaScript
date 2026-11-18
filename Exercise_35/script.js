const imgProperty = document.querySelector('.img-property')
function changeImage() {
    
    let url = prompt('please enter the image url ')
    let width = prompt('please enter the image width ')
    let height = prompt('please enter the image height ')
    let border_color = prompt('please enter the image border color ')
    let border_radius = prompt('please enter the image border radius ')

    imgProperty.setAttribute('src', url);
    imgProperty.style.width = `${width}px`
    imgProperty.style.height = `${height}px`
    imgProperty.style.border = `2px solid ${border_color}`
    imgProperty.style.borderRadius = `${border_radius}px`
}



// btn.addEventListener('click', changeImage)