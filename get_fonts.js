const fs = require('fs')
const re = /,([^,]+(ttf|ttc|otf))"/g

const cmd = fs.openSync('dl-fonts.sh', 'w')
fs.readFile('./public/code/DBS.js', { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
        Array.from((new Set(Array.from(data.matchAll(re)).map(match => match[1]))).values()).forEach(link => {
            fs.writeSync(cmd, `curl -o "public/rsrc/fonts/${link}" --create-dirs "https://www.photopea.com/rsrc/fonts/${link}"\n`)
        })
        fs.closeSync(cmd)
    }
})