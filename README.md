# LogiSoft S.A.S. — Actividad 4 (Matemáticas Discretas)

Prototipo académico en HTML, CSS y JavaScript puro, compatible con GitHub Pages.

## Ejecutar

Por seguridad del navegador, los módulos JavaScript ES necesitan un servidor HTTP local (no abrir `index.html` con `file://`). En la carpeta del proyecto ejecutar:

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000`. Para publicar, subir la carpeta a la raíz de un repositorio de GitHub y habilitar **Settings → Pages → Deploy from a branch → main → /(root)**.

## Funcionalidades

- Acceso general: `S = u ∧ c ∧ (t ∨ a)`.
- Reportes: `R = S ∧ (r ∨ a)`. Tabla filtrable y exportación CSV.
- Configuración: `C = S ∧ a ∧ h`. Parámetros editables y persistencia local.
- Auditoría: `A = S ∧ d`. Historial de accesos, módulos, cambios y simulaciones.
- Máquina de Turing determinista de cinta única, de solo lectura, con estados que codifican prefijos, transiciones explícitas, aceptación y rechazo. Escenarios y ejecución paso a paso.
- 512 pruebas exhaustivas: 384 combinaciones para los tres módulos y 128 para acceso general.

**Importante:** las entradas y los roles son simulados; `localStorage` no constituye un backend seguro ni un control de acceso real. El horario laboral `h` se controla manualmente para facilitar las pruebas. La política propuesta en el documento es lunes a viernes 08:00–17:00 hora de Colombia, sin festivos; no se calcula automáticamente en este prototipo.

## Guía rápida de demostración

1. En **Acceso**, configurar `u=1,c=1,t=0,a=1,r=0,d=1,h=0` e iniciar sesión.
2. Abrir **Reportes**: permitido por administrador. Abrir **Configuración**: denegado por horario. Abrir **Auditoría**: permitido por rol auditor.
3. En Configuración pulsar **Evaluar en Turing** y ejecutar los ocho pasos. Observar rechazo y explicación.
4. Cambiar `h=1` en Acceso, iniciar sesión nuevamente y abrir Configuración: ahora se permite guardar cambios.
5. En **Modelo y pruebas**, ejecutar las 512 pruebas y comprobar que no hay discrepancias.

## Archivos

- `index.html`: interfaz de seis pestañas.
- `css/styles.css`: diseño adaptable.
- `js/logic.js`: reglas matemáticas y explicaciones.
- `js/turing.js`: máquina de Turing independiente del evaluador booleano.
- `js/app.js`: sesiones simuladas, módulos, auditoría, escenarios y pruebas.

## Evolución

En la Actividad 6 se añadirá el árbol de decisiones, el conteo de caminos y las probabilidades, reutilizando las expresiones lógicas.
