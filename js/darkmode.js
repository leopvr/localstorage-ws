const darkmodeIcon = document.getElementById("darkmode-icon")
const bodyContainer = document.getElementById("darkmode")
const cardbodyDM = document.querySelectorAll('.card-body')
const headerDM = document.getElementById("header")
const containericonDM = document.getElementById("container-icon")

loadMode()

darkmodeIcon.addEventListener('click', () => {

    bodyContainer.classList.toggle("darkmode")
    darkmodeIcon.classList.toggle("darkmode-iconDM")
    cardbodyDM.forEach(card => card.classList.toggle('cardbodyDM'))
    headerDM.classList.toggle("headerDM")
    containericonDM.classList.toggle("container-iconDM")

    storeDarkmode(bodyContainer.classList.contains('darkmode'))
})

function loadMode() {
  const darkmode = localStorage.getItem('darkmode');

  if (!darkmode) {
    storeDarkmode('false');
  } else if (darkmode == 'true') {
    bodyContainer.classList.add('darkmode');
    darkmodeIcon.classList.add('darkmode-iconDM')
    cardbodyDM.forEach(card => card.classList.add('cardbodyDM'))
    headerDM.classList.add("headerDM")
    containericonDM.classList.add("container-iconDM")
  }
}

function storeDarkmode(value) {
  localStorage.setItem('darkmode', value)
}
