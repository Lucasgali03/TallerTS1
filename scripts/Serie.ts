export class Serie{
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    desc: string;
    link: string;
    img: string;

    constructor(id1: number, nombre1: string, canal1: string, temporadas1: number, desc1: string, link1: string, img1: string) {

        this.id = id1;
        this.nombre = nombre1;
        this.temporadas = temporadas1;
        this.desc = desc1;
        this.link = link1;
        this.img = img1;
        this.canal = canal1;

    }
}