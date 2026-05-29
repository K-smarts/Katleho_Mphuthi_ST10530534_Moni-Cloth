# PART 1

# MY Project Overview
History:

The Moni Cloth was funded in 2018 by a women named Pholile Mthlaba. Her inspiration to starting Moni Cloth was to offer elegance, luxury and good quality products in one to women who could not afford expensive, good quality clothing as she had been in the same position.

# Mission & Vision:

The mission of Moni Cloth is to ensure that women who and not in a good financial space be able meet their aesthetic without spending a large sum of their budget doing so. The vision of the business is to boost the confidence of women.

# Website Goals And Objectives

Goals:

The goal is to Increase sales of Moni Cloth to eventually open a non-profit organisation that donates clothes not only to women to children too.

Collaborate with NGO’s that help vulnerable women and children.

Objectives:

25% increase in sales in 5 months.

Increase in profit of 35% in 5 months.

  # Proposed Website Features:

Functionality:

o	Links that lead to the businesses non-profit organisation and links to the websites of NGO’s that are in collaboration with The Moni Cloth. Permission for files to be downloaded into user’s device. A mystery button that leads to mini games that users can play to win discounts.

Pages: 
o	Home, about, navigation, column for recent updates, newspaper, social media and contact information. 


# Timeline and Milestones

Website design: 1-2 week.

Testing: 7 days.

Launching: 1-2 weeks after being approved.

# Part 1

HTML structure:
Home page, Shop page, About Us page, Our Impact page, Contact Us  page, NGO-Goal page, navigation, header, body/main content and the footer. THERE IS AN EXTRA PAGE I ADDED NAMED NGO-Goal.

Research and content gathering:
Images I got online.

Plan your project:
The Moni Cloth is a local woman ran retail store that seeks help with a website that will boost their popularity and reputation. One that will attract their target audience of women that seek luxury, elegance and good quality products at a reasonable price.


# Sitemap
![Website Sitemap] (img/mysitemap.png)


# Changelog

All changes made to my project will be documented on this file.

 Unreleased

 [2.0.0]- 15-05-2026
 Added
-Github repository setup: k-smarts/Katleho_Mphuthi_ST10530534_Moni-Cloth

 [1.0.0]- 14-05-2026
 Added 
-js
-css
-contact us with a responsive layout
-contact form for customer inquiries



# Reference List:

•	Domains. (n.d) Web Hosting Packages. [online] Available at: https://www.domains.co.za/web-hosting-south-africa [Accessed 13 April. 2026]
•	HostAfrica. (2026) Website design and development costs. [online] Available at: https://hostafrica.co.za/blog/websites/website-basics/how-much-does-a-website-cost-in-south-africa [Accessed 13 April. 2026]
•	Web.dev. (n.d) JavaScript. [online] Available at: https://web.dev/javascript  [Accessed 10 April. 2026]

Rini Astiyah, R.A. (n.a). NGO. Available at: https://www.vecteezy.com/vector-art/19636946-ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration [Accessed: 10 May 2026]

Vector Stocker, (n.a). Best discount Available at: https://cdn5.vectorstock.com/i/1000x1000/06/89/best-discount-20-off-vector-23740689.jpg [Accessed: 10 May 2026]

Depositphotos, (n.a). Fashion female shoe and accessories Available at: https://st4.depositphotos.com/6010472/20078/i/450/depositphotos_200789136-stock-photo-fashion-female-shoesand-accessories-flat.jpg [Accessed: 10 May 2026]

Preminium Photo, (n.a). Joyful diversity stylish casual kids Available at: https://img.magnific.com/premium-photo/joyful-diversity-stylish-casual-kids-ensemble_1106493-159953.jpg?w=996 [Accessed: 10 May 2026]

Icons8, (n.a). Raised hand [Accessed: 11 May 2026] https://img.icons8.com/?size=100&id=46948&format=png&color=000000 [Accessed: 11 May 2026]

Icons8, (n.a). Wolrd Globe [Accessed: 11 May 2026] https://img.icons8.com/?size=100&id=32616&format=png&color=000000 [Accessed: 11 May 2026]

Icons8, (n.a). Crowd C https://img.icons8.com/?size=100&id=l7Iqa1k8Ft-i&format=png&color=000000 [Accessed: 11 May 2026]

Meta AI. 2026. Provided structure of CHANGELOG [AI-generated content] Available at: meta.ai [Accessed 15 May 2026]


# PART 2

# Moni Cloth - E-Commerce Website
---

## Project Overview

Moni Cloth is an e-commerce and NGO-focused website created to promote an affordable fashion brand dedicated to empowering women and children. The website showcases the brand's mission, products, and social impact initiatives.

