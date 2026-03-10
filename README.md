# Video Site 2

Repo: Video-Site-2

Live URL: https://fregtatozcom.fun

---

## 🔒 Authentication

The landing page requires a username and password before any content is visible.

### Default credentials

| Field    | Value          |
|----------|----------------|
| Username | `admin`        |
| Password | `fregtator2024` |

### Changing the credentials

Open `index.html` and edit the two variables near the bottom of the `<script>` block:

```js
var AUTH_USER = "admin";
var AUTH_PASS = "fregtator2024";
```

Replace those values with your desired username and password, then save and commit.

> **Security note:** Because this is a static GitHub Pages site there is no server-side secret storage. The credentials live in the HTML source. Only use a password you are comfortable being visible in the page source. For stronger protection, add a server-side authentication layer in front of the site (e.g. Cloudflare Access, Netlify Identity, or a serverless function).

### Session persistence

Authentication state is stored in `sessionStorage`. This means:

- The login gate is shown again when the browser tab is closed and re-opened.
- Refreshing the page within the same tab keeps the user logged in.
- Clicking **Log out** clears the session and returns to the login gate.

---

## 🧪 Testing the flow locally

1. Open `index.html` directly in a browser (no build step required):
   ```
   open index.html          # macOS
   start index.html         # Windows
   xdg-open index.html      # Linux
   ```
   Or serve it with any static server, e.g.:
   ```
   npx serve .
   # then visit http://localhost:3000
   ```

2. **Unauthenticated state** – the page should show the login form and no video.

3. **Wrong credentials** – enter anything other than the correct username/password; an error message should appear.

4. **Correct credentials** – enter `admin` / `fregtator2024`; the video should appear and the login form should disappear.

5. **Refresh** – reload the tab; the video should still be visible (sessionStorage persists).

6. **Logout** – click **Log out**; the login gate should reappear.

7. **New tab / closed tab** – open a new tab or close and reopen; the login gate should be shown again.
