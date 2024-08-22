class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

        // Search for a word in the trie
        search(word) {
            let node = this.root;
    
            for (let char of word) {
                if (!node.children[char]) {
                    return false; // Word not found
                }
                node = node.children[char];
            }
    
            return node.isEndOfWord; // Return true if it's a complete word
        }
            // Check if any word in the trie starts with a given prefix
    startsWith(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) {
                return false; // Prefix not found
            }
            node = node.children[char];
        }

        return true; // Prefix exists in the trie
    }

}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("app"));   // Output: true
console.log(trie.search("apples")); // Output: false
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("apl")); // Output: false
