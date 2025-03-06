
const wordList = ["Cachalot", "Pétunia", "Serviette"]
const sentenceList = ["Pas de panique", "La vie, l'univers et le reste", "Merci pour le poisson"]


const startGame = () => {
    chooseSentenceOrWord()
    startGameLoop(wordList, sentenceList)
    showResult()
}
startGame()