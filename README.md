# BUSTER — Concept Studio

브랜드의 한 문장과 한 장면을 만드는 컨셉 스튜디오의 1차 홈페이지 목업입니다.

## 구성

- 반응형 스튜디오 소개 페이지
- 자체 가상 프로젝트 5개와 상세 설명
- SHOT / BRAND / BOOSTER 서비스 안내
- 프로젝트 브리프 TXT 다운로드

가상 프로젝트는 실제 수주 실적이 아닙니다. 메인 이미지는 AI로 생성한 시각 실험입니다. 폼은 데이터를 서버로 전송하거나 저장하지 않습니다. Google Fonts를 사용합니다.

## Cloudflare Pages

GitHub 저장소를 연결한 후 아래와 같이 설정합니다.

| 항목 | 값 |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `dist` |
| Root directory | 기본값 (저장소 루트) |

배포 후 Pages 프로젝트의 **Custom domains → Set up a custom domain**에서 구매한 도메인을 연결합니다. 공식 안내: https://developers.cloudflare.com/pages/configuration/custom-domains/

사이트 수정은 `dist/index.html`, `dist/style.css`, `dist/app.js`에 반영합니다. GitHub의 `main`에 푸시하면 Cloudflare Git 연동이 배포를 갱신합니다.

## 정식 운영 전

실제 연락처와 문의 수신 방식, 확정된 서비스 범위를 반영하세요. 현재 브리프 다운로드는 문의 전송 기능이 아닙니다.
