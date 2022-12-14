const reviewAdd=require('../services/reviewAdd');

describe("test of the method review add that should only allow planets with uppercases and '-' OR '.'",()=> {
    it("should return false if the string is empty",()=> {
        const result = reviewAdd("");
        expect(result).toBe(false);
    });
});