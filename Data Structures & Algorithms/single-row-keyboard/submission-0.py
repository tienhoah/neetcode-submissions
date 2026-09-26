class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        keyboardMap = {}
        for i in range(len(keyboard)):
            keyboardMap[keyboard[i]] = i
        
        firstCharIndex = keyboardMap[word[0]]
        output = firstCharIndex
        for w in word[1:]:
            diff = abs(keyboardMap[w] - firstCharIndex)
            output += diff
            firstCharIndex = keyboardMap[w]
        return output