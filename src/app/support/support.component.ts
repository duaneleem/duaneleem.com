import { Component } from "@angular/core";

@Component({
    selector: 'app-support',
    template: `
        <!-- ===========================================================================================
            Header
        =========================================================================================== -->
        <app-header-return>Loading Header...</app-header-return>
        
        
        <!-- ===========================================================================================
            Contents
        =========================================================================================== -->
        <div id="wrapper">
            <!-- PAGE TITLE / BREADCRUMB -->
            <header id="page-title">
                <div class="container">
                    <h1>Customer Support</h1>

                    <ul class="breadcrumb">
                        <li><a href="/"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                        <li class="active">Customer Support</li>
                    </ul>
                </div>
            </header>
                        
            <section class="container space-top-40">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="space-bottom-40">
                            <h2 class="space-bottom-10">Remote Support</h2>
                            <p class="lead">URL for remote support assistance.</p>
                            <ul class="list-inline">
                                <li><a class="btn btn-primary" href="http://center.leemtek.com:8040/" target="_blank"><i class="fa fa-medkit" aria-hidden="true"></i> Remote Support</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 class="space-bottom-10">ScreenConnect</h2>
                            <p class="lead">Download links for Remote Support Software</p>
                            <ul class="list-inline">
                                <li><a class="btn btn-primary" href="https://d1xrp9zhb3ks3c.cloudfront.net/downloads/ScreenConnect.ClientSetup.exe"><i class="fa fa-windows" aria-hidden="true"></i> Windows</a></li>
                                <li><a class="btn btn-primary" href="https://d1xrp9zhb3ks3c.cloudfront.net/downloads/ScreenConnect.ClientSetup.pkg"><i class="fa fa-apple" aria-hidden="true"></i> Mac OS</a></li>
                            </ul>
                        </div>
                    </div><!-- /col -->
                </div><!-- /row -->
            </section>
        </div><!-- /wrapper -->
    `,
    styles: [`
        /* Add a BG to banner area */
        #page-title {
            background: 
                linear-gradient( to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0) ), 
                url("https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/return-wallpaper.jpg")
            ; /* background */

            background-size: 100% auto;
        }

        /* Page Title */
        header#page-title h1 {
            color: #fff;
            font-weight: bold;
        }

        #page-title > div > ul > li, i {
            color: #fff;
        }
    `]
})

export class SupportComponent {
    
}
