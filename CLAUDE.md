# CLAUDE.md

## 1. 프로젝트 목적
간단한 운동 기록 서비스를 구현하는 실습 프로젝트입니다.
현재 목표 기능은 다음 두 가지입니다.
- 운동 기록 등록
- 운동 기록 목록 조회

## 2. Frontend 기술
- React
- Vite
- 프로젝트 경로: `frontend/`

## 3. Backend 기술
- Java 21
- Spring Boot
- Gradle (Gradle Wrapper 사용, `./gradlew`)
- Database: Oracle 21c
- 프로젝트 경로: `backend/`

## 4. Backend 기본 구조
`backend/src/main/java/com/miniproject/workout/` 하위에 계층형 구조를 따릅니다.
- `controller/` — REST API 엔드포인트
- `service/` — 비즈니스 로직
- `repository/` — DB 접근
- `domain/` — 엔티티

새 기능을 추가할 때도 이 구조를 유지하고, 임의로 계층을 늘리거나 줄이지 않습니다.

## 5. REST API 사용
Frontend와 Backend는 REST API로 통신합니다.
- Backend는 REST 컨트롤러(`@RestController`)로 엔드포인트를 노출합니다.
- Frontend는 `frontend/src/api/` 하위에서 fetch/axios 등으로 REST API를 호출합니다.
- 서버 사이드 렌더링, GraphQL 등 다른 통신 방식은 사용하지 않습니다.

## 6. 불필요한 Library 추가 금지
현재 정의된 최소 의존성 외의 라이브러리(상태관리 라이브러리, UI 프레임워크, ORM 확장 등)는 임의로 추가하지 않습니다.
새 라이브러리가 꼭 필요하다고 판단되면, 추가하기 전에 이유를 먼저 설명하고 승인을 받습니다.

## 7. Secret을 코드에 직접 작성하지 않기
DB 접속 정보, API 키, 비밀번호 등 민감한 값을 소스 코드나 설정 파일에 하드코딩하지 않습니다.
- 환경변수 또는 `.env`, `application-local.yml` 등 버전 관리에서 제외된 파일을 사용합니다.
- 커밋 전 `.gitignore`에 해당 파일이 포함되어 있는지 확인합니다.

## 8. 기존 파일을 대량으로 삭제하지 않기
작업 범위와 무관한 파일이나 폴더를 임의로 삭제하지 않습니다.
삭제가 꼭 필요한 경우, 삭제 전에 어떤 파일을 왜 삭제하는지 먼저 설명합니다.

## 9. 큰 변경 전에 계획 먼저 설명하기
여러 파일에 걸친 변경, 구조 변경, 새 의존성 추가 등 영향 범위가 큰 작업은 실행 전에 계획을 먼저 설명하고 확인을 받습니다.
단순 오타 수정, 단일 파일의 사소한 수정 등은 예외로 합니다.

## 10. 구현 후 Build 또는 테스트하기
코드 변경 후에는 다음을 통해 정상 동작을 확인합니다.
- Backend: `./gradlew build` (또는 최소 `./gradlew compileJava`)
- Frontend: `npm run build` (또는 `npm run dev`로 기동 확인)
빌드/실행이 실패하면 숨기지 않고 오류 내용을 그대로 알립니다.

## 11. 변경한 파일을 작업 마지막에 설명하기
작업을 마칠 때, 다음을 정리해서 안내합니다.
- 생성/수정/삭제한 파일 목록
- 실행한 주요 명령어
- 빌드/테스트 결과
