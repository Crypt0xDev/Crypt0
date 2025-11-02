# Análisis de Imágenes y Creación de Writeups - HackTheBox

## Fecha: 2 de noviembre de 2024

### Resumen del Análisis

He analizado todas las imágenes del proyecto, especialmente las de **HackTheBox (HTB)**, y he creado los writeups faltantes para las máquinas que tenían imágenes pero no documentación.

## Estructura de Imágenes HTB

### Carpetas con imágenes encontradas:

```
public/images/writeups/htb/
├── ascension/   (vacía - writeup ya existía)
├── beep/        (vacía - writeup ya existía)
├── codify/      ✓ card.png, logo.png
├── jet/         (vacía - writeup ya existía)
├── keeper/      ✓ card.png, logo.png
├── lame/        (vacía - writeup ya existía)
├── pc/          ✓ card.png, logo.png
├── sau/         ✓ card.png, logo.png
└── topology/    ✓ card.png, logo.png
```

## Writeups Creados

He creado **10 nuevos archivos de writeup** (5 en español y 5 en inglés):

### 1. Codify
- **Archivos**: `codify.md` (es/en)
- **Dificultad**: Easy
- **Vulnerabilidades**: CVE-2023-30547 (vm2 sandbox escape)
- **Técnicas**: 
  - Explotación de sandbox vm2
  - SQLite database enumeration
  - Bash script exploitation (pattern matching)
  - Bcrypt hash cracking

### 2. Keeper
- **Archivos**: `keeper.md` (es/en)
- **Dificultad**: Easy
- **Vulnerabilidades**: CVE-2023-32784 (KeePass), default credentials
- **Técnicas**:
  - Request Tracker exploitation
  - KeePass master password extraction
  - Memory dump analysis
  - PuTTY to OpenSSH key conversion

### 3. PC
- **Archivos**: `pc.md` (es/en)
- **Dificultad**: Easy
- **Vulnerabilidades**: CVE-2023-0297 (pyLoad), SQL Injection
- **Técnicas**:
  - gRPC enumeration and exploitation
  - SQL Injection en contextos gRPC
  - Port forwarding
  - pyLoad RCE pre-auth

### 4. Sau
- **Archivos**: `sau.md` (es/en)
- **Dificultad**: Easy
- **Vulnerabilidades**: CVE-2023-27163 (SSRF), CVE-2023-26035 (Command Injection)
- **Técnicas**:
  - SSRF en Request-Baskets
  - Maltrail command injection
  - systemctl/less pager exploitation

### 5. Topology
- **Archivos**: `topology.md` (es/en)
- **Dificultad**: Easy
- **Vulnerabilidades**: LaTeX injection, weak credentials
- **Técnicas**:
  - LaTeX code injection
  - File reading via LaTeX
  - .htpasswd cracking (APR1-MD5)
  - gnuplot script exploitation
  - Cron job exploitation

## Características de los Writeups

### Estructura Común:
1. **Metadata completa** (YAML frontmatter)
   - Título, descripción, fecha
   - Dificultad, OS, plataforma
   - Tags, vulnerabilidades, técnicas MITRE ATT&CK
   - Certificaciones relacionadas (OSCP, eJPT)
   - Imágenes (logo y heroImage)

2. **Contenido detallado**:
   - Introducción
   - Reconocimiento (nmap, enumeración)
   - Explotación paso a paso
   - Post-explotación
   - Escalada de privilegios
   - Métodos alternativos
   - Conclusión con lecciones aprendidas
   - Mitigaciones recomendadas

3. **Código completo**:
   - Comandos de terminal
   - Scripts de explotación
   - Payloads
   - Ejemplos prácticos

### Metadata Incluida:

- **platform**: htb
- **category**: machines
- **difficulty**: easy
- **os**: linux
- **tags**: Específicos para cada máquina
- **vulnerabilities**: CVEs y tipos de vulnerabilidades
- **techniques**: MITRE ATT&CK IDs
- **certifications**: OSCP, eJPT, etc.
- **attackVectors**: web, network, etc.
- **estimatedTime**: Tiempo estimado de resolución
- **points**: Puntos de la máquina
- **rating**: Calificación (4.0-4.5)

## Estado Actual del Proyecto

### Writeups Existentes (antes):
- ascension.md (es/en)
- beep.md (es/en)
- jet.md (es/en)
- lame.md (es/en)

### Writeups Nuevos (creados):
- ✅ codify.md (es/en)
- ✅ keeper.md (es/en)
- ✅ pc.md (es/en)
- ✅ sau.md (es/en)
- ✅ topology.md (es/en)

### Total de Writeups HTB:
- **9 máquinas documentadas**
- **18 archivos de writeup** (español e inglés)
- **5 máquinas con imágenes completas** (card.png + logo.png)

## Observaciones

1. **Imágenes faltantes**: Las carpetas `ascension/`, `beep/`, `jet/`, y `lame/` están vacías aunque tienen writeups. Se recomienda agregar las imágenes correspondientes.

2. **Consistencia**: Todos los writeups nuevos siguen el mismo formato que los existentes.

3. **Bilingüe**: Todos los writeups están en español e inglés para mayor alcance.

4. **Educativo**: Cada writeup incluye secciones de "Lecciones aprendidas" y "Mitigaciones" para valor educativo.

5. **Referencias**: Incluyen CVEs específicos, técnicas MITRE ATT&CK, y certificaciones relacionadas.

## Próximos Pasos Recomendados

1. Agregar imágenes (card.png y logo.png) a las carpetas vacías
2. Verificar que todas las rutas de imágenes en los writeups sean correctas
3. Considerar agregar más writeups para otras plataformas (HackMyVM, TryHackMe, VulnHub)
4. Revisar y actualizar los writeups existentes con el mismo formato mejorado
5. Agregar screenshots de los procesos de explotación en las carpetas de imágenes

## Archivos Creados

```
src/content/writeups/es/htb/
├── codify.md      (NUEVO)
├── keeper.md      (NUEVO)
├── pc.md          (NUEVO)
├── sau.md         (NUEVO)
└── topology.md    (NUEVO)

src/content/writeups/en/htb/
├── codify.md      (NUEVO)
├── keeper.md      (NUEVO)
├── pc.md          (NUEVO)
├── sau.md         (NUEVO)
└── topology.md    (NUEVO)
```

Total: **10 archivos nuevos creados** ✅
