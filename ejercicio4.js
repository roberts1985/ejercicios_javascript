const countOccurrences = (string, char) => {
    let counter = 0

    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase()===char.toLowerCase()){
            counter++
        }
    }

    return counter
}

console.log(countOccurrences("hola mundo","o"))
console.log(countOccurrences("Juan Pérez","j"))
console.log(countOccurrences("Adios","Z"))