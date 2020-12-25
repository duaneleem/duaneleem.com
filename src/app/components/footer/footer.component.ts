import { Component } from '@angular/core';

import { portfolioWork, portfolioLearning } from "../../shared/data/projects";

// Service: Send-Email
import { SendEmailService } from "./send-email.service";

// Enables jQuery
declare var $:any;

@Component({
    selector: 'app-footer',
    template: `
        <app-testimonials></app-testimonials>
        
        <div id="modal-section"></div>
        
        <footer id="sectionFooter">
            <!-- copyright , scrollTo Top -->
            <div class="footer-bar">
                <div class="container">
                    <span class="copyright">Copyright &copy; Duane Leem. All Rights Reserved.</span>
                    <a class="toTop" href="#topNav">BACK TO TOP <i class="fa fa-arrow-circle-up"></i></a>
                </div>
            </div>
            <!-- copyright , scrollTo Top -->


            <!-- footer content -->
            <div class="footer-content">
                <div class="container">

                    <div class="row">
                        <!-- FOOTER CONTACT INFO -->
                        <div class="column col-md-4">
                            <h3>CONTACT</h3>

                            <p class="contact-desc">
                                You can also reach me through LinkedIn, my contact phone number, and email.  I want to thank you 
                                for taking a moment for visiting my website.
                            </p>
                            <address class="font-opensans">
                                <ul>
                                    <li class="footer-sprite address">
                                        San Francisco Bay Area, CA<br />
                                        United States<br />
                                    </li>
                                    <li class="footer-sprite phone">
                                        <a href="tel:19255265229">Phone: 1-925-526-5229</a>
                                    </li>
                                    <li class="footer-sprite email">
                                        <a href="mailto:Duane@LeemTek.com">Duane@LeemTek.com</a>
                                    </li>
                                </ul>
                            </address>

                            <div><a class="toTop" href="#topNav" routerLink="/support"><i class="fa fa-medkit fa-lg" aria-hidden="true" style="margin: 0px 10px 0px 2px;"></i>Remote Assistance</a></div>
                        </div>
                        <!-- /FOOTER CONTACT INFO -->


                        <!-- FOOTER LOGO -->
                        <div class="column col-md-4">
                            <h3>PROFESSIONAL TRAINING &amp; CERTIFICATIONS</h3>

                            <ul>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#MSCITMANAGEMENT'">Master of Science in IT Management</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#FULLSTACKWEBDEVELOPMENT'">Full Stack Developer (MEAN Stack)</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> Advanced Java Programming</li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> R Programming</li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#PROJECTMANAGEMENTPROFESSIONAL'">Project Management Professional | PMP&reg;</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#CERTIFIEDSCRUMMASTER'">Certified Scrum Master | CSM&reg;</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> IT Infrastructure Library | ITIL&reg;</li>
                            </ul>
                        </div>
                        <!-- /FOOTER LOGO -->


                        <!-- FOOTER LATEST POSTS -->
                        <div class="column col-md-4 text-right">
                            <h3>SEND ME AN EMAIL <i class="fa fa-heart" aria-hidden="true"></i></h3>
                            
                            <form #footerForm="ngForm" (ngSubmit)="mdSend()">
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-sm-12 col-md-12">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Your Name" 
                                                    name="name" required
                                                    [(ngModel)]="objUserDetails.strName"
                                                />
                                                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                            </div><!-- /input-group -->
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <div class="input-group">
                                                <input type="email" class="form-control" placeholder="Email" 
                                                    name="email" required
                                                    [(ngModel)]="objUserDetails.strEmail"
                                                />
                                                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                            </div><!-- /input-group -->
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <textarea class="form-control" rows="3" placeholder="Message"
                                                name="message" required
                                                [(ngModel)]="objUserDetails.strMessage"
                                            ></textarea>
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->    
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <re-captcha 
                                                (captchaResponse)="mdCaptchaHandle($event)" 
                                                (captchaExpired)="mdCaptchaExpired()"
                                                site_key="6LcU1QgUAAAAACY95UPy4l8YyiJol5-U0CbdU_RF"
                                            ></re-captcha>
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->    
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12 text-align-left">
                                            <button id="footerBtnSubmit" type="submit" class="btn btn-success"
                                                [disabled]="footerForm.invalid || this.objUserDetails.googleResponse == null"
                                            >Submit</button>
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->
                                </div><!-- /row -->
                            </form>
                        </div>
                        <!-- /FOOTER LATEST POSTS -->

                    </div>

                </div>
            </div>
            <!-- footer content -->
        </footer>

        <!-- Modals: Portfolio Work -->
        <div *ngFor="let project of arrPortfolioWork">
            <div class="modal fade" id="{{ project.id }}" tabindex="-1" role="dialog" [attr.aria-labelledby]="project.id">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">{{ project.header }}</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <!-- Image -->
                                <div class="col-xs-12 col-md-4">
                                    <img class="img-responsive" src="{{ project.image }}" alt="{{ project.name }}" />
                                </div><!-- /col -->

                                <!-- Verbiage -->
                                <div class="col-xs-12 col-md-8" [innerHTML]="project.body"></div>
                            </div><!-- /row -->
                        </div>
                        <div class="modal-footer">
                            <a type="button" class="btn btn-default" data-dismiss="modal">Close</a>
                            <a type="button" class="btn btn-primary" href="{{ project.url }}" target="_blank">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div><!-- /modal -->
        </div>

        <!-- Modals: Portfolio: Learning -->
        <div *ngFor="let project of arrPortfolioLearning">
            <div class="modal fade" id="{{ project.id }}" tabindex="-1" role="dialog" [attr.aria-labelledby]="project.id"  style="margin-top: -115px;">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">{{ project.header }}</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <!-- Image -->
                                <div class="col-xs-12">
                                    <img class="img-responsive" src="{{ project.image }}" alt="{{ project.name }}" />
                                </div><!-- /col -->
                            </div><!-- /row -->
                        </div>
                        <div class="modal-footer">
                            <a type="button" class="btn btn-default" data-dismiss="modal">Close</a>
                            <a type="button" class="btn btn-primary" href="{{ project.url }}" target="_blank">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div><!-- /modal -->
        </div>
    `,
    styles: [`
        .ng-valid[required], .ng-valid.required  {
            border-left: 5px solid #42A948; /* green */
        }

        .ng-invalid:not(form)  {
            border-left: 5px solid #a94442; /* red */
        }

        /* 
         * Included CSS is autogenerating additional padding-top.  This will fix it. 
         */
        .modal { padding-top: 0px; }
    `],
    providers: [SendEmailService]
})

