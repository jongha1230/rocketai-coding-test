# 로켓AI 프론트엔드 개발자 코딩 테스트

주어진 디자인 시안을 바탕으로 Next.js와 Tailwind CSS를 사용하여 반응형 웹 페이지를 구현하는 과제입니다.

## 🚀 배포 링크 (Live Demo)

**[https://rocketai-coding-test-two.vercel.app/](https://rocketai-coding-test-two.vercel.app/)**

## ✨ 주요 구현 내용

- **디자인 기반 UI 구현:** Figma 디자인 시안을 바탕으로 전체 페이지의 레이아웃과 스타일을 구현했습니다.
- **컴포넌트 기반 아키텍처:**
  - `SpeechBubble`: `props`에 따라 꼬리 방향과 내부 여백이 동적으로 변경되는 재사용 가능한 말풍선 컴포넌트를 제작했습니다.
  - `SajuTable`: CSS Grid를 활용하여 디자인 시안의 복잡한 표 구조를 컴포넌트로 구현했습니다.
- **반응형 웹 디자인:**
  - `max-width: 448px` 요구사항을 준수했으며, 화면 너비가 줄어들 때 콘텐츠가 자연스럽게 조절되도록 구현했습니다.
- **배포:** Vercel 플랫폼을 통해 프로젝트를 성공적으로 배포했습니다.

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## ⚙️ 로컬에서 실행하기

```bash
# 1. 저장소 복제
git clone [https://github.com/jongha1230/rocketai-coding-test.git](https://github.com/jongha1230/rocketai-coding-test.git)
cd rocketai-coding-test

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```
