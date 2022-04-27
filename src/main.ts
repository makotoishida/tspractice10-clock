import 'normalize.css'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!


function tick() {
  const d = new Date()
  render(d)
}

function render(t: Date) {
  const h = t.getHours()
  const m = t.getMinutes()
  const s = t.getSeconds()

  const degS = (360 * s) / 60
  const degM = (360 * m) / 60 + degS / 60
  const degH = (360 * (h % 12)) / 12 + degM / 12

  app.innerHTML = `
    <div class="clock">
      <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ffc" />
        <circle cx="200" cy="200" r="190" fill="#fefefe" stroke="#888" />
        ${timeDigital(t)}
        ${drawHand(16, 128, degH, '#1010e0d0')}
        ${drawHand(10, 158, degM, '#4040e0d0')}
        ${drawHand(3, 170, degS, '#f060e0d0')}
      </svg>
    </div>
  `
}

function drawHand(w: number, h: number, deg: number, color: string) {
  return `<polygon points="-${w},${h * 0.04} -${w * 0.4},-${h * 0.96} 0,-${h} ${
    w * 0.4
  },-${h * 0.96} ${w},${
    h * 0.04
  }" style="transform: translate(50%, 50%) rotate(${deg}deg) " fill="${color}" />`
}

function timeDigital(d: Date) {
  return `<text x="200" y="280" font-size="40" text-anchor="middle" fill="#88c">
    ${timeStr(d)}
  </text>`
}

function timeStr(t: Date) {
  const h = t.getHours()
  const m = t.getMinutes()
  const s = t.getSeconds()
  return `${twoDig(h)}:${twoDig(m)}:${twoDig(s)}`
}

function twoDig(n: number) {
  return `0${n}`.slice(-2)
}

setInterval(() => tick(), 1000)
tick()
