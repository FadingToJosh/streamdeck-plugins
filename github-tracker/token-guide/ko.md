# 읽기 전용 토큰 만들기

_Machine-translated from the [English guide](en.md)._

추적하는 저장소가 모두 공개 저장소라면 토큰이 필요 없습니다. 토큰이 없으면 GitHub는 IP 주소당 시간당 60회 요청을 허용하며, 기본 간격에서 약 30개 저장소에 해당합니다. 토큰을 쓰면 한도가 시간당 5,000회로 늘어나고, 비공개 저장소에는 토큰이 반드시 필요합니다.

**Fine-grained** 토큰을 사용하세요. 클래식 토큰과 달리 읽기 전용으로 제한할 수 있습니다. GitHub 화면이 영어이므로 항목 이름은 영어 그대로 적었습니다.

1. [Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens)를 열고 **Generate new token**을 클릭합니다.
   ([이 링크](https://github.com/settings/personal-access-tokens/new?name=Stream%20Deck%20GitHub%20Tracker&contents=read)는 이름과 Contents 권한을 미리 채워 줍니다. 나머지 항목은 직접 확인하세요.)
2. **Token name**: 알아보기 쉬운 이름. 예: `Stream Deck GitHub Tracker`.
3. **Expiration**(만료): 기간을 고릅니다. 만료되면 새 토큰을 붙여 넣을 때까지 키에 '토큰 거부됨 (401)'이 표시됩니다. 짧을수록 안전합니다. 조직에서 막지 않았다면 'No expiration'도 선택할 수 있습니다.
4. **Resource owner**: 내 계정 또는 비공개 저장소를 소유한 조직. 토큰 하나는 소유자 하나에만 적용됩니다. 조직에서 승인을 요구하면 관리자가 승인할 때까지 토큰은 공개 저장소만 읽을 수 있습니다.
5. **Repository access**:
   - **공개 저장소만**: **Public repositories**를 선택합니다. 권한은 필요 없습니다.
   - **비공개 저장소**: **Only select repositories**를 선택하고 추적할 저장소를 고릅니다. 그다음 **Permissions → Repository permissions**에서 **Contents**를 **Read-only**로 설정합니다. **Metadata: Read-only**는 GitHub가 자동으로 추가합니다. 나머지는 모두 **No access**로 둡니다.
6. **Generate token**을 클릭하고 토큰을 복사해 플러그인의 **토큰** 칸에 붙여 넣은 뒤 **저장**을 클릭합니다.

모든 토큰은 공개 저장소를 읽을 수 있으므로, 비공개 저장소용 토큰 하나로 추적 중인 공개 저장소도 함께 처리됩니다.

**`repo` 범위가 있는 클래식 토큰은 사용하지 마세요.** 접근할 수 있는 모든 비공개 저장소에 대한 읽기 **및 쓰기** 권한을 주므로, 이 플러그인에 필요한 것보다 훨씬 많습니다.

출처: [Managing your personal access tokens](https://docs.github.com/ko/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [List releases](https://docs.github.com/ko/rest/releases/releases#list-releases), [List commits](https://docs.github.com/ko/rest/commits/commits#list-commits).
