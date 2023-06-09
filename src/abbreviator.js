const abbreviatedWords = [
    {old: /mark/gi, new: 'mk'},
    {old: /wireless/gi, new: ''},
    {old: /earphones/gi, new: ''},
    {old: /headphones/gi, new: ''},
    {old: /speaker/gi, new: ''},
]

const abbreviator = (string) => {
    let newString = string;
    abbreviatedWords.map((word) => newString = newString.replaceAll(word.old, word.new));
    newString = newString.toUpperCase();
    return newString;
}

export default abbreviator;