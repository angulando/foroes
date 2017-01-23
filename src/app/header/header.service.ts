import { Observable, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
	public getHeader(): Observable<any[]> {
		return new Observable<any[]>((obs: Observer<any[]>) => {
			let data: any[] = [];

            data = ['registro', 'login'];
			obs.next(data);
			obs.complete();

		});
	}

	public getLoguedItems(): Observable<any[]> {
		return new Observable<any[]>((obs: Observer<any[]>) => {
			let data: any[] = [];

            data = ['historial', 'logOut'];
			obs.next(data);
			obs.complete();

		});	
	}
}