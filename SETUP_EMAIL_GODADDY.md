# 📧 Configuración de Email con GoDaddy SMTP y Nodemailer

## ✅ Lo que ya está hecho:

1. ✅ API Route creada en `src/app/api/send-email/route.ts`
2. ✅ Formulario de contacto actualizado
3. ✅ Configuración de Nodemailer con SMTP de GoDaddy

---

## 📋 Pasos que DEBES hacer:

### **Paso 1: Instalar Nodemailer**

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

---

### **Paso 2: Crear archivo `.env.local`**

En la raíz de tu proyecto (donde está `package.json`), crea un archivo llamado `.env.local` con este contenido:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=Rball@unidxSwnc.org
SMTP_PASS=TU_CONTRASEÑA_DE_EMAIL_AQUI
```

⚠️ **IMPORTANTE:** Reemplaza `TU_CONTRASEÑA_DE_EMAIL_AQUI` con la contraseña real de tu email `Rball@unidxSwnc.org`

---

### **Paso 3: Configurar Variables de Entorno en Vercel**

1. Ve a tu proyecto en Vercel: https://vercel.com/dashboard
2. Selecciona tu proyecto `unidxs`
3. Ve a **Settings** → **Environment Variables**
4. Agrega las siguientes variables (una por una):

| Name | Value |
|------|-------|
| `SMTP_HOST` | `smtpout.secureserver.net` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `Rball@unidxSwnc.org` |
| `SMTP_PASS` | Tu contraseña de email |

5. Asegúrate de seleccionar **Production**, **Preview**, y **Development** para cada variable
6. Click en **Save**

---

### **Paso 4: Verificar que `.env.local` esté en `.gitignore`**

Abre tu archivo `.gitignore` y verifica que contenga:

```
.env*.local
.env
```

Esto evita que subas tus contraseñas a GitHub.

---

### **Paso 5: Probar localmente**

1. Reinicia tu servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a http://localhost:3000/contact

3. Llena el formulario y envíalo

4. Deberías recibir el email en `Rball@unidxSwnc.org`

---

### **Paso 6: Desplegar a Vercel**

1. Haz commit de tus cambios:
   ```bash
   git add .
   git commit -m "Add email functionality with Nodemailer"
   git push
   ```

2. Vercel desplegará automáticamente

3. Prueba el formulario en tu sitio en producción

---

## 🔧 Configuración SMTP de GoDaddy

Los valores que estamos usando:

- **Host:** `smtpout.secureserver.net`
- **Puerto:** `465` (SSL/TLS)
- **Seguridad:** SSL habilitado
- **Usuario:** Tu email completo (`Rball@unidxSwnc.org`)
- **Contraseña:** La contraseña de tu email

---

## 🧪 Cómo probar si funciona:

### En desarrollo (local):
1. Abre la consola del navegador (F12)
2. Envía un mensaje desde el formulario
3. Revisa la consola para ver si hay errores
4. Revisa tu bandeja de entrada en `Rball@unidxSwnc.org`

### En producción (Vercel):
1. Ve a tu sitio desplegado
2. Envía un mensaje
3. Si hay errores, ve a Vercel → tu proyecto → **Functions** → **Logs**

---

## ❌ Solución de problemas comunes:

### Error: "Invalid login"
- ✅ Verifica que el email sea exactamente `Rball@unidxSwnc.org`
- ✅ Verifica que la contraseña sea correcta
- ✅ Intenta iniciar sesión en webmail de GoDaddy para confirmar credenciales

### Error: "Connection timeout"
- ✅ Verifica que el puerto sea `465`
- ✅ Verifica que `secure: true` esté configurado

### Los emails no llegan:
- ✅ Revisa la carpeta de spam
- ✅ Revisa los logs en Vercel
- ✅ Verifica que las variables de entorno estén correctamente configuradas

### Error en Vercel: "Module not found: nodemailer"
- ✅ Asegúrate de haber ejecutado `npm install nodemailer`
- ✅ Verifica que `nodemailer` esté en `package.json` bajo `dependencies`
- ✅ Haz push de `package.json` y `package-lock.json`

---

## 📧 Características del email que recibirás:

- ✅ Diseño HTML profesional con colores de UNIDXS
- ✅ Todos los datos del formulario organizados
- ✅ Reply-to configurado (puedes responder directamente al usuario)
- ✅ Versión de texto plano como respaldo
- ✅ Asunto descriptivo: "📩 Contacto Web: [asunto del usuario]"

---

## 🔒 Seguridad:

- ✅ Las credenciales están en variables de entorno (no en el código)
- ✅ `.env.local` está en `.gitignore` (no se sube a GitHub)
- ✅ Conexión SSL/TLS segura con GoDaddy
- ✅ Validación de campos en el backend

---

## 📝 Notas adicionales:

- **Límites de GoDaddy:** Generalmente 250-500 emails por día (depende de tu plan)
- **Tiempo de entrega:** Los emails deberían llegar en segundos
- **Respaldo:** Si falla, el usuario verá un mensaje de error y puede intentar de nuevo

---

## ✅ Checklist final:

- [ ] Nodemailer instalado (`npm install nodemailer`)
- [ ] Archivo `.env.local` creado con las credenciales
- [ ] Variables de entorno configuradas en Vercel
- [ ] Código probado localmente
- [ ] Cambios pusheados a GitHub
- [ ] Sitio desplegado en Vercel
- [ ] Formulario probado en producción
- [ ] Email recibido correctamente

---

¿Necesitas ayuda con algún paso? ¡Avísame!
