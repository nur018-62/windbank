console.log("helllow inheritance");
class parent{
    constructor(){
        this.Fathername="Shohag";
    }
}
//akhn parent r child ak korar jonno ai niyom;
class child extends parent{
    constructor (name){
        super();//super k inheritance bola hoy;
        this.name=name;
    }
    getFullname(){
        return this.name+" "+this.Fathername;///function use kora hoyce.
    }
}
const baby=new child("Tanjir");

console.log(baby.getFullname());//function use kora hoyce.