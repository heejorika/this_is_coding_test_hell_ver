- `def __**init__**()` : 초기화
    - `food_times`
    - `K`
    - `pointer` : 현재 먹고 있는 음식 인덱스
    - `food_time_zeroL` : 다먹은 음식 인덱스 List
- `def solution(food_times, K)` : 몇 번 음식부터 다시 흡입하면 되는지
    
    1) 현재 food_times[pointer]가 0이라면, 그 음식은 다 먹은 거
    
    - food_time_zeroL에 pointer 추가
    - 현재 먹어야 할 음식 번호를 찾아야 함→ findNextPointer(pointer)
    
    2) 먹은 음식은 -1초 해줌
    
    3) 다음 먹어야 할 음식 번호를 찾아야 함→ findNextPointer(pointer)
    
- `def findNextPointer(currentPointer)` : 다음 먹을 음식의 인덱스 번호
    - 현재 포인터<다음 포인터<len(food_times)
    - 다음 포인터는 food_time_zeroL에 포함되면 안 됨
        - 만약 포함되면 다시 0부터 시작
- `def inputValue()` : food_times와 K 입력받기
    - 첫째줄에 공백 기준으로 food_times 입력받기
    - 둘째줄에 K 입력받기
- `def checkInputValueMinMax(value, valueMin, valueMax)` : 입력값의 min, max 검사
- `def checkInputValueDigit(value)` : 입력값이 숫자가 맞는지 조사