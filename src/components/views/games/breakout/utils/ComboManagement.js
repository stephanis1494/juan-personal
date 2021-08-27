export default function ComboManagement(playerObject) {
    if(playerObject.comboStatus === false) {
        playerObject.score++
        playerObject.comboStatus = true

    } else if(playerObject.comboStatus === true) {
        playerObject.score += 5
    }
}