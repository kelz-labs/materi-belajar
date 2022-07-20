// function overloading
interface Icoordinate {
    x: number;
    y: number;
}

function parseCoordinateFromObject(obj: Icoordinate): Icoordinate {
    return {
        ...obj,
    }
}

function parseCoordinateFromNumbers(x: number, y: number): Icoordinate {
    return {
        x,
        y,
    }
}

function parseCoordinate(obj: Icoordinate): Icoordinate;
function parseCoordinate(str: string): Icoordinate;
function parseCoordinate(x: number, y: number): Icoordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Icoordinate {
    let coord: Icoordinate = {
        x: 0,
        y: 0,
    }

    if (typeof arg1 === "string") {
        (arg1 as string).split(".").forEach(str => {
            const [key, value] = str.split(":");
            coord[key as 'x' | 'y'] = parseInt(value, 10)
        })
    } else if (typeof arg1 === "object") {
        coord = {
            ...(arg1 as Icoordinate)
        }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        }
    }

    return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 20 }));

// bagaimana jika nilainya string ? 
console.log(parseCoordinate("x:12,y:12")); 