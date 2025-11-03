interface Address {
    country: string;
    city: string;
    postalCode: number;
}

interface User {
    readonly id: number;
    name: string;
    lastName: string;
    email: string;
    address: Address;
    phone?: string;
}

const user: User = {
    id: 1,
    name: "Bohdan",
    lastName: "Liamzin",
    email: "bogdan@gmail.com",
    phone: "+49 555-55-55",
    address: {
        country: "Germany",
        city: "Leipzig",
        postalCode: 12343
    },
};

user.id = 3;

const user2: User = {
    id: 2,
    name: "Nastya",
    lastName: "CatMom",
    email: "nastya@gmail.com",
    address: {
        country: "Germany",
        city: "Leipzig",
        postalCode: 12343
    }
}