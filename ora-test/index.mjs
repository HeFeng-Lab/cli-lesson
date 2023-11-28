import ora, { oraPromise } from "ora"

const spinner = ora("Loading unicorns").start()
setTimeout(() => {
  spinner.color = "yellow"
  spinner.text = "Loading 10%"
  spinner.prefixText = "Downloading chalk"
}, 1000)

let percent = 0
let task = setInterval(() => {
  percent += 10

  spinner.text = "Loading " + percent + "%"

  if (percent >= 100) {
    spinner.stop()
    spinner.succeed("Download finish!")
    clearInterval(task)
  }
}, 1000)

;(async function () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("'doing sth...")
    }, 3000)
  })

  await oraPromise(promise, {
    successText: "Download complete",
    failText: "Download failed",
    prefixText: "Downloading ora",
    text: "Loading",
    spinner: {
      interval: 120,
      frames: ["-", "\\", "|", "/", "-"],
    },
  })
})()
