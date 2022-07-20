// generic, digunakan untuk reusable types. Ketika nilainya memiliki tipe data tertentu, maka type genericnya akan mengikuti type si nilainya
function simpleState<T>(initial: T): [() => T, (value: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (value: T) => {
            val = value;
        }
    ]
}

const [getter, setter] = simpleState("Nilai awal");
console.log(getter());

setter("Nilai yang telah diubah");
console.log(getter());

// overriding tipe data si genericnya
// Jika kita masukkan nilai selain null, maka akan error. Jadi dalam hal ini kita melakukan overriding agar bisa menerima tipe data lain
const [getter2, setter2] = simpleState<string | null>(null);
console.log(getter2());

setter2("Anime");

// generic interface
interface Irank<RankItem> {
    item: RankItem;
    rank: number;
}

// Contoh 2 
function ranker<RankItem>(items: RankItem[], rank: (value: RankItem) => number): RankItem[] {

    const ranks: Irank<RankItem>[] = items.map((item) => ({
        item, rank: rank(item),
    }))

    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map((rank) => rank.item);
}

interface Ipokemon {
    name: string;
    hp: number;
}

const pokemon: Ipokemon[] = [
    {
        name: "Pikachu",
        hp: 200,
    },
    {
        name: "Bulbasaur",
        hp: 150,
    }
]

const ranks = ranker(pokemon, ({ hp }) => hp);

// latihan
function dapetinBuah<tipe>(buah: tipe): string {
    return `Buah yang kamu dapat adalah: ${buah === "Semangka" ? "Tidak ada! Karena semangka stoknya sedang tidak ada" : buah}`;
}

console.log(dapetinBuah("Semangka")); 