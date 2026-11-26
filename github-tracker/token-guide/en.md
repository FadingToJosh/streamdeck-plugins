# Creating a read-only token

You don't need a token if every repo you track is public. Without one, GitHub allows 60 requests an hour per IP address, shared with anything else on your network. At the default interval that's about 30 repos, and fewer if you shorten the interval. A token raises the limit to 5,000 an hour and is required for private repos.

Use a **fine-grained** personal access token. It can be limited to read-only access, unlike a classic token.

1. Open [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) and click **Generate new token**.
   ([This link](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20GitHub%20Tracker&contents=read) pre-fills the name and the Contents permission. You still need to check the other fields.)
2. **Token name**: something you'll recognize, for example `Stream Deck GitHub Tracker`.
3. **Expiration**: choose one. When it expires, tiles show `Token rejected (401)` until you paste a new one. A shorter expiry is safer. "No expiration" is allowed unless your organization blocks it.
4. **Resource owner**: your account, or the organization that owns the private repos you want to track. A token covers one owner. If an organization requires approval, the token can only read public repos until an admin approves it.
5. **Repository access**:
   - **Public repos only**: choose **Public repositories** (read-only). No permissions are needed.
   - **Private repos**: choose **Only select repositories** and pick the repos you track. Then under **Permissions → Repository permissions**, set **Contents** to **Read-only**. GitHub adds **Metadata: Read-only** automatically. Leave everything else at **No access**.
6. Click **Generate token**, copy it, paste it into the plugin's **Token** field, and click **Save**.

Every token can read public repos, so a token made for your private repos also covers the public ones you track.

Don't use a classic token with the `repo` scope. It grants read **and write** access to every private repo you can reach, which is far more than this plugin needs.

Sources: [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [permissions for List releases](https://docs.github.com/en/rest/releases/releases#list-releases) and [List commits](https://docs.github.com/en/rest/commits/commits#list-commits) (Contents: read; no permission needed for public repos).
