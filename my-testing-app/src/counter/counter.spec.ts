import { TestBed, async } from '@angular/core/testing';
import { CounterComponent } from './counter';
import { CountingService } from '../services/counting-service';
describe('CounterComponent', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
      providers: [
        { provide: CountingService, useValue: countingServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    countingServiceMock.decrement.calls.reset();
    countingServiceMock.increment.calls.reset();
  });

  // class CountingServiceMock {
  //   async increment(value) {
  //     return Promise.resolve(value + 1);
  //   }

  //   async decrement(value) {
  //     return Promise.resolve(value - 1);
  //   }
  // }

  const countingServiceMock = {
    increment: jasmine.createSpy("increment").and.callFake(value => Promise.resolve(value + 1)),
    decrement: jasmine.createSpy("decrement").and.callFake(value => Promise.resolve(value - 1))
  };


  it(`value should initially be 10`, async(() => {
    // 1. Arrange
    const fixture = TestBed.createComponent(CounterComponent);
    const counter = fixture.debugElement.componentInstance;
    const expected = 10;

    // 2. Act
    const actual = counter.value;

    // 3. Assert
    expect(actual).toEqual(expected);
  }));

  it(`value should be 11 after incrementing once`, async(async () => {
    // 1. Arrange
    const fixture = TestBed.createComponent(CounterComponent);
    const counter = fixture.debugElement.componentInstance;
    const expected = 11;
    countingServiceMock.increment.calls.reset();

    // 2. Act
    await counter.increment();
    const actual = counter.value;

    // 3. Assert
    expect(actual).toEqual(expected);
    expect(countingServiceMock.increment).toHaveBeenCalled();
  }));

  it(`value should be 12 after incrementing twice`, async(async () => {
    // 1. Arrange
    const fixture = TestBed.createComponent(CounterComponent);
    const counter = fixture.debugElement.componentInstance;
    const expected = 12;
    countingServiceMock.increment.calls.reset();

    // 2. Act
    await counter.increment();
    await counter.increment();
    const actual = counter.value;

    // 3. Assert
    expect(actual).toEqual(expected);
    expect(countingServiceMock.increment).toHaveBeenCalledTimes(2);
  }));

  it(`value should be 9 after decrementing once`, async(async () => {
    // 1. Arrange
    const fixture = TestBed.createComponent(CounterComponent);
    const counter = fixture.debugElement.componentInstance;
    const expected = 9;
    countingServiceMock.decrement.calls.reset();

    // 2. Act
    await counter.decrement();
    const actual = counter.value;

    // 3. Assert
    expect(countingServiceMock.decrement).toHaveBeenCalled();
    expect(actual).toEqual(expected);
  }));

});
