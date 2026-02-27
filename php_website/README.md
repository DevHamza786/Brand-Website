# Aussie App Studio – PHP version

This folder contains a PHP port of the Next.js Brand Website with the same design, behaviour, and structure.

## Requirements

- PHP 7.4+ (with `session`, `json`, `file_get_contents`/`file_put_contents`)
- Web server (Apache, Nginx, or PHP built-in) with document root pointing at this folder (or at the parent with this folder as subdirectory)
- [Composer](https://getcomposer.org/) (for PHPMailer – required for email notifications via SMTP)

## Setup

1. **Email (PHPMailer)**  
   From the `php_website` folder run:
   ```bash
   composer install
   ```
   This installs PHPMailer. Then in **Admin** (e.g. `admin.php`) set **Email notifications**: enable the checkbox, fill in **SMTP host** (e.g. `smtp.gmail.com` or `sandbox.smtp.mailtrap.io`), **SMTP port** (587 or 465), **SMTP user**, **SMTP password**, **From email**, and **Notification email**. New contact form submissions will be sent via SMTP to the notification address.

2. **Assets**  
   The `assets` folder should contain all static files from the main project’s `public` folder (logo, images, tech icons, etc.).  
   If `assets` is empty, copy the contents of `../public` into `php_website/assets` so that paths like `/assets/logo.png`, `/assets/Home/...`, `/assets/Work/...`, `/assets/tech/...` work.

3. **Data directory**  
   The `data` folder must be writable by the web server (for `leads.json` and `admin-config.json`).  
   If it does not exist, the API will create it when the first lead is submitted or when admin settings are saved.

4. **Base path (optional)**  
   If the site is not at the document root (e.g. you use `https://example.com/php_website/`), set the base path at the top of `config.php`:
   ```php
   define('BASE_PATH', '/php_website');
   ```

## Pages

- **Home:** `index.php` – Hero slider, stats, pillars, trust block, how we work, tech stack, why choose, studio section, testimonials, work slider, FAQ, get quote.
- **Services:** `services.php` – Service cards and form; subpages in `services/` (e.g. `web-development.php`, `mobile-apps.php`, `ui-ux.php`, `maintenance.php`).
- **Work:** `work.php` – Portfolio and project sliders.
- **About:** `about.php` – Story, values, “what we do” links.
- **Contact:** `contact.php` – Contact form and contact details.
- **Thank you:** `thank-you.php` – Shown after form submission.
- **Privacy / Terms:** `privacy.php`, `terms.php`.
- **Admin:** `admin.php` – Password: `Admin$123`. View leads, set notification email and SMTP (stored in `data/admin-config.json`). Session-based; refresh keeps you logged in.

## API (used by the front end)

- **POST** `api/contact.php` – Body: JSON `{ name, email, message?, phone?, company? }`. Validates, appends to `data/leads.json`, and sends a notification email via PHPMailer (SMTP) if admin has enabled email and set SMTP host/notification address. Falls back to PHP `mail()` if PHPMailer is not installed.
- **GET** `api/admin/leads.php` – Returns leads (requires admin session).
- **GET/POST** `api/admin/settings.php` – Read/update admin config (requires admin session).

## Running locally

From the project root:

```bash
cd php_website
php -S localhost:8080
```

Then open `http://localhost:8080` (or `http://localhost:8080/index.php`).  
If you run from the parent directory, use:

```bash
php -S localhost:8080 -t php_website
```

and open `http://localhost:8080`. In that case you may need to set `BASE_PATH` to `'/php_website'` in `config.php` so links and assets resolve correctly.

## Design and behaviour

- Tailwind CSS is loaded via CDN; custom theme (colours, fonts, max-width) is in the header script and in `css/style.css`.
- Fonts: Outfit (headlines), Source Sans 3 (body), loaded from Google Fonts.
- Sliders (hero, testimonials, work) and tech tabs are driven by `js/sliders.js`, `js/tech-tabs.js`, and `js/faq.js`.
- Contact forms submit via JavaScript to `api/contact.php` and redirect to `thank-you.php` on success.
- Admin persists login in session; the front end also stores a flag in `localStorage` for UX consistency.

## Notes

- On a typical cPanel host, upload the contents of `php_website` into `public_html` (or a subfolder) and ensure `data` is writable.
- Email notifications use **PHPMailer** with the admin SMTP settings when `composer install` has been run and SMTP host is set. Otherwise the API falls back to PHP’s `mail()`. Configure SMTP in Admin for reliable delivery (e.g. Gmail, Mailtrap, or your host’s SMTP).
