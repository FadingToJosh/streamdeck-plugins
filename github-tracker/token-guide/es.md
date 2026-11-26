# Crear un token de solo lectura

_Machine-translated from the [English guide](en.md)._

Si todos tus repos son públicos, no necesitas token. Sin token, GitHub permite 60 solicitudes por hora por dirección IP, unas 30 repos con el intervalo por defecto. Con token el límite sube a 5.000 por hora, y es obligatorio para repos privados.

Usa un token **fine-grained**: se puede limitar a solo lectura, a diferencia de un token clásico. La interfaz de GitHub está en inglés, así que los nombres de los campos aparecen en inglés.

1. Abre [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) y haz clic en **Generate new token**.
   ([Este enlace](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20GitHub%20Tracker&contents=read) rellena el nombre y el permiso Contents; revisa igualmente los demás campos.)
2. **Token name**: un nombre que reconozcas, por ejemplo `Stream Deck GitHub Tracker`.
3. **Expiration** (caducidad): elige un plazo. Cuando caduque, las teclas mostrarán «Token rechazado (401)» hasta que pegues uno nuevo. Un plazo corto es más seguro. «No expiration» está permitido salvo que tu organización lo bloquee.
4. **Resource owner**: tu cuenta o la organización propietaria de los repos privados. Un token sirve para un solo propietario. Si la organización exige aprobación, el token solo podrá leer repos públicos hasta que un administrador lo apruebe.
5. **Repository access**:
   - **Solo repos públicos**: elige **Public repositories**. No hace falta ningún permiso.
   - **Repos privados**: elige **Only select repositories** y los repos que sigues. Luego, en **Permissions → Repository permissions**, pon **Contents** en **Read-only**. GitHub añade **Metadata: Read-only** automáticamente. Deja todo lo demás en **No access**.
6. Haz clic en **Generate token**, cópialo, pégalo en el campo **Token** del plugin y pulsa **Guardar**.

Todos los tokens pueden leer repos públicos, así que un token para tus repos privados también cubre los públicos.

**No uses un token clásico con el ámbito `repo`.** Da acceso de lectura **y escritura** a todos los repos privados a los que tienes acceso, mucho más de lo que necesita este plugin.

Fuentes: [Managing your personal access tokens](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [List releases](https://docs.github.com/es/rest/releases/releases#list-releases), [List commits](https://docs.github.com/es/rest/commits/commits#list-commits).
