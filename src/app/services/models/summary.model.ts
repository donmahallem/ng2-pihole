
export class Summary {
    public adsBlockedToday: number;
    public dnsQueriesToday: number;
    public domainsBeingBlocked: number;
    public get adsPercentage(): number {
        if (this.dnsQueriesToday == 0) {
            return 0;
        }
        return this.adsBlockedToday / this.dnsQueriesToday;
    }
}
