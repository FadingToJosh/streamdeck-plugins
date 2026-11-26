# Créer un jeton en lecture seule

_Machine-translated from the [English guide](en.md)._

Si tous vos dépôts sont publics, aucun jeton n'est nécessaire. Sans jeton, GitHub autorise 60 requêtes par heure et par adresse IP, soit environ 30 dépôts avec l'intervalle par défaut. Avec un jeton, la limite passe à 5 000 par heure, et il est obligatoire pour les dépôts privés.

Utilisez un jeton **fine-grained** : contrairement à un jeton classique, il peut être limité à la lecture seule. L'interface de GitHub est en anglais, les libellés sont donc indiqués en anglais.

1. Ouvrez [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) et cliquez sur **Generate new token**.
   ([Ce lien](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20GitHub%20Tracker&contents=read) préremplit le nom et l'autorisation Contents ; vérifiez quand même les autres champs.)
2. **Token name** : un nom reconnaissable, par exemple `Stream Deck GitHub Tracker`.
3. **Expiration** : choisissez une durée. À l'expiration, les touches affichent « Jeton refusé (401) » jusqu'à ce que vous colliez un nouveau jeton. Une durée courte est plus sûre. « No expiration » est autorisé sauf si votre organisation l'interdit.
4. **Resource owner** : votre compte, ou l'organisation propriétaire des dépôts privés. Un jeton ne couvre qu'un seul propriétaire. Si l'organisation exige une approbation, le jeton ne pourra lire que les dépôts publics tant qu'un administrateur ne l'a pas approuvé.
5. **Repository access** :
   - **Dépôts publics uniquement** : choisissez **Public repositories**. Aucune autorisation n'est nécessaire.
   - **Dépôts privés** : choisissez **Only select repositories** puis les dépôts suivis. Ensuite, dans **Permissions → Repository permissions**, réglez **Contents** sur **Read-only**. GitHub ajoute automatiquement **Metadata: Read-only**. Laissez tout le reste sur **No access**.
6. Cliquez sur **Generate token**, copiez-le, collez-le dans le champ **Jeton** du plugin et cliquez sur **Enregistrer**.

Tout jeton peut lire les dépôts publics : un jeton créé pour vos dépôts privés couvre donc aussi les dépôts publics suivis.

**N'utilisez pas de jeton classique avec la portée `repo`.** Il donne un accès en lecture **et en écriture** à tous les dépôts privés auxquels vous avez accès, bien plus que ce dont ce plugin a besoin.

Sources : [Managing your personal access tokens](https://docs.github.com/fr/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [List releases](https://docs.github.com/fr/rest/releases/releases#list-releases), [List commits](https://docs.github.com/fr/rest/commits/commits#list-commits).
