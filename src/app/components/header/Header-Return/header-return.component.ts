import { Component } from "@angular/core";
import { GLOBALS } from "../../../shared/globals";

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
                    <img src="{{ arrGlobals.strLogo }}" class="logo-main" alt="Duane Leem" />
                </a>

                <!-- Top Nav -->
                <div class="navbar-collapse nav-main-collapse collapse pull-right">
                    <nav class="nav-main mega-menu">
                        <!-- Support Links -->
                        <ul class="nav nav-pills nav-main scroll-menu" id="topMain">
                            <li class="active"><a href="/"><i class="fa fa-chevron-circle-left fa-lg" style="margin-right: 5px;" aria-hidden="true"></i>Return Home</a></li>
                            <li class="visible-md visible-lg"><a>|</a></li>
                            <li class="visible-md visible-lg"><a href="https://github.com/duaneleem" target="_blank" class="btn"><i class="fab fa-github fa-lg"></i></a></li>
                            <li class="visible-md visible-lg"><a href="http://www.linkedin.com/in/duaneleem" target="_blank" class="btn"><i class="fab fa-linkedin fa-lg"></i></a></li>
                            <li class="visible-md visible-lg"><a href="https://docs.google.com/document/d/1bvakr9gKH-lk7mX_VRstMJ-3Vv3tJLSQuiHWkOdnrUs/edit?usp=sharing" target="_blank" class="btn"><i class="fab fa-google-drive fa-lg"></i></a></li>
                            <li class="visible-xs visible-sm"><a href="https://github.com/duaneleem" target="_blank"><i class="fab fa-github margin-right-10px"></i> GitHub</a></li>
                            <li class="visible-xs visible-sm"><a href="http://www.linkedin.com/in/duaneleem" target="_blank"><i class="fab fa-linkedin margin-right-10px"></i> LinkedIn</a></li>
                            <li class="visible-xs visible-sm"><a href="https://docs.google.com/document/d/1bvakr9gKH-lk7mX_VRstMJ-3Vv3tJLSQuiHWkOdnrUs/edit?usp=sharing" target="_blank"><i class="fab fa-google margin-right-10px"></i> Google Document Resume</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- /Top Nav -->

            </div>
        </header>
    `,
    styles: [``]
})

export class HeaderReturnComponent {
    arrGlobals = GLOBALS;
}
