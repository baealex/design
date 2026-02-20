---
type: learning
date: 2026-02-21
tags: [ripple, button, css, overflow, bug]
refs: [L-20260219-design-trends-analysis]
---
**발견**: `<button>` 내부에 리플 span을 직접 넣으면 `overflow: hidden`이 제대로 클리핑 안 되는 브라우저 버그 발생 — 클릭할 때마다 버튼이 늘어남
**원인 1**: `<button>`은 form element 특수 렌더링으로 overflow 처리가 일반 요소와 다름
**원인 2**: `.fab-extended span` 같은 넓은 셀렉터가 동적 생성된 `.ripple-surface` span까지 매칭하여 `position: relative`로 덮어씌움
**해결책**:
1. `.ripple-surface` span 컨테이너를 동적 생성하여 리플을 그 안에 넣음 (`overflow: hidden; border-radius: inherit;`)
2. 부모 셀렉터를 `> span:not(.ripple-surface)`로 좁혀 충돌 방지
3. 리플 크기는 1px + CSS 변수 `--ripple-scale`로 keyframes 애니메이션 (transition 방식은 렌더 타이밍 문제로 안 됨)
**파일**: src/pages/design-2014-material/, design-2018-material-2/, design-2021-material-you/
