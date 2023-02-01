## 🔆문제 요약

- input
    - 알파벳 대문자와 숫자로만 구성된 문자열
    - 1≤문자열의 길이≤10000
- output
    - 알파벳 오름차순과 모든 숫자를 더한 값

## 🔆문제 풀이

- 입력값
    - 문자열 길이 체크
    - 문자열이 대문자 or 숫자인지
- 문제 풀이
    - 문자열 대문자와 숫자 분리
    - 문자열 알파벳 순차대로→ sorted(문자열)
    - 문자 모두 합산
    - 대문자와 숫자 합치기

## 🔆기능 사항

- class sortedStr:
- `def inputValue()`: 입력값 처리
    
    → `def checkValueMinMax(value)` : 문자열 길이의 유효성 체크
    
    → `def checkVaidateInput(value)` : 입력값이 대문자 or 숫자인지 
    
- `def splitStrNum(value)` : 대문자와 숫자 분리
- `def sortedValue(value)` : 정렬
- `def run()` : 메인
    - 입력값 처리
    - 정렬
    - 출력