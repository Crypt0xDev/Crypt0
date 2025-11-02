---
title: "Complete Nmap Guide for Pentesting"
description: "Detailed tutorial on using Nmap for reconnaissance and enumeration in penetration testing."
category: "guide"
pubDate: 2024-11-02
heroImage: "/images/archive/nmap-guide.png"
tags: ["nmap", "reconnaissance", "enumeration", "pentesting", "networking"]
lang: en
topic: "network-security"
difficulty: "beginner"
draft: false
---

# Complete Nmap Guide for Pentesting

## Introduction

**Nmap** (Network Mapper) is an open-source tool for network discovery and security auditing. It's essential in any pentesting toolkit.

## Installation

### Linux (Debian/Ubuntu)
```bash
sudo apt update
sudo apt install nmap
```

### Kali Linux
```bash
# Already preinstalled
nmap --version
```

### Windows
Download from [nmap.org](https://nmap.org/download.html)

## Basic Concepts

### General Syntax
```bash
nmap [Scan Type] [Options] {target}
```

### Basic Scanning
```bash
# Simple scan
nmap 192.168.1.1

# Network scan
nmap 192.168.1.0/24

# Multiple hosts scan
nmap 192.168.1.1,2,3
nmap 192.168.1.1-254
```

## Scan Types

### Port Scanning

#### TCP Connect Scan (-sT)
```bash
nmap -sT 192.168.1.1
```
- Completes the 3-way TCP handshake
- Noisier but more accurate
- Doesn't require root privileges

#### SYN Scan (-sS)
```bash
sudo nmap -sS 192.168.1.1
```
- "Stealth scan"
- Doesn't complete TCP handshake
- Requires root privileges
- Faster and less detectable

#### UDP Scan (-sU)
```bash
sudo nmap -sU 192.168.1.1
```
- Scans UDP ports
- Slower than TCP
- Important for services like DNS, SNMP

### Version Detection (-sV)
```bash
nmap -sV 192.168.1.1
```
- Detects service versions
- Useful for finding specific vulnerabilities

### Script Scan (-sC)
```bash
nmap -sC 192.168.1.1
```
- Runs default NSE scripts
- Performs basic enumeration

### OS Detection (-O)
```bash
sudo nmap -O 192.168.1.1
```
- Detects operating system
- Requires root privileges

## Port Scanning Options

### All ports (-p-)
```bash
nmap -p- 192.168.1.1
```

### Specific ports
```bash
nmap -p 80,443,8080 192.168.1.1
nmap -p 1-1000 192.168.1.1
```

### Top ports (--top-ports)
```bash
nmap --top-ports 100 192.168.1.1
```

## Timing and Performance

### Timing Templates (-T)
```bash
# T0 - Paranoid (very slow, evasive)
nmap -T0 192.168.1.1

# T1 - Sneaky
nmap -T1 192.168.1.1

# T2 - Polite
nmap -T2 192.168.1.1

# T3 - Normal (default)
nmap -T3 192.168.1.1

# T4 - Aggressive (recommended)
nmap -T4 192.168.1.1

# T5 - Insane (very fast)
nmap -T5 192.168.1.1
```

### Speed control
```bash
# Packets per second
nmap --min-rate 5000 192.168.1.1

# Parallelization
nmap --min-parallelism 100 192.168.1.1
```

## Host Discovery Scanning

### Ping Scan (-sn)
```bash
nmap -sn 192.168.1.0/24
```
- Only discovers active hosts
- Doesn't scan ports

### No ping (-Pn)
```bash
nmap -Pn 192.168.1.1
```
- Assumes host is up
- Useful when ICMP is blocked

## Firewall Evasion

### Fragmentation (-f)
```bash
nmap -f 192.168.1.1
```

### Decoy Scan (-D)
```bash
nmap -D RND:10 192.168.1.1
```

### Source Port (-g)
```bash
nmap -g 53 192.168.1.1
```

## Output and Reports

### Save results
```bash
# All formats
nmap -oA scan 192.168.1.1

# Normal
nmap -oN scan.txt 192.168.1.1

# XML
nmap -oX scan.xml 192.168.1.1

# Grepable
nmap -oG scan.grep 192.168.1.1
```

## Common Pentesting Scans

### Quick Full Scan
```bash
nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 192.168.1.1 -oG allPorts
```

### Detailed Service Scan
```bash
nmap -sCV -p22,80,443 192.168.1.1 -oN targeted
```

### Full Scan with Scripts
```bash
nmap -sC -sV -O -p- -T4 192.168.1.1 -oA full_scan
```

### Full Network Scan
```bash
nmap -sn 192.168.1.0/24 -oG hosts_alive
```

## Useful NSE Scripts

### Vulnerabilities
```bash
nmap --script vuln 192.168.1.1
```

### Brute Force
```bash
nmap --script ssh-brute 192.168.1.1
```

### HTTP
```bash
nmap --script http-enum 192.168.1.1 -p80
```

### SMB
```bash
nmap --script smb-vuln* 192.168.1.1 -p445
```

## Tips and Tricks

### Verbose (-v, -vv, -vvv)
```bash
nmap -vvv 192.168.1.1
```

### DNS Resolution (-n)
```bash
nmap -n 192.168.1.1
```

### IPv6
```bash
nmap -6 fe80::1
```

### Scan from file
```bash
nmap -iL targets.txt
```

## Best Practices

1. **Always get permission** before scanning networks
2. **Use -oA** to save results in all formats
3. **Combine -sC -sV** for better enumeration
4. **Adjust timing** based on needs (stealth vs speed)
5. **Verify results** with multiple scans

## Most Used Commands

```bash
# Quick initial scan
nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn TARGET -oG allPorts

# Detailed scan of found ports
nmap -sCV -p22,80,443 TARGET -oN targeted

# Vulnerability scan
nmap --script vuln -p22,80,443 TARGET

# Network discovery
nmap -sn 192.168.1.0/24 -oG hosts
```

## Additional Resources

- [Official Nmap Documentation](https://nmap.org/book/)
- [NSE Scripts](https://nmap.org/nsedoc/)
- [Nmap Cheat Sheet](https://www.stationx.net/nmap-cheat-sheet/)

## Conclusion

Nmap is a fundamental tool for any pentester. Mastering its options and flags is essential for effective reconnaissance and discovering potential attack vectors.

Practice regularly with legal labs like:
- HackTheBox
- TryHackMe
- VulnHub
- Your own local lab
