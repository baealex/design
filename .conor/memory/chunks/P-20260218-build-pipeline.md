---
type: project
date: 2026-02-18
tags: [build, architecture, pipeline]
refs: [D-20260218-page-format, D-20260218-index-redesign]
---
**항목**: 빌드 시스템 4단계 파이프라인 구조
**내용**: `cli/modules/pipeline/` 에 parse→compile→emit→assemble 4단계로 분리.
- `parse-page.ts`: 소스에서 metadata(layout, title) + blocks(style, body, script) 추출
- `compile-blocks.ts`: SCSS/TS 컴파일, `$DATA.key` 변수 주입
- `emit-assets.ts`: prod=외부파일, dev=인라인 출력
- `assemble-html.ts`: 레이아웃의 `<!-- slot: name -->` 에 삽입
- `index.ts`: `buildPage()` 로 4단계 체이닝
**참고**: `cli/modules/text-parser.ts`, `cli/modules/transpile/index.ts` 삭제됨. `transpile/scss.ts`, `transpile/typescript.ts` 는 유지.
