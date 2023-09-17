interface Result<T>{
    type:string,
    content:T
    
}

// export function whatsMyType<T>(argument:T){
//     return argument;
// }

export function whatsMyType<T>(argument:T){
    const response:Result<T> = {
        type: typeof argument,
        content: argument
    }
    return response;
}

const {type, content} = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(content,type);
console.log(whatsMyType(amINumber));
console.log(whatsMyType(amIArray));