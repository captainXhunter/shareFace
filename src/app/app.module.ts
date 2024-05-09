import { LOCALE_ID, NgModule } from '@angular/core'; // LOCALE_ID => Pour changer le local par defaut de notre application Angular (avec les pipes)
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common' // Pour l'import de la langue (Français par exemple)
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component'; // import de la langue française

@NgModule({
  declarations: [ //tous les components qui seront créés pour notre app. seront déclarés dans app.module.ts (donc ici)
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' } // Langue française toujours
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default) // Langue FR (toujours)
  }
 }
