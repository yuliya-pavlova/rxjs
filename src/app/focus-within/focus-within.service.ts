import { ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FocusWithinService extends Observable<Element | null>  {

  constructor(
    @Inject(DOCUMENT) documentRef: Document,
    { nativeElement }: ElementRef<HTMLElement>) {

    const focused$ = fromEvent(document, 'focusin').pipe(
      map(() =>
        nativeElement.contains(documentRef.activeElement)
          ? documentRef.activeElement
          : null
      )
    );

    super(subscriber => focused$.subscribe(subscriber));
  }
}
