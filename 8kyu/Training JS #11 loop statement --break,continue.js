function grabDoll(dolls) {
    var bag = [];
    for (var i = 0, length = dolls.length; i < length; i++) {
        if (bag.length == 3) break;
        if (dolls[i] === ('Hello Kitty') || dolls[i] ===('Barbie doll') ) {
            bag.push(dolls[i]);
        } else {
            continue; }
    }

    return bag;
}