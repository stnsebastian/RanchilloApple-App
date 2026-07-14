# 🍏 Ranchillo Ventas Apple

Proyecto duplicado y optimizado específicamente para **celulares y dispositivos Apple (iPhone, iPad, iOS Safari)**.

## ✨ Mejoras especiales para Apple (iOS)

1. **Guía de Instalación Nativa para iPhone y iPad**:
   - Detección automática de Safari iOS (`iPhone` / `iPad`).
   - Modal interactivo (**📲 Guía iPhone**) que enseña paso a paso a usar el botón **Compartir ⬆️** en Safari y seleccionar **"Agregar a inicio" (Add to Home Screen ➕)**.
2. **Soporte de Safe Area & Notch (Dynamic Island)**:
   - Uso de `env(safe-area-inset-top)` y `env(safe-area-inset-bottom)` para que las barras de navegación y encabezados no interfieran con la cámara frontal ni la barra indicadora inferior del iPhone.
3. **Prevención de Zoom Automático en Safari iOS**:
   - Entradas de formulario (`input`, `select`, `textarea`) ajustadas a `16px` en móvil para evitar el zoom intrusivo de Safari al escribir.
4. **Compartir Reportes Diario con iOS Share Sheet (`navigator.share`)**:
   - Integración con el menú nativo de compartir de Apple, permitiendo enviar el reporte por WhatsApp, Mail, Mensajes o AirDrop con un solo toque.
5. **PWA Offline Completa**:
   - Service Worker optimizado (`ranchillo-apple-cache-v1`) para WebKit en iOS.

## 🚀 Cómo probar en red local desde un iPhone

1. En tu PC, entra a esta carpeta:
   ```bash
   cd "C:\Users\jpinoa\.gemini\antigravity\scratch\ranchillo-ventas Apple"
   ```
2. Inicia el servidor de Vite accesible en tu red local WiFi:
   ```bash
   npm run dev
   ```
3. En tu iPhone o iPad, abre **Safari** e ingresa la dirección IP local de tu PC (ejemplo: `http://192.168.1.XX:5173`).
4. ¡Toca **"📲 Guía iPhone"** o instala directamente en tu pantalla de inicio!
