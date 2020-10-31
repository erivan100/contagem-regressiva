const secondsContainer = document.querySelector('#seconds')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const updateCountown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60/ 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    secondsContainer.textContent = seconds <10 ? '0' + seconds : seconds //adicinando mais um 0

}

setInterval(updateCountown, 1000); // a cada 1 segundo, este método vai chamar função updateCountown


