declare enum SimplePGNBrand {
    _ = ""
}
/**
 * A String that represents the extended PGN Format
 *  based on this spec https://www.enpassant.dk/chess/palview/enhancedpgn.htm
 */
export declare type SimplePGN = SimplePGNBrand & string;
declare enum EnhancedPGNBrand {
    _ = ""
}
/**
 * A String that represents the extended PGN Format
 *  based on this spec https://www.enpassant.dk/chess/palview/enhancedpgn.htm
 */
export declare type EnhancedPGN = EnhancedPGNBrand & string;
/**
 * This function checks if the given string is of the SimplePGN format
 *
 * @param s
 */
export declare const isSimplePGN: (s: string) => s is SimplePGNBrand;
/**
 * This function checks if the given string is of the SimplePGN format
 *
 * @param s
 */
export declare const isEnhancedPGN: (s: string) => s is EnhancedPGNBrand;
export {};
