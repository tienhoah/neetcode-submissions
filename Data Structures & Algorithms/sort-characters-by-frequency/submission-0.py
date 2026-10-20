class Solution:
    def frequencySort(self, s: str) -> str:
        count = Counter(s)
        freq = defaultdict(list)
        
        for char, cnt in count.items():
            freq[cnt].append(char)

        res = []
        for i in range(len(s), 0, -1):
            for c in freq[i]:
                res.append(c * i)
        return "".join(res)

