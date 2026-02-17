/**
 * @description 입력된 텍스트 데이터 정제 및 불필요한 공백 제거
 * @param {string} rawText - 디스코드 또는 OCR로부터 전달된 원문
 */

const inputData = items[0].json;
let content = inputData.content || inputData.text || "";

// 1. 양 끝 공백 제거 및 연속된 줄바꿈 정리
content = content.trim().replace(/\n{3,}/g, '\n\n');

// 2. 특수문자 및 불필요한 노이즈 제거 (필요 시 추가)
// content = content.replace(/[^\w\s가-힣ㄱ-ㅎㅏ-ㅣ]/g, '');

return {
  json: {
    normalizedContent: content,
    timestamp: new Date().toISOString(),
    length: content.length
  }
};
