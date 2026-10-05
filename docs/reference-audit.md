# Skillhunt reference-source audit

**Status:** This audit was completed before application implementation. `skillhunt-master.zip` was fully unpacked into an isolated inspection directory. The archive contains a static Colorlib Skillhunt template (6.4 MB unpacked), not an existing Next.js app.

## Archive and structure

- Archive in repository root: `skillhunt-master.zip`
- Unpacked root inspected: `skillhunt-master/`
- Files: **190** (including 10 `.DS_Store` Finder metadata files), no package manifest, lockfile, server code, environment file, API directory or framework configuration.
- Top-level conventions: lowercase hyphenated static page names; vendor assets under `css/`, `js/`, and `fonts/`; image assets under `images/`; editable theme Sass under `scss/`; Bootstrap vendored Sass nested below `scss/bootstrap/`.

```text
skillhunt-master/  (190 files)
skillhunt-master/css  (21 files)
skillhunt-master/fonts  (29 files)
skillhunt-master/images  (21 files)
skillhunt-master/js  (17 files)
skillhunt-master/scss  (92 files)
```

## Complete file inventory

Every archive file was read or identified from its binary/file format. The following list is complete; byte size is the unpacked size.

| Path | Bytes | Contents / role |
|---|---:|---|
| `.DS_Store` | 10,244 | macOS Finder metadata; no application behavior. |
| `blog-single.html` | 24,122 | Static HTML document. |
| `blog.html` | 15,760 | Static HTML document. |
| `browsejobs.html` | 24,974 | Static HTML document. |
| `candidates.html` | 18,056 | Static HTML document. |
| `contact.html` | 10,120 | Static HTML document. |
| `css/.DS_Store` | 8,196 | macOS Finder metadata; no application behavior. |
| `css/ajax-loader.gif` | 3,208 | Raster visual asset. |
| `css/animate.css` | 73,641 | Compiled CSS stylesheet. |
| `css/aos.css` | 25,983 | Compiled CSS stylesheet. |
| `css/bootstrap/.DS_Store` | 6,148 | macOS Finder metadata; no application behavior. |
| `css/bootstrap/bootstrap-grid.css` | 45,805 | Compiled CSS stylesheet. |
| `css/bootstrap/bootstrap-reboot.css` | 4,886 | Compiled CSS stylesheet. |
| `css/bootstrap-datepicker.css` | 17,945 | Compiled CSS stylesheet. |
| `css/bootstrap.min.css` | 140,421 | Compiled CSS stylesheet. |
| `css/css/.DS_Store` | 6,148 | macOS Finder metadata; no application behavior. |
| `css/css/bootstrap-reboot.css` | 4,868 | Compiled CSS stylesheet. |
| `css/css/mixins/_text-hide.css` | 0 | Compiled CSS stylesheet. |
| `css/flaticon.css` | 1,643 | Compiled CSS stylesheet. |
| `css/icomoon.css` | 79,875 | Compiled CSS stylesheet. |
| `css/ionicons.min.css` | 46,816 | Compiled CSS stylesheet. |
| `css/jquery.timepicker.css` | 1,588 | Compiled CSS stylesheet. |
| `css/magnific-popup.css` | 6,950 | Compiled CSS stylesheet. |
| `css/open-iconic-bootstrap.min.css` | 9,467 | Compiled CSS stylesheet. |
| `css/owl.carousel.min.css` | 3,440 | Compiled CSS stylesheet. |
| `css/owl.theme.default.min.css` | 965 | Compiled CSS stylesheet. |
| `css/style.css` | 269,826 | Compiled CSS stylesheet. |
| `fonts/.DS_Store` | 6,148 | macOS Finder metadata; no application behavior. |
| `fonts/flaticon/.DS_Store` | 8,196 | macOS Finder metadata; no application behavior. |
| `fonts/flaticon/backup.txt` | 1,412 | Text metadata / backup note. |
| `fonts/flaticon/font/Flaticon.eot` | 10,102 | Icon font binary/vector asset. |
| `fonts/flaticon/font/Flaticon.svg` | 55,944 | Icon font binary/vector asset. |
| `fonts/flaticon/font/Flaticon.ttf` | 9,924 | Icon font binary/vector asset. |
| `fonts/flaticon/font/Flaticon.woff` | 6,336 | Icon font binary/vector asset. |
| `fonts/flaticon/font/Flaticon.woff2` | 5,228 | Icon font binary/vector asset. |
| `fonts/flaticon/font/_flaticon.scss` | 2,018 | Sass source (Bootstrap vendor module or theme source). |
| `fonts/flaticon/font/flaticon.css` | 1,397 | Compiled CSS stylesheet. |
| `fonts/flaticon/font/flaticon.html` | 21,469 | Static HTML document. |
| `fonts/flaticon/license/license.html` | 10,197 | Static HTML document. |
| `fonts/icomoon/icomoon.eot` | 307,332 | Icon font binary/vector asset. |
| `fonts/icomoon/icomoon.svg` | 935,341 | Icon font binary/vector asset. |
| `fonts/icomoon/icomoon.ttf` | 307,168 | Icon font binary/vector asset. |
| `fonts/icomoon/icomoon.woff` | 307,244 | Icon font binary/vector asset. |
| `fonts/ionicons/css/_ionicons.scss` | 57,268 | Sass source (Bootstrap vendor module or theme source). |
| `fonts/ionicons/css/ionicons.min.css` | 51,284 | Compiled CSS stylesheet. |
| `fonts/ionicons/fonts/.DS_Store` | 6,148 | macOS Finder metadata; no application behavior. |
| `fonts/ionicons/fonts/ionicons.eot` | 112,826 | Icon font binary/vector asset. |
| `fonts/ionicons/fonts/ionicons.svg` | 313,199 | Icon font binary/vector asset. |
| `fonts/ionicons/fonts/ionicons.ttf` | 112,648 | Icon font binary/vector asset. |
| `fonts/ionicons/fonts/ionicons.woff` | 66,024 | Icon font binary/vector asset. |
| `fonts/ionicons/fonts/ionicons.woff2` | 50,592 | Icon font binary/vector asset. |
| `fonts/open-iconic/open-iconic.eot` | 28,196 | Icon font binary/vector asset. |
| `fonts/open-iconic/open-iconic.otf` | 20,996 | Icon font binary/vector asset. |
| `fonts/open-iconic/open-iconic.svg` | 54,789 | Icon font binary/vector asset. |
| `fonts/open-iconic/open-iconic.ttf` | 28,028 | Icon font binary/vector asset. |
| `fonts/open-iconic/open-iconic.woff` | 14,984 | Icon font binary/vector asset. |
| `images/.DS_Store` | 6,148 | macOS Finder metadata; no application behavior. |
| `images/bg_1.jpg` | 160,266 | Raster visual asset. |
| `images/company-1.jpg` | 26,771 | Raster visual asset. |
| `images/company-2.jpg` | 34,648 | Raster visual asset. |
| `images/company-3.jpg` | 18,271 | Raster visual asset. |
| `images/company-4.jpg` | 29,796 | Raster visual asset. |
| `images/image_1.jpg` | 103,751 | Raster visual asset. |
| `images/image_2.jpg` | 88,547 | Raster visual asset. |
| `images/image_3.jpg` | 37,056 | Raster visual asset. |
| `images/image_4.jpg` | 65,666 | Raster visual asset. |
| `images/image_5.jpg` | 59,579 | Raster visual asset. |
| `images/image_6.jpg` | 74,563 | Raster visual asset. |
| `images/image_7.jpg` | 57,039 | Raster visual asset. |
| `images/image_8.jpg` | 95,823 | Raster visual asset. |
| `images/loc.png` | 1,967 | Raster visual asset. |
| `images/person_1.jpg` | 36,090 | Raster visual asset. |
| `images/person_2.jpg` | 47,939 | Raster visual asset. |
| `images/person_3.jpg` | 35,096 | Raster visual asset. |
| `images/person_4.jpg` | 25,350 | Raster visual asset. |
| `images/person_5.jpg` | 294,786 | Raster visual asset. |
| `images/person_6.jpg` | 107,052 | Raster visual asset. |
| `index.html` | 47,855 | Static HTML document. |
| `job-post.html` | 34,060 | Static HTML document. |
| `js/.DS_Store` | 8,196 | macOS Finder metadata; no application behavior. |
| `js/aos.js` | 14,244 | Browser-side JavaScript. |
| `js/bootstrap.min.js` | 58,072 | Browser-side JavaScript. |
| `js/google-map.js` | 1,946 | Browser-side JavaScript. |
| `js/jquery-3.2.1.min.js` | 86,658 | Browser-side JavaScript. |
| `js/jquery-migrate-3.0.1.min.js` | 11,421 | Browser-side JavaScript. |
| `js/jquery.animateNumber.min.js` | 1,391 | Browser-side JavaScript. |
| `js/jquery.easing.1.3.js` | 8,111 | Browser-side JavaScript. |
| `js/jquery.magnific-popup.min.js` | 20,216 | Browser-side JavaScript. |
| `js/jquery.min.js` | 268,038 | Browser-side JavaScript. |
| `js/jquery.stellar.min.js` | 12,597 | Browser-side JavaScript. |
| `js/jquery.waypoints.min.js` | 8,835 | Browser-side JavaScript. |
| `js/main.js` | 7,046 | Browser-side JavaScript. |
| `js/owl.carousel.min.js` | 43,237 | Browser-side JavaScript. |
| `js/popper.min.js` | 19,032 | Browser-side JavaScript. |
| `js/range.js` | 998 | Browser-side JavaScript. |
| `js/scrollax.min.js` | 7,447 | Browser-side JavaScript. |
| `new-post.html` | 14,081 | Static HTML document. |
| `prepros-6.config` | 18,607 | Prepros build/watch configuration (Sass, Autoprefixer and minification settings). |
| `scss/.DS_Store` | 6,148 | macOS Finder metadata; no application behavior. |
| `scss/bootstrap/.DS_Store` | 10,244 | macOS Finder metadata; no application behavior. |
| `scss/bootstrap/_alert.scss` | 1,148 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_badge.scss` | 1,119 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_breadcrumb.scss` | 1,278 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_button-group.scss` | 3,624 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_buttons.scss` | 2,547 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_card.scss` | 5,872 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_carousel.scss` | 4,756 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_close.scss` | 956 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_code.scss` | 1,013 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_custom-forms.scss` | 14,866 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_dropdown.scss` | 4,363 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_forms.scss` | 8,816 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_functions.scss` | 2,719 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_grid.scss` | 1,016 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_images.scss` | 1,153 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_input-group.scss` | 5,855 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_jumbotron.scss` | 405 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_list-group.scss` | 3,752 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_media.scss` | 83 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_mixins.scss` | 1,059 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_modal.scss` | 5,930 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_nav.scss` | 2,069 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_navbar.scss` | 6,415 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_pagination.scss` | 1,740 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_popover.scss` | 4,797 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_print.scss` | 3,001 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_progress.scss` | 1,068 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_reboot.scss` | 11,187 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_root.scss` | 572 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_spinners.scss` | 1,051 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_tables.scss` | 3,520 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_toasts.scss` | 990 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_tooltip.scss` | 2,512 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_transitions.scss` | 261 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_type.scss` | 2,244 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_utilities.scss` | 502 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/_variables.scss` | 47,781 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/bootstrap-grid.scss` | 572 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/bootstrap-reboot.scss` | 411 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/bootstrap.scss` | 920 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_alert.scss` | 242 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_background-variant.scss` | 474 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_badge.scss` | 318 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_border-radius.scss` | 1,340 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_box-shadow.scss` | 532 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_breakpoints.scss` | 4,482 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_buttons.scss` | 3,369 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_caret.scss` | 1,406 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_clearfix.scss` | 93 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_deprecate.scss` | 613 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_float.scss` | 386 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_forms.scss` | 4,912 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_gradients.scss` | 2,050 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_grid-framework.scss` | 1,828 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_grid.scss` | 1,568 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_hover.scss` | 749 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_image.scss` | 1,159 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_list-group.scss` | 431 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_lists.scss` | 168 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_nav-divider.scss` | 261 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_pagination.scss` | 462 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_reset-text.scss` | 479 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_resize.scss` | 202 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_screen-reader.scss` | 733 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_size.scss` | 148 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_table-row.scss` | 792 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_text-emphasis.scss` | 364 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_text-hide.scss` | 326 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_text-truncate.scss` | 168 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_transition.scss` | 364 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/mixins/_visibility.scss` | 189 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_align.scss` | 420 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_background.scss` | 397 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_borders.scss` | 1,765 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_clearfix.scss` | 37 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_display.scss` | 519 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_embed.scss` | 846 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_flex.scss` | 2,769 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_float.scss` | 376 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_overflow.scss` | 133 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_position.scss` | 484 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_screenreaders.scss` | 115 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_shadows.scss` | 249 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_sizing.scss` | 498 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_spacing.scss` | 2,101 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_stretched-link.scss` | 431 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_text.scss` | 2,010 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/utilities/_visibility.scss` | 174 | Sass source (Bootstrap vendor module or theme source). |
| `scss/bootstrap/vendor/_rfs.scss` | 6,473 | Sass source (Bootstrap vendor module or theme source). |
| `scss/style.scss` | 37,665 | Sass source (Bootstrap vendor module or theme source). |

## Static pages, route equivalents, and reusable patterns

There are **no React/Vue components and therefore no component props**. Reuse happens through duplicated HTML markup/classes and global CSS. All forms use `action="#"`; none submits to a service.

| Source file / historical URL | Layout and functionality found |
|---|---|
| `/index.html` | Homepage: absolute transparent navbar; 800px gradient/photo hero with two search tabs (Find a Job / Find a Candidate); statistic counters; top categories; job posts; services; testimonials and candidates carousels; CTA; newsletter and shared footer. |
| `/browsejobs.html` | Browse Jobs page: 400px image/gradient breadcrumb hero; stacked job rows; sidebar keyword, category, location and job-type checkbox filters; newsletter and shared footer. |
| `/candidates.html` | Candidates page: 400px breadcrumb hero; candidate rows with avatar, title, location and availability; sidebar filters; newsletter and shared footer. |
| `/job-post.html` | Job detail page: breadcrumb hero; title/company/location/type/share panel; description, requirements and salary; candidate/application CTA; advanced search section; related jobs and sidebar filters; newsletter and footer. |
| `/new-post.html` | Post A Job page: breadcrumb hero; decorative price checkboxes, title/company fields, job-type radios, location and description; Contact Info/More Info sidebar; newsletter and footer. |
| `/blog.html` | Blog listing: breadcrumb hero, eight image-led article tiles with hover image zoom, newsletter and shared footer. |
| `/blog-single.html` | Article view: breadcrumb hero, article body, image, author card, comments, comment form, keyword/company/recent-post/tag/paragraph sidebar blocks, newsletter and footer. |
| `/contact.html` | Contact page: breadcrumb hero; first/last name, email, subject and message form; #map canvas; shared footer. |

### Common static “components”

- **Navbar (`#ftco-navbar`, `.ftco-navbar-light`)** — white `Skillhunt` brand, Home / Browse Jobs / Candidates / Blog / Contact and two CTAs (`Post a Job` blue, `Want a Job` orange). Initially absolute, 20px from top, then fixed white after scrolling; mobile becomes black below 992px.
- **Breadcrumb hero (`.hero-wrap.hero-wrap-2`)** — 400px, `images/bg_1.jpg`, 80% opacity left-to-right blue/purple overlay, uppercase 12px crumbs and a 50px/700 white page title.
- **Job row (`.job-post-item`)** — white media list item with square company image, black 24px title, color-tinted type/location blocks and orange “Apply Job” button.
- **Candidate card (`.team`)** — circular portrait, centered name/title/location, bordered/lifted hover state; carousel uses 1/3/5 cards at 0/600/1000px.
- **Newsletter panel (`.ftco-section-parallax`, `.subscribe-form`)** — full-width source gradient with white field/black text and orange submit half, squared inner field seam and 5px outer rounded ends.
- **Footer (`.ftco-footer`)** — dark (`#000`) multi-column logo/about/social, Employers, Candidate, Account, contact/address with source placeholder details.
- **Loader (`#ftco-loader`)** — documented exactly under Animation / loader.

