export class InfoACModel {
    name: string;
    university: string;
    siglas: string;
    acm: string;
    lema: string;
    beneficios: string[];
    description: Description[];
    mision: string;
    vision: string;
  }
  
  class Description {
    name: string;
    text: string;
    relation_ship?: string;
    participation?: string;
    profile?: string;
  }