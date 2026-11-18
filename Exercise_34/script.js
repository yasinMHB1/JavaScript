
const skills = document.querySelector('.skills')

function add_skill() {
    const skill = document.createElement("li")

    skill.textContent = 'new skill'
    skills.appendChild(skill)
}

function remove_skill() {
    if (skills.lastChild){
        skills.removeChild(skills.lastChild)
    }
}