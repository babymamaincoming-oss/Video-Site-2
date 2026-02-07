# Quick Setup Guide for brotatobrotato.org

## ⚡ Quick Reference

### 1️⃣ IONOS DNS Records (Add These)

**A Records** (add all 4):
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

**CNAME Record** (for www):
```
www → babymamaincoming-oss.github.io.
```

### 2️⃣ GitHub Pages Custom Domain

Navigate to: `Settings → Pages → Custom domain`

Enter exactly:
```
brotatobrotato.org
```

After DNS verification succeeds, check:
```
☑ Enforce HTTPS
```

### 3️⃣ Verification Checklist

- [ ] DNS records added in IONOS
- [ ] Custom domain configured in GitHub Pages
- [ ] DNS check passed (green checkmark in GitHub)
- [ ] HTTPS enforced (checkbox enabled)
- [ ] https://brotatobrotato.org loads correctly
- [ ] https://www.brotatobrotato.org redirects to apex domain
- [ ] Browser shows HTTPS padlock (secure connection)

### ⏱️ Timeline

- DNS propagation: 15 minutes - 48 hours (usually < 1 hour)
- GitHub DNS verification: 1-10 minutes after propagation
- HTTPS certificate: 5-60 minutes after verification
- Full setup: Usually complete within 1-2 hours

### 🔍 Check DNS Status

Visit: https://www.whatsmydns.net/

Enter: `brotatobrotato.org`

Type: `A`

Should show: All 4 GitHub IP addresses

---

**Need more details?** See README.md for complete step-by-step instructions.
