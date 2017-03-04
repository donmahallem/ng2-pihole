
export class Summary {
    public adsBlockedToday: number;
    public dnsQueriesToday: number;
    public domainsBeingBlocked: number;
    public get adsPercentage(): number {
        return this.adsBlockedToday / this.dnsQueriesToday;
    }
}
