
for (let i = 0; i < wordList.length; i++) {
    console.log(userWord);
    
    if (userWord === wordList[i]) {
        userWord = prompt(`Entrez le mot  : ${wordList[i+1]}`)
    }  
    score++
    console.log(score)
}
// Soit une condition IF
if (userWord === wordList[0]) {
    console.log('Vous avez bien écrit le mot');
    score++
    userWord = prompt(`Entrez le premier mot  : ${wordList[1]}`)

} if(userWord === wordList[1]){
    console.log('Vous avez bien écrit le mot');
    score++
    userWord = prompt(`Entrez le premier mot  : ${wordList[2]}`)
}  
if(userWord === wordList[2]){
    console.log('Vous avez bien écrit le mot');
    score++
}
else {
    console.log('Vous avez mal écrit le mot');
}

// Soit une condition SWITCH
switch (userWord) {
    case applicationWord:
        console.log('Bravo');
        break
    case "Connard":
        console.log("Restez correct !");
        break
    case "Ta gueule":
        console.log("Restez correct !");
        break
    case "Imbécile":
        console.log("Restez correct !");
        break
    default:
        console.log("Vous avez fait une erreur de frappe");
}