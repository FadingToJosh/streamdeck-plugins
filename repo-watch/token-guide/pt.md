# Criar um token somente leitura

_Machine-translated from the [English guide](en.md)._

Se todos os repos forem públicos, você não precisa de token. Sem token, o GitHub permite só 60 requisições por hora por endereço IP; cada repo usa até 5 por verificação, então o plugin verificará com menos frequência. Revisões pedidas sempre precisam de token. Com token o limite sobe para 5.000 por hora, respostas sem mudança não contam, e ele é obrigatório para repos privados.

Use um token **fine-grained**: ao contrário de um token clássico, ele pode ser limitado a somente leitura. A interface do GitHub está em inglês, por isso os nomes dos campos aparecem em inglês.

1. Abra [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) e clique em **Generate new token**.
   ([Este link](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20Repo%20Watch&contents=read&issues=read&pull_requests=read&actions=read) já preenche o nome e as quatro permissões; confira os demais campos mesmo assim.)
2. **Token name**: um nome fácil de reconhecer, por exemplo `Stream Deck Repo Watch`.
3. **Expiration** (validade): escolha um prazo. Quando expirar, as teclas mostrarão "Token rejeitado (401)" até você colar um novo. Prazos curtos são mais seguros. "No expiration" é permitido, a menos que sua organização bloqueie.
4. **Resource owner**: sua conta ou a organização dona dos repos privados. Um token vale para um único dono. Se a organização exigir aprovação, o token só conseguirá ler repos públicos até um administrador aprová-lo.
5. **Repository access**:
   - **Só repos públicos**: escolha **Public repositories**. Nenhuma permissão é necessária.
   - **Repos privados**: escolha **Only select repositories** e os repos que você monitora. Depois, em **Permissions → Repository permissions**, defina **Contents**, **Issues**, **Pull requests** e **Actions** como **Read-only**. O GitHub adiciona **Metadata: Read-only** automaticamente. Deixe todo o resto em **No access**. (Issues, Pull requests e Actions servem para os avisos de issues, PRs e CI com falha. Se desligar esses avisos, deixe-os em No access.)
6. Clique em **Generate token**, copie o token, cole no campo **Token** do plugin e clique em **Salvar**.

Qualquer token consegue ler repos públicos, então um token para seus repos privados também cobre os públicos que você monitora.

**Não use um token clássico com o escopo `repo`.** Ele dá acesso de leitura **e escrita** a todos os repos privados que você pode acessar, muito mais do que este plugin precisa.

Fontes: [Managing your personal access tokens](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [List releases](https://docs.github.com/pt/rest/releases/releases#list-releases), [List commits](https://docs.github.com/pt/rest/commits/commits#list-commits).
