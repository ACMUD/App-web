export class MiembrosModel {
    name: string;
    lastName: string;
    age: number;
    description: string[] | string;
    email: Email;
    occupation: string;
    academicLevel: string;
    infoStudent: InfoStudent;
    infoACM: InfoACM;
    programmingLanguages: string[];
    img: string;
    'Otros conocimientos'?: string[] | string;
  }
  
  class InfoACM {
    occupation: string;
    yearsInGroup: number;
  }
  
  class InfoStudent {
    status: boolean;
    currentSemester: number;
    universityDegree: string;
    levelDegree?: string;
    totalSemester?: number;
  }
  
  class Email {
    personal: string;
    institutional: string;
  }