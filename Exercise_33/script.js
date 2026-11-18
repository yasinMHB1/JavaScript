
function change_text(){
    const Portfolio = document.querySelector('.portfolio')
    const description = document.querySelector('.description')    
    
    description.textContent = "this text has been changed using textcontent"
    Portfolio.innerHTML = "this text has been changed using innerHTML"

    
}