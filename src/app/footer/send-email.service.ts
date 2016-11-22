import { Injectable } from '@angular/core';

@Injectable()
export class SendEmailService {
    objSenderInfo = {
        strName: "Duane Leem",
        strEmail: "duaneleem@alumni.ggu.edu",
        strMessage: "Just a test message.",
        captchaResponse: ""
    }; // objSenderInfo
}