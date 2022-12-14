const reviewAdd=require('../services/reviewAdd');

describe("test of the method review add that should only allow planets with uppercases and '-' OR '.'",()=> {
    it("should return false if the string is empty",()=> {
        const result = reviewAdd("");
        expect(result).toBe(false);
    });

    it("should return false if the string has a lowercase character",()=> {
        const result = reviewAdd("TRaPPist");
        expect(result).toBe(false);
    });
    
    it("should return true if the string contains only upperCase character and number",()=> {
        const result = reviewAdd("TRAPPIST25");
        expect(result).toBe(true);
    });

    it("should return false if the string contains a special character different to '-' or '.'",()=> {
        const result = reviewAdd("TRAPPIST-$25");
        expect(result).toBe(false);
    });

    it("should return true if the string has only uppercase character, numbers or special character equals to '-'",()=> {
        const result = reviewAdd("TRAPPIST-25");
        expect(result).toBe(true);
    });

});

