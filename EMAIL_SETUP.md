# Configuración del Sistema de Correo Electrónico

## Variables de Entorno Requeridas

Para que el formulario de contacto funcione correctamente, necesitas agregar la siguiente variable a tu archivo `.env.local`:

```env
# API Key de Resend
RESEND_API_KEY=tu_api_key_de_resend_aquí
```

## Descripción de la Variable

- **RESEND_API_KEY**: Tu API Key de Resend para enviar correos electrónicos

## Cómo Obtener tu API Key de Resend

1. Ve a [Resend.com](https://resend.com) y crea una cuenta
2. Verifica tu dominio `unidxswnc.org` en Resend
3. Ve a la sección de API Keys
4. Crea una nueva API Key
5. Copia la API Key y agrégala a tu archivo `.env.local`

## Configuración del Dominio

Asegúrate de que tu dominio `unidxswnc.org` esté verificado en Resend para poder enviar correos desde `noreply@unidxswnc.org`.

## Cómo Funciona

1. Cuando alguien envía el formulario de contacto en tu sitio web
2. El sistema usa Resend para enviar el correo desde `noreply@unidxswnc.org`
3. El mensaje se envía automáticamente a `sirfucho@gmail.com`
4. El campo "Reply-To" se configura con el email del usuario que envió el formulario
5. Así puedes responder directamente desde tu correo personal al usuario

## Características del Correo

- **Diseño moderno** con gradiente purple → green (colores de tu marca)
- **Logo de UNIDXS** en el header y footer
- **Iconos personalizados** para cada campo
- **Botón CTA** para responder directamente al usuario
- **Responsive design** para móviles

## Importante

- **No compartas** tu archivo `.env.local` en Git (ya está en .gitignore)
- Asegúrate de verificar tu dominio en Resend antes de usar el sistema
- Los correos siempre llegarán a `sirfucho@gmail.com`
- Puedes responder directamente desde Gmail y la respuesta llegará al usuario
