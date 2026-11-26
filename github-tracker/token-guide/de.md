# Ein Nur-Lese-Token erstellen

_Machine-translated from the [English guide](en.md)._

Für öffentliche Repos brauchst du kein Token. Ohne Token erlaubt GitHub 60 Anfragen pro Stunde und IP-Adresse; das reicht beim Standardintervall für etwa 30 Repos. Mit Token sind es 5.000 pro Stunde, und für private Repos ist es Pflicht.

Verwende ein **Fine-grained**-Token. Es lässt sich auf Lesezugriff beschränken, ein klassisches Token nicht. Die GitHub-Oberfläche ist auf Englisch, deshalb stehen die Bezeichnungen unten im englischen Original.

1. Öffne [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) und klicke auf **Generate new token**.
   ([Dieser Link](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20GitHub%20Tracker&contents=read) füllt Name und Contents-Berechtigung vor; prüfe die übrigen Felder trotzdem.)
2. **Token name**: ein Name, den du wiedererkennst, z. B. `Stream Deck GitHub Tracker`.
3. **Expiration** (Ablauf): wähle einen Zeitraum. Nach Ablauf zeigen die Tasten „Token abgelehnt (401)“, bis du ein neues Token einfügst. Kürzer ist sicherer. „No expiration“ ist erlaubt, sofern deine Organisation es nicht verbietet.
4. **Resource owner**: dein Konto oder die Organisation, der die privaten Repos gehören. Ein Token gilt für genau einen Eigentümer. Verlangt eine Organisation eine Freigabe, kann das Token bis dahin nur öffentliche Repos lesen.
5. **Repository access**:
   - **Nur öffentliche Repos**: wähle **Public repositories**. Es sind keine Berechtigungen nötig.
   - **Private Repos**: wähle **Only select repositories** und die Repos, die du verfolgst. Setze dann unter **Permissions → Repository permissions** den Punkt **Contents** auf **Read-only**. GitHub fügt **Metadata: Read-only** automatisch hinzu. Alles andere bleibt auf **No access**.
6. Klicke auf **Generate token**, kopiere es, füge es im Plugin in das Feld **Token** ein und klicke auf **Speichern**.

Jedes Token kann öffentliche Repos lesen. Ein Token für deine privaten Repos deckt also auch die öffentlichen ab.

**Verwende kein klassisches Token mit dem Scope `repo`.** Es gewährt Lese- **und Schreibzugriff** auf alle privaten Repos, auf die du zugreifen kannst, und damit viel mehr, als dieses Plugin braucht.

Quellen: [Managing your personal access tokens](https://docs.github.com/de/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [List releases](https://docs.github.com/de/rest/releases/releases#list-releases), [List commits](https://docs.github.com/de/rest/commits/commits#list-commits).
