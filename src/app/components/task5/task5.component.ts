import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, timer } from 'rxjs';
import { map, switchMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit, OnDestroy {
  timer = 5;
  subject$ = new ReplaySubject(1);
  timer$: Observable<number> = this.subject$.pipe(
    switchMap(_ => this.startTimer())
  );

  startTimer(): Observable<number> {
    return timer(0, 1000).pipe(
      takeWhile(value => this.timer - value >= 0),
      map(value => this.timer - value)
    );
  }

  ngOnInit(): void {
    this.subject$.next();
  }

  ngOnDestroy() {
    this.subject$.complete();
  }

}
