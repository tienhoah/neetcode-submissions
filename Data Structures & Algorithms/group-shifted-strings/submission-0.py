class Solution:
    def groupStrings(self, strings: List[str]) -> List[List[str]]:
        def get_hash(string):
            key = []
            for a, b in zip(string, string[1:]):
                key.append(chr((ord(b) - ord(a)) % 26 + ord('a')))
            return "".join(key)


        groupString = collections.defaultdict(list)
        for string in strings:
            hashKey = get_hash(string)
            groupString[hashKey].append(string)
        
        return list(groupString.values())