export class FooterComponent {
    arrPortfolioWork = portfolioWork;
    arrPortfolioLearning = portfolioLearning;
    
    objUserDetails;
    
    constructor(private sendEmailService: SendEmailService) {
        this.objUserDetails = this.sendEmailService.objSenderInfo;
    } // constructor(private sendEmailService: SendEmailService)

    // Send to REST endpoint.
    mdSend() {
        // Disable submit button and indicate "Please wait...".
        $('#footerBtnSubmit').text('Please Wait...');
        $('#footerBtnSubmit').removeClass('btn-default').addClass('btn-info');
        $("#footerBtnSubmit").prop('disabled', true);

        // Attempt to send email.
        this.sendEmailService.mdSendData(this.objUserDetails)
            .subscribe(data => {
                if (data["sent"] === "yes") {
                    // Success
                    $('#footerBtnSubmit').text('Email Sent to Duane.  Thanks! :)');
                    $('#footerBtnSubmit').removeClass('btn-info').addClass('btn-success');
                    $("#footerBtnSubmit").prop('disabled', true);
                } else {
                    // Something went wrong.
                    $('#footerBtnSubmit').text('Please try again.');
                    $('#footerBtnSubmit').removeClass('btn-info').addClass('btn-danger');
                    $("#footerBtnSubmit").prop('disabled', false);
                } // else
            }) // subscribe()
        ; // sendEmailService.mdSendData()
    } // mdSend()

    // Handle the captcha response and save to objUserDetails.captchaResponse
    mdCaptchaHandle(strResponse: string): void {
        this.objUserDetails.googleResponse = strResponse;
    } // mdCaptchaHandle(response)

    // Handles expired captchas.
    mdCaptchaExpired(): void {
        this.objUserDetails.googleResponse = null;
    }
} // class FooterComponent