import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  //mySnap!: FaceSnap; // On va générer un objet de type FaceSnap à injecter // declarer une propriété avant de pouvoir l'initialiser

  ngOnInit() {}
}