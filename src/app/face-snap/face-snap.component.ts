import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Component({ // @ => c'est un décorateur => un decorateur vient apporter des modifications à une classe-Les modificatons ici c'est pour faire en sorte que face-snap-component soit un component utilisable dans notre application.
  selector: 'app-face-snap', // ce sélecteur va repésenter la balise (i.e le nom) dans app.component.html
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit { // Implémenter une interface, c'est implémente toutes les methodes que l'interface nécessite d'avoir
  @Input() faceSnap!: FaceSnap  // Ce qui va rendre possible l'injection de la propriété faceSnap depuis l'extérieur (injection depuis le parent)
                                // L'injection va se faire dans appComponent.ts
                                // Ce faceSnap au dessus nous vient de l'extérieur
  
  
  title!: string; // !=> pour éviter l'avertissement TypeScript en rapport avec la non-initialisation des variables
  description!:string; //
  createdDate!: Date;
  snaps!: number; // Le bon moment pour l'initialisation dans Angular, c'est lors de l'appel de la méthode onInit()
  imageUrl!:string
  buttonText!:string

  ngOnInit() { // OnInit() est appelée automatiquement par Angular lors de la creation de chaque instance
      // this.title = 'Archibald';
      // this.description = "My best friend since day one"
      // this.createdDate = new Date();
      // this.snaps = 6; // 6 personnes ont like ma pub.
      // this.imageUrl = "https://i.ebayimg.com/images/g/69AAAOSwWi9hYWiH/s-l1600.jpg"
      this.buttonText = "Ooh Snap !"
      
  }

  onClickSnap(){
    if(this.buttonText === "Ooh Snap !"){
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap'
    }else{
      this.buttonText = "Ooh Snap !"
      this.faceSnap.snaps--;
    }
  }
}