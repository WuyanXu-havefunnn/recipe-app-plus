const BREAKPOINTS = {
    phoneMax : 550,
    tabletMax: 1100,
    laptopMax: 1500,
}

export const QUERIES = {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`
}


