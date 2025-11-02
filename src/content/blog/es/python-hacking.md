---
title: "Python para Hacking Ético: Scripts Esenciales"
description: "Descubre cómo Python se convierte en tu mejor aliado para pentesting con scripts y herramientas esenciales."
pubDate: 2024-10-28
author: "Crypt0xDev"
lang: es
tags: ["python", "hacking", "scripting", "pentesting"]
heroImage: "/images/blog/pythonhacking/portada.webp"
---

# Python para Hacking Ético: Scripts Esenciales

Python es el lenguaje preferido por pentesters debido a su simplicidad y poderosas librerías.

## ¿Por qué Python?

- Sintaxis clara y concisa
- Amplia colección de librerías de seguridad
- Multiplataforma
- Gran comunidad

## Librerías Esenciales

### Scapy - Manipulación de Paquetes

```python
from scapy.all import *

# Escaneo SYN
sr1(IP(dst="192.168.1.1")/TCP(dport=80,flags="S"))
```

### Requests - HTTP Testing

```python
import requests

response = requests.get('https://example.com')
print(response.headers)
```

### Socket - Network Programming

```python
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("example.com", 80))
```

## Script de Port Scanner

```python
import socket

def scan_port(host, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((host, port))
        sock.close()
        return result == 0
    except:
        return False

# Escanear puertos comunes
for port in [21, 22, 80, 443, 3306, 8080]:
    if scan_port("192.168.1.1", port):
        print(f"Puerto {port} está ABIERTO")
```

## Conclusión

Python ofrece herramientas poderosas para automatizar tareas de pentesting y desarrollar exploits personalizados.
