## 🔆문제 요약

- input : 열쇠를 나타내는 2차원 배열 key, 자물쇠를 나타내는 2차원 배열 lock
- output : 열쇠로 자물쇠를 열 수 있으면 true, 열 수 없으면 false를 반환→ solution 함수

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84888976-211b-4b5b-934e-ed5f73a0fbe5/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b24959a-c982-4c9c-b9f0-27a9b8b610b8/Untitled.png)

## 🔆문제 풀이

- 기능
    - 시계바늘 방향 90도 회전
    - 오른쪽, 왼쪽, 위, 아래 한 칸 씩 이동
- 정사각형만 가능
- 0으로 설정하는 경우
    - 위 5가지 기능 실행 후 index out of range가 일어나면 그 칸은 0으로 설정
- 안 되는 경우
    - 위 5가지 기능 실행 후 key에 남은 값과 lock의 남은 값이 다를 때

### 1. 모든 경우의 수를 해본다

- 너무 비효율적임
- STOP을 언제 할까?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3423d4cb-f5fe-4c04-95a8-8a2b9561adf6/Untitled.png)

### 2. 좌표 맞추기

- 정규화 할 수 있을 지 잘 모르겠음
- **90도 회전 : 정답 칸(LOCK)의 좌표 특징을 맞출 수 있음**
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1dd24afe-5362-4467-8945-bd89a1eefcee/Untitled.png)
    
- 좌우상하 +1칸은 정답 칸과의 값 비교를 통해서 어디로 갈 지 정하기
- **좌, 우 : Y축 맞출 수 있음**
    - 좌 +1 ⇒ Y -1
    - 우 +1 ⇒ Y+1

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/281642b1-a18d-4a3d-b349-0616c1a9a03a/Untitled.png)

- **상, 하: X축 맞출 수 있음**
    - 상 + 1 ⇒ X-1
    - 하 + 1 ⇒ X+1

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ba3ed94-9084-4b18-97ef-3f46e1f4e21a/Untitled.png)

## 🔆기능 사항

- key_arr, lock_arr
- 5가지 기능
    - `rotate90()` : 90도 회전
    - `goRight()` : 오른쪽으로 한 칸
    - `goLeft ()` : 왼쪽으로 한 칸
    - `goTop()` : 위쪽으로 한 칸
    - `goBottom()` : 아래쪽으로 한 칸
- `checkClear()` : 돌기가 걸리지 않는지
- try~catch
    - 기능 실행 후 index out of range가 일어나지 않는지
- break
    - 기능 실행 후 key에 남은 값과 lock에 남은 값이 다를 때 검사할 필요 X

### 알고리즘

- lock에서 0인 좌표를 저장→ lock_zero[]

1) key에서 1인 좌표를 저장→ key_one[]

2) lock 좌표들의 특징을 저장

- x좌표와 y좌표를 각자 저장

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad509eae-6bdc-4ff4-9fb0-471225f4f007/Untitled.png)

3) 특징이 맞을 때까지 90도 회전

3-1) 맞는 게 있다→ 4)

3-2) 맞는 게 없다→ 종료 False 반환

4) 현재 key의 1 좌표와 lock의 0의 좌표의 크기 비교 후 이동

- x좌표, y좌표 각자 비교하기
    - x좌표 +1 → 아래쪽 +1
    - x좌표 -1 → 위쪽 +1
    - y좌표 +1 → 오른쪽 +1
    - y좌표 -1 → 왼쪽 +1

5) 좌표를 맞춘 뒤 돌기가 걸리지 않는 지 확인

5-1) 걸릴 경우 →  종료 False 반환

5-2) 안 걸릴 경우 → 종료 True 반환