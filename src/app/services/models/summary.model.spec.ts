import { Summary } from "./summary.model";

describe('Summary', () => {
    it("should give 10% ads percentage", () => {
        let summary: Summary = new Summary();
        summary.adsBlockedToday = 10;
        summary.dnsQueriesToday = 100;
        expect(summary.adsPercentage).toBe(0.1);
    });
    it("should not try to divide by zero", () => {
        let summary: Summary = new Summary();
        summary.adsBlockedToday = 0;
        summary.dnsQueriesToday = 0;
        expect(summary.adsPercentage).toBe(0);
    });
});