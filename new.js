function callMynameToUpper(name) {
    let newName = name.toUpperCase()

    return newName
}

console.log(callMynameToUpper("olATunJi yusuF AjOa") )


function callMynameToSmall(name) {
    let newName = name.toLowerCase()

    return newName
}

console.log(callMynameToSmall("olATunJi yusuF AjOa") )


function removeSpaces(name) {
    return name
}

console.log(removeSpaces("     olATunJi    yusuF    AjOa      ".trim()) )
console.log(removeSpaces("     olATunJi    yusuF    AjOa      ".trimStart()) )
console.log(removeSpaces("     olATunJi    yusuF    AjOa      ".trimEnd()) )


