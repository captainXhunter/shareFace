import { Injectable, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap-model";

@Injectable({
    providedIn: 'root' // Explique à Angular que ce service doit être enregistré à la racine de l'application => Donc de s'asurer qu'il n'y aura qu'une seule instance de ce service dans l'application 
                       // Toute l'application partagera les mêmes données et la même logique
})

// @Injectable() est la façon la plus simple pour déclarer un service => Utilisation du décorateur @Injectable()

export class FaceSnapsService { // Un service n'a pas de méthode ngOnInit()

    faceSnaps: FaceSnap[] = [
        new FaceSnap(
            1,
          'Airbus company',
          "An AeroSpace Enterprise",
          'https://adamsons.com/wp-content/uploads/2020/11/airbus-logo-200x200-1.png',
          new Date(),
          0,
          'Toulouse'
          )
          ,
          new FaceSnap(
            2,
            'Oracle',
            'A top Company',
            'https://elite-jsc.com/wp-content/uploads/2017/12/Oracle-Database.jpg',
            new Date(),
            14
          )
          ,
          new FaceSnap(
            2,
            'Google Cloud Platform',
            'A cloud platform provided by Google',
            'https://www.padok.fr/hubfs/Images/GCP/mtg/google-gcp-padok.png',
            new Date,
            233,
            'Silicon Valley'
          )
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId:number): FaceSnap{ // FaceSnap => Il s'agit de son type de retour
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw Error('FaceSnap not found')
        } else {
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId:number, snapType:'snap' | 'unsnap'):void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++:faceSnap.snaps--
      }

}