## Design source tokens and scales

### Typography

- Only text family explicitly loaded is Google **Source Sans Pro** at weights **300, 400, 600, 700** (`https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap`). Theme fallback: `Arial, sans-serif`.
- Body: 16px, weight 400, line-height 1.8, `#999`; headings: black, weight 400, line-height 1.5. Homepage hero: 54px / line-height 1.2 (50px below 992px, 40px below 768px); interior page title: 50px / 700; navbar brand: 20px / 700; navbar links: 16px / 400; breadcrumbs: 12px / 500 uppercase.
- Icon font families are **Open Iconic / Icons** (400), **Flaticon**, **IcoMoon**, and **Ionicons**; they are not body fonts.

### Colors

| Token / application | Exact source value |
|---|---|
| theme primary | `#206dfb` |
| theme secondary | `#fdab44` |
| hero / section gradient | `#207dff → #a16ae8` (left to right) |
| white / black | `#fff` / `#000000` |
| body neutral | `#999999` |
| small borders / light background | `#dee2e6`, `#e6e6e6`, `#f8f9fa` |
| job count/badge tint | `#fed8a9` |
| loader active stroke markup | `#F96D00` |
| loader track | `#eeeeee` |

### Layout, spacing, radius, and shadows

- Bootstrap 4.3.1 grid breakpoints: **576px, 768px, 992px, 1200px**. Base `.container` max widths: 540px, 720px, 960px, 1140px across those breakpoints.
- Bootstrap spacing utility scale: `0`, `.25rem` (4px), `.5rem` (8px), `1rem` (16px), `1.5rem` (24px), `3rem` (48px). Theme repeatedly uses 10px, 20px, 30px, 40px, 50px, 60px, 80px and 100px values. Main `.ftco-section` vertical padding is 7em; footer uses 7em 0 0.
- Theme radii: buttons 5px, small utility / tags 4px, sidebar action 2px, avatars 50%, source loader 16px (or 0 fullscreen). Bootstrap default inputs/buttons use `.25rem` unless overridden.
- Theme shadows: navbar `0 0 10px 0 rgba(0,0,0,.1)`; menu `0 10px 34px -20px rgba(0,0,0,.41)`; loader `0 24px 64px rgba(0,0,0,.24)`; job/item hover includes `0 3px 66px -24px rgba(0,0,0,.2)` in the source theme.

