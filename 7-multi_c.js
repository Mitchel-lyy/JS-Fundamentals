const countArg = process.argv[2];
const numOccurrences = parseInt(countArg);
if (isNaN(numOccurrences) && numOccurrences > 0) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < numOccurrences; i++) {
        console.log("C is fun");
    }
}
