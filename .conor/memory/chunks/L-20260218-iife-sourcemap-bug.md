---
type: learning
date: 2026-02-18
tags: [typescript, sourcemap, bug, dev]
refs: [P-20260218-build-pipeline]
---
**발견**: dev 모드에서 `(function(){${code}})();` IIFE 래핑 시 SyntaxError 발생
**원인**: TypeScript `transpileModule`이 `inlineSourceMap:true` 일 때 `//# sourceMappingURL=...` 주석으로 끝나며 개행이 없음. `})();`가 주석의 일부로 먹혀 함수가 닫히지 않음.
**해결책**: `(function(){${code}\n})();` — code 뒤에 `\n` 추가
**파일**: `cli/modules/pipeline/emit-assets.ts:42`