### Brand Mission

Moni Cloth was founded in 2018 by Pholile Mthlaba to provide elegant, luxurious, and quality clothing to women with limited financial resources. The brand aims to boost confidence through affordable fashion and has since evolved into a non-profit organization supporting millions globally.

---

## Part 1 Feedback & Corrections - Changelog

### HTML Corrections

| Issue | Original | Fixed | Description |
|-------|----------|-------|-------------|
| Image Paths | `c:\Users\pc\Pictures\...` | `images/filename.png` | Changed absolute Windows paths to relative paths for cross-platform compatibility |
| Meta Charset Typo | `<meta charsetF="UTF-8">` | `<meta charset="UTF-8">` | Fixed typo in About Us and Our Impact pages |
| Nested Headers | `<header><header>...</header></header>` | `<header><div class="navbar">...</div></header>` | Removed invalid nested header tags |
| Navigation List | `<nav><li>` without `<ul>` | `<nav><li>` (semantic structure maintained) | Corrected semantic HTML structure for navigation |
| Unclosed Tags | Multiple unclosed `<section>` tags | All tags properly closed | Ensured all HTML elements are properly closed |
| Invalid Class Names | `class="Contact Us"` | `class="contact-us"` | Removed spaces in class names (CSS requirement) |
| Invalid Attributes | `class="hero-content` (missing quote) | `class="hero-content"` | Fixed missing closing quotes in class attributes |
| Invalid Tag Syntax | `class="hero"-left>` | `class="hero-left"` | Corrected malformed tag attributes |
| Misplaced Closing Tags | `</body>` inside `<center>` tag | Proper HTML structure | Moved closing tags to correct locations |

### CSS Corrections

| Issue | Original | Fixed | Description |
|-------|----------|-------|-------------|
| Element Name | `Body {` | `body {` | Changed to lowercase HTML element selector |
| Invalid Values | `text-decoration: 900` | `text-decoration: none` | Corrected invalid property value |
| Missing Units | `margin-left: 500` | `margin-left: var(--spacing-xl)` | Added proper CSS units |
| Missing Units | `transition: color 0.3` | `transition: color var(--transition-base)` | Added missing time unit (seconds) |
| Invalid Value | `flex-direction: center` | `flex-direction: column` | Used valid flexbox direction value |
| Typo | `var(--seconadry)` | `var(--secondary)` | Fixed variable name typo |
| Typo | `border-bottom: 14px xolid` | `border-bottom: 4px solid` | Fixed spelling error and adjusted border width |
| Selector Error | `.search-containerinput` | `.search-container input` | Corrected compound selector spacing |
| Class Name | `.seacrh-container` | `.search-container` | Fixed typo in class name |
| Class Name | `.search-Conatiner` | `.search-container` | Standardized class naming conventions |

### JavaScript Corrections

| Issue | Original | Fixed | Description |
|-------|----------|-------|-------------|
| Syntax Error | `'DOMContentLoaded', () =>)` | `'DOMContentLoaded', () => {` | Fixed misplaced closing parenthesis |
| Syntax Error | `form.addEventListener('submit'), (e) =>` | `form.addEventListener('submit', (e) => {` | Changed comma to proper parameter syntax |
| Template Literal | `'Thanks ${fullname}!'` | `` `Thanks ${fullname}!` `` | Changed single quotes to backticks for template interpolation |
| Form Field | `form.fullname` | `form.Fullname` | Corrected to match HTML input name attribute |

---

## Part 2 Enhancements - CSS Styling & Responsive Design

### New Features Implemented

#### 1. **Desktop CSS Styling**
- Created comprehensive external stylesheet (`css/style.css`)
- Implemented CSS variables for consistent theming and maintainability
- Established typography scale (xs, sm, base, lg, xl, 2xl, 3xl)
- Created spacing scale for consistent margins and padding
- Applied decorative styling with gradients, shadows, and transitions
- Added hover and focus states for interactive elements
- Implemented pseudo-classes for button states (`:hover`, `:focus`, `:active`)

#### 2. **Responsive Design**
- **Desktop (1200px+):** Full multi-column layouts using CSS Grid and Flexbox
- **Tablet (768px - 1199px):** Adjusted spacing, reduced font sizes, flexible navigation
- **Mobile (480px - 767px):** Single-column layouts, optimized touch targets, mobile-first approach
- **Small Mobile (<480px):** Compact layouts, minimum font sizes, optimized for readability

#### 3. **Typography**
- Applied consistent font family across all pages
- Implemented typography scale for visual hierarchy
- Used `em` and `rem` units for scalable typography
- Added proper line heights for readability
- Applied letter-spacing for improved visual appeal

