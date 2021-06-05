const { exec } = require('child_process')

let encrypt = (value) => {
    return new Promise((resolve, reject) => {
        if (!value)
            reject({ err: "data empty" })
        else {
            exec(`./test encrypt ${value.trim()}`, (err, out, stderr) => {
                if (err)
                    reject({ err: stderr })
                else {
                    console.log("output", out);
                    resolve({ data: out })
                }
            })
        }
    })
}

let decrypt = (value) => {
    return new Promise((resolve, reject) => {
        if (!value)
            reject({ err: "data empty" })
        else {
            exec(`./test decrypt ${value.trim()}`, (err, out, stderr) => {
                if (err)
                    reject({ err: stderr })
                else
                    resolve({ data: out })
            })
        }
    })
}

module.exports = { encrypt, decrypt }