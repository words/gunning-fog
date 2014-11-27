# gunning-fog [![Build Status](https://img.shields.io/travis/wooorm/gunning-fog.svg?style=flat)](https://travis-ci.org/wooorm/gunning-fog) [![Coverage Status](https://img.shields.io/coveralls/wooorm/gunning-fog.svg?style=flat)](https://coveralls.io/r/wooorm/gunning-fog?branch=master)

Formula to detect the ease of reading a text according to the [Gunning fog index](http://en.wikipedia.org/wiki/Gunning_fog_index).

See [syllable](https://github.com/wooorm/syllable) for detecting syllables.

## Installation

npm:
```sh
$ npm install gunning-fog
```

Component:
```sh
$ component install wooorm/gunning-fog
```

Bower:
```sh
$ bower install gunning-fog
```

## Usage

```js
var gunningFog = require('gunning-fog');

/**
 * For “The Australian platypus is seemingly a hybrid of
 * a mammal and reptilian creature.” (1 sentence; 13 words;
 * 26 syllables; 4 polysillabic words, 2 of which jargon/proper nouns).
 */

gunningFog({
    'sentence' : 1,
    'word' : 13,
    'complexPolysillabicWord' : 2
});
// 11.353846...
```

## API

### gunningFog(counts)

Given an object containing the number of words (`word`), the number of sentences (`sentence`), and the number of complex (exlcuding jargon, proper nouns, compound words) polysillabic (three or more syllables) words (`complexPolysillabicWord`) in a document, returns the grade level associated with the document.

## Related

- [automated-readability](https://github.com/wooorm/automated-readability) — Uses character count instead of an error-prone syllable parser;
- [coleman-liau](https://github.com/wooorm/coleman-liau) — Uses letter count instead of an error-prone syllable parser;
- [dale-chall-formula](https://github.com/wooorm/dale-chall-formula) — Uses a dictionary; suited for higher reading levels;
- [flesch](https://github.com/wooorm/flesch) — Uses syllable count;
- [flesch-kincaid](https://github.com/wooorm/flesch-kincaid) — Like **flesch-formula**; returns U.S. grade levels;
- [smog-formula](https://github.com/wooorm/smog-formula) — Like **gunning-fog-index**; without the need for advanced NLP tasks;
- [spache-formula](https://github.com/wooorm/spache-formula) — Uses a dictionary; suited for lower reading levels.

## License

MIT © [Titus Wormer](http://wooorm.com)
