function getAdmins(map) {
    let admins = []

    for ([key, value] of map) {
        if (value === 'ADMIN')
            admins.push(key)
    }
    return admins
}

const usuarios = new Map()

usuarios.set('Douglas', 'ADMIN')
usuarios.set('Stephany', 'ADMIN')
usuarios.set('Luiz', 'USER')
usuarios.set('Victor', 'USER')

console.log(getAdmins(usuarios))