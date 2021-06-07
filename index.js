const { exec } = require('child_process')


class Encryptr {

    constructor(pass) {
        this.password = pass

    }

    encrypt(value) {

        return new Promise((resolve, reject) => {
            if (!value)
                reject({ err: "data empty" })
            else if (!this.password)
                reject({ err: "password not found" })
            else if (this.password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
                reject({ err: "special characters not allowed in password" })

            else {
                exec(`./node_modules/@anishg/string_encryptr/test encrypt ${value.trim()} ${this.password}`, (err, out, stderr) => {
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

    decrypt(value) {
        return new Promise((resolve, reject) => {
            if (!value)
                reject({ err: "data empty" })
            else if (!this.password)
                reject({ err: "password not found" })
            else if (this.password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
                reject({ err: "special characters not allowed in password" })
            else {
                exec(`./node_modules/@anishg/string_encryptr/test decrypt ${value.trim()} ${this.password}`, (err, out, stderr) => {
                    if (err)
                        reject({ err: stderr })
                    else
                        resolve({ data: out })
                })
            }
        })
    }
}

module.exports = Encryptr