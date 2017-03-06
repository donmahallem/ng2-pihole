import { Component } from '@angular/core';

export abstract class AbstractChartBoxComponent {
    private _isLoading: boolean = false;
    private _chartType: string;
    protected chartColors: Array<any>;
    protected chartOptions: any;
    protected title: string = "Box Title";
    protected chartLabels: string[];
    public static readonly DEFAULT_COLORS: string[] = [
        "#3c8dbc",
        "#f56954",
        "#00a65a",
        "#00c0ef",
        "#f39c12",
        "#0073b7",
        "#001F3F",
        "#39CCCC",
        "#3D9970",
        "#01FF70",
        "#FF851B",
        "#F012BE",
        "#8E24AA",
        "#D81B60",
        "#222222",
        "#d2d6de"];
    constructor(type: string) {
        this._chartType = type;
    }

    public get chartType(): string {
        return this._chartType;
    }

    public get isLoading(): boolean {
        return this._isLoading;
    }
}
