import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.less']
})
export class Task4Component implements OnInit {
  final = false;
  finalValue = '';

  values$: Observable<string | number> = this.loadingService.load().pipe(
    tap(value => {
      if (typeof value === 'string') {
        this.final = true;
        this.finalValue = value;
      }
    }),
  )

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.final = false;
    this.finalValue = '';
  }
}
