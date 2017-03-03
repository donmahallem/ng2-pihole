import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({ name: 'momentjs' })
export class MomentJsPipe implements PipeTransform {
    transform(value: string): string {
        let timestamp = moment(value);
        let today = moment();
        if (timestamp.isBefore(today, "day")) {
            return timestamp.format("lll");
        } else {
            return timestamp.format("LT");
        }
    }
}