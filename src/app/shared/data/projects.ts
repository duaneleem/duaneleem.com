let objArrayManagement = require("../functions/array-management");

let objProjects = [
    // Swords-to-Plowshares.org
    { 
        // Entry Info
        id: "S2P", 
        name: "Swords-to-Plowshares.org",
        date: "August 2017",

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
    },

    // StagedHomes.com
    { 
        // Entry Info
        id: "SHCMAIN", 
        name: "StagedHomes.com",
        date: "September 2015",

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
    },
];

export const constObjApprovedDesignations = objArrayManagement.sortByKey(objProjects, "name");