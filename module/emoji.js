const dataArray = [
  "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc",
  "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc",
  "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc",
  "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc",
  "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc"
];

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

