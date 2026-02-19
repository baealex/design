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
- [D-20260219-sketchomorphism](chunks/D-20260219-sketchomorphism.md) 핸드드로잉 UI → "스케치모피즘" 명명, 살아있고 인간적이되 불편하지 않은 시스템 | #sketchomorphism #naming
- [D-20260219-trends-page-renewal](chunks/D-20260219-trends-page-renewal.md) 트렌드 페이지 리뉴얼: 비주얼 데모 → 철학+설명+근거를 함께 보여주는 구조 | #trends #renewal
- [D-20260219-neon-page](chunks/D-20260219-neon-page.md) effect-typing→design-neon 전환, effect-blurry 글래스모피즘 중복 삭제 | #neon #page-consolidation

## Learnings
- [L-20260218-iife-sourcemap-bug](chunks/L-20260218-iife-sourcemap-bug.md) IIFE + inline sourcemap = `})();`가 주석에 먹힘 → `\n` 필요 | #typescript #bug
- [L-20260219-design-philosophy](chunks/L-20260219-design-philosophy.md) 우리는 아티스트이자 공학자 — 철학 없는 비주얼은 카피, 각 트렌드에 "왜"를 담아야 함 | #philosophy #identity
- [L-20260219-design-trends-analysis](chunks/L-20260219-design-trends-analysis.md) 각 트렌드 페이지 3단 구조: ①왜 등장 ②왜 망했나 ③우리의 킥 제안 | #trends #analysis #structure
