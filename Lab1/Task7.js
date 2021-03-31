//Клас корабель
class Ship{
    constructor(name, weight){
        this.name = name,
        this.weight = weight
    }
    changeName(name){
        this.name = name;
    }
}
//Клас порт
class Port{
    PiersInPort = [];
    constructor(name,country){
        this.name = name,
        this.country = country
    }
    changeName(name){
        this.name = name;
    }
    AddPier(Pier){
        this.PiersInPort.push(Pier);
    }
}
//Клас пристань
class Pier{
    ShipsOnPier1 =[];
    constructor(name){
        this.name = name;
    }
    AddShip(ArrivedShip){
    this.ShipsOnPier1.push(ArrivedShip);
    }
}
//Масив портів
let Ports = [];
//Додавання порта в колекцію
function AddPort(name,country){
    let port1 = new Port(name,country);
    Ports.push(port1);
}
//Видалення порта з колекції
function DeletePort(name){
    for(let i =0;i<Ports.length;i++)
        if(Ports[i].name === name)
            return Ports.splice(i,1);
}
//Пошук порта
function FindPort(name){
    for(let i =0;i<Ports.length;i++)
    if(Ports[i].name === name)
        return Ports[i];
}
//Зміна порта
function ChangePort(name1,name2){
    for(let i =0;i<Ports.length;i++)
        if(Ports[i].name === name1)
            Ports[i].changeName(name2);
}
/*AddPort("Odessa","Ukraine");
AddPort("Nagoya","Japon");
AddPort("Sevastopol","Ukraine");
console.log(Ports);
ChangePort("Nagoya","Nagoyya");
console.log(Ports);
DeletePort("Nagoyya");
console.log(Ports);
console.log(FindPort("Odessa"));*/

//Масив кораблів
let Ships = [];
//Додавання корабля в колекцію
function AddShip(name,weight){
    let ship1 = new Ship(name,weight);
    Ships.push(ship1);
}
//Видалення корабля
function DeleteShip(name){
    for(let i =0;i<Ships.length;i++)
        if(Ships[i].name === name)
            return Ships.splice(i,1);
}
//Пошук корабля
function FindShip(name){
    for(let i =0;i<Ships.length;i++)
    if(Ships[i].name === name)
        return Ships[i];
}
//Зміна корабля
function ChangeShip(name1,name2){
    for(let i =0;i<Ships.length;i++)
        if(Ships[i].name === name1)
            Ships[i].changeName(name2);
}
/*AddShip("Admiral",5000);
AddShip("Sagaidachniy",3642);
console.log(Ships);
ChangeShip("Admiral","Admiral1");
console.log(Ships);
DeleteShip("Sagaidachniy");
console.log(Ships);
console.log(FindShip("Admiral1"));*/
//Додавання пристанні
function AddPier(PortName,Pier1){
    for(let i =0;i<Ports.length;i++)
        if(Ports[i].name === PortName)
            Ports[i].AddPier(Pier1);
}
//Видалення пристані
function DeletePier(PortName,Pier1){
    for(let i =0;i<Ports.length;i++)
        if(Ports[i].name === PortName)
            return Ports[i].PiersInPort.splice(i,1);
}

/*AddPort("Odessa","Ukraine");
let pier1 = new Pier("1");
let pier2 = new Pier("2");
AddPier("Odessa",pier1);
AddPier("Odessa",pier2);
console.log(FindPort("Odessa"));
DeletePier("Odessa",pier1);
console.log(FindPort("Odessa"));*/
//Прибуття  кораблів
function ArriveShip(PortName,PierName,ArrivedShip){
    for(let i =0;i<Ports.length;i++)
        if(Ports[i].name === PortName)
            for(let j =0;j < Ports[i].PiersInPort.length;j++)
                if(Ports[i].PiersInPort[j].name === PierName)
                    Ports[i].PiersInPort[j].AddShip(ArrivedShip);
}
//Відправлення кораблів
function DepartureShip(PortName,PierName,DeparturedShip){
    for(let i =0;i<Ports.length;i++)
        if(Ports[i].name === PortName)
            for(let j =0;j < Ports[i].PiersInPort.length;j++)
                if(Ports[i].PiersInPort[j].name === PierName)
                    for(k = 0;k< Ports[i].PiersInPort[j].ShipsOnPier1.length;k++)
                        if(Ports[i].PiersInPort[j].ShipsOnPier1[k]===DeparturedShip)
                            return Ports[i].PiersInPort[j].ShipsOnPier1.splice(k,1);
}
//Вивід всіх кораблів на пристанні
function AllShipsOnPier(PortName,PierName){
    console.log("Port \"", PortName, "\" ships: ");
    for(let i =0;i<Ports.length;i++)
        if(Ports[i].name === PortName)
            for(let j =0;j < Ports[i].PiersInPort.length;j++)
                if(Ports[i].PiersInPort[j].name === PierName)
                    console.log(Ports[i].PiersInPort[j].ShipsOnPier1);
}
AddPort("Odessa","Ukraine");
let pier1 = new Pier("1");
let pier2 = new Pier("2");
AddPier("Odessa",pier1);
AddPier("Odessa",pier2);
console.log(Ports[0].name,Ports[0].PiersInPort);
let ship1 = new Ship("Admiral",2332);
let ship2 = new Ship("Sagaydachniy",5000);
ArriveShip("Odessa","1",ship1);
ArriveShip("Odessa","1",ship2)
AllShipsOnPier("Odessa","1");
DepartureShip("Odessa","1",ship2);
AllShipsOnPier("Odessa","1");

