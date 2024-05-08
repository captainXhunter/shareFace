import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  //mySnap!: FaceSnap; // On va générer un objet de type FaceSnap à injecter // declarer une propriété avant de pouvoir l'initialiser
  //myOtherSnap!: FaceSnap;
  //myLastSnap!: FaceSnap;
  faceSnaps!: FaceSnap[]


  ngOnInit() {
      this.faceSnaps = [
        new FaceSnap(
          'Airbus company',
          "An AeroSpace Enterprise",
          'https://adamsons.com/wp-content/uploads/2020/11/airbus-logo-200x200-1.png',
          new Date(),
          0,
          'Toulouse'
          )
          ,
          new FaceSnap(
            'Oracle',
            'A top Company',
            'https://elite-jsc.com/wp-content/uploads/2017/12/Oracle-Database.jpg',
            new Date(),
            14
          )
          ,
          new FaceSnap(
            'Google Cloud Platform',
            'A cloud platform provided by Google',
            'https://www.padok.fr/hubfs/Images/GCP/mtg/google-gcp-padok.png',
            new Date,
            233,
            'Silicon Valley'
          )


      ]


      // this.mySnap = new FaceSnap(
      //   'Airbus company',
      //   "My best friend since day one",
      //   'https://adamsons.com/wp-content/uploads/2020/11/airbus-logo-200x200-1.png',
      //   new Date(),
      //   0,
      //   'Toulouse'
      //   ) // MySnap de type FaceSnap va être lié (injecté) en utilisant la liaison (binding) par attribut (pour le lier au Input qui se trouve dans face-snap.component.ts)
      // this.myOtherSnap = new FaceSnap(
      //   'Oracle',
      //   'A top Company',
      //   'https://elite-jsc.com/wp-content/uploads/2017/12/Oracle-Database.jpg',
      //   new Date(),
      //   14
      // )
      // this.myLastSnap = new FaceSnap(
      //   'Google Cloud Platform',
      //   'A cloud platform provided by Google',
      //   'https://www.padok.fr/hubfs/Images/GCP/mtg/google-gcp-padok.png',
      //   new Date,
      //   12,
      //   'Silicon Valley'
      // )
  }
}