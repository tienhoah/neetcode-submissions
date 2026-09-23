class Solution:
    def validWordSquare(self, words: List[str]) -> bool:
        for i in range(len(words)):
            rowWord = words[i]

            colWord = ''
            rIndex = 0
            while rIndex < len(rowWord):
                if rIndex >= len(words) or i >= len(words[rIndex]):
                    return False
                colWord += words[rIndex][i]
                rIndex += 1

            if (rowWord != colWord):
                return False
        return True