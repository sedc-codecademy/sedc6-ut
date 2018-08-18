const numberToWords = (number) => {
    const unitTexts = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const decadeTexts = ["", "!!!", "twenty ", "thirty ", "fourty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];

    const hundreds = number / 100 | 0;
    if (hundreds !== 0) {
        const rest = number % 100;
        if (rest === 0){
            return `${unitTexts[hundreds]} hundred`;
        }
        return `${unitTexts[hundreds]} hundred ${numberToWords(rest)}`;
    }

    const units = unitTexts[number % 10];
    const decade = decadeTexts[(number / 10 | 0) % 10]

    if (decade === "!!!") {
        const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        return teens[number % 10];
    }

    if (number === 0) 
        return units;
    if (units==="zero") {
        return decade.trim();
    }

    return `${decade}${units}`;

}