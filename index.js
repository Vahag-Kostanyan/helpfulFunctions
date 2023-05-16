
// Date parser

function formatDate(formatType, date, chArr) {

    if (date == "") return "";

    date = date.split(' ')[0];

    switch (formatType.split("-")[0].toLowerCase()) {
        case "yyyy":
            if (date.split(chArr[0])[0].length == 2) {
                date = date.split(chArr[0]).reverse().join(chArr[1]);
            } else {
                date = date.split(chArr[0]).join(chArr[1]);
            }
        case "dd":
            if (date.split(chArr[0])[0].length == 2) {
                date = date.split(chArr[0]).reverse().join(chArr[1]);
            } else {
                date = date.split(chArr[0]).join(chArr[1]);
            }

    }

    return date
}


// Is object validation

function isObject(val) {
    return (typeof val === "object")
}

