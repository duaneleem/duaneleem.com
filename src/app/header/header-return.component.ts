import { Component } from "@angular/core";
import { GLOBALS } from "../shared/globals";

@Component({
    selector: 'app-header-return',
    template: `
        <header id="topNav">
            <div class="container">

                <!-- Mobile Menu Button -->
                <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>

                <!-- Logo text or image -->
                <a class="logo" href="/">
                    <img src="{{ arrGlobals.strLogo }}" alt="Duane Leem" />
                </a>

                <!-- Top Nav -->
                <div class="navbar-collapse nav-main-collapse collapse pull-right">
                    <nav class="nav-main mega-menu">
                        <!-- Support Links -->
                        <ul class="nav nav-pills nav-main scroll-menu" id="topMain">
                            <li class="active"><a href="/"><i class="fa fa-chevron-circle-left fa-lg" style="margin-right: 5px;" aria-hidden="true"></i>Return Home</a></li>
                            <li id="btn-linkedin" class="visible-md visible-lg" onclick="window.open('http://www.linkedin.com/in/duaneleem', '_blank')"></li>
                            <li id="btn-googleResume" class="visible-md visible-lg" onclick="window.open('https://docs.google.com/document/d/1bvakr9gKH-lk7mX_VRstMJ-3Vv3tJLSQuiHWkOdnrUs/edit?usp=sharing', '_blank')"></li>
                            <li class="visible-xs visible-sm"><a href="http://www.linkedin.com/in/duaneleem" target="_blank"><i class="fa fa-external-link-square" aria-hidden="true"></i> LinkedIn</a></li>
                            <li class="visible-xs visible-sm"><a href="https://docs.google.com/document/d/1bvakr9gKH-lk7mX_VRstMJ-3Vv3tJLSQuiHWkOdnrUs/edit?usp=sharing" target="_blank"><i class="fa fa-external-link-square" aria-hidden="true"></i> Google Document Resume</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- /Top Nav -->

            </div>
        </header>
    `
})

export class HeaderReturnComponent {
    arrGlobals = GLOBALS;
}
