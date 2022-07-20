// tuples
type ThreeDCoordinate =
    [
        x: number,
        y: number,
        z: number,
    ]

function kalikanCoordinate(x: ThreeDCoordinate, y: ThreeDCoordinate, z: ThreeDCoordinate): ThreeDCoordinate {
    return [
        x[0] + y[0] + z[0],
        x[1] + y[1] + z[1],
        x[2] + y[2] + z[2],
    ]
}

console.log(kalikanCoordinate([10, 20, 30], [30, 20, 10], [10, 20, 30]).reduce((a, b) => a + b));

// getter dan setter
function simpleStringState(initial: string): [() => string, (value: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (value: string) => {
            str = value;
        }
    ]
}

const [strGetter, strSetter] = simpleStringState("Halo cui");
console.log(strGetter());

strSetter("Mantrap banh");
console.log(strGetter());

const [strGetter2, strSetter2] = simpleStringState("Nilai awal nih cui");
console.log(strGetter2());

strSetter2("Nilai yang udah diupdate");
console.log(strGetter2()); 
