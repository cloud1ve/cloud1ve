# 브랜치 구조

### main 브랜치

안정된 코드만 들어가는 브랜치

실제 배포(Vercel, EC2, RDS)는 여기 있는 코드 기준으로 동작

발표/시연할 때도 이 브랜치 기준


### dev 브랜치

개발 중인 코드들이 모이는 브랜치

팀원들이 작업 끝낸 기능 브랜치(feat/...)를 PR로 합치는 곳

버그가 있어도 괜찮음, 테스트용


### 기능 브랜치 (feat/...)

개인이 작업할 때 쓰는 브랜치

예: feat/frontend-ui, feat/backend-api, fix/db-schema

작업 끝나면 → dev로 PR

# Git 협업 전략
### Commit message
— type은 소문자로 작성 
— 제목 끝 마침표 x
— 명사형 사용

 ■ type
• feat : 새 기능 추가

• fix : 오류 수정

• docs : 문서 수정(README, 주석)

• refactor :코드 리팩토링 (기능 변화는 없지만 코드 구조 개선)

• style : 코드 포맷팅, 세미콜론 누락 등 기능 변화 없는 스타일 변경

• test : 테스트 코드 추가/수정

• chore : 빌드 task 수정, 패키지 매니저 수정(.gitignore 수정 같은 경우)


### PR(Pull Request) 
: 내가 작업한 브랜치를 팀 메인 브랜치에 합치는 것을 요청하는 것
→ 즉 PR을 통해 제안한 변경사항이 승인되어 실제 코드(main 브랜치)에 적용되는 것
— PR 제목은 이슈 제목과 동일하게 함
(ex. Issue: “회원가입 오류 수정” → PR 제목도 “회원가입 오류 수정” )
— 검토가 끝나면 본인이 직접 PR을 merge하고 브랜치 삭제
— main 브랜치는 팀장이 관리
