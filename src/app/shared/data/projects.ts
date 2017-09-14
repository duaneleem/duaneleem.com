let objArrayManagement = require("../functions/array-management");

let objProjects = [
    // Swords-to-Plowshares.org
    { 
        // Entry Info
        id: "SWORDSTOPLOWSHARESORG", 
        name: "Swords-to-Plowshares.org",
        date: "August 2017",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/swords-to-plowshares.jpg",

        // Model Info
        header: "Project: Swords-to-Plowshares.org | WordPress Development",
        title: "New Design and Responsive",
        url: "https://www.swords-to-plowshares.org/",
        body: `
            <h5>About Swords to Plowshares</h5>
            <p>
                Founded in 1974 by veterans, Swords to Plowshares is a community-based not-for-profit 501(c)(3) organization that 
                provides needs assessment and case management, employment and training, housing, and legal assistance to approximately 
                3,000 veterans in the San Francisco Bay Area each year.
            </p>
            
            <h5>My Work</h5>
            <p>
                I've re-engineered Swords-To-Plowshares.org to use the latest in Responsive Web Development and integrate
                WordPress as the main provider for our project stakeholders.  They now have the ability to update the website
                immediately by using the custom theme templates that were developed.
            </p>
            <p>
                In addition to the programming work, I've delivered their application's infrastructure to use AWS platform and 
                CloudFlare to deliver their production-ready website.
            </p>

            <h5>Technologies Used</h5>
            <p>
                HTML/CSS/JS, jQuery, WordPress, AWS (EC2, SES, RDS, CloudFront, S3)
            </p>

            <h5>Team Members</h5>
            <p>
                <a href="https://www.linkedin.com/in/robkane101/" target="_blank">Rob Kane</a>, 
                <a href="https://www.linkedin.com/in/derrick-leem/" target="_blank">Derrick Leem</a>, 
                <a href="https://www.linkedin.com/in/gtumbaga/" target="_blank">Gabe Tumbaga</a>
            </p>
        `
    }, // Swords-to-Plowshares.org

    // StagedHomes.com
    { 
        // Entry Info
        id: "STAGEDHOMESCOM", 
        name: "StagedHomes.com",
        date: "September 2015",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/stagedhomes.jpg",

        // Model Info
        header: "Project: StagedHomes.com | Revamp",
        title: "New Design and Responsive",
        url: "http://www.stagedhomes.com/",
        body: `
            <p>
                Our website needed a major upgrade.  Search engines started favoring websites that can adapt to all
                screen sizes.  My team and I redesigned the website so that it has an excellent view no matter what
                screen size our Accredited Staging Professionals (ASP) have.
            </p>
            <p>
                We used Bootstrap 3 for our Front-End responsive framework.  I eliminated several of the custom forms
                dependant on PHP, redesigned them, and completely reprogrammed the forms to use AngularJS / ExpressJS
                (REST API).
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, AngularJS, NodeJS/Express, Sketch (UX/UI Design),
                Amazon AWS, Google Firebase, CloudFlare, PHP/MySQL
            </p>
        `
    }, // StagedHomes.com

    // IAHSP.com
    { 
        // Entry Info
        id: "IAHSPCOM", 
        name: "IAHSP.com",
        date: "October 2016",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/iahsp.jpg",

        // Model Info
        header: "Project: IAHSP.com | Revamp",
        title: "New Design, Responsive, MEAN stack enabled.",
        url: "https://iahsp.com",
        body: `
            <p>
                IAHSP.com received a new make over using modern responsive technologies.  The website uses a 
                combination of Javascript frameworks to help build its functionality.
            </p>
            <p>
                We decided to implement the front end using Angular 2 to consume JSON objects from ExpressJS.  This
                helps make our web application more scalable and maintainable.
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, Angular, NodeJS/Express, Photoshop,
                Sketch (UX/UI Design), Amazon AWS, CloudFlare, Google Cloud
            </p>
        `
    }, // IAHSP.com

    // IAHSPConExpo.com
    { 
        // Entry Info
        id: "IAHSPCONEXPOCOM", 
        name: "IAHSPConExpo.com",
        date: "July 2017",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/iahspconexpo.jpg",

        // Model Info
        header: "Project: IAHSPConExpo.com",
        title: "New Responsive Website using Angular and Google Firebase",
        url: "http://www.iahspconexpo.com/",
        body: `
            <p>
                I built our IAHSP&reg; Convention Expo using modern web technologies as listed below.  Tested on
                all major modern web browsers and with the help of GitHub Pages and Amazon AWS S3 web hosting, 
                our website is served up and outputs fast!
            </p>
            <p>
                I built the form using Angular error checking and when the form data submits, it sends the payload
                as a JSON object to the Express REST backend to process the email submission.  I've architected
                the website this way so that the only time the back-end server is used is when someone actually
                submits an email.  The rest of the website processing is handled by GitHub pages and AWS S3.
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, AngularJS, NodeJS/Express, Sketch (UX/UI Design),
                Amazon AWS, CloudFlare
            </p>
        `
    }, // IAHSPConExpo.com

    // Barb-Schwarz.com
    { 
        // Entry Info
        id: "BARBSCHWARZCOM", 
        name: "Barb-Schwarz.com",
        date: "September 2016",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/barbschwarz.jpg",

        // Model Info
        header: "Project: Barb-Schwarz.com | WordPress",
        title: "New Website using WordPress",
        url: "https://www.barb-schwarz.com/",
        body: `
            <p>
                Barb wanted a new website that will enable her to communicate with everyone.  One of her requirements
                was to have the ability to update the website.  She wants to convey her thoughts and would like to be
                able to tell that to everyone on a daily basis.  She also wanted a blog in addition to this.
            </p>
            <p>
                I put together a front-end webpage for her and coded that design into WordPress.  By using WordPress,
                she can now update the website daily on her own and also manage her own blog.
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, AngularJS, NodeJS/Express, WordPress, Amazon AWS,
                CloudFlare, PHP/MySQL
            </p>
        `
    }, // Barb-Schwarz.com

    // GetRedBox.com
    { 
        // Entry Info
        id: "GETREDBOXCOM", 
        name: "GetRedBox.com",
        date: "September 2016",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/getredbox.jpg",

        // Model Info
        header: "Project: GetRedBox.com",
        title: "New Website using One Page Responsive Design",
        url: "https://www.getredbox.com/",
        body: `
            <p>
                I created GetRedBox.com as a one page responsive website using Bootstrap framework.  Rendering is fast;
                compatible with modern web browsers; and takes advantage of GitHub pages to minimize hosting costs for 
                the website owner.
            </p>
            <p>
                GetRedBox.com is a local IT/Telecommunications provider in the San Francisco East Bay.  Visit their new
                website today!
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, AngularJS, NodeJS/Express, Amazon AWS, CloudFlare
            </p>
        `
    }, // GetRedBox.com

    // EastBayKarate-Do.com
    { 
        // Entry Info
        id: "EASTBAYKARATEDOCOM", 
        name: "EastBayKarate-Do.com",
        date: "October 2015",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/ebkd.jpg",

        // Model Info
        header: "Project: EastBayKarate-Do.com",
        title: "Redesigned Website and New Back-End Technology (NodeJS/Express)",
        url: "https://www.eastbaykarate-do.com/",
        body: `
            <p>
                East Bay Karate-Do had an older design and requested a new design to be developed.  I created them
                a responsive website using your usual Bootstrap, HTML/CSS/JS stack.  In addition, I've implemented
                the website to using Jade (Express).  The results was greater overall control of the web application
                and faster rendering by the Node server.
            </p>
            <p>
                East Bay Karate-Do is a provider of Okinawa Uechi-Ryu Martial Arts, and also has fitness programs.
                I'm also a proud karateka student at East Bay Karate-Do :)
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, NodeJS/Express/Jade, Amazon AWS, CloudFlare
            </p>
        `
    }, // EastBayKarate-Do.com

    // HairSalonStudio.info
    { 
        // Entry Info
        id: "HAIRSALONSTUDIOINFO", 
        name: "HairSalonStudio.info",
        date: "May 2015",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/hairsalonstudio.jpg",

        // Model Info
        header: "Project: HairSalonStudio.info",
        title: "Redesigned Website and New Back-End Technology (NodeJS/Express)",
        url: "http://www.hairsalonstudio.info/",
        body: `
            <p>
                I helped my local hair salon with a new website using modern web technology.  I used Bootstrap for
                the front-end to be responsive; and ExpressJS as the server component (using JADE as the view engine).
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, NodeJS/Express/Jade, Amazon AWS, CloudFlare
            </p>
        `
    }, // HairSalonStudio.info

    // Home Staging Calculator
    { 
        // Entry Info
        id: "HOMESTAGINGCALCULATOR", 
        name: "Home Staging Calculator",
        date: "May 2015",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/projects/rosi-calculator.jpg",

        // Model Info
        header: "Project: Home Staging Calculator",
        title: "Cordova Mobile Application using Intel XDK",
        url: "https://www.stagedhomes.com/public/calculator.php",
        body: `
            <p>
                To help our Accredited Staging Professionals (ASP&reg;), I've taken our spreadsheet calculator and reprogrammed
                it as a mobile application for both iOS and Android.  This will give our ASP&reg;'s a handy application they can
                use to calculator their Return on Staging Investment (ROSI&reg;).
            </p>
            <p>
                The new version of the Home Staging Calculator is redeveloped using the Ionic Framework to make use of the built
                in support for Angular.
            </p>
            <p>
                Technologies used: HTML/CSS/JS, Bootstrap, jQuery, Intel XDK / Ionic Framework, Cordova, iOS, Android
            </p>
        `
    }, // Home Staging Calculator

    // AWS Certified Developer
    { 
        // Entry Info
        id: "AWSCERTIFIEDDEVELOPER", 
        name: "AWS Certified Developer",
        date: "February 2016",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/achievements/201602-aws-developer.jpg"
    }, // AWS Certified Developer

    // Master of Science in IT Management
    { 
        // Entry Info
        id: "MSCITMANAGEMENT", 
        name: "Master of Science in IT Management",
        date: "April 2014",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/achievements/201504-masters-itm.jpg"
    }, // Master of Science in IT Management

    // Project Management Professional
    { 
        // Entry Info
        id: "PROJECTMANAGEMENTPROFESSIONAL", 
        name: "Project Management Professional",
        date: "December 2013",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/achievements/201312-pmp.jpg"
    }, // Project Management Professional

    // Certified Scrum Master
    { 
        // Entry Info
        id: "CERTIFIEDSCRUMMASTER", 
        name: "Certified Scrum Master",
        date: "April 2014",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/achievements/201404-scrum-csm.jpg"
    }, // Certified Scrum Master

    // MongoDB for Node.js Devs
    { 
        // Entry Info
        id: "MONGODBFORNODEJSDEVS", 
        name: "MongoDB for Node.js Devs",
        date: "December 2016",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/achievements/201612-mongodb.png"
    }, // MongoDB for Node.js Devs

    // Full Stack Web Development
    { 
        // Entry Info
        id: "FULLSTACKWEBDEVELOPMENT", 
        name: "Full Stack Web Development",
        date: "June 2016",
        image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/achievements/201606-fullstack.jpg"
    }, // Full Stack Web Development
];

export const constObjApprovedDesignations = objArrayManagement.sortByKey(objProjects, "name");