# Video Site 2

Repo: Video-Site-2

Live URL: https://fregtatozcom.fun

---

## 🖥️ Running Locally on Port 80 (LAN-accessible)

Serving on port 80 lets every device on your network open the site by browsing
to your machine's local IP address (e.g. `http://192.168.1.100`) — no port
number needed.

### Prerequisites

| Method | What you need |
|--------|---------------|
| **Docker** (recommended) | [Docker Desktop / Engine](https://docs.docker.com/engine/install/) + the `docker compose` plugin |
| **Python 3** (alternative) | Python 3 installed (`python3 --version`) |
| **Node.js** (alternative) | Node.js installed (`node --version`) |

> **Note on port 80 and permissions**  
> On Linux/macOS, binding to ports below 1024 normally requires elevated
> privileges. The Docker method handles this transparently. The Python and
> Node alternatives require `sudo`.

---

### Method 1 — Docker (recommended)

A `docker-compose.yml` is included in the repo. It spins up a lightweight
nginx container that serves `index.html` on port 80.

```bash
# 1. Clone the repo (skip if you already have it)
git clone https://github.com/babymamaincoming-oss/Video-Site-2.git
cd Video-Site-2

# 2. Start the server
docker compose up -d

# 3. Find your machine's local IP address
#    macOS / Linux:
hostname -I | awk '{print $1}'             # Linux (first non-loopback IP)
ipconfig getifaddr en0                     # macOS (Wi-Fi)

#    Windows (PowerShell):
(Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object {$_.IPAddress -notmatch "^127"} |
  Select-Object -First 1).IPAddress
#    (If you have multiple adapters, pick the IP on the same subnet as your LAN)

# 4. Open in a browser on THIS machine:
#    http://localhost
#
#    Open on ANY other machine on the same network:
#    http://<your-local-IP>   e.g. http://192.168.1.100

# 5. Stop the server when you're done
docker compose down
```

---

### Method 2 — Python 3 (no Docker required)

```bash
cd Video-Site-2

# macOS / Linux (sudo required for port 80)
sudo python3 -m http.server 80

# Windows (run PowerShell as Administrator)
python -m http.server 80
```

Then open `http://localhost` or `http://<your-local-IP>` from any browser on
the network.  
Press **Ctrl+C** to stop.

---

### Method 3 — Node.js / npx (no Docker required)

```bash
cd Video-Site-2

# macOS / Linux (sudo required for port 80)
sudo npx serve -l 80

# Windows (run PowerShell as Administrator)
npx serve -l 80
```

Then open `http://localhost` or `http://<your-local-IP>` from any browser on
the network.  
Press **Ctrl+C** to stop.

---

### Firewall / network tips

- **Windows Defender Firewall** — When prompted, allow the app through the
  firewall, or add an inbound rule for TCP port 80.
- **macOS firewall** — Go to *System Settings → Network → Firewall* and allow
  incoming connections for the process (Docker/Python/Node).
- **Linux (ufw)** — Run `sudo ufw allow 80/tcp` if the firewall is enabled.
- **Router** — No router changes are needed for LAN access; port 80 traffic
  stays inside your local network.
