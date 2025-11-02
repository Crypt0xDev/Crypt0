---
title: "Guía Completa de Nmap para Pentesting"
description: "Tutorial detallado sobre el uso de Nmap para reconocimiento y enumeración en pruebas de penetración."
category: "guide"
pubDate: 2024-11-02
heroImage: "/images/archive/nmap-guide.png"
tags: ["nmap", "reconocimiento", "enumeración", "pentesting", "redes"]
lang: es
topic: "network-security"
difficulty: "beginner"
draft: false
---

# Guía Completa de Nmap para Pentesting

## Introducción

**Nmap** (Network Mapper) es una herramienta de código abierto para el descubrimiento de redes y auditoría de seguridad. Es esencial en cualquier toolkit de pentesting.

## Instalación

### Linux (Debian/Ubuntu)
```bash
sudo apt update
sudo apt install nmap
```

### Kali Linux
```bash
# Ya viene preinstalado
nmap --version
```

### Windows
Descargar desde [nmap.org](https://nmap.org/download.html)

## Conceptos Básicos

### Sintaxis General
```bash
nmap [Tipo de Escaneo] [Opciones] {objetivo}
```

### Escaneo Básico
```bash
# Escaneo simple
nmap 192.168.1.1

# Escaneo de red
nmap 192.168.1.0/24

# Escaneo de múltiples hosts
nmap 192.168.1.1,2,3
nmap 192.168.1.1-254
```

## Tipos de Escaneo

### Escaneo de Puertos

#### TCP Connect Scan (-sT)
```bash
nmap -sT 192.168.1.1
```
- Completa el handshake TCP de 3 vías
- Más ruidoso pero más preciso
- No requiere privilegios root

#### SYN Scan (-sS)
```bash
sudo nmap -sS 192.168.1.1
```
- "Stealth scan" o escaneo sigiloso
- No completa el handshake TCP
- Requiere privilegios root
- Más rápido y menos detectable

#### UDP Scan (-sU)
```bash
sudo nmap -sU 192.168.1.1
```
- Escanea puertos UDP
- Más lento que TCP
- Importante para servicios como DNS, SNMP

### Detección de Versiones (-sV)
```bash
nmap -sV 192.168.1.1
```
- Detecta versiones de servicios
- Útil para buscar vulnerabilidades específicas

### Escaneo con Scripts (-sC)
```bash
nmap -sC 192.168.1.1
```
- Ejecuta scripts NSE por defecto
- Realiza enumeración básica

### Detección de OS (-O)
```bash
sudo nmap -O 192.168.1.1
```
- Detecta sistema operativo
- Requiere privilegios root

## Opciones de Escaneo de Puertos

### Todos los puertos (-p-)
```bash
nmap -p- 192.168.1.1
```

### Puertos específicos
```bash
nmap -p 80,443,8080 192.168.1.1
nmap -p 1-1000 192.168.1.1
```

### Top ports (--top-ports)
```bash
nmap --top-ports 100 192.168.1.1
```

## Timing y Performance

### Plantillas de Timing (-T)
```bash
# T0 - Paranoid (muy lento, evasivo)
nmap -T0 192.168.1.1

# T1 - Sneaky
nmap -T1 192.168.1.1

# T2 - Polite
nmap -T2 192.168.1.1

# T3 - Normal (por defecto)
nmap -T3 192.168.1.1

# T4 - Aggressive (recomendado)
nmap -T4 192.168.1.1

# T5 - Insane (muy rápido)
nmap -T5 192.168.1.1
```

### Control de velocidad
```bash
# Paquetes por segundo
nmap --min-rate 5000 192.168.1.1

# Paralelización
nmap --min-parallelism 100 192.168.1.1
```

## Escaneo de Descubrimiento de Hosts

### Ping Scan (-sn)
```bash
nmap -sn 192.168.1.0/24
```
- Solo descubre hosts activos
- No escanea puertos

### Sin ping (-Pn)
```bash
nmap -Pn 192.168.1.1
```
- Asume que el host está activo
- Útil cuando ICMP está bloqueado

## Evasión de Firewalls

### Fragmentación (-f)
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

## Output y Reportes

### Guardar resultados
```bash
# Todos los formatos
nmap -oA escaneo 192.168.1.1

# Normal
nmap -oN escaneo.txt 192.168.1.1

# XML
nmap -oX escaneo.xml 192.168.1.1

# Grepable
nmap -oG escaneo.grep 192.168.1.1
```

## Escaneos Comunes en Pentesting

### Escaneo Rápido Completo
```bash
nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 192.168.1.1 -oG allPorts
```

### Escaneo Detallado de Servicios
```bash
nmap -sCV -p22,80,443 192.168.1.1 -oN targeted
```

### Escaneo Completo con Scripts
```bash
nmap -sC -sV -O -p- -T4 192.168.1.1 -oA full_scan
```

### Escaneo de Red Completo
```bash
nmap -sn 192.168.1.0/24 -oG hosts_alive
```

## Scripts NSE Útiles

### Vulnerabilidades
```bash
nmap --script vuln 192.168.1.1
```

### Fuerza Bruta
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

## Trucos y Tips

### Verbose (-v, -vv, -vvv)
```bash
nmap -vvv 192.168.1.1
```

### Resolver DNS (-n)
```bash
nmap -n 192.168.1.1
```

### IPv6
```bash
nmap -6 fe80::1
```

### Escaneo desde archivo
```bash
nmap -iL targets.txt
```

## Mejores Prácticas

1. **Siempre obtén permiso** antes de escanear redes
2. **Usa -oA** para guardar resultados en todos los formatos
3. **Combina -sC -sV** para mejor enumeración
4. **Ajusta timing** según necesidad (stealth vs speed)
5. **Verifica resultados** con múltiples escaneos

## Comandos Más Utilizados

```bash
# Escaneo inicial rápido
nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn TARGET -oG allPorts

# Escaneo detallado de puertos encontrados
nmap -sCV -p22,80,443 TARGET -oN targeted

# Escaneo de vulnerabilidades
nmap --script vuln -p22,80,443 TARGET

# Descubrimiento de red
nmap -sn 192.168.1.0/24 -oG hosts
```

## Recursos Adicionales

- [Documentación Oficial de Nmap](https://nmap.org/book/)
- [NSE Scripts](https://nmap.org/nsedoc/)
- [Nmap Cheat Sheet](https://www.stationx.net/nmap-cheat-sheet/)

## Conclusión

Nmap es una herramienta fundamental para cualquier pentester. Dominar sus opciones y flags es esencial para realizar reconocimientos efectivos y descubrir posibles vectores de ataque.

Practica regularmente con laboratorios legales como:
- HackTheBox
- TryHackMe
- VulnHub
- Tu propio laboratorio local
