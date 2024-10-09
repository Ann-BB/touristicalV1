import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-language-code',
  standalone: true,
  imports: [TranslateModule, FormsModule,],
  templateUrl: './language-code.component.html',
  styleUrl: './language-code.component.scss'
})
export class LanguageCodeComponent {

  selectedLanguage = 'en';

  constructor(private translateService: TranslateService){}

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage)
  }
}