#### 4. **Layout Techniques**
- **CSS Grid:** Used for product grids, collections, and impact statistics
- **Flexbox:** Used for navigation, forms, and flexible spacing
- **CSS Variables:** Implemented for colors, spacing, typography, and transitions
- **Media Queries:** Implemented three breakpoints for responsive behavior

#### 5. **Visual Styling**
- Applied gradient backgrounds for hero sections
- Implemented box shadows for depth
- Added border radius for modern styling
- Created smooth transitions and hover effects
- Used CSS reset for consistent cross-browser styling

#### 6. **Accessibility Features**
- Added focus states for keyboard navigation
- Used semantic HTML elements
- Implemented proper contrast ratios
- Added alt attributes to images
- Used descriptive button text

---

## Project Structure

```
moni-cloth-fixed/
├── index.html              # Home page
├── about-us.html          # About the brand
├── contact-us.html        # Contact form page
├── shop.html              # Shopping page
├── our-impact.html        # Impact statistics
├── ngo-goal.html          # NGO goals and mission
├── css/
│   └── style.css          # Main stylesheet (desktop & responsive)
├── js/
│   └── script.js          # JavaScript functionality
├── images/
│   ├── logo.png           # Brand logo
│   ├── new-items.png      # New items showcase
│   ├── womens-section.png # Women's collection
│   ├── kids-section.png   # Kids collection
│   ├── promotion.png      # Promotional items
│   ├── product-*.png      # Product images
│   ├── icon-globe.png     # Global icon
│   ├── icon-crowd.png     # Community icon
│   ├── icon-hand.png      # Volunteer icon
│   └── ngo.png            # NGO partnership image
└── README.md              # This file
```

---

## File Descriptions

### HTML Pages

1. **index.html** - Home page featuring hero section, newest items, collections, product grid, and search functionality
2. **about-us.html** - Information about Moni Cloth's mission, vision, and founder story
3. **shop.html** - E-commerce page with women's and kid's collections
4. **contact-us.html** - Contact form with business information and contact details
5. **our-impact.html** - Statistics showcasing global impact and achievements
6. **ngo-goal.html** - Information about NGO partnerships and future goals

### CSS File (css/style.css)

- **Lines 1-80:** CSS Reset and CSS Variables (color scheme, typography scale, spacing scale)
- **Lines 81-150:** Base styles and global typography
- **Lines 151-250:** Header and navigation styling
- **Lines 251-350:** Hero section and placeholder boxes
- **Lines 351-420:** Search container styling
- **Lines 421-500:** Collections and products sections
- **Lines 501-600:** Button styles and visual effects
- **Lines 601-700:** Form and input styling
- **Lines 701-800:** Footer styling
- **Lines 801-900:** Page-specific sections (hero-content, impact-grid, stat-cards)
- **Lines 901-1100:** Tablet responsive design (768px breakpoint)
- **Lines 1101-1400:** Mobile responsive design (480px breakpoint)
- **Lines 1401-1450:** Utility classes

### JavaScript File (js/script.js)

- Contact form validation (empty fields, email format)
- Smooth scrolling functionality
- User feedback messages

---

## Responsive Design Specifications

### Breakpoints

| Device | Width | Columns | Changes |
|--------|-------|---------|---------|
| Desktop | 1200px+ | Multi-column | Full layout with all features |
| Tablet | 768px-1199px | 2-3 columns | Adjusted spacing, flexible nav |
| Mobile | 480px-767px | 1-2 columns | Single column, mobile nav |
| Small Phone | <480px | 1 column | Compact layout, touch-friendly |

### Key Responsive Features

- Navigation adapts from horizontal to stacked layout
- Product grid reduces columns from 5 to 4 to 3 to 2 to 1
- Font sizes decrease progressively at smaller breakpoints
- Margins and padding scale using relative units
- Images scale responsively with `max-width: 100%`
- Search container stacks vertically on mobile
- Form takes full width on mobile devices

---

## CSS Variables Reference

### Colors
```css
--primary: #8e24aa (Purple)
--secondary: #fc5858 (Red/Pink)
--background-light: #f3b2d0 (Light Pink)
--white: #ffffff
--text: #333333
--text-light: #666666
--border: #eeeeee
--footer-bg: #48164d (Dark Purple)
```

### Typography Scale
```css
--font-size-xs: 0.75rem (12px)
--font-size-sm: 0.875rem (14px)
--font-size-base: 1rem (16px)
--font-size-lg: 1.125rem (18px)
--font-size-xl: 1.5rem (24px)
--font-size-2xl: 2rem (32px)
--font-size-3xl: 2.5rem (40px)
```

