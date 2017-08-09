import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAnNQoFSotXJf1qelPovu2t5TxPaym_LC4'

@Injectable()
export class YoutubeApiService {
	
	constructor(private http:Http) {}

	public search(query){
		return this.http.get(`${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}`)
		.map((res:Response) => res.json())
		.map(json => json.items);
	}

}