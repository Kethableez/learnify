import { FormControl } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

export function uniqueUsername(control: FormControl): Observable<{unique: boolean} | null> {
  const taken = ['useruser', 'admin123', 'rootroot'];
  return of(taken.includes(control.value)).pipe(
    map((value) => (value ? { unique: value } : null)),
    delay(2000)
  )
}
