# 희정

---

## 🔆문제 요약

<aside>
💡 입력받은 캐릭터의 점수 N을 반으로 갈라 각각 왼쪽과 오른쪽을 합했을 때 기술을 쓸 수 있는지 없는지 구해라.

</aside>

- input : 현재 캐릭터 점수 N
- output
    - 기술을 쓸 수 있을 때 : LUCKY
    - 기술을 쓸 수 없을 때 : READY

- 조건
    - N의 자릿수는 항상 짝수임
    - 자릿수를 기준으로 반으로 나누어 왼쪽과 오른쪽의 합이 같아야 함(=기술을 쓸 수 있음)

## 🔆문제 풀이

- input
    - N은 길이가 짝수
    - N은 정수
    - N은 10이상, 99999999이하
- 문자열로 입력받고 반으로 자른 뒤 각각 왼쪽과 오른쪽을 합함
- 같은 지 확인하고 output

## 🔆기능 사항

- 캐릭터 클래스
    - `def inputValue()` :
        - try~except 사용해서 문자열 거르기
    - `def isEvenNumber(value)` : 입력받은 값이 짝수면 true 반환
    - `def validateNumber(value)` : min, max를 만족하는 수일 때 true 반환
    
- 게임 클래스
    - `def gameStart()`
        - 캐릭터 클래스를 생성해서 현재 캐릭터 점수 입력받기
    - `def spacialMove()` : 필살기를 쓸 수 있는 지