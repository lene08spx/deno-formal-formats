import { DAYS, MONTHS } from "./constants.ts";

class DateFormatter
{
    constructor( public date = new Date() ){}
    public get yearFull(){return this.date.getFullYear().toString()}
    public get yearShort(){return this.yearFull.slice(2)}
    public get monthFull(){return MONTHS[this.date.getMonth()]}
    public get monthShort(){return this.monthFull.substr(0,3)}
    public get monthNumber(){return (this.date.getMonth()+1).toString()}
    public get monthTwoDigit(){return this.monthNumber.padStart(2,"0")}
    public get day(){return DAYS[this.date.getDay()]}
    public get dayShort(){return this.day.substr(0,3)}
    public get dateNumber(){return this.date.getDate().toString()}
    public get dateTwoDigit(){return this.dateNumber.padStart(2,"0")}
    public get dateOrdinal(){
        if(this.dateNumber.endsWith("1"))return"st";
        else if(this.dateNumber.endsWith("2"))return"nd";
        else if(this.dateNumber.endsWith("3"))return"rd";
        else return"th";
    }
};

export { DateFormatter };