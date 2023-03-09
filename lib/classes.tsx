function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

function scopedClassMaker(prefix: string) {
    return function classes(name?: string,...classes: (string | undefined)[]) {
        let arr = new Array()
        let str = [prefix,name].filter(Boolean).join('-');
        let custom = classes.filter(Boolean).join(' ');
        arr.push(str,custom)

        return arr.join(' ').trim();
    }
}

export  {
    classes,
    scopedClassMaker,
};
