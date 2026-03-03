# noukhez3.com – Live deployment guide (WEBREXO)

Use this to put your PHP site live on **noukhez3.com** using your WEBREXO panel.

---

## 1. Where to upload (document root)

- **Home path on server:** `/home/sites/244/7/7c5b9ac05/`
- **Web root:** Usually one of these:
  - `public_html` inside that path → `/home/sites/244/7/7c5b9ac05/public_html/`
  - Or the home path itself if the host uses it as the site root.

Upload the **contents** of the `php_website` folder into that **document root** (not inside a subfolder named `php_website`). So the server should have:

- `index.php`, `config.php`, `admin.php`, `contact.php`, `about.php`, `work.php`, `services.php`, `privacy.php`, `terms.php`, `thank-you.php` at the root  
- Folders: `api/`, `assets/`, `css/`, `data/`, `includes/`, `js/`, `services/`, `vendor/`  
- Files: `composer.json`, `composer.lock` (if present)

---

## 2. How to upload

**Option A – File Manager (FTP locked ho to)**  
1. Panel me **Web Files → File Manager** open karein.  
2. Document root folder (e.g. `public_html`) open karein.  
3. Sab files/folders upload karein (zip bana ke upload then extract bhi kar sakte hain).

**Option B – FTP**  
1. **FTP Status** me ja kar lock off karein (agar upload via FTP karna ho).  
2. **FTP Server:** `ftp.noukhez3.com`  
3. Same path (document root) me connect karke `php_website` ke andar ki saari cheezen upload karein.

---

## 3. Config for root domain

Domain root par chalane ke liye `config.php` me:

- `BASE_PATH` empty hi rehna chahiye (already `''`).  
- Koi change ki zaroorat nahi agar site `https://noukhez3.com` par chal rahi hai.

---

## 4. Permissions

- **data/** folder **writable** hona chahiye (leads + admin SMTP settings save hone ke liye).  
  File Manager se `data` par right‑click → Permissions → **755** ya **775** set karein.  
  Agar `data` nahi bana hai to pehli lead ya admin save se khud ban jayega; phir bhi us folder ko 755/775 kar dein.

---

## 5. Email (PHPMailer) on server

Agar server par **Composer** available hai (SSH):

```bash
cd /home/sites/244/7/7c5b9ac05/public_html
# or your actual document root
composer install
```

Agar Composer nahi hai to apne computer se `php_website` me `composer install` chala kar **pura `vendor` folder** bhi upload kar dein. Tab bhi emails chalenge.

Live domain ke liye Admin me **SMTP** set karein (e.g. host ka **Outgoing Mail Server:** `smtp.noukhez3.com`), From/Notification email, port 587/465, and enable “Enable email notifications”.

---

## 6. DNS (domain live dikhane ke liye)

- **A record** for `noukhez3.com` (and `www` agar use karte ho) → **185.151.30.186**  
- Propagation me 24–48 hours lag sakte hain.  
- Panel me **“View Temporary URL”** se pehle check kar sakte hain ke site server par sahi chal rahi hai.

---

## 7. After upload – check list

1. **Home:** `https://noukhez3.com` ya Temp URL → home page sahi dikhe.  
2. **Contact form:** Ek test submit karein → thank-you page aaye, Admin me lead dikhe.  
3. **Admin:** `https://noukhez3.com/admin.php` → login (password: `Admin$123`), leads + SMTP settings save.  
4. **Send test email** (Admin) → inbox me test email aaye.

---

## 8. Security (recommended)

- Live par **Admin password** `admin.php` me `ADMIN_PASSWORD` change karein (strong password).  
- `data/` folder browser se direct access na ho (host usually already block karta hai); agar `.htaccess` allow ho to `data/` me deny rule add kar sakte hain.

---

**Summary:**  
Upload `php_website` ke **contents** into document root (e.g. `public_html`), `data` writable, `vendor` ya `composer install` ensure karein, DNS A → 185.151.30.186, phir noukhez3.com live ho jayega.
