export class Artist {
    constructor(
        public id:number,
        public realName:string, 
        public stageName:string,
        public recordLabel:string,
        public dob:Date,
        public dod:Date,
        public picture:string,
        public ratings:number
    ){}
}
