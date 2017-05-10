export interface ICandidate {
    id:number
    name:string
    birthdate:Date
    representative:string
    info:string
    avatar:string
    location?:{
        address:string
        city:string
        country:string
    },
    onlineUrl?:string
}