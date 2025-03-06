console.log('🫡');

let score = 0

let userChoice = prompt(`Souhaitez-vous la liste de 'mots' ou la liste de 'phrases' ?`)

const chooseSentenceOrWord = () => {
    while (userChoice !== 'mots' && userChoice !== 'phrases') {
        userChoice = prompt(`Souhaitez-vous la liste de 'mots' ou la liste de 'phrases' ?`)
    }
}

const startGameLoop = (wordList, sentenceList) => {
    if (userChoice === 'mots') {
        for (let i = 0; i < wordList.length; i++) {
            let userWord = prompt(`Entrez le premier mot : ${wordList[i]}`)
            if (userWord === wordList[i]) {
                score++
            }
        }
        console.log(`Votre score est de ${score} sur ${wordList.length} 👏🏾`);
    } else {
        for (let i = 0; i < sentenceList.length; i++) {
            let userSentence = prompt(`Entrez la première phrase : ${sentenceList[i]}`)
            if (userSentence === sentenceList[i]) {
                score++
            }
        }
        console.log(`Votre score est de ${score} sur ${sentenceList.length} 👏🏾`);
    }
}

const showResult = (score, wordList) => {
    return `Votre score est de ${score} sur ${wordList.length} 👏🏾`
}

