# gunning-fog

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [gunning fog
index][formula].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`gunningFog(counts)`](#gunningfogcounts)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes an algorithm to detect ease of reading of English texts.

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

This algorithm is based on syllables, whereas some others are not, which means
it’s tougher to get right and slower to calculate.

See [`syllable`][syllable] for detecting syllables.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install gunning-fog
```

In Deno with [`esm.sh`][esmsh]:

```js
import {gunningFog} from 'https://esm.sh/gunning-fog@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {gunningFog} from 'https://esm.sh/gunning-fog@2?bundle'
</script>
```

## Use

```js
import {gunningFog} from 'gunning-fog'

// For “The Australian platypus is seemingly a hybrid of a mammal and reptilian
// creature.”
// 1 sentence; 13 words; 4 polysillabic words, of which two are jargon, proper
// nouns, or compound words.
gunningFog({sentence: 1, word: 13, complexPolysillabicWord: 2})
// => 11.35384…
```

## API

This package exports the identifier `gunningFog`.
There is no default export.

### `gunningFog(counts)`

Given an object containing the number of words (`word`), the number of
sentences (`sentence`), and the number of complex (i.e., jargon, proper
nouns, compound words) polysillabic (three or more syllables) words
(`complexPolysillabicWord`) in a document, returns the grade level
associated with the document.

##### `counts`

Counts from input document.

###### `counts.sentence`

Number of sentences (`number`, required).

###### `counts.word`

Number of words (`number`, required).

###### `counts.complexPolysillabicWord`

Number of words that consist of three or more syllables, that are jargon,
proper nouns, or compound words (`number`, required).

##### Returns

Grade level associated with the document (`number`).

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Counts`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`retext-readability`](https://github.com/wooorm/retext-readability)
    — complete readability measuring solution
*   [`automated-readability`](https://github.com/words/automated-readability)
    — uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — uses a dictionary; suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — like `flesch`; returns U.S. grade levels
*   [`smog-formula`](https://github.com/words/smog-formula)
    — like `gunning-fog-index`; without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — uses a dictionary; suited for lower reading levels

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/gunning-fog/workflows/main/badge.svg

[build]: https://github.com/words/gunning-fog/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/gunning-fog.svg

[coverage]: https://codecov.io/github/words/gunning-fog

[downloads-badge]: https://img.shields.io/npm/dm/gunning-fog.svg

[downloads]: https://www.npmjs.com/package/gunning-fog

[size-badge]: https://img.shields.io/bundlephobia/minzip/gunning-fog.svg

[size]: https://bundlephobia.com/result?p=gunning-fog

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Gunning_fog_index

[syllable]: https://github.com/words/syllable
