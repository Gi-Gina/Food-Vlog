# Meal Prep Mastery - HTML Landing Page Template

## Table of Contents

1.  [Introduction](#introduction)
2.  [Features](#features)
3.  [Included Files](#included-files)
4.  [How to Use](#how-to-use)
    * [Basic Setup](#basic-setup)
    * [Customizing Content (Text & Images)](#customizing-content-text--images)
    * [Updating Meal Plans & Community Posts](#updating-meal-plans--community-posts)
    * [Dark Mode Toggle](#dark-mode-toggle)
    * [Contact Form](#contact-form)
    * [Customizing Styles (CSS)](#customizing-styles-css)
    * [Responsive Navigation](#responsive-navigation)
5.  [Credits & Resources](#credits--resources)
6.  [Support](#support)
7.  [License](#license)

---

## 1. Introduction

"Meal Prep Mastery" is a modern, clean, and fully responsive HTML5 landing page template designed specifically for meal prep services, nutrition coaches, healthy eating platforms, or any business in the health and wellness industry. This template provides an engaging and informative single-page layout to showcase your services, display meal plans, highlight community engagement, and capture leads effectively.

Built with pure HTML, CSS, and JavaScript, it offers easy customization without relying on complex frameworks.

## 2. Features

* **Clean & Modern Design:** A visually appealing layout with a focus on user experience.
* **Fully Responsive:** Optimized for desktop, tablet, and mobile devices.
* **Intuitive Navigation:** Sticky header with smooth scrolling and a functional hamburger menu for mobile.
* **Dynamic Content Sections:** Meal plans and community gallery content are populated via JavaScript, making updates simple and efficient.
* **Interactive Filters:** Functional filters for meal plans (All, Vegan, Keto, Quick Prep, Budget).
* **Dark Mode Toggle:** A user-friendly dark mode feature for enhanced viewing.
* **Lead Capture Form:** Prominently placed call-to-action section with an email signup form.
* **Well-Organized Code:** Clean, semantic HTML, modular CSS, and commented JavaScript for easy understanding and modification.
* **Font Awesome Integration:** Utilizes Font Awesome for scalable vector icons.
* **Google Fonts:** Modern typography with Poppins and Lato fonts.
* **Smooth Scroll:** Enhances user navigation experience.

## 3. Included Files

The template package includes the following files:

* `index.html`: The main HTML structure of the landing page.
* `styles.css`: All the styling for the template, including responsive rules and dark mode.
* `script.js`: JavaScript file handling dynamic content, dark mode, filtering, and mobile navigation.
* `README.md`: This documentation file.

## 4. How to Use

### Basic Setup

1.  **Download:** Download the template package.
2.  **Unzip:** Extract the contents of the zip file to your desired folder.
3.  **Open:** Open the `index.html` file in your web browser to view the template.
4.  **Upload:** To make it live, upload all the extracted files and folders to your web hosting server.

### Customizing Content (Text & Images)

Most of the static text content can be directly edited within the `index.html` file.

* **Titles & Paragraphs:** Locate the relevant sections (e.g., `<h1 class="hero-title">`, `<p>`) and change the text content.
* **Navigation Links:** Edit the `<a>` tags within the `<nav>` section.
* **Images:**
    * The hero image is defined in `index.html`: `<img src="https://images.unsplash.com/photo-1547592180-85f173990554" alt="Meal prep containers with healthy food">`. Replace the `src` attribute with the path to your own image.
    * Remember to replace any placeholder images with your actual product images. If you add local images, ensure they are in a sensible directory (e.g., an `images` folder) and update the paths accordingly in `index.html` and `script.js`.

### Updating Meal Plans & Community Posts

The content for the "Meal Plans" and "Community Creations" sections is managed within the `script.js` file. This makes it very easy to add, edit, or remove items without touching the HTML structure.

1.  **Open `script.js`:** Locate the `mealPlans` and `communityPosts` arrays at the top of the file.
2.  **Edit `mealPlans`:**
    ```javascript
    const mealPlans = [
        {
            id: 1,
            title: "Balanced Weekly Plan",
            image: "[https://images.unsplash.com/photo-1546069901-ba9599a7e63c](https://images.unsplash.com/photo-1546069901-ba9599a7e63c)", // Replace with your image URL
            tags: ["quick", "budget"], // Add/remove tags (e.g., "vegan", "keto", "quick", "budget")
            prepTime: "45 min",
            meals: "5",
            calories: "1800-2200"
        },
        // Add more plan objects here following the same structure
    ];
    ```
    * **`id`**: Unique identifier (can be any number).
    * **`title`**: Name of the meal plan.
    * **`image`**: URL of the meal plan image.
    * **`tags`**: An array of strings corresponding to the filter buttons. You can add new tags, but ensure you also add a corresponding `.plan-tag.<your-tag>` style in `styles.css` if you want a unique color.
    * **`prepTime`, `meals`, `calories`**: Relevant meta information.
3.  **Edit `communityPosts`:**
    ```javascript
    const communityPosts = [
        {
            id: 1,
            image: "[https://images.unsplash.com/photo-1547592180-85f173990554](https://images.unsplash.com/photo-1547592180-85f173990554)", // Replace with your image URL
            user: "@mealprep_pro", // User handle
            likes: 124 // Number of likes
        },
        // Add more post objects here following the same structure
    ];
    ```
    * **`id`**: Unique identifier.
    * **`image`**: URL of the community post image.
    * **`user`**: The user's handle/name.
    * **`likes`**: Number of likes.

### Dark Mode Toggle

The template includes a dark mode feature.

* The dark mode is controlled by JavaScript in `script.js` and CSS variables in `styles.css`.
* Users can click the moon/sun icon in the navigation to toggle dark mode.
* The preference is saved in the user's local storage.
* You can customize the dark mode colors by editing the `[data-theme="dark"]` section in `styles.css`.

### Contact Form

The email signup form in the CTA section (`signup-form` class) is a basic HTML form.

* Currently, the `script.js` only provides a simple JavaScript `alert()` upon submission for demonstration purposes.
* **To make the form functional**, you will need to integrate it with a backend service (e.g., a newsletter service like Mailchimp, a form-processing service like Formspree, or your own server-side script) to handle the email submission. This template does not include backend functionality.

### Customizing Styles (CSS)

All visual styles are controlled by `styles.css`.

1.  **Open `styles.css`:** This file contains all the CSS rules.
2.  **CSS Variables:** The top of the `styles.css` file defines CSS variables (`:root` and `[data-theme="dark"]`). These are central to easily changing the primary colors, text colors, background colors, and more across the entire template.
    ```css
    :root {
        --primary-color: #5BB381; /* Main green color */
        --text-color: #2D2D2D;    /* Main text color */
        --bg-color: #F8F8F8;     /* Light background */
        /* ... other variables */
    }

    /* Dark mode variables */
    [data-theme="dark"] {
        --bg-color: #1A1A1A; /* Dark background */
        --text-color: #F0F0F0; /* Light text */
        /* ... other variables */
    }
    ```
    Modify these variables to quickly change the template's color scheme.
3.  **Other Styles:** For more specific changes (e.g., font sizes, spacing, component layouts), you can directly edit the CSS rules for the respective classes or IDs.

### Responsive Navigation

The hamburger menu for mobile devices is handled by `script.js` and `styles.css`.

* The `.hamburger` button is visible on screens smaller than `768px`.
* Clicking it toggles the `.show` class on `.nav-links`, which reveals the navigation menu.
* Clicking a navigation link or the hamburger icon again will close the menu.

## 5. Credits & Resources

* **Icons:** [Font Awesome](https://fontawesome.com/)
* **Fonts:** [Google Fonts](https://fonts.google.com/) (`Poppins`, `Lato`)
* **Images:** All images used in the demo are from [Unsplash](https://unsplash.com/) and are intended for demonstration purposes. You should replace these with your own licensed images for commercial use.

## 6. Support

If you encounter any issues or have questions regarding the setup or customization of this template, please refer to this `README.md` file first. For further assistance, please contact the template author via the platform where you purchased this template.

## 7. License

This template is provided under a **[Your Chosen License - e.g., MIT License, or a Custom Commercial License]**. Please refer to the license terms provided with your download for usage rights and restrictions.

---

**Thank you for choosing Meal Prep Mastery! We hope it helps you achieve your goals.**
