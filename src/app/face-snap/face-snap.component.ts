import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps-service';

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

  constructor(private faceSnapsService:FaceSnapsService){ } //Injecter nos services ici => le système d'injection des dépendances vanous injecter le service

  ngOnInit() { // OnInit() est appelée automatiquement par Angular lors de la creation de chaque instance
      this.buttonText = "Ooh Snap !"
      
  }

  onClickSnap(){
    if(this.buttonText === "Ooh Snap !"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap'); // le faceSnap reçu
      this.buttonText = 'Oops, un Snap'
    }else{
      this.buttonText = "Ooh Snap !"
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
    }
  }
}