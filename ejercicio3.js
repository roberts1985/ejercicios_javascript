const maxWord = (string) => {
    const str = string.split(" ")

    word = str[0]
    for(let i = 1; i < str.length; i++){
        if(word.length<str[i].length)
            word = str[i]
    }
    return word
}

console.log(maxWord("hola mundo como estas"))