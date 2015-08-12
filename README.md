# bloomfilters.js

## bloomfilter.js - usage:
To create a filter, pass an options hash to the constructor:
### initialize
```javascript
var options = {
	bits: 1024,
	hashes: 7,
	seeds: [1, 2, 3, 4, 5, 6, 7]
};

filter = new BloomFilter(options);
```
### add()
`filter.add('cat');`

Adds the given item to the filter. Can also accept buffers and arrays containing strings or buffers:

`filter.add(['cat', 'dog', 'coati', 'red panda']);`

### has()
To test for membership:

`filter.has('dog');`
