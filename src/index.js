module.exports = function toReadable(number) {
    const simpleNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const bigNumbers = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    /* от 0 до 19 */
    if (number <= 19) {
        return simpleNumbers[number];
    }


    /* создаем массив c цифрами от 20 до 99 */
    const numArray = String(number).split("");

    /* от 20 до 99 */
    if (numArray.length === 2 && number > 19) {
        if (+numArray[1] === 0) {
            return `${bigNumbers[numArray[0]]}`;
        } else {
            return `${bigNumbers[numArray[0]]} ${simpleNumbers[numArray[1]]}`;
        }
    }

    /* от 100 до 999 */
    if (numArray.length === 3) {
        /* если 2 и 3 цифры равны 0 */
        if (+numArray[1] === 0 && +numArray[2] === 0) {
            return `${simpleNumbers[numArray[0]]} hundred`;
        }
        if (+numArray[1] === 0) {
            return `${simpleNumbers[numArray[0]]} hundred ${simpleNumbers[numArray[2]]}`;
            /* от 110 до 119 */
        } else if (+numArray[1] < 2) {
            return `${simpleNumbers[numArray[0]]} hundred ${
                simpleNumbers[+[numArray[1], numArray[2]].join("")]
            }`;
            /* от 120 до 999 */
        } else {
            if (numArray[1] == 0 && numArray[2] == 0) {
                return `${simpleNumbers[numArray[0]]} hundred`;
            } else if (numArray[2] == 0) {
                return `${simpleNumbers[numArray[0]]} hundred ${bigNumbers[numArray[1]]}`;
            } else {
                return `${simpleNumbers[numArray[0]]} hundred ${bigNumbers[numArray[1]]} ${
                    simpleNumbers[numArray[2]]
                }`;
            }
        }
    }
};