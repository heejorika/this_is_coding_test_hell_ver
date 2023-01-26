# 히정

- 정확성 테스트는 뭐고 효율성 테스트는 뭥미

## 🔆 문제 요약

- 입력
    - food_times : 각 음식을 모두 먹는 데 필요한 시간이 음식의 번호 번호 순서대로 들어 있는 배열
    - k : 방송이 중단된 시간
    - N : 음식의 번호
- 출력
    - 네트워크 정상화 후 다시 방송을 이어갈 때, 몇 번 음식부터 섭취해야 하는지
- 기타
    - 음식 하나를 1초 동안 흡입
    - solution(food_times, K)⇒ 몇 번 음식부터 다시 흡입하면 되는지 반환
    - 현재

## 🔆 예외 사항

- 입력값 길이 제한
    - food_times의 길이는 1이상 2000이하
    - fodd_times의 원소는 1이상 1000이하 자연수
    - k는 1이상 2000000이하 자연수
- 섭취해야 할 음식이 없다면 -1 반환

## 🔆 기능 설명

- `def __**init__**()` : 초기화
    - `food_times`
    - `K`
    - `pointer` : 현재 먹고 있는 음식 인덱스, 결과값
    - `food_time_zeroL` : 다먹은 음식 인덱스 List
- `def solution(food_times, K)` : 몇 번 음식부터 다시 흡입하면 되는지
    
    1) 먹은 음식은 -1초 해줌
    
    2) 먹은 음식이 0초가 됐을 경우, food_time_zeroL에 pointer 추가
    
    3) food_time_zeroL과 food_times 길이가 같으면 바로 종료 후 -1 return
    
    4) 다음 먹어야 할 음식 번호를 찾아야 함→ findNextPointer(pointer)
    
- `def findNextPointer(currentPointer)` : 다음 먹을 음식의 인덱스 번호
    - 현재 포인터<다음 포인터<len(food_times)
    - 다음 포인터는 food_time_zeroL에 포함되면 안 됨
        - 만약 포함되면 다시 0부터 시작
- `def inputValue()` : food_times와 K 입력받기
    - 첫째줄에 공백 기준으로 food_times 입력받기
    - 둘째줄에 K 입력받기
- `def checkInputValueMinMax(value, valueMin, valueMax)` : 입력값의 min, max 검사
- `def checkInputValueDigit(value)` : 입력값이 숫자가 맞는지 조사