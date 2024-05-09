// ********La Vieille méthode de faire*********//
// export class FaceSnap {
//     title: string; // Pas besoin de mettre le point d'exclamation "!" car on va initialiser les variables d'une manière que TypeScript comprend
//     description:string; //
//     createdDate: Date;
//     snaps: number; // Le bon moment pour l'initialisation dans Angular, c'est lors de l'appel de la méthode onInit()
//     imageUrl:string


//     constructor (title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
//         this.title = title;
//         this.description = description;
//         this.createdDate = createdDate;
//         this.imageUrl = imageUrl;
//         this.snaps = snaps;
//     }
// }


// Ajouter le modificateur public devant chaque propriété du constructor()
// ? => la propriété est optionnelle
export class FaceSnap{
    constructor(
                public id:number,
                public title:string,
                public description: string,
                public imageUrl: string,
                public createdDate: Date,
                public snaps: number,
                public location?:string
            ) {
    }
}