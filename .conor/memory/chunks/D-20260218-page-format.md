---
type: decision
date: 2026-02-18
tags: [page-format, template, convention]
refs: [P-20260218-build-pipeline]
---
**상황**: `{% extends %}`, `<template>` 등 비표준 문법이 직관적이지 않음
**결정**: HTML 주석 기반 메타데이터 + 표준 태그로 변경
**근거**: `<!-- layout: base.html -->`, `<!-- title: X -->` 는 모든 웹 개발자가 즉시 이해. `<body>` 는 `<template>`보다 "페이지 본문" 의미 명확. `$DATA.pages` 는 매직변수 `{{ pages }}` 보다 명시적.
**대안**: Front Matter(YAML), JSX 등 — HTML 파일 호환성 유지를 위해 주석 방식 선택