## Source animations and behavior

- **AOS:** initialized globally as `AOS.init({ duration: 800, easing: "slide" })`.
- **Loader:** every page includes `<div id="ftco-loader" class="show fullscreen">` and a 48px SVG. Visible class: opacity transition `.4s ease-out`; hidden: `.2s ease-out` plus delayed visibility. JavaScript removes `show` after **1ms**. SVG rotates `360deg` over **2s linear infinite**; stroke dash is **1.5s ease-in-out infinite**, `1,200/0` → `89,200/-35px` at 50% → `89,200/-136px` at 100%.
- **Scroll state:** navbar adds `scrolled` after 150px and `awake` after 350px. White scrolled navbar starts with `margin-top: -130px` and transitions into view over `.3s ease-out`.
- **Reveal stagger:** Waypoints triggers `.ftco-animate` at a 95% offset, waits 100ms, then applies the selected fade effect with `k * 50ms` delay. Counter numbers animate to data values over **7000ms**.
- **Carousels:** testimonial carousel centered/looped and 1/2/3 items at 0/600/1000; candidates carousel autoplay with 1/3/5 at same breakpoints. Magnific Popup image zoom lasts 300ms; iframe popup has 160ms removal delay; smooth anchor navigation is 700ms `easeInOutExpo`.
- **Parallax:** Stellar is responsive and enables background/element parallax; `hero-wrap-2` source HTML uses a 0.5 stellar background ratio. Scrollax is also initialized.

