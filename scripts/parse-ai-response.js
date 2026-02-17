/**
 * @description Solar LLM의 응답에서 JSON 블록을 추출하고 파싱함
 */

const rawResponse = items[0].json.output; // LLM 응답 결과
let cleanJson;

try {
  // 1. 마크다운 코드 블록(```json ... ```) 내의 내용만 추출
  const jsonMatch = rawResponse.match(/```json\s?([\s\S]*?)\s?```/) || 
                    rawResponse.match(/{[\s\S]*}/);
                    
  const jsonString = jsonMatch ? jsonMatch[1] || jsonMatch[0] : rawResponse;
  
  // 2. JSON 객체로 변환
  cleanJson = JSON.parse(jsonString);
} catch (error) {
  // 파싱 실패 시 에러 핸들링 및 기본값 설정
  cleanJson = {
    error: "Parsing failed",
    original: rawResponse,
    category: "UNCATEGORIZED"
  };
}

// n8n의 다음 노드에서 사용하기 위해 배열 형태로 반환
return Array.isArray(cleanJson) ? cleanJson.map(i => ({json: i})) : [{json: cleanJson}];
