import { Injectable } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";
import { Router, NavigationEnd } from "@angular/router";

interface SeoTags {
  // Main
  main_title: string;
  main_description: string;

  // OpenGraph
  og_locale: string,
  og_type: string,
  og_url: string,
  og_site_name: string,
  og_image?: string,

  // Twitter
  twitter_card?: string
}

@Injectable()
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) { }

  /**
   * Add all required SEO tags.
   * @param {SeoTags} Specified SEO settings.
   */
  public setSeoTags(seoSettings: SeoTags): void {
    // Main
    this.titleService.setTitle(seoSettings.main_title);
    this.metaService.updateTag({ name: "description", content: seoSettings.main_description });

    // Open Graph
    this.metaService.updateTag({ property: "fb:app_id", content: "1808361502709557" });
    this.metaService.updateTag({ property: "og:locale", content: seoSettings.og_locale });
    this.metaService.updateTag({ property: "og:type", content: seoSettings.og_url });
    this.metaService.updateTag({ property: "og:title", content: seoSettings.main_title });
    this.metaService.updateTag({ property: "og:description", content: seoSettings.main_description });
    this.metaService.updateTag({ property: "og:url", content: seoSettings.og_url });
    this.metaService.updateTag({ property: "og:site_name", content: seoSettings.og_site_name });
    this.metaService.updateTag({ property: "og:image", content: (seoSettings.og_image) ? "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/opengraph.jpg" : seoSettings.og_image });

    // Twitter
    this.metaService.updateTag({ name: "twitter:card", content: "summary" });
    this.metaService.updateTag({ name: "twitter:description", content: seoSettings.main_description });
    this.metaService.updateTag({ name: "twitter:title", content: seoSettings.main_title });
  } // setSeoTags()

}
