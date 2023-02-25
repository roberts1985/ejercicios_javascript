const isPalindrome = (text)=>{
    const invertedString = text.toLowerCase().split(" ").join("").split("").reverse().join("")
    const string = text.toLowerCase().split(" ").join("")

    return string===invertedString
}

console.log(isPalindrome("hola mundo"))
console.log(isPalindrome("Anita lava la tina"))
console.log(isPalindrome("Luz azul"))
console.log(isPalindrome("sometemos"))
console.log(isPalindrome("pruebA"))