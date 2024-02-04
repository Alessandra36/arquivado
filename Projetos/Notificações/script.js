const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Messagem Um',
  'Messagem Dois',
  'Messagem Três',
  'Messagem Quatro',
]

const types = ['info', 'sucess', 'error']

button.addEventListener('click', () => createNotificao())

function createNotificao(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}