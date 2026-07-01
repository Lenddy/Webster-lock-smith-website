```
========================================
1. MUST DO BEFORE LAUNCH
========================================

Navigation
    Desktop Navigation
        - Make the desktop navbar always stay visible. (Done)
        - Keep the logo visible while scrolling. (Done)

    Mobile Navigation
        - Add a top bar. (Done)
        - Add a burger menu. (Done)
        - Add the company logo. (Done)
        - Make the sidebar overlay the page when opened. (Done)

    Sidebar
        - Restore the dropdown menus.
        - Give the collapsed sidebar its own dedicated space. (Done)
        - Make the expanded sidebar overlay the page content instead of pushing it. (Done)
        - Verify hover and expand behavior. (Done)
        - Verify open/close animations. (Done)

    Product & Services Navigation
        - Clicking "Products" should scroll to the Products section. (Done)
        - Automatically expand the selected product. (Done)
        - Clicking "Services" should scroll to the Services section.
        - Automatically expand the selected service. (Done)

Home Page
    Layout
        - Reduce wasted space.
        - Decide if the About section should be separate from the banner. (separate) (Done)
        - Decide whether the page title should appear on top of the banner. (No) (Done)

    Content
        - Add more information to the page.
        - Add a logo component below the banner.

Products & Services
    Page Structure
        - Merge Products and Services into a single section.
        - Add collapsible sections for products and services.

    Products
        - Add product images.
        - Improve descriptions.
        - Add starting prices.

    Services
        - Add service images.
        - Improve descriptions.
        - Add starting prices where applicable.

    Navigation
        - Improve navigation between products and services.
        - Add a search bar.

About
    Company Information
        - Add company history.
        - Add employee information.
        - Add more information about the business.

    Social Proof
        - Add testimonials.
        - Add a company timeline.

Gallery
    Layout
        - Rename gallery titles.
        - Allow horizontal scrolling on small screens.
        - Resize gallery items for smaller devices.

Footer
    Information
        - Contact information.
        - Schedule.
        - Areas served.
        - Social media links.

    Navigation
        - Internal links.
        - Language selector.
        - Navbar position settings.
        - Company logo.

Internationalization
    Setup
        - Implement i18next.
        - Move JSON translation files to the public folder.
        - Copy the implementation from the Portfolio project.

General
    UI
        - Increase spacing between sections.
        - Create a blue/yellow subtitle color system.

    Components
        - Add vendor carousel. (Done)
        - Copy the scroll function from Coin Mania.


========================================
2. IMPORTANT IMPROVEMENTS
========================================

Book Component
    Responsive
        - Move the book further right on screens smaller than ~530px.
        - Prevent horizontal scrolling.

    Appearance
        - Make the book thicker.
        - Improve spine thickness.
        - Improve page stacking.
        - Improve scaling.
        - Increase the 3D effect.

    Animations
        - Tilt the covers.
        - Add curved page turning.

Timeline
    Decide on a Format (choose one)
        - Traditional timeline.
        - Key-shaped timeline.
        - Book chapters style.
        - Pamphlet style.

Logo Section
    Concepts
        - Floating keys.
        - Locks.
        - Animated company logo.
        - Decorative SVGs.

Animations
    User Controls
        - Prompt asking users if animations are distracting.
        - Add a "reduce motion" mode.
        - Add an option to disable animations entirely.

Performance
    Investigation
        - Investigate delayed transforms during resize.

    Optimization
        - Optimize animations.
        - Lazy load images.
        - Compress images.


========================================
3. BUGS / TESTING
========================================

Banner Card stack
    Issue
        - When clicking next or prev there is a sliding problem

Scroll Bug
    Fixed
        - overflow-x: clip fixed horizontal overflow.

    Still Investigating
        - Mouse wheel sometimes ignored.
        - Possible overlay intercepting wheel events.

    Browser/Input Testing
        - Test in Chrome.
        - Test in Firefox.
        - Test in Edge.
        - Test with touchpad.
        - Test with mouse wheel.

GitHub
    Issue
        - Repository won't push.
        - Infinite loading.
        - 408 timeout.

    Fixes to Try
        - Try reconnecting the remote.
        - Verify authentication.

Responsive Testing
    Breakpoints to Test
        - 370px
        - 430px
        - 530px
        - 768px
        - 1024px
        - 1440px

Components
    Horizontal Scrolling Check (~370px)
        - Navbar.
        - Book.
        - Gallery.
        - Footer.
        - Sidebar.


========================================
4. NICE TO HAVE
========================================

Visual
    Effects
        - Animated lightbulb.
        - Gradient glow.
        - Blur lighting effect.
        - Moving keys.

    Design
        - Better section colors.
        - Decorative SVGs.

Carousel
    Content
        - Trusted brands carousel.
        - Vendor logos carousel.
        - Banner carousel.

Testimonials
    Types
        - Static testimonials.
        - User-submitted testimonials.

Suggestions
    Feature
        - Add a suggestion box.

Careers
    Feature
        - Add a careers page.
        - Decide if a database is needed.

E-Commerce
    Feature
        - Product purchasing.
        - Shopping cart.
        - Pricing display.


========================================
5. FUTURE (VERSION 2)
========================================

Planned Features
    - PWA.
    - Worker portal.
    - Online store.
    - Pamphlet version.
    - Mobile flipbook.
    - Advanced timeline.
    - More complex animations.


========================================
6. ANIMATION IDEAS
========================================

Book
    Entrance
        - Drop from above.
        - Fall onto table.
        - Zoom toward camera.

    Interaction
        - Open itself.
        - Curved pages.

Products
    Transitions
        - Falling leaves.
        - Sliding doors.
        - View Transition API.
        - Logo rotation.

Footer
    Effects
        - Floating keys.
        - Animated logo.


========================================
7. EXTERNAL REFERENCES
========================================

Book
    Sources
        - CodePen page turn.
        - JSFiddle page flip.
        - StackOverflow page stack.

Animations
    Sources
        - Logo rotation.
        - Falling leaves.
        - Sliding frames.
        - View Transition API.

Timeline
    Sources
        - Book history examples.
        - Key-shaped timeline examples.
        - Animated timeline examples.


========================================
RECOMMENDED ORDER
========================================

1.  Fix all bugs.
2.  Complete the site structure.
3.  Improve responsiveness.
4.  Add images and content.
5.  Implement translations.
6.  Polish the book component.
7.  Add accessibility options.
8.  Optimize performance.
9.  Add visual polish.
10. Build future features.
```