## Libraries and referenced versions

| Library | Source file(s) | Version / note |
|---|---|---|
| Bootstrap | `css/style.css`, `css/bootstrap.min.css`, `scss/bootstrap/**`, `js/bootstrap.min.js` | 4.3.1 |
| jQuery | `js/jquery.min.js`, `js/jquery-3.2.1.min.js` | 3.2.1 (both duplicate builds are bundled) |
| jQuery Migrate | `js/jquery-migrate-3.0.1.min.js` | 3.0.1 |
| Popper | `js/popper.min.js` | 2017 distribution; exact semver not bannered |
| AOS | `css/aos.css`, `js/aos.js` | version not bannered |
| animate.css | `css/animate.css` | version not bannered |
| Owl Carousel | `css/owl*.css`, `js/owl.carousel.min.js` | JS 2.3.0, theme CSS 2.2.1 |
| Magnific Popup | `css/magnific-popup.css`, `js/jquery.magnific-popup.min.js` | 1.1.0 |
| Waypoints | `js/jquery.waypoints.min.js` | 4.0.0 |
| Stellar.js | `js/jquery.stellar.min.js` | 0.6.2 |
| Scrollax | `js/scrollax.min.js` | 1.0.0 |
| jQuery animateNumber | `js/jquery.animateNumber.min.js` | 0.0.14 |
| jQuery Easing | `js/jquery.easing.1.3.js` | 1.3 |
| Bootstrap Datepicker / jQuery Timepicker | `css/bootstrap-datepicker.css`, `css/jquery.timepicker.css` | styles only; no corresponding scripts in archive |
| Google Maps JavaScript | all HTML pages and `js/google-map.js` | hard-coded browser key in source; map centered on New York and geocodes New York via an insecure HTTP endpoint. |

