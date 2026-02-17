# 🧵 Tailor: AI Agentic Workflow
> **CNU(충남대학교) x Upstage AI WORKFLOW 개발 워크숍** 프로젝트

![프로그램 포스터](./20260120160908176_TXD93SAF.png) 

본 프로젝트는 **충남대학교 공유대학운영센터**와 **업스테이지(Upstage)**가 공동 주관한 워크숍의 결과물입니다. 업스테이지의 **SOLAR PRO** 모델과 **n8n**을 결합하여, 사용자의 비정형 데이터를 분석하고 최적화된 경로로 자동 처리하는 **AI 에이전트 시스템**을 구축했습니다.

---

## 🏫 프로그램 개요
* **프로그램명**: CNU X Upstage AI WORKFLOW 개발 워크숍
* **운영 기관**: 충남대학교 공유대학운영센터, Upstage (공동 주관)
* **운영 기간**: 2026. 1. 30. ~ 2026. 2. 6.
* **핵심 내용**: 노코드 개발 및 AI Agentic Workflow 교육을 통한 업무 분석 및 최적화

---

## 🌟 주요 기능 (Key Features)

### 1. 지능형 의도 분석 및 분류
* **Upstage Solar Pro**: 세계적 성능의 LLM을 활용해 텍스트의 맥락을 파악하고 의도를 분류합니다.
* **스마트 라우팅**: 일정, 학습, 할 일, 블로그 등 성격에 맞는 플랫폼으로 데이터를 자동 전송합니다.

### 2. 강력한 문서 이해 (Document AI)
* **Upstage OCR & Layout Analysis**: 이미지나 PDF 문서의 구조를 분석하여 텍스트를 정밀하게 추출합니다.
* **자동 요약**: 추출된 정보를 바탕으로 핵심 내용을 요약하여 데이터베이스에 저장합니다.

### 3. 멀티 플랫폼 통합 자동화
* **n8n 기반 설계**: Discord를 인터페이스로 사용하여 Notion, GitHub, Google Calendar 등과 유기적으로 연동됩니다.

---

## 🛠 기술 스택 (Tech Stack)
| 구분 | 사용 기술 |
| :--- | :--- |
| **AI Engine** | Upstage SOLAR PRO, Document Parse, OCR |
| **Automation** | n8n |
| **Interface** | Discord |
| **Integrations** | Notion, GitHub, Google Calendar, Google Tasks |

---


##  코드 구조 및 확인 방법

이 프로젝트의 모든 로직은 아래 경로에서 확인하실 수 있습니다.

### 1. 전체 워크플로우 (n8n JSON)
* [tailor_workflow.json](./workflow/tailor_workflow.json)
  * n8n에서 `Import from File`로 불러오면 전체 노드 구조와 연결 상태를 즉시 확인할 수 있습니다.

### 2. 주요 JavaScript 로직
AI의 분석 효율을 높이기 위해 직접 작성한 커스텀 스크립트입니다.
* [텍스트 정제 스크립트](./scripts/normalize-text.js): 데이터 노이즈 제거 및 포맷팅
* [응답 파싱 스크립트](./scripts/parse-ai-response.js): LLM의 JSON 응답을 안정적으로 추출

### 3. 워크플로우 시각화
![Workflow Screenshot](./workflow-capture.png)

---

## 💡 기대 효과 및 성과
* **AI 관점의 업무 최적화**: 단순히 도구를 쓰는 것을 넘어, AI가 업무를 분석하고 판단하는 에이전틱 워크플로우를 구현했습니다.
* **기술 검증**: 글로벌 AI 모델 성능 평가 리더보드에 등재된 Upstage의 기술력을 실전 프로젝트에 적용했습니다.

---

### 👤 Contributors
* 본 프로젝트는 **CNU x


