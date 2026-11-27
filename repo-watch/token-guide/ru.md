# Создание токена только для чтения

_Machine-translated from the [English guide](en.md)._

Если все отслеживаемые репозитории публичные, токен не нужен. Без токена GitHub разрешает лишь 60 запросов в час на IP-адрес; каждый репозиторий использует до 5 запросов за проверку, поэтому плагин будет проверять реже. Запросы ревью всегда требуют токен. С токеном лимит — 5000 запросов в час, ответы без изменений не учитываются, а для приватных репозиториев токен обязателен.

Используйте **fine-grained** токен: в отличие от классического, его можно ограничить только чтением. Интерфейс GitHub на английском, поэтому названия полей приведены по-английски.

1. Откройте [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) и нажмите **Generate new token**.
   ([Эта ссылка](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20Repo%20Watch&contents=read&issues=read&pull_requests=read&actions=read) заранее заполняет имя и все четыре разрешения; остальные поля всё равно проверьте.)
2. **Token name**: понятное имя, например `Stream Deck Repo Watch`.
3. **Expiration** (срок действия): выберите срок. Когда он истечёт, на кнопках будет «Токен отклонён (401)», пока вы не вставите новый. Чем короче срок, тем безопаснее. «No expiration» допускается, если это не запрещено вашей организацией.
4. **Resource owner**: ваш аккаунт или организация, которой принадлежат приватные репозитории. Один токен работает только с одним владельцем. Если организация требует одобрения, до одобрения администратором токен сможет читать только публичные репозитории.
5. **Repository access**:
   - **Только публичные репозитории**: выберите **Public repositories**. Разрешения не нужны.
   - **Приватные репозитории**: выберите **Only select repositories** и отметьте отслеживаемые репозитории. Затем в **Permissions → Repository permissions** установите для **Contents**, **Issues**, **Pull requests** и **Actions** значение **Read-only**. GitHub автоматически добавит **Metadata: Read-only**. Всё остальное оставьте в **No access**. (Issues, Pull requests и Actions нужны для оповещений о новых задачах, PR и сбоях CI. Если вы их отключили, оставьте No access.)
6. Нажмите **Generate token**, скопируйте токен, вставьте его в поле **Токен** в плагине и нажмите **Сохранить**.

Любой токен может читать публичные репозитории, поэтому токен для приватных репозиториев покрывает и отслеживаемые публичные.

**Не используйте классический токен с областью `repo`.** Он даёт доступ на чтение **и запись** ко всем приватным репозиториям, к которым у вас есть доступ, — намного больше, чем нужно этому плагину.

Источники: [Managing your personal access tokens](https://docs.github.com/ru/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [List releases](https://docs.github.com/ru/rest/releases/releases#list-releases), [List commits](https://docs.github.com/ru/rest/commits/commits#list-commits).
