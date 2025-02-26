import axios from "axios";

export async function getInfoApi() {
    try{
        const res = await axios.get("https://rickandmortyapi.com/api/character")
        return res.data;
    } catch(error){
        console.log(error)
        throw new Error("Error at fetching characters api")
    }
}

export async function getCharactersByPage(page: number) {
    try{
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return res.data;
    } catch(error){
        console.log(error)
        throw new Error("Error at fetching characters api")
    }
}