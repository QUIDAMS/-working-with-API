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
		let res = await this.getResource('/characters?page=5&pageSize=10')
		return res.map(item => this._transform(item))
	}
	getCharacter = async (id) => {
		let res = await this.getResource(`/characters/${id}`)
		return this._transform(res);
	}

	getAllBooks = async () => {
		// console.log(this); обязательно!! в this будет GotService
		let res = await this.getResource('/books?page=1&pageSize=10')
		return res.map(item => this._transform(item))
	}
	getBook = async (id) => {
		let res = await this.getResource(`/books/${id}`)
		return this._transform(res);
	}

	getAllHouses = async () => {
		let res = await this.getResource('/houses?page=5&pageSize=10')
		return res.map((item) => this._transform(item));
	}
	getHouse = async (id) => {
	 	let res = await this.getResource(`/houses/${id}`)
		return this._transform(res);
	}

	_extractId(item) {
		const idRegExp = /\/([0-9]*)$/;
		return item.url.match(idRegExp)[1]
	}

	_transform = (item) => {
		return {...item, id: this._extractId(item)}
	}


};


