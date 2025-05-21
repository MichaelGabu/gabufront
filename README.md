# Framework 1.0

Framework 1.0 is a lightweight and customizable CSS framework offering a collection of ready-to-use UI components to help you build web interfaces quickly and efficiently.

## Available Components

This framework includes the following components:

*   Autocomplete
*   Buttons
*   Cards
*   Chips
*   Collapsible
*   Color Utilities
*   Columns
*   Dropdown
*   Forms
*   Global Styles
*   Grid System
*   Modals
*   Multi-level Navigation
*   Pickadate (Date Picker)
*   Preloader
*   Tabs
*   Tooltips
*   Variables (for customization)

## How to Use

1.  **Link the CSS file:**

    In the `<head>` section of your HTML document, add a link to the `style.css` file:

    ```html
    <link rel="stylesheet" type="text/css" href="css/style.css">
    ```

2.  **Basic HTML Template:**

    Here's a starter template to begin using the framework:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Project with Framework 1.0</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <!-- It's recommended to also include the Google Font used by the framework -->
        <link href="https://fonts.googleapis.com/css?family=Catamaran:300,400,700,900" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Welcome to Framework 1.0</h1>
        </header>

        <section>
            <p>Start building your interface here using the framework's components!</p>
            <!-- Example: Using a button -->
            <button class="btn">Click Me</button>
        </section>

        <!-- If you use Javascript components like Modals, make sure to link your JS files here -->
    </body>
    </html>
    ```

    **Note:** For Javascript-based components like Modals, you will need to include your own Javascript logic. This framework primarily provides the styling for such components.

## Customization

Framework 1.0 is built using Stylus, a CSS preprocessor, which allows for easy customization through variables.

1.  **Modify Variables:**
    The primary file for customization is `css/components/variables.styl`. Here you can change colors, fonts, and other properties.

    For example, to change the primary color, you would modify:
    ```stylus
    // Colors
    primary-color   = #NEW_COLOR_HEX // Replace #NEW_COLOR_HEX with your desired color
    ```

2.  **Compile Stylus to CSS:**
    After making changes to the `.styl` files (especially `variables.styl`), you need to recompile the Stylus code into a single CSS file (`style.css`). If you have Stylus installed globally, you can use the following command in your project's root directory:

    ```bash
    stylus -w css/style.styl -o css/style.css
    ```
    The `-w` flag watches for changes in `style.styl` (which imports all other component `.styl` files) and automatically recompiles `style.css` when a change is detected. You can also run it without `-w` for a one-time compilation.

    If you don't have Stylus installed, you can install it via npm:
    ```bash
    npm install stylus -g
    ```

    Refer to the [official Stylus documentation](https://stylus-lang.com/) for more information on installation and usage.