### Spacing Scale
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
```

---

## Testing Information

### Browser Compatibility
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Testing
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024 (iPad), 600x1024
- Mobile: 375x812 (iPhone), 360x740 (Android)

### Features Tested
- ✅ Navigation links work on all pages
- ✅ Contact form validation works correctly
- ✅ Responsive layouts adapt to all screen sizes
- ✅ Images scale properly on all devices
- ✅ Buttons have hover and focus states
- ✅ CSS transitions are smooth
- ✅ Footer displays consistently

---

## How to Use

### Setup
1. Download/clone the project
2. Ensure the folder structure matches the above layout
3. Replace placeholder images in the `images/` folder with actual brand images

### File Linking
- All CSS is linked externally from `css/style.css`
- All JavaScript is linked from `js/script.js`
- All images reference relative paths in `images/`

### Customization
- Update colors using CSS variables in `style.css`
- Modify typography by changing the typography scale variables
- Adjust spacing using the spacing scale variables
- Update content in HTML files as needed

---

## Image Files Required

To make this project fully functional, add the following images to the `images/` folder:

**Required Images:**
- `logo.png` - Brand logo (100x110px)
- `new-items.png` - New items showcase (recommended 1250x500px)
- `womens-section.png` - Women's collection (recommended 1250x300px)
- `kids-section.png` - Kids collection (recommended 1250x500px)
- `promotion.png` - Promotional items (recommended 1250x300px)
- `product-1.png` to `product-6.png` - Product images (recommended 250x250px)
- `icon-globe.png` - Global impact icon (100x100px)
- `icon-crowd.png` - Community icon (100x100px)
- `icon-hand.png` - Volunteer icon (100x100px)
- `ngo.png` - NGO partnership image (350x350px)

---

## References

### CSS & Web Design Resources
1. MDN Web Docs - CSS Fundamentals
   https://developer.mozilla.org/en-US/docs/Web/CSS

2. CSS-Tricks - A Complete Guide to Grid
   https://css-tricks.com/snippets/css/complete-guide-grid/

3. CSS-Tricks - A Complete Guide to Flexbox
   https://css-tricks.com/snippets/css/a-guide-to-flexbox/

4. Responsive Web Design Guidelines
   https://web.dev/responsive-web-design-basics/

5. Web Accessibility Guidelines (WCAG)
   https://www.w3.org/WAI/WCAG21/quickref/

### HTML Best Practices
1. HTML Living Standard
   https://html.spec.whatwg.org/

2. Semantic HTML5
   https://developer.mozilla.org/en-US/docs/Glossary/Semantics

3. Meta Tags Guide
   https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta

### JavaScript Resources
1. JavaScript ES6+ Features
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

2. Form Validation Best Practices
   https://www.smashingmagazine.com/2014/09/form-validation-ux/

3. DOM Manipulation
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

### Tools & Software Used
- Visual Studio Code (Code Editor)
- Google Chrome DevTools (Browser Testing)
- Firefox Developer Tools (Responsive Design)
- Git/GitHub (Version Control)

---

## Submission Details

### Part 1 Submission
- Initial HTML structure and basic styling
- GitHub repository created with Part 1 files

### Part 2 Submission
- Complete CSS styling with responsive design
- All Part 1 bugs fixed and documented
- Updated README with changelog
- All files pushed to GitHub repository

### GitHub Repository Link
[Your GitHub Repository Link Here]

---

## Future Enhancements

Potential improvements for future versions:

1. **Backend Integration**
   - Database for product management
   - User authentication and accounts
   - Shopping cart and checkout functionality

2. **Advanced Features**
   - Image galleries with lightbox
   - Product filtering and sorting
   - User reviews and ratings
   - Newsletter subscription

3. **SEO Optimization**
   - Meta descriptions and keywords
   - Open Graph tags
   - Structured data (Schema.org)
   - XML sitemap

4. **Performance**
   - Image optimization and lazy loading
   - CSS minification
   - JavaScript minification
   - Caching strategies

5. **Analytics**
   - Google Analytics integration
   - User behavior tracking
   - Conversion tracking

---

## Contact & Support

**Brand Contact:**
- Email: MoniCloth@fashion.com
- Location: Johannesburg, Gauteng, South Africa

**Developer:**
- Name: Katleho Mphuthi
- Student ID: ST10530534

---

## License

This project is developed for educational purposes as part of The IIE - Website Development course.

---

**Last Updated: 29 May 2026  
**Version:** 2.0 (Part 2 Complete)
