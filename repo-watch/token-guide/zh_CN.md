# 创建只读令牌

_Machine-translated from the [English guide](en.md)._

如果你跟踪的仓库都是公开仓库，就不需要令牌。没有令牌时，GitHub 对每个 IP 地址每小时只允许 60 次请求；每个仓库每次检查最多使用 5 次请求，因此插件会降低检查频率。评审请求提醒始终需要令牌。使用令牌后上限提高到每小时 5,000 次，未变化的响应不计数，私有仓库则必须使用令牌。

请使用**细粒度（fine-grained）**令牌。与经典令牌不同，它可以限制为只读。GitHub 界面为英文，因此下面的字段名保留英文原文。

1. 打开 [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens)，点击 **Generate new token**。
   （[这个链接](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20Repo%20Watch&contents=read&issues=read&pull_requests=read&actions=read)会预先填好名称和这四项权限，其他字段仍需自行检查。）
2. **Token name**：一个便于识别的名称，例如 `Stream Deck Repo Watch`。
3. **Expiration**（有效期）：选择一个期限。令牌过期后，按键会显示“令牌被拒绝 (401)”，直到你粘贴新令牌。期限越短越安全。如果组织没有禁止，也可以选择“No expiration”。
4. **Resource owner**：你的账号，或拥有这些私有仓库的组织。一个令牌只能对应一个所有者。如果组织要求审批，在管理员批准之前，令牌只能读取公开仓库。
5. **Repository access**：
   - **仅公开仓库**：选择 **Public repositories**，不需要任何权限。
   - **私有仓库**：选择 **Only select repositories** 并选中要跟踪的仓库。然后在 **Permissions → Repository permissions** 中把 **Contents**、**Issues**、**Pull requests** 和 **Actions** 设为 **Read-only**。GitHub 会自动添加 **Metadata: Read-only**。其余全部保持 **No access**。（Issues、Pull requests 和 Actions 用于新议题、新 PR 和 CI 失败提醒。关闭这些提醒时请保持 No access。）
6. 点击 **Generate token**，复制令牌，粘贴到插件的**令牌**输入框，然后点击**保存**。

任何令牌都能读取公开仓库，所以为私有仓库创建的令牌也能覆盖你跟踪的公开仓库。

**不要使用带有 `repo` 权限范围的经典令牌。** 它会授予你能访问的所有私有仓库的读取**和写入**权限，远超此插件的需要。

来源：[Managing your personal access tokens](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)、[List releases](https://docs.github.com/zh/rest/releases/releases#list-releases)、[List commits](https://docs.github.com/zh/rest/commits/commits#list-commits)。
