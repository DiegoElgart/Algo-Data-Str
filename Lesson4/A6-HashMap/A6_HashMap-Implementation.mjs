export class DSA101_HashMap {
	constructor(initCapoacity = 16) {
		this.buckets = [];
		this.allocated = initCapoacity;
		this.occupied = 0;
		for (let i = 0; i < this.allocated; i++) {
			this.buckets.push(null);
		}
	}

	getIndex(key) {
		// Calculate hash of key
		const hashValue = this.hash1(key);
		// get index by modulo
		if (hashValue == 0) return;
		const index = hashValue % this.allocated;
		// return index
		return index;
	}

	set(key, value) {
		const bucketIndex = this.getIndex(key);
		if (!bucketIndex) return;
		// new entry to add to HashMap
		let newEntry = { key, value };
		// Is bucket already occupied
		if (this.buckets[bucketIndex] == null) {
			this.buckets[bucketIndex] = [];
		} else {
			for (let i = 0; i < this.buckets[bucketIndex].length; i++) {
				if (this.buckets[bucketIndex][i].key === key) return;
			}
		}
		// Add entry to bucket array
		this.buckets[bucketIndex].push(newEntry);
		// Incerement occupied
		this.occupied++;
	}

	get(key) {
		// index
		const bucketIndex = this.getIndex(key);
		// check if bucket is empty?
		if (this.buckets[bucketIndex] == null) {
			return null;
		}
		// Search in bucket for key
		for (let i = 0; i < this.buckets[bucketIndex].length; i++) {
			if (key === this.buckets[bucketIndex][i].key) {
				return this.buckets[bucketIndex][i].value;
			}
		}
		return null;
	}

	// Calculate the hash value of the key - method 1
	hash1(key) {
		// starts with 0 value
		let hashVal = 0;
		// generate a unique key data indentifier composed of value + type
		const stringKeyWithType = `${key}${typeof key}`;
		// Loop on the unique kay data identifier
		for (let i = 0; i < stringKeyWithType.length; i++) {
			// convert each character to a number
			const charVal = stringKeyWithType.charCodeAt(i);
			// accumulate in increasing significance byte by byte
			hashVal += (charVal & charVal) << (i * 8);
		}
		// result is a numeric value of the bytes of the unique data identifier
		return hashVal;
	}

	toString() {
		let outStr = "DSA101_HashMap::{";
		outStr += '"allocated":' + this.allocated;
		outStr += ', "occupied":' + this.occupied;
		outStr += ', "buckets" : [';
		for (let i = 0; i < this.buckets.length; i++) {
			if (i > 0) {
				outStr += ", ";
			}
			outStr += "\n\t[";
			if (this.buckets[i] != null) {
				for (let j = 0; j < this.buckets[i].length; j++) {
					if (j > 0) {
						outStr += ", ";
					}
					outStr += '{ "key":' + this.buckets[i][j].key + ', "value":' + this.buckets[i][j].value + " }";
				}
			}
			outStr += "]";
		}
		outStr += "]}";
		return outStr;
	}
}

export default DSA101_HashMap;
