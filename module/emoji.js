const stringsArray = ["example1", "example2", "example3"];

const checkStringsInText = (array, A) => {
    let count = 0;

    array.forEach(str => {
        if (A.includes(str)) {
            count++;
        }
    });

    if (count >= 30) {
        console.log("30個以上含まれています。");
    } else {
        console.log("30個未満です。");
    }
};

