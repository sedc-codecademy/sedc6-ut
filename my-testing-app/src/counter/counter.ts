import { Component } from '@angular/core';
import { CountingService } from '../services/counting-service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.html',
    styleUrls: []
})
export class CounterComponent {

    constructor(private service: CountingService) {}

    value = 10;

    async increment() {
        this.value = await this.service.increment(this.value);
    }

    async decrement() {
        this.value = await this.service.decrement(this.value);
    }
}
