import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CountingService {
    constructor(private http: HttpClient) { }

    async increment(value) {
        // return Promise.resolve(value + 1);
        return <number>await this.http.get(`server/api/increment/${value}`).toPromise();
    }

    async decrement(value) {
        // return Promise.resolve(value - 2);
        return <number>await this.http.get(`server/api/decrement/${value}`).toPromise();
    }
}
