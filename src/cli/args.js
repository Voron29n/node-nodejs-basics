const parseArgs = () => {
    let finalString = '';
    process.argv
        .slice(2)
        .forEach((value, index, array) => {
            const joinStringValue = index === (array.length-1) ? '' : ', '
            finalString += index%2 === 0 ? `${value} is ` : `${value}${joinStringValue}`
        })  // --some-arg is value1, --other is 1337, --arg2 is 42,
     console.log(finalString)
};

parseArgs();
