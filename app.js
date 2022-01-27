let friendsArr = ["Josh", "Garrett", "Haylee", "Haley", "Haleigh"];

for (let i = 0; i < friendsArr.length; i++) {
    console.log(friendsArr[i].toUpperCase() + ":");

    for (let j = 99; j > 0; j--) {
        if (j == 2) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friendsArr[i] + " strikes one out, clears it all out, 1 line of code in the file");
        } else if (j == 1) {
            console.log(j + " line of code in the file, " + j + " line of code; " + friendsArr[i] + " strikes one out, clears it all out, no more lines of code in the file");
        } else {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friendsArr[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
        }
    }
} 