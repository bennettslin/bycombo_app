const QUOTES_CONFIGS = [
    {
        straightQuote: `'`,
        openingSmartQuote: `‘`,
        closingSmartQuote: `’`,
    },
    {
        straightQuote: `"`,
        openingSmartQuote: `“`,
        closingSmartQuote: `”`,
    },
]

const _getAllIndicesOfCharacter = (string, character) => {
    const indicesOfCharacter = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            indicesOfCharacter.push(i)
        }
    }
    return indicesOfCharacter
}

const _replaceCharacterAtIndex = (string, index, character) => (
    string.substring(0, index) + character + string.substring(index + 1)
)

export const getSmartQuotedText = (text = '') => {
    QUOTES_CONFIGS.forEach(({
        straightQuote,
        openingSmartQuote,
        closingSmartQuote,
    }) => {
        if (typeof text !== 'string') {
            return text
        }

        const indicesOfCharacter =
            _getAllIndicesOfCharacter(text, straightQuote)

        indicesOfCharacter.forEach(indexOfCharacter => {
            const newCharacter = (
                (
                    // It's an opening quote if it's the first character.
                    indexOfCharacter === 0 &&

                    // And the second character isn't an "s."
                    text[indexOfCharacter + 1] !== 's' &&

                    // And the second character also isn't a colon.
                    text[indexOfCharacter + 1] !== ':' &&

                    // And it isn't a parenthesis.
                    text[indexOfCharacter + 1] !== ')' &&

                    // And the second character also isn't a space.
                    text[indexOfCharacter + 1] !== ' '

                ) || (
                    // Or it's not the first character…
                    indexOfCharacter && (

                        // And it's preceded by a space…
                        text[indexOfCharacter - 1] === ' ' ||

                        // Or a newline.
                        text[indexOfCharacter - 1] === '\n'
                    )
                ) ||

                // Or it's the only character.
                text.length === 1 ||

                // Or it's preceded by a double quote…
                text[indexOfCharacter - 1] === '"' ||

                // … or by an opening parenthesis…
                text[indexOfCharacter - 1] === '(' ||

                // … or by a bracket…
                text[indexOfCharacter - 1] === '['

            ) && !(
                // And it isn't a contracted decade.
                !isNaN(text[indexOfCharacter + 1]) &&
                text[indexOfCharacter + 2] === '0' &&
                text[indexOfCharacter + 3] === 's'

            ) ? openingSmartQuote : closingSmartQuote

            text = _replaceCharacterAtIndex(text, indexOfCharacter, newCharacter)
        })
    })

    return text
}
