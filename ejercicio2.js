const capitalize = (string) => {
    const arrayString = string.split(" ")
    let text = ""
    for(let i = 0; i < arrayString.length; i++) {
        text = text + arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1) + " "
    }

    return text.substring(0,text.length-1)
}

console.log(capitalize("hola mundo"))
console.log(capitalize("roberto enrique alberto lira"))