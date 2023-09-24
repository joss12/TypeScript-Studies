"use strict";
function nullNarrow(arg) {
    if (typeof arg === "undefined" || isNaN(parseInt(arg))) {
        return undefined;
    }
    else {
        return parseInt(arg);
    }
}
