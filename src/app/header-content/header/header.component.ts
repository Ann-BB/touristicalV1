import { LanguageCodeComponent } from './../language-code/language-code.component';
import { SearchComponent } from './../search/search.component';
import { Component, NgModule, ChangeDetectorRef, OnDestroy } from '@angular/core'; 
import { HomeListComponent } from './../home-list/home-list.component';
import { fromEvent, Subscription } from 'rxjs';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeListComponent, SearchComponent, LanguageCodeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isInfoShow: boolean = false;

  private clickOutsideSubscription?: Subscription;

  constructor(  
    private changeDetectorRef: ChangeDetectorRef, 
  ) {}

  ngOnDestroy(): void {
    if (this.clickOutsideSubscription) {
      this.clickOutsideSubscription.unsubscribe();
    }
  }
  showContent() { 
    if (!this.isInfoShow) {
      this.handleOutsideClick();
    }

    this.isInfoShow = !this.isInfoShow; 
    
  }
  private handleOutsideClick(): void {
    // this.ngZone.runOutsideAngular(() => {
      this.clickOutsideSubscription = fromEvent<MouseEvent>(window, 'click')
        .pipe(skip(1), take(1))
        .subscribe(() => { 
         this.isInfoShow = false;

          console.log("handleOutsideClick")
          this.changeDetectorRef.detectChanges();
        });
    // });
  }
}
