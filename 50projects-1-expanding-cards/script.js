const panels = document.querySelectorAll(".panel")

console.log(panels)

panels.forEach((panel, i) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel, i) => {
        panel.classList.remove('active')
    })
}