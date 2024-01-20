import { Inject, Injectable, Optional } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    @Inject('newUrl') @Optional() public newUrl?: string
  ) {
    if (newUrl) this.baseUrl = newUrl
  }

  get(url: string, header?: any) {
    return this.httpClient.get(this.getUrl(url), { ...header })
  }

  post(url: string, body?: any, header?: any) {
    return this.httpClient.post(this.getUrl(url), body, header)
  }

  private getUrl(newUrl: string) {
    return this.baseUrl + newUrl
  }
}
