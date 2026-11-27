# Creating a read-only token

You don't need a token if every repo you track is public. Without one, GitHub allows 60 requests an hour per IP address, shared with anything else on your network. With everything turned on a repo costs up to 5 requests per check, so without a token the plugin checks less often (one repo about every 6 minutes, ten repos about every hour). Review request alerts always need a token. A token raises the limit to 5,000 an hour, makes unchanged responses free, and is required for private repos.

Use a **fine-grained** personal access token. It can be limited to read-only access, unlike a classic token.

1. Open [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens) and click **Generate new token**.
   ([This link](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20Repo%20Watch&contents=read&issues=read&pull_requests=read&actions=read) pre-fills the name and these four permissions. You still need to check the other fields.)
2. **Token name**: something you'll recognize, for example `Stream Deck Repo Watch`.
3. **Expiration**: choose one. When it expires, tiles show `Token rejected (401)` until you paste a new one. A shorter expiry is safer. "No expiration" is allowed unless your organization blocks it.
4. **Resource owner**: your account, or the organization that owns the private repos you want to track. A token covers one owner. If an organization requires approval, the token can only read public repos until an admin approves it.
5. **Repository access**:
   - **Public repos only**: choose **Public repositories** (read-only). No permissions are needed.
   - **Private repos**: choose **Only select repositories** and pick the repos you track. Then under **Permissions → Repository permissions**, set **Contents**, **Issues**, **Pull requests** and **Actions** to **Read-only**. GitHub adds **Metadata: Read-only** automatically. Leave everything else at **No access**. (Issues, Pull requests and Actions are for the new issue, PR and failed-CI alerts. Leave them at No access if you turn those alerts off.)
6. Click **Generate token**, copy it, paste it into the plugin's **Token** field, and click **Save**.

Every token can read public repos, so a token made for your private repos also covers the public ones you track.

Don't use a classic token with the `repo` scope. It grants read **and write** access to every private repo you can reach, which is far more than this plugin needs.

Sources: [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [permissions for List releases](https://docs.github.com/en/rest/releases/releases#list-releases) and [List commits](https://docs.github.com/en/rest/commits/commits#list-commits) (Contents: read; no permission needed for public repos), [List workflow runs](https://docs.github.com/en/rest/actions/workflow-runs#list-workflow-runs-for-a-repository) (Actions: read), [List repository issues](https://docs.github.com/en/rest/issues/issues#list-repository-issues), [List pull requests](https://docs.github.com/en/rest/pulls/pulls#list-pull-requests), [conditional requests and the rate limit](https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api#use-conditional-requests-if-appropriate).
