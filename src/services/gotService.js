export default class GotService {
	constructor(){
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}
	 getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok){
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	};
	getAllCharacters = async () => {
		// console.log(this); обязательно!! в this будет GotService
		return await this.getResource('/characters?page=5&pageSize=10')
	}
	getCharacter = async (id) => {
		return await this.getResource(`/characters/${id}`)
	}

	getAllBooks = async () => {
		// console.log(this); обязательно!! в this будет GotService
		return await this.getResource('/books?page=1&pageSize=10')
	}
	getBook = async (id) => {
		return await this.getResource(`/books/${id}`)
	}

	getAllHouses = async () => {
		return await this.getResource('/houses?page=5&pageSize=10')
	}
	getHous = async (id) => {
	 	return await this.getResource(`/houses/${id}`)
	}


};


