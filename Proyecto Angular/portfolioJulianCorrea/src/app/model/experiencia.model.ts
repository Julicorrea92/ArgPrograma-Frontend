export class Experiencia{
    
    id?: number;// Con el "?" me evito que me marque el error por no estar declarado en el constructor, ya que el id se genera automáticamente.
    puesto: string;
    empresa: string;
    periodo: string;
    sobreMi: string;
    imgDes: string;
    

    constructor(puesto: string, empresa: string, periodo: string, sobreMi: string, imgDes: string){
        this.puesto = puesto;
        this.empresa = empresa;
        this.periodo = periodo;
        this.sobreMi = sobreMi;
        this.imgDes = imgDes;

    }


}