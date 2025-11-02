---
title: "Criptografía Básica: Protege tu Información"
description: "Introducción a los conceptos fundamentales de criptografía y su aplicación práctica en seguridad informática."
pubDate: 2024-11-01
author: "Crypt0xDev"
lang: es
tags: ["criptografía", "seguridad", "cifrado"]
heroImage: "/images/blog/CriptografíaBásica/logo.jpg"
---

# Criptografía Básica: Protege tu Información

La criptografía es la ciencia de proteger información mediante técnicas de cifrado.

## Tipos de Cifrado

### Cifrado Simétrico

Usa la misma clave para cifrar y descifrar.

**Algoritmos comunes:**
- AES (Advanced Encryption Standard)
- DES (obsoleto)
- ChaCha20

```python
from cryptography.fernet import Fernet

# Generar clave
key = Fernet.generate_key()
cipher = Fernet(key)

# Cifrar
encrypted = cipher.encrypt(b"Mensaje secreto")

# Descifrar
decrypted = cipher.decrypt(encrypted)
```

### Cifrado Asimétrico

Usa un par de claves: pública y privada.

**Algoritmos comunes:**
- RSA
- ECC (Elliptic Curve Cryptography)
- Ed25519

### Funciones Hash

Generan un valor único de longitud fija.

**Algoritmos:**
- SHA-256
- SHA-3
- bcrypt (para contraseñas)

```python
import hashlib

# Hash SHA-256
data = "mi password".encode()
hash_result = hashlib.sha256(data).hexdigest()
```

## Aplicaciones Prácticas

1. **HTTPS**: Comunicaciones web seguras
2. **VPN**: Túneles cifrados
3. **Contraseñas**: Almacenamiento seguro con hashing
4. **Blockchain**: Integridad de datos

## Conclusión

La criptografía es fundamental para la seguridad moderna. Comprender sus principios básicos es esencial para cualquier profesional de ciberseguridad.
