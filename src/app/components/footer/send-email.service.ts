import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

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
    
    constructor(private http: HttpClient) {}
    
    // Send the email to REST API.
    mdSendData(objFinalSenderInfo: any) {
        const strBody = JSON.stringify(objFinalSenderInfo);
        const headers = new HttpHeaders({ "Content-Type": "application/json" });

        return this.http.post(this.strPostUrl, strBody, { headers: headers })
            .map((data: Response) => data.json())
        ; // this.http.post()
    } // mdSendData()
} // SendEmailService