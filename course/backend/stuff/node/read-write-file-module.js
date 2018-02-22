const fs = require('fs')

/**
 * Unix-like cp
 * 
 * Copies file from a path to another
 * 
 * Usage:
 * @example cp('origin.txt'.'destiny.txt')
 * 
 * @version 1.0.0
 * 
 * @param {string} from Origin File
 * @param {string} to Destiny file
 * 
 * 
 */

function cp(from, to) {
    if (!from) throw Error('no origin path specified')
    if (!to) throw Error('no destine path specified')

    if (!fs.existsSync(from)) throw Error('origin path does not exist')
    if (fs.existsSync(to)) throw Error('destiny path already exists')

    fs.readFile(from, (err, data) => {
        if (to) {
            fs.writeFile(to, data, (err) => {
                if (err) throw err
            })
        }
    })
}

module.exports = cp