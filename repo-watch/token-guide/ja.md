# 読み取り専用トークンの作成

_Machine-translated from the [English guide](en.md)._

追跡するリポジトリがすべて公開リポジトリなら、トークンは不要です。トークンなしの場合、GitHub の上限は IP アドレスごとに 1 時間 60 リクエストのみで、1 リポジトリにつき確認 1 回あたり最大 5 リクエストを使うため、確認の頻度は下がります。レビュー依頼には常にトークンが必要です。トークンを使うと上限は 1 時間 5,000 になり、変更のない応答はカウントされず、非公開リポジトリには必須です。

**Fine-grained** トークンを使ってください。クラシックトークンと違い、読み取り専用に制限できます。GitHub の画面は英語のため、項目名は英語のまま記載しています。

1. [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) を開き、**Generate new token** をクリックします。
   （[このリンク](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20Repo%20Watch&contents=read&issues=read&pull_requests=read&actions=read)を使うと名前と 4 つの権限が入力済みになります。他の項目は自分で確認してください。）
2. **Token name**：分かりやすい名前。例：`Stream Deck Repo Watch`。
3. **Expiration**（有効期限）：期間を選びます。期限が切れると、新しいトークンを貼り付けるまでキーに「トークン拒否 (401)」と表示されます。短いほど安全です。組織が禁止していなければ「No expiration」も選べます。
4. **Resource owner**：自分のアカウント、または非公開リポジトリを所有する組織。1 つのトークンが対象にできる所有者は 1 つだけです。組織が承認を必須にしている場合、管理者が承認するまでトークンは公開リポジトリしか読めません。
5. **Repository access**：
   - **公開リポジトリのみ**：**Public repositories** を選びます。権限の設定は不要です。
   - **非公開リポジトリ**：**Only select repositories** を選び、追跡するリポジトリを指定します。次に **Permissions → Repository permissions** で **Contents**、**Issues**、**Pull requests**、**Actions** を **Read-only** にします。**Metadata: Read-only** は GitHub が自動で追加します。それ以外はすべて **No access** のままにします。（Issues、Pull requests、Actions は新しい Issue・PR・CI 失敗の通知に使います。これらの通知をオフにする場合は No access のままにしてください。）
6. **Generate token** をクリックし、表示されたトークンをコピーして、プラグインの**トークン**欄に貼り付け、**保存**をクリックします。

どのトークンも公開リポジトリは読めるので、非公開リポジトリ用のトークンで追跡中の公開リポジトリもカバーされます。

**`repo` スコープ付きのクラシックトークンは使わないでください。** アクセスできるすべての非公開リポジトリへの読み取り**と書き込み**の権限を与えてしまい、このプラグインに必要な範囲を大きく超えます。

出典：[Managing your personal access tokens](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)、[List releases](https://docs.github.com/ja/rest/releases/releases#list-releases)、[List commits](https://docs.github.com/ja/rest/commits/commits#list-commits)。
