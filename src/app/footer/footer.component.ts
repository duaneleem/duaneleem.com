import { Component, OnInit } from '@angular/core';

// Service: Send-Email
import { SendEmailService } from "./send-email.service";

@Component({
    selector: 'app-footer',
    template: `
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
                                        <a href="mailto:DuaneLeem@alumni.ggu.edu">DuaneLeem@alumni.ggu.edu</a>
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
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#modal-msitm'">Master of Science in IT Management</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#modal-mean'">Full Stack Developer (MEAN Stack)</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> Advanced Java Programming</li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> R Programming</li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#modal-pmi-pmp'">Project Management Professional | PMP&reg;</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> <a data-toggle="modal" [attr.data-target]="'#modal-scrummaster'">Certified Scrum Master | CSM&reg;</a></li>
                                <li><i class="fa fa-caret-right text-white margin-right-5p" aria-hidden="true"></i> IT Infrastructure Library | ITIL&reg;</li>
                            </ul>
                        </div>
                        <!-- /FOOTER LOGO -->


                        <!-- FOOTER LATEST POSTS -->
                        <div class="column col-md-4 text-right">
                            <h3>SEND ME AN EMAIL <i class="fa fa-heart" aria-hidden="true"></i></h3>
                            
                            <form #footer="ngForm">
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-sm-12 col-md-12">
                                            <div class="input-group">
                                                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                                <input type="text" class="form-control" placeholder="Your Name" 
                                                    name="name" required
                                                    [(ngModel)]="objUserDetails.strName"
                                                />
                                            </div><!-- /input-group -->
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <div class="input-group">
                                                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                                <input type="email" class="form-control" placeholder="Email" 
                                                    name="email" required
                                                    [(ngModel)]="objUserDetails.strEmail"
                                                />
                                            </div><!-- /input-group -->
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <textarea class="form-control" rows="3" placeholder="Message"
                                                name="message"
                                                [(ngModel)]="objUserDetails.strMessage"
                                            ></textarea>
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->    
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <div class="g-recaptcha" data-sitekey="6LcU1QgUAAAAACY95UPy4l8YyiJol5-U0CbdU_RF"></div>
                                        </div><!-- /col -->
                                    </div><!-- /form-group -->    
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-12 text-align-left">
                                            <button type="submit" class="btn btn-success" disabled>Submit</button>
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
    `,
    providers: [SendEmailService]
})

export class FooterComponent {
    objUserDetails;
    
    constructor(private sendEmailService: SendEmailService) {
        this.objUserDetails = this.sendEmailService.objSenderInfo;
    } // constructor(private sendEmailService: SendEmailService)

    // TODO: Method to send to REST endpoint.
    mdSend() {
        // TODO: Disable submit button and indicate "Please wait...".
        
        // TODO: Add CAPTCHA to objUserDetails.

        // TODO: Shoot objUserDetails to REST.
            // IF: successful...
            //     - submit button change to green 
            //     - make it say: Inquiry Sent
            //     - keep disabled
            // ELSE
            //     - submit button change to red
            //     - make it say: Send Error
            //     - enable button
    } // mdSend()
} // class FooterComponent