## Images and icon assets

- Raster images (all local): `bg_1.jpg` (2000×1333); `company-1.jpg` through `company-4.jpg` (800×600); `image_1.jpg`–`image_7.jpg` (800×533/534/535), `image_8.jpg` (800×505); `person_1.jpg` (479×479), `person_2.jpg` (607×607), `person_3.jpg` (517×517), `person_4.jpg` (433×433), `person_5.jpg` (1792×1792), `person_6.jpg` (800×800); `loc.png` (47×57 map marker); `ajax-loader.gif` (vendor loading asset).
- The archive contains no photo provenance/credits document. The given business brief requires locally saved Pexels/Unsplash East African imagery with a new `image-credits.md`; its source stock should not be presented as Kenyan/East African without verification.
- Source icon sets: `fonts/open-iconic/**` + `css/open-iconic-bootstrap.min.css`; `fonts/flaticon/**` + `css/flaticon.css`; `fonts/icomoon/**` + `css/icomoon.css`; `fonts/ionicons/**` + `css/ionicons.min.css`. The requested build must use Lucide instead of reusing these source icon sets.

## Security, consent, legal, error, API and server audit

| Requested element | Result in source archive |
|---|---|
| Cookie consent banner / preference modal / Cookie Policy | Absent. |
| CAPTCHA / reCAPTCHA | Absent. No token client logic or server verification. |
| Privacy Policy / Terms pages | Absent. |
| 404, 500, maintenance or coming-soon pages | Absent. |
| API routes / backend / database / upload routes | Absent; this is entirely static HTML/CSS/JS. |
| Authentication, dashboards, payments, email, WhatsApp | Absent. |
| Environment variable references | None. `process.env`, dotenv and `.env*` files do not occur. A Google Maps browser key is embedded directly in HTML rather than referenced by an environment variable; do not carry it into the implementation. |
| Form processing | All source forms post to `#`; no validation, persistence, CAPTCHA, consent, privacy/terms agreement or success/error feedback. |
| PWA / SEO manifests / sitemaps / JSON-LD | Absent. |

## Implementation fidelity decisions recorded before coding

- Preserve the **source design language**: Source Sans Pro; primary blue/secondary orange; blue-to-purple gradient; white/black high-contrast surfaces; 5px CTAs; source breakpoint rhythm; informative loader and intentional motion.
- Adapt static source concepts to the requested KaziConnect IA and data-driven Next.js pages. The source does **not** contain the required legal, consent, dashboards, protected routes, APIs, CAPTCHA or error screens, so those must be added from the written production brief without pretending they existed in the source.
- Do not expose the source’s hard-coded Maps key or reuse its insecure geocoding request. Use environment variables and a secure provider flow.
- Follow the user’s current icon requirement (Lucide only) and photo requirement (locally stored, creditable Pexels/Unsplash images of East African people/settings) even though the legacy source uses icon fonts and unlabeled images.

_Generated from the fully unpacked archive before application code was created._
