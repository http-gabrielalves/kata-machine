export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length
    
    do {
        let midpoint = Math.floor(lo + (hi - lo) / 2);
        let target = haystack[midpoint];

        if (target === needle) {
            return true;
        } else if (target > needle) {
            hi = midpoint;
        } else {
            lo = midpoint + 1;
        }
    }
    while (lo < hi);

    return false;
}

