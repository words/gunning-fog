# gunning-fog

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [gunning fog
index][formula].

See [`syllable`][syllable] for detecting syllables.

## Install

[npm][]:

```sh
npm install gunning-fog
```

## Use

```js
var gunningFog = require('gunning-fog')

// For “The Australian platypus is seemingly a hybrid of a mammal and reptilian
// creature.”
// 1 sentence; 13 words; 4 polysillabic words, of which two are jargon, proper
// nouns, or compound words.
gunningFog({sentence: 1, word: 13, complexPolysillabicWord: 2})
// => 11.353846...
```

## API

### `gunningFog(counts)`

Given an object containing the number of words (`word`), the number of sentences
(`sentence`), and the number of complex (excluding jargon, proper nouns,
compound words) polysillabic (three or more syllables) words
(`complexPolysillabicWord`) in a document, returns the grade level associated
with the document.

## Related

*   [`retext-readability`](https://github.com/wooorm/retext-readability)
    — Complete readability measuring solution
*   [`automated-readability`](https://github.com/words/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — Uses a dictionary; suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — Like `flesch`; returns U.S. grade levels
*   [`smog-formula`](https://github.com/words/smog-formula)
    — Like `gunning-fog-index`; without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — Uses a dictionary; suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/gunning-fog.svg

[build]: https://travis-ci.org/words/gunning-fog

[coverage-badge]: https://img.shields.io/codecov/c/github/words/gunning-fog.svg

[coverage]: https://codecov.io/github/words/gunning-fog

[downloads-badge]: https://img.shields.io/npm/dm/gunning-fog.svg

[downloads]: https://www.npmjs.com/package/gunning-fog

[size-badge]: https://img.shields.io/bundlephobia/minzip/gunning-fog.svg

[size]: https://bundlephobia.com/result?p=gunning-fog

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Gunning_fog_index

[syllable]: https://github.com/words/syllable
