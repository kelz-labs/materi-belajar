/*
Mapped type
*/

type MyFlexibleDogInfo = {
    name: string;
    [key: string]: string | number;
} // & Record<string, string>

const dog: MyFlexibleDogInfo = {
    name: "Shirayuki",
    breed: "Mutt",
    age: 22,
}

interface DogInfo {
    name: string;
    age: number;
}

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (newValue: Type[Property]) => void;
}

// type DogInfoOptions = OptionsFlag<DogInfo>;

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw "Butuh untuk diimplementasikan"
}

const shirayuki: DogInfo = {
    name: "Shirayuki",
    age: 3,
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(shirayuki, {
    onNameChange: (value: string) => { },
    onAgeChange: (value: number) => { },
})