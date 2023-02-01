## 🔆 문제 요약

- input: 압축할 문자열 s
    - s의 길이는 1이상 1000이하
    - s는 알파벳 소문자로만 이루어져 있음
- solution(): s가 문자열로 주어질 때 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return하는 함수
    - 문자열은 제일 앞부터 정해진 길이만큼 잘라야 함
    - 단위는 하나로만! ex) 입출력예시 3번, 3ab2de는 안 됨
- output: 압축된 문자열의 길이

## 🔆 문제 풀이

- 입력값 처리
    - 알파벳 소문자로만 이루어져 있는가→ 아스키 코드 검사
    - 문자열 길이 검사
- unit: 문자열을 앞에서부터 자를 단위. 1부터~문자열 길이만큼.
- unit_list: 현재 기준으로 묶을 수 있는 문자열을 원소 단위로 삽입
    - 리스트 슬라이싱 사용 ex) unit_list.append(s[:unit])
- unit_list 안의 원소들 중에 동일한 것이 있는 지 확인
- 확인된 개수만큼 압축 후 문자열로 변환
- 개수 확인

## 🔆 기능 사항

- **string 클래스**
- 초기화
    - `string` : 소문자로만 이러진 문자열
    - `unit_dic` : 기준 개수와 기준 개수대로 묶은 문자열
    - `S_MIN` : 최솟값
    - `S_MAX` : 최댓값
- `def checkInputMinMix(value)` : 입력받은 문자열 길이가 min/max를 만족하면 true 반환
    - 입력된 문자열이 알파벳 소문자로만 이루어져 있는지 순회 공연
- `def isSmallLetter(value)` : 입력받은 문자열 value가 소문자면 true 반환
- `def inputS()` : 문자열 s를 입력받음
    - checkInputMinMax()
    - isSmallLetter()
- `def inputValue()` : 문자열 s를 반복해서 입력받음

- **StringCompression 클래스**
- 초기화
    - `unit_dic`
        - key: 압축했을 때 가장 적은 길이의 문자열을 가지게 되는 기준
        - value: key값을 기준으로 압축된 문자열
    - `compressedStr` : 최종 압축된 문자열
- `def splitStr(value, unit)` : unit만큼 문자열 분리하여 리스트에 넣어 반환
- `def strCompression(value)` : 입력받은 리스트 안에서 연속된 인덱스에서 같은 원소는 묶어서 문자열로 압축하여 반환
- `def countStr(count, value)` : 문자열을 합쳐주는 함수
    - count==1: value의 인접한 원소 둘이 같지 않다는 뜻
- `~~def selectMinLengthStr()` : unit_dic의 value 중 가장 적은 길이를 가진 value의 key값 리턴~~
- `def solution(s)` : 문제를 풀 함수
    - `length_list` : 길이값을 저장할 리스트
    - for unit in range(1, len(s)//2) → unit의 개수를 하나씩 늘려감
        - splitStr(value, unit)
        - strCompression(value)
    - return min(length_list)
- `def run()`
    - string클래스를 이용하여 s 입력받기
    - solution 메소드를 실행하여 압축된 문자열의 개수 반환

## 🔆이슈

- 고려하지 못한 부분
    - split이 되지 않음 (해결)
        - 문자열을 냅다 2로 나눠서 슬라이싱이 잘못 됨. unit으로 나눠서 슬라이싱 되도록 함
    
    ![image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/921d6e7a-b0c2-413f-ac6e-a0ef5d6fc254/Untitled.png)
    
    - 8개인데 3개의  unit일 경우 뒤에 2자리가 짤림
        - splitStr 메소드에서 문자열//unit의 나머지가 0이 아닌 경우.
            - None을 반환하면 안 돼…
            - 나머지값 반환
    
    ![image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2451862b-9ac2-4d4c-bdca-3b1a0af2799b/Untitled.png)
    
    - 문자열 압축 실패의 현장.. 왜 압축했는데 2ababcdcd가 아니라 2a가 되었죠?
        - 원소의 첫번째 원자 value[0]으로 했기 때문
    
    ![image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d899cdb3-73d0-4568-a229-f7abc7835ebd/Untitled.png)