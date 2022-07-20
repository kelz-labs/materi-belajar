// optional di typescript

// optional parameter dengan rest parameter
function printIngredient(quantity: string, ingredient?: string, ...lainnya: string[] | number[]) {
    return `${quantity}, ${ingredient ? ingredient : "Tidak ada pak"}, ${lainnya.join(", ")}`
}

console.log(printIngredient("Orang 1"));
console.log(printIngredient("Orang 1", "Orang 2", "Orang 3", "Orang 4"));

// optional fields
interface Iuser {
    id: string;
    info?: {
        email?: string;
    }
}

function getEmail(user: Iuser) {
    if (user.info) {
        return user.info.email;
    }

    return "";
}

// cara mudahnya ketimbang yang di atas
function getEmailEasy(user: Iuser): string {
    return user?.info?.email ?? "";
}

// optional callbacks
function addWithCallback(x: number, y: number, callback: () => void) {
    console.log([x, y]);
    callback?.();
}