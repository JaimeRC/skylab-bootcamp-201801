function success(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

function fail(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}

function validate(user) {
    for (const prop in user) {
        const value = user[prop]
        if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or blanck`)
    }
}

module.exports = { success, fail, validate }