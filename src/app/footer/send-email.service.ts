import { Injectable } from '@angular/core';

@Injectable()
export class SendEmailService {
    objSenderInfo = {
        strName: "",
        strEmail: "",
        strMessage: "",
        captchaResponse: ""
    }; // objSenderInfo
}