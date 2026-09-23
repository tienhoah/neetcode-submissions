class Solution:
    def areSentencesSimilar(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        if len(sentence1) != len(sentence2):
            return False

        similar = set((u, v) for u, v in similarPairs)

        for i in range(len(sentence1)):
            w1, w2 = sentence1[i], sentence2[i]
            if w1 == w2:
                continue
            if (w1, w2) not in similar and (w2, w1) not in similar:
                return False
            
        return True