const messages = [
    "oscar",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Laura",
    'Caroline',
    'Paulina'
]

const randomMsg = () =>  {
    const message = messages[Math.floor(Math.random() * messages.length)]

    console.log(`${message}`)
}

module.exports = {randomMsg}