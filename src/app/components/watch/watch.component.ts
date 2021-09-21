import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  time$: Observable<any> = timer(0,1000).pipe(
    switchMap(_ => of(new Date()))
  );

  constructor() { }

  ngOnInit(): void {
  }

}
