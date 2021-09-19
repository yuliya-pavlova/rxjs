import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('divElement') divElement: ElementRef<HTMLElement> | undefined;
  clickObservable$: Observable<string | null> = fromEvent(document,'focusin').pipe(
    map(element => {
      return this.divElement?.nativeElement.contains(element.target as HTMLElement)
        ? this.getName(element.target as HTMLElement) : null;
    }));

  getName(value: HTMLElement): string {
    return value?.tagName;
  }

}
