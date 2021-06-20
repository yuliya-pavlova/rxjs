import { Directive, Inject } from '@angular/core';
import { FocusWithinService } from "./focus-within.service";
import { Observable } from 'rxjs';

@Directive({
  selector: '[focusWithin]',
  outputs: ["focusWithin"],
  providers: [FocusWithinService]
})
export class FocusWithinDirective {

  constructor(
    @Inject(FocusWithinService) readonly focusWithin: Observable<Element | null>
  ) {}

}
