---
title: "Basic Cryptography: Protect Your Information"
description: "Introduction to fundamental cryptography concepts and their practical application in computer security."
pubDate: 2024-11-01
author: "Crypt0xDev"
lang: en
tags: ["cryptography", "security", "encryption"]
heroImage: "/images/blog/CriptografíaBásica/logo.jpg"
---

# Basic Cryptography: Protect Your Information

Cryptography is the science of protecting information through encryption techniques.

## Types of Encryption

### Symmetric Encryption

Uses the same key for encryption and decryption.

**Common algorithms:**
- AES (Advanced Encryption Standard)
- DES (obsolete)
- ChaCha20

```python
from cryptography.fernet import Fernet

# Generate key
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt
encrypted = cipher.encrypt(b"Secret message")

# Decrypt
decrypted = cipher.decrypt(encrypted)
```

### Asymmetric Encryption

Uses a key pair: public and private.

**Common algorithms:**
- RSA
- ECC (Elliptic Curve Cryptography)
- Ed25519

### Hash Functions

Generate a unique fixed-length value.

**Algorithms:**
- SHA-256
- SHA-3
- bcrypt (for passwords)

```python
import hashlib

# SHA-256 hash
data = "my password".encode()
hash_result = hashlib.sha256(data).hexdigest()
```

## Practical Applications

1. **HTTPS**: Secure web communications
2. **VPN**: Encrypted tunnels
3. **Passwords**: Secure storage with hashing
4. **Blockchain**: Data integrity

## Conclusion

Cryptography is fundamental to modern security. Understanding its basic principles is essential for any cybersecurity professional.
