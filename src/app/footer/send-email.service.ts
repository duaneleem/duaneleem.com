import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class SendEmailService {
    private strPostUrl: string = "https://leemtek.com/forms/duaneleem/footer";
    
    // Details of my visitor.
    objSenderInfo = {
        strName: null,
        strEmail: null,
        strMessage: null,
        googleResponse: null
    }; // objSenderInfo
    
    constructor(private http: Http) {}
    
    // Send the email to REST API.
    mdSendData(objFinalSenderInfo: any) {
        const strBody = JSON.stringify(objFinalSenderInfo);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.strPostUrl, strBody, { headers: headers })
            .map((data: Response) => data.json())
        ; // this.http.post()
    }
}