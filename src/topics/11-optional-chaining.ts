export interface Passager{
    name:string;
    children?:string[];
}

const passenger1: Passager ={
    name: 'Kevin'
}

const passenger2: Passager ={
    name: 'Kevin',
    children: ['Natalia','Carlos']
}

const printChildren = (passeger:Passager):number => {
    const howManyChildren = passeger.children?.length || 0;
    //const howManyChildren = passeger.children!.length;
    console.log(passeger.name, howManyChildren);
    return howManyChildren;
}

printChildren(passenger2);
printChildren(passenger1);