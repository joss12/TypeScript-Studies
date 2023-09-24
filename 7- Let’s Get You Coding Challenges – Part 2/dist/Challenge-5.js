"use strict";
function decideOperation(num, bool) {
    if (bool === true) {
        return num + 1;
    }
    return num - 1;
}
function decideOperation1(num, bool) {
    if (bool)
        return num + 1;
    return num - 1;
}
function decideOperation2(num, bool) {
    return (bool) ? num + 1 : num - 1;
}
//# sourceMappingURL=Challenge-5.js.map