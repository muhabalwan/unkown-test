import axios from "axios";


export interface IStar {
    color: string
    id: number
    name: number
    universeId: number
}

export interface IUniverse {
    id: number,
    maxSize: number,
    name: string
}
export async function getStars (): Promise<IStar[]> {
    try {
        const response = await axios.get("http://localhost:1234/stars");
        if (response.status != 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        const data = await response.data;
        return data;
    }
    catch(error) {
        console.error(`connection error: ${error}`);
    }

}

export async function getUniverses (): Promise<[]> {
    try {
        const response = await axios.get("http://localhost:1234/universes");
        if (response.status != 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.data;
        return data;
    }
    catch(error) {
        console.error(`connection error: ${error}`);
    }
    }
