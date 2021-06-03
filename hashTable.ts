//hash table that stores words into 26 bukets based on what the first letter is using arrays as the buckets
class HashTable {
	buckets: any;
	constructor() {
		this.buckets = new Array();
		for (var i = 0; i <= 26; i++) {
			this.buckets.push(new Set());
		}
	}
   hashCode(word: string) {
      word = word.toLowerCase();
      var simpCharCode = word[0].charCodeAt(0) - 97;
      var bucketIndex;
      simpCharCode < 0 || simpCharCode > 25
         ? (bucketIndex = 26)
         : (bucketIndex = simpCharCode);
      return bucketIndex;
   }
	add(word: string) {
		if (!word.length) {
			return null;
		}
		this.buckets[this.hashCode(word)].add(word);
	}
   search(word: string) {
      if (!word.length) {
         return null;
      }
      return this.buckets[this.hashCode(word)].has(word)
   }
   remove(word: string) {
      if (!word.length) {
         return null
      }
      this.buckets[this.hashCode(word)].delete(word)
   }

}
(function driver() {
	var wordHash = new HashTable();
	wordHash.add('amongus');
   console.log(wordHash.search('amongus'))
   wordHash.remove('amongus')
   console.log(wordHash.search('amongus'))
})();
