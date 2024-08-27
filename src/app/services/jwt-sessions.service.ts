import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const token_key = "access_token";

@Injectable({
	providedIn: 'root'
})
export class JwtSessionsService {
	constructor(private router: Router, private jwtHelper: JwtHelperService) { }
	logout() {
		sessionStorage.clear();
		this.router.navigate(["/"]);
	}
	public saveToken(token: string) {
		sessionStorage.removeItem(token_key);
		sessionStorage.setItem(token_key, token);
	}
	public getToken() {
		return sessionStorage.getItem(token_key);
	}
	public getTokenUser() {
		const token = sessionStorage.getItem(token_key);
		return this.jwtHelper.decodeToken(token!.toString()).user
	}
}
