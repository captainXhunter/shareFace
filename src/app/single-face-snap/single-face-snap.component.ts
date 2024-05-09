import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap  // Ce qui va rendre possible l'injection de la propriété faceSnap depuis l'extérieur (injection depuis le parent)
  // L'injection va se faire dans appComponent.ts
  // Ce faceSnap au dessus nous vient de l'extérieur
buttonText!:string


// ActivatedRoute nous permet de recupérer les informations stokées dans notre route après Navigation
constructor(private faceSnapsService:FaceSnapsService, private route:ActivatedRoute){ } //Injecter nos services ici => le système d'injection des dépendances vanous injecter le service

  ngOnInit() { // OnInit() est appelée automatiquement par Angular lors de la creation de chaque instance
  this.buttonText = "Ooh Snap !";
  const faceSnapId = +this.route.snapshot.params['id']; // recupération du paramètre id.... le "+" devant permet le casting en number
  this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
