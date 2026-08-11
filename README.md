# zubscriptions-landing

Sitio público de **Zubscriptions**: la portada y los tres documentos que exigen
App Store y Google Play —privacidad, términos y soporte—, en español e inglés.

🔗 https://factory-soft-lab.github.io/zubscriptions-landing/

## Por qué vive en un repo aparte

`Factory-Soft-Lab/zubscriptions-app` es **privado a propósito**: ahí van
versionados `GoogleService-Info.plist`, `google-services.json` y
`firebase_options.dart`. GitHub Pages sólo publica desde repos privados con plan
de pago, así que el sitio necesita un repositorio público propio. De paso, la
separación evita exponer el código de la app para publicar cuatro páginas HTML.

## Cómo se despliega

No hay build. GitHub Pages sirve la rama `main` tal cual; cada `push` publica.
El `.nojekyll` evita que Jekyll se meta por medio.

```
index.html          privacidad.html   terminos.html   soporte.html      ← español
en/index.html       en/privacy.html   en/terms.html   en/support.html   ← inglés
assets/styles.css   assets/icon.svg
```

Todos los enlaces internos son **relativos**, para que mover el sitio a un
dominio propio no obligue a tocar ni un `href`. Las únicas rutas absolutas son
los `canonical` y los `hreflang` del `<head>`, que sí hay que actualizar el día
que se compre el dominio.

## Dónde se consumen estas URLs

| Sitio | Quién la pide |
|---|---|
| `/privacidad.html` | App Store Connect · Play Console · `lib/app/links.dart` en la app |
| `/terminos.html` | EULA del paywall (obligatorio con suscripción auto-renovable) · `links.dart` |
| `/soporte.html` | *Support URL* de App Store Connect · correo de contacto de Play |

⚠️ Si cambia una ruta, hay que actualizar `lib/app/links.dart` en
`zubscriptions-app` **y** las fichas de las dos tiendas. No basta con dejar una
redirección: la app abre la URL literal que lleva compilada.

## Estilo

Los colores y el vidrio salen de `lib/app/theme/app_colors.dart` de la app y
están copiados a mano en `assets/styles.css`, porque el sitio no comparte código
con ella. Si cambia la marca, hay que tocar el bloque `:root`.

Tema oscuro único, como la app. Índigo y púrpura nunca bajo texto: sobre el
suelo dan 3,96:1 y el mínimo es 4,5:1.
