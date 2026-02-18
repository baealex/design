# Memory Index

<!--
Zettelkasten 기반 메모리 인덱스
이 파일은 항상 AI 컨텍스트에 로드됩니다. 최소한으로 유지하세요.
각 항목은 한 줄로, chunks/ 디렉토리의 상세 파일을 참조합니다.
형식: - [ID](chunks/ID.md) 요약 | #태그
-->

## Project
- [P-20260218-build-pipeline](chunks/P-20260218-build-pipeline.md) 빌드 시스템 4단계 파이프라인 (parse→compile→emit→assemble) | #build #pipeline

## Decisions
- [D-20260218-page-format](chunks/D-20260218-page-format.md) 페이지 포맷: HTML 주석 메타데이터 + `<body>` + `$DATA` 변수 | #page-format #convention
- [D-20260218-index-redesign](chunks/D-20260218-index-redesign.md) 인덱스 페이지: 캐러셀 → 사이드바+미리보기 레이아웃 | #index #design

## Learnings
- [L-20260218-iife-sourcemap-bug](chunks/L-20260218-iife-sourcemap-bug.md) IIFE + inline sourcemap = `})();`가 주석에 먹힘 → `\n` 필요 | #typescript #bug
