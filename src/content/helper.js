export const addNewEntryToArray = (baseArray, newEntry) => {
    const lastEntry = baseArray.at(-1)
    if (
        typeof lastEntry.valueOf() === 'string' &&
        typeof newEntry.valueOf() === 'string'
    ) {
        // If both are strings, then simply add new entry to last.
        baseArray[baseArray.length - 1] = lastEntry + newEntry

    } else if (Array.isArray(newEntry)) {
        // If new entry is array, then recurse.
        newEntry.reduce((newArray, nestedEntry) => {
            addNewEntryToArray(newArray, nestedEntry)
            return newArray
        }, baseArray)

    } else {
        // Otherwise, push new entry into array.
        baseArray.push(newEntry)
    }
}
