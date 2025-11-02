---
title: 'Complete Kali Linux Configuration from Scratch'
description: 'Step-by-step guide to install and configure Kali Linux as a professional pentesting environment'
pubDate: 2024-11-02
updatedDate: 2024-11-02
tags: ['kali-linux', 'configuration', 'pentesting', 'setup', 'tutorial']
logo: '/images/blog/entorno/logo.png'
heroImage: '/images/blog/entorno/Portada.png'
lang: 'en'
draft: false
---

# Complete Kali Linux Configuration from Scratch

Kali Linux is the most popular distribution for penetration testing and ethical hacking. In this guide, we'll configure it from scratch to have a professional pentesting environment.

## 📥 Installation

### Option 1: VirtualBox (Recommended for Beginners)

1. **Download VirtualBox**
   - Visit [virtualbox.org](https://www.virtualbox.org/)
   - Download the version for your OS

2. **Download Kali Linux**
   - Go to [kali.org/get-kali](https://www.kali.org/get-kali/)
   - Choose "Virtual Machines" → VirtualBox
   - Download the `.ova` file (Pre-built image)

3. **Import in VirtualBox**
   ```bash
   File → Import Appliance → Select the .ova file
   ```

4. **Recommended Settings**
   - RAM: 4GB minimum (8GB recommended)
   - CPU: 2 cores minimum
   - Disk: 40GB minimum
   - Network: Bridge or NAT

### Option 2: VMware Workstation

Similar process but download the VMware version from Kali's website.

### Option 3: Bare Metal Installation

For advanced users wanting maximum performance:

```bash
# Create bootable USB with Rufus or Etcher
# Boot from USB and follow installation wizard
```

## 🔧 Initial Configuration

### 1. Update the System

**CRITICAL:** Always update first!

```bash
# Update repositories
sudo apt update

# Upgrade installed packages
sudo apt full-upgrade -y

# Clean unnecessary packages
sudo apt autoremove -y
sudo apt autoclean
```

### 2. Change Default Credentials

Default user: `kali` / Password: `kali`

```bash
# Change password
passwd

# Optional: Create new user
sudo adduser newuser
sudo usermod -aG sudo newuser
```

### 3. Configure Network

```bash
# Check interfaces
ip a

# Configure static IP (optional)
sudo nano /etc/network/interfaces

# Example static configuration:
# auto eth0
# iface eth0 inet static
#   address 192.168.1.100
#   netmask 255.255.255.0
#   gateway 192.168.1.1
```

## 🛠️ Essential Tools Installation

### Pentesting Tools

```bash
# Update Metasploit
sudo msfdb init
sudo msfconsole -q -x "db_status; exit"

# Install additional tools
sudo apt install -y \
    gobuster \
    feroxbuster \
    dirbuster \
    nikto \
    sqlmap \
    john \
    hashcat \
    hydra \
    nmap \
    masscan \
    wireshark \
    burpsuite \
    zaproxy
```

### Development Tools

```bash
# Python tools
sudo apt install -y \
    python3-pip \
    python3-venv \
    pipx

# Install pipx tools
pipx install impacket
pipx install bloodhound
pipx ensurepath

# Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Go language
sudo apt install -y golang-go
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
```

### Web Shells and Wordlists

```bash
# Install SecLists
sudo apt install -y seclists

# Location: /usr/share/seclists/

# Download common wordlists
sudo apt install -y wordlists

# Unzip rockyou
sudo gunzip /usr/share/wordlists/rockyou.txt.gz
```

## 🎨 Customize Terminal

### Install Zsh + Oh My Zsh

```bash
# Install Zsh
sudo apt install -y zsh

# Install Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Change default shell
chsh -s $(which zsh)
```

### Powerlevel10k Theme

```bash
# Clone theme
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Edit ~/.zshrc
nano ~/.zshrc
# Change: ZSH_THEME="powerlevel10k/powerlevel10k"

# Restart terminal and configure
exec zsh
p10k configure
```

### Useful Plugins

```bash
# Edit ~/.zshrc
nano ~/.zshrc

# Add plugins:
plugins=(
  git
  sudo
  zsh-autosuggestions
  zsh-syntax-highlighting
  docker
  kubectl
)

# Install plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 📁 Directory Structure

Create organized workspace:

```bash
# Create pentesting directories
mkdir -p ~/pentesting/{recon,exploits,loot,reports,tools}
mkdir -p ~/htb ~/thm ~/vulnhub

# Create tools directory
mkdir -p ~/tools/{scanners,exploits,privesc,webshells}

# Set permissions
chmod -R 755 ~/pentesting ~/tools
```

## 🔐 VPN Configuration

### OpenVPN for HTB/THM

```bash
# Install OpenVPN
sudo apt install -y openvpn

# Download VPN file from HTB/THM
# Connect
sudo openvpn ~/Downloads/lab_username.ovpn

# Or create systemd service
sudo cp ~/Downloads/htb.ovpn /etc/openvpn/
sudo systemctl start openvpn@htb
```

### Alias for quick connection

```bash
# Add to ~/.zshrc or ~/.bashrc
echo 'alias htb="sudo openvpn ~/htb.ovpn"' >> ~/.zshrc
echo 'alias thm="sudo openvpn ~/thm.ovpn"' >> ~/.zshrc
```

## 🚀 Productivity Tools

### Tmux Configuration

```bash
# Install tmux
sudo apt install -y tmux

# Create config
cat > ~/.tmux.conf << 'EOF'
# Remap prefix to Ctrl-a
unbind C-b
set-prefix C-a

# Enable mouse
set -g mouse on

# Split panes with | and -
bind | split-window -h
bind - split-window -v

# Reload config
bind r source-file ~/.tmux.conf

# Start numbering at 1
set -g base-index 1
EOF
```

### Install Browser Extensions

For Firefox (pre-installed in Kali):

1. **FoxyProxy** - Proxy switcher for Burp Suite
2. **Wappalyzer** - Technology detector
3. **Cookie Editor** - Edit cookies
4. **User-Agent Switcher**

## 🛡️ Security Hardening

### Firewall Configuration

```bash
# Install UFW
sudo apt install -y ufw

# Configure basic rules
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable
```

### Disable Unnecessary Services

```bash
# Check running services
systemctl list-unit-files --state=enabled

# Disable if not needed
sudo systemctl disable bluetooth
sudo systemctl disable cups
```

## 📝 Useful Aliases

Add to `~/.zshrc` or `~/.bashrc`:

```bash
# Navigation
alias ..='cd ..'
alias ...='cd ../..'
alias ll='ls -lah'

# Network
alias myip='curl ifconfig.me'
alias ports='netstat -tulanp'

# Pentesting
alias nse='ls /usr/share/nmap/scripts/'
alias wwwroot='cd /var/www/html'
alias smbserver='impacket-smbserver share . -smb2support'

# HTB/THM
alias htbip='ip a | grep tun0 -A 2'
alias thmip='ip a | grep tun0 -A 2'

# Quick notes
alias note='nano ~/pentesting/notes.txt'
```

## 🎯 Recommended Tools to Install

### Web Application Testing

```bash
# Install additional web tools
go install github.com/ffuf/ffuf@latest
go install github.com/projectdiscovery/nuclei/v2/cmd/nuclei@latest
go install github.com/projectdiscovery/httpx/cmd/httpx@latest
go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
```

### Active Directory Tools

```bash
# Install Impacket scripts
pipx install impacket

# Install CrackMapExec
pipx install crackmapexec

# Install BloodHound
sudo apt install -y bloodhound neo4j
```

## 📚 Documentation System

### Install Obsidian or Notion

For taking notes during pentests:

```bash
# Install Obsidian
wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.4.16/obsidian_1.4.16_amd64.deb
sudo dpkg -i obsidian_1.4.16_amd64.deb
```

Or use CherryTree (pre-installed):

```bash
cherrytree
```

## ✅ Final Checklist

- [ ] System updated
- [ ] Password changed
- [ ] Essential tools installed
- [ ] Terminal customized (Zsh + Oh My Zsh)
- [ ] Directory structure created
- [ ] VPN configured
- [ ] Aliases set up
- [ ] Firewall configured
- [ ] Documentation tool ready
- [ ] Take snapshot/backup

## 🎓 Next Steps

Now that your Kali Linux is configured:

1. **Practice on CTF platforms:**
   - [HackTheBox](https://hackthebox.eu)
   - [TryHackMe](https://tryhackme.com)
   - [VulnHub](https://vulnhub.com)

2. **Learn methodologies:**
   - OWASP Testing Guide
   - PTES (Penetration Testing Execution Standard)
   - MITRE ATT&CK Framework

3. **Get certified:**
   - eJPT (Entry level)
   - OSCP (Advanced)
   - PNPT (Practical)

## 📖 Useful Resources

- [Kali Official Documentation](https://www.kali.org/docs/)
- [HackTricks](https://book.hacktricks.xyz/)
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- [GTFOBins](https://gtfobins.github.io/)

---

**Happy Hacking! 🔐**

*Remember: Always hack ethically and with permission. Use this knowledge responsibly.*
