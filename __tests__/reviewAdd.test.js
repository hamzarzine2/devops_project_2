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

});

