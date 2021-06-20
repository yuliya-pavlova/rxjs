import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //clickObservable: Observable<Event> = fromEvent(document,'focusin');
  focused = null;

  get name(): string {
    // @ts-ignore
    return this.focused ? this.focused.tagName : 'null';
  }

  ngOnInit(): void {
    this.subscribeToObservable();
  }

  private subscribeToObservable() {
    // this.clickObservable.subscribe(() => {
    //   console.log(`The dom has been focused!`);
    // });
  }

  onFocusWithin(focused: Element | null) {
    // @ts-ignore
    this.focused = focused;
  }

}
