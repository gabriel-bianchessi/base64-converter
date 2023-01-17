import fs from 'fs'
import path from 'path'

const filesToConvert = fs.readdirSync(path.join(__dirname, "input"))

function base64Encode(file: string) {
  const fileAsBase64 = fs.readFileSync(path.join(__dirname, "input", file), "base64")
  const fileWithoutExtension = file.replace(/\.[^/.]+$/, "")
  console.log(fileWithoutExtension)
  fs.appendFileSync(path.join(__dirname, "output", `${fileWithoutExtension}.txt`), fileAsBase64)
}

const base64Archives = filesToConvert.map((file) => {
  base64Encode(file)
})