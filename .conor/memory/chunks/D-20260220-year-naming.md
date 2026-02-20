---
type: decision
date: 2026-02-20
tags: [naming, convention, directory]
refs: [D-20260219-neon-page]
---
**상황**: 디자인 페이지 디렉토리명에 해당 트렌드 등장 연도를 포함시키고 싶음
**결정**: `design-{연도}-{이름}` 형식 채택 (예: `design-2006-aero`, `design-2020-glassmorphism`)
**근거**: 연도순 자동 정렬 + 트렌드 시대 맥락 즉시 파악. `getCategory()`는 첫 번째 `-` 기준이라 기존 로직 영향 없음
**대안**: 타이틀에만 연도 표기 → 디렉토리/URL에는 정보 없어 일관성 부족
