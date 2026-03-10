# Video Site 2

Repo: Video-Site-2

Live URL: https://fregtatozcom.fun

---

## 🖥️ Run Locally with Node.js (No Docker Needed)

Serve the site with a tiny Node.js server—no containers required.

### Prerequisites

- [Node.js 18+](https://nodejs.org/) installed (`node --version`)

> **Note on port 80 and permissions**  
> On Linux/macOS, binding to ports below 1024 requires elevated privileges. Use
> `sudo` (or run your terminal as Administrator on Windows) when setting
> `PORT=80`.

### Start the server

```bash
# 1. Clone the repo (skip if you already have it)
git clone https://github.com/babymamaincoming-oss/Video-Site-2.git
cd Video-Site-2

# 2. Install dependencies (none beyond Node itself, but this creates a lockfile)
npm install

# 3. Start on the default port (3000)
npm start

# 4. (Optional) Serve on port 80 for easy LAN access
# macOS / Linux
sudo PORT=80 npm start
# Windows PowerShell (run as Administrator)
$env:PORT=80; npm start
```

Open in a browser:
- On this machine: `http://localhost:3000` (or `http://localhost` if using port 80)
- On another device on the same network: `http://<your-local-IP>`

Press **Ctrl+C** to stop the server.

---

### Firewall / network tips

- **Windows Defender Firewall** — When prompted, allow the app through the
  firewall, or add an inbound rule for TCP port 80.
- **macOS firewall** — Go to *System Settings → Network → Firewall* and allow
  incoming connections for the process (Docker/Python/Node).
- **Linux (ufw)** — Run `sudo ufw allow 80/tcp` if the firewall is enabled.
- **Router** — No router changes are needed for LAN access; port 80 traffic
  stays inside your local network.
