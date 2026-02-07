# Video Site

A simple, elegant video site with an embedded YouTube video, hosted at **https://brotatobrotato.org**

## Domain Configuration Complete ✓

- **Domain**: brotatobrotato.org
- **Registrar**: IONOS
- **Hosting**: GitHub Pages
- **Primary URL**: https://brotatobrotato.org
- **WWW Redirect**: https://www.brotatobrotato.org → https://brotatobrotato.org

---

## Step-by-Step Setup Instructions

### Step 1: Configure DNS Records in IONOS

Log into your IONOS account and navigate to DNS settings for `brotatobrotato.org`. Add the following records **exactly as shown**:

#### Required A Records (for apex domain)
```
Type: A
Host: @
Points to: 185.199.108.153
TTL: 3600 (or leave default)

Type: A
Host: @
Points to: 185.199.109.153
TTL: 3600 (or leave default)

Type: A
Host: @
Points to: 185.199.110.153
TTL: 3600 (or leave default)

Type: A
Host: @
Points to: 185.199.111.153
TTL: 3600 (or leave default)
```

#### Optional CNAME Record (for www redirect)
```
Type: CNAME
Host: www
Points to: babymamaincoming-oss.github.io.
TTL: 3600 (or leave default)
```

**Note**: The trailing dot (`.`) in `babymamaincoming-oss.github.io.` may or may not be required depending on IONOS interface. Try without first; if it doesn't work, add the dot.

**Important**: Remove any existing A records or CNAME records for `@` or `www` that point to IONOS servers before adding these.

---

### Step 2: Configure GitHub Pages

1. Go to https://github.com/babymamaincoming-oss/Video-Site
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Custom domain", enter **exactly**:
   ```
   brotatobrotato.org
   ```
5. Click **Save**
6. Wait for DNS check to complete (GitHub will verify DNS records)
7. Once verified (may take a few minutes to hours), check the box:
   - ☑ **Enforce HTTPS**

**What NOT to enter**: Don't include `https://` or `www.` in the custom domain field. Just `brotatobrotato.org`

---

### Step 3: Verify HTTPS Setup

#### Expected Behavior:
- ✅ https://brotatobrotato.org → Works (primary site)
- ✅ http://brotatobrotato.org → Redirects to HTTPS
- ✅ https://www.brotatobrotato.org → Redirects to apex domain
- ✅ http://www.brotatobrotato.org → Redirects to HTTPS apex domain

#### How to Verify:

1. **Check DNS Propagation** (15 minutes - 48 hours):
   - Visit: https://www.whatsmydns.net/
   - Enter `brotatobrotato.org`
   - Select "A" record type
   - Should show all 4 GitHub IP addresses globally

2. **Test the Site**:
   - Open browser (private/incognito mode recommended)
   - Visit: http://brotatobrotato.org
   - Should redirect to: https://brotatobrotato.org
   - Verify HTTPS padlock appears in browser

3. **Test WWW Redirect**:
   - Visit: https://www.brotatobrotato.org
   - Should redirect to: https://brotatobrotato.org

#### Common Issues:

- **"DNS check failed"** in GitHub: Wait longer (DNS propagation can take up to 48 hours)
- **HTTPS checkbox disabled**: DNS not verified yet or HTTPS not ready (wait 5-10 minutes after DNS verification)
- **Certificate error**: HTTPS certificate provisioning in progress (wait up to 1 hour after DNS verification)
- **404 error**: CNAME file might be missing or incorrect (should contain only `brotatobrotato.org`)

---

## Technical Details

### GitHub Pages Requirements:
- ✅ **CNAME file** in repository root (already configured with `brotatobrotato.org`)
- ✅ **DNS A records** pointing to GitHub IPs (you'll configure in IONOS)
- ✅ **Custom domain setting** in GitHub repository (you'll configure in Settings → Pages)

### What Happens When You Visit the Site:
1. Browser queries DNS for `brotatobrotato.org`
2. DNS returns GitHub's A records
3. Browser connects to GitHub Pages servers
4. GitHub Pages checks CNAME file → serves this repository's content
5. HTTPS certificate automatically provisioned by GitHub

---

## Development

This is a simple static HTML site. To make changes, edit `index.html` and commit your changes.
