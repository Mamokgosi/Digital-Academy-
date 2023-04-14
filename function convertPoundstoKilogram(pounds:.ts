function convertPoundstoKilogram(pounds:number, kilogram:number):number{
    return pounds * 2.205;
} 
console.log(convertPoundstoKilogram(10,10))

function convertInchestoCM(inches:number , cm:number):number{
    return inches * 2.54;
} 
console.log(convertInchestoCM(10,10))

function convertfahrenheittoCelcius(fah:number, celcius:number):number{
    return (fah - 32) * 5/9;
}
console.log(convertfahrenheittoCelcius(10,10))

function convertfeettoMeter(feet:number, meter: number):number{
    return feet/ 3.281;
}

console.log(convertfeettoMeter(10,10))
