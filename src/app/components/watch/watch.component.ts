import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  time$: Observable<any> = timer(0,1000).pipe(
    map(_ => new Date())
  );

  constructor() { }

  ngOnInit(): void {
  }

}
