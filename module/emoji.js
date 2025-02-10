

const checkStringsInText = (array) => {
    let count = 0;

    array.forEach(str => {
        if (m.includes(str)) {
            count++;
        }
    });

    if (count >= 30) {
        console.log("30個以上含まれています。");
    } else {
        console.log("30個未満です。");
    }
};

