import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { map, switchMapTo, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit, OnDestroy {
  timer = 5;
  subject$ = new Subject();
  timer$: Observable<number> = this.subject$.pipe(
    switchMapTo(this.startTimer())
  );

  startTimer(): Observable<number> {
    console.log('click!');
    return timer(0, 1000).pipe(
      takeWhile(value => this.timer - value >= 0),
      map(value => this.timer - value)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subject$.complete();
  }

}
