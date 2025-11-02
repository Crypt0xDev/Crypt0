---
title: 'Configuración Completa de Kali Linux desde Cero'
description: 'Guía paso a paso para instalar y configurar Kali Linux como entorno profesional de pentesting'
pubDate: 2024-11-02
updatedDate: 2024-11-02
tags: ['kali-linux', 'configuracion', 'pentesting', 'setup', 'tutorial']
logo: '/images/blog/entorno/logo.png'
heroImage: '/images/blog/entorno/Portada.png'
lang: 'es'
draft: false
---

# Configuración Completa de Kali Linux desde Cero

Kali Linux es la distribución más popular para pruebas de penetración y hacking ético. En esta guía, la configuraremos desde cero para tener un entorno profesional de pentesting.

## 📥 Instalación

### Opción 1: VirtualBox (Recomendado para Principiantes)

1. **Descargar VirtualBox**
   - Visita [virtualbox.org](https://www.virtualbox.org/)
   - Descarga la versión para tu sistema operativo

2. **Descargar Kali Linux**
   - Ve a [kali.org/get-kali](https://www.kali.org/get-kali/)
   - Elige "Virtual Machines" → VirtualBox
   - Descarga el archivo `.ova` (Imagen pre-construida)

3. **Importar en VirtualBox**
   ```bash
   Archivo → Importar servicio virtualizado → Selecciona el archivo .ova
   ```

4. **Configuración Recomendada**
   - RAM: 4GB mínimo (8GB recomendado)
   - CPU: 2 núcleos mínimo
   - Disco: 40GB mínimo
   - Red: Puente o NAT

### Opción 2: VMware Workstation

Proceso similar pero descarga la versión VMware desde el sitio web de Kali.

### Opción 3: Instalación en Hardware Real

Para usuarios avanzados que quieren máximo rendimiento:

```bash
# Crear USB booteable con Rufus o Etcher
# Arrancar desde USB y seguir el asistente de instalación
```

## 🔧 Configuración Inicial

### 1. Actualizar el Sistema

**CRÍTICO:** ¡Siempre actualizar primero!

```bash
# Actualizar repositorios
sudo apt update

# Actualizar paquetes instalados
sudo apt full-upgrade -y

# Limpiar paquetes innecesarios
sudo apt autoremove -y
sudo apt autoclean
```

### 2. Cambiar Credenciales por Defecto

Usuario por defecto: `kali` / Contraseña: `kali`

```bash
# Cambiar contraseña
passwd

# Opcional: Crear nuevo usuario
sudo adduser nuevousuario
sudo usermod -aG sudo nuevousuario
```

### 3. Configurar Red

```bash
# Verificar interfaces
ip a

# Configurar IP estática (opcional)
sudo nano /etc/network/interfaces

# Ejemplo de configuración estática:
# auto eth0
# iface eth0 inet static
#   address 192.168.1.100
#   netmask 255.255.255.0
#   gateway 192.168.1.1
```

## 🛠️ Instalación de Herramientas Esenciales

### Herramientas de Pentesting

```bash
# Actualizar Metasploit
sudo msfdb init
sudo msfconsole -q -x "db_status; exit"

# Instalar herramientas adicionales
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

### Herramientas de Desarrollo

```bash
# Herramientas Python
sudo apt install -y \
    python3-pip \
    python3-venv \
    pipx

# Instalar herramientas con pipx
pipx install impacket
pipx install bloodhound
pipx ensurepath

# Node.js y npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Lenguaje Go
sudo apt install -y golang-go
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
```

### Web Shells y Wordlists

```bash
# Instalar SecLists
sudo apt install -y seclists

# Ubicación: /usr/share/seclists/

# Descargar wordlists comunes
sudo apt install -y wordlists

# Descomprimir rockyou
sudo gunzip /usr/share/wordlists/rockyou.txt.gz
```

## 🎨 Personalizar Terminal

### Instalar Zsh + Oh My Zsh

```bash
# Instalar Zsh
sudo apt install -y zsh

# Instalar Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Cambiar shell por defecto
chsh -s $(which zsh)
```

### Tema Powerlevel10k

```bash
# Clonar tema
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Editar ~/.zshrc
nano ~/.zshrc
# Cambiar: ZSH_THEME="powerlevel10k/powerlevel10k"

# Reiniciar terminal y configurar
exec zsh
p10k configure
```

### Plugins Útiles

```bash
# Editar ~/.zshrc
nano ~/.zshrc

# Agregar plugins:
plugins=(
  git
  sudo
  zsh-autosuggestions
  zsh-syntax-highlighting
  docker
  kubectl
)

# Instalar plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 📁 Estructura de Directorios

Crear espacio de trabajo organizado:

```bash
# Crear directorios de pentesting
mkdir -p ~/pentesting/{recon,exploits,loot,reports,tools}
mkdir -p ~/htb ~/thm ~/vulnhub

# Crear directorio de herramientas
mkdir -p ~/tools/{scanners,exploits,privesc,webshells}

# Establecer permisos
chmod -R 755 ~/pentesting ~/tools
```

## 🔐 Configuración de VPN

### OpenVPN para HTB/THM

```bash
# Instalar OpenVPN
sudo apt install -y openvpn

# Descargar archivo VPN de HTB/THM
# Conectar
sudo openvpn ~/Downloads/lab_usuario.ovpn

# O crear servicio systemd
sudo cp ~/Downloads/htb.ovpn /etc/openvpn/
sudo systemctl start openvpn@htb
```

### Alias para conexión rápida

```bash
# Agregar a ~/.zshrc o ~/.bashrc
echo 'alias htb="sudo openvpn ~/htb.ovpn"' >> ~/.zshrc
echo 'alias thm="sudo openvpn ~/thm.ovpn"' >> ~/.zshrc
```

## 🚀 Herramientas de Productividad

### Configuración de Tmux

```bash
# Instalar tmux
sudo apt install -y tmux

# Crear configuración
cat > ~/.tmux.conf << 'EOF'
# Remapear prefijo a Ctrl-a
unbind C-b
set-prefix C-a

# Habilitar mouse
set -g mouse on

# Dividir paneles con | y -
bind | split-window -h
bind - split-window -v

# Recargar configuración
bind r source-file ~/.tmux.conf

# Empezar numeración en 1
set -g base-index 1
EOF
```

### Instalar Extensiones del Navegador

Para Firefox (pre-instalado en Kali):

1. **FoxyProxy** - Cambiador de proxy para Burp Suite
2. **Wappalyzer** - Detector de tecnologías
3. **Cookie Editor** - Editar cookies
4. **User-Agent Switcher**

## 🛡️ Hardening de Seguridad

### Configuración de Firewall

```bash
# Instalar UFW
sudo apt install -y ufw

# Configurar reglas básicas
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable
```

### Desactivar Servicios Innecesarios

```bash
# Verificar servicios activos
systemctl list-unit-files --state=enabled

# Desactivar si no se necesitan
sudo systemctl disable bluetooth
sudo systemctl disable cups
```

## 📝 Alias Útiles

Agregar a `~/.zshrc` o `~/.bashrc`:

```bash
# Navegación
alias ..='cd ..'
alias ...='cd ../..'
alias ll='ls -lah'

# Red
alias miip='curl ifconfig.me'
alias puertos='netstat -tulanp'

# Pentesting
alias nse='ls /usr/share/nmap/scripts/'
alias wwwroot='cd /var/www/html'
alias smbserver='impacket-smbserver share . -smb2support'

# HTB/THM
alias htbip='ip a | grep tun0 -A 2'
alias thmip='ip a | grep tun0 -A 2'

# Notas rápidas
alias nota='nano ~/pentesting/notas.txt'
```

## 🎯 Herramientas Recomendadas para Instalar

### Testing de Aplicaciones Web

```bash
# Instalar herramientas web adicionales
go install github.com/ffuf/ffuf@latest
go install github.com/projectdiscovery/nuclei/v2/cmd/nuclei@latest
go install github.com/projectdiscovery/httpx/cmd/httpx@latest
go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
```

### Herramientas de Active Directory

```bash
# Instalar scripts de Impacket
pipx install impacket

# Instalar CrackMapExec
pipx install crackmapexec

# Instalar BloodHound
sudo apt install -y bloodhound neo4j
```

## 📚 Sistema de Documentación

### Instalar Obsidian o Notion

Para tomar notas durante pentests:

```bash
# Instalar Obsidian
wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.4.16/obsidian_1.4.16_amd64.deb
sudo dpkg -i obsidian_1.4.16_amd64.deb
```

O usar CherryTree (pre-instalado):

```bash
cherrytree
```

## ✅ Checklist Final

- [ ] Sistema actualizado
- [ ] Contraseña cambiada
- [ ] Herramientas esenciales instaladas
- [ ] Terminal personalizada (Zsh + Oh My Zsh)
- [ ] Estructura de directorios creada
- [ ] VPN configurada
- [ ] Alias configurados
- [ ] Firewall configurado
- [ ] Herramienta de documentación lista
- [ ] Snapshot/backup realizado

## 🎓 Próximos Pasos

Ahora que tu Kali Linux está configurado:

1. **Practica en plataformas CTF:**
   - [HackTheBox](https://hackthebox.eu)
   - [TryHackMe](https://tryhackme.com)
   - [VulnHub](https://vulnhub.com)

2. **Aprende metodologías:**
   - OWASP Testing Guide
   - PTES (Penetration Testing Execution Standard)
   - MITRE ATT&CK Framework

3. **Obtén certificaciones:**
   - eJPT (Nivel de entrada)
   - OSCP (Avanzado)
   - PNPT (Práctico)

## 📖 Recursos Útiles

- [Documentación Oficial de Kali](https://www.kali.org/docs/)
- [HackTricks](https://book.hacktricks.xyz/)
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- [GTFOBins](https://gtfobins.github.io/)

---

**¡Feliz Hacking! 🔐**

*Recuerda: Siempre hackea éticamente y con permiso. Usa este conocimiento de manera responsable.*
