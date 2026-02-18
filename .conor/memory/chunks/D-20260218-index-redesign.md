---
type: decision
date: 2026-02-18
tags: [index, design, ui]
refs: []
---
**상황**: 메인 페이지에서 카테고리(design/effect/component/layout) 구분이 안 됨
**결정**: 캐러셀 → 사이드바+미리보기 레이아웃으로 전환
**근거**: 사이드바에 카테고리별 그룹핑(컬러 dot), 중앙에 iframe 미리보기 카드. URL hash로 상태 보존. 코너가 직접 요청한 방향.
**대안**: 캐러셀에 카테고리 뱃지 추가 — 코너가 사이드바 방식 선호
