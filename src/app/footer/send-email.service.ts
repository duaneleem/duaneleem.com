import { Injectable } from '@angular/core';

@Injectable()
export class SendEmailService {
    objSenderInfo = {
        strName: null,
        strEmail: null,
        strMessage: null,
        captchaResponse: null
    }; // objSenderInfo
}