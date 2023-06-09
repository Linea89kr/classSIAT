# print: 표준 출력
# print(): 콘솔에 데이터를 출력할 때 사용하는 함수
# 사용 방법: print("출력 문장1""출력문장2"... [sep,end,file,flush])
# 옵션
# - sep: 출력 대상 사이에 구분자를 넣을 때 사용하는 옵션(디폴트는 "")
# - end: 출력 후 맨 마지막에 넣을 문자열(디폴트는 \n)
# print 출력 방식
# - print의 출력 방식에는 크게 2가지방식이 있으며 %를 활용한 출력과, .format을 활용한 출력 방식이 존재한다.
# - 과거 2.0 시절에는 %를 활용한 출력 방식이 많이 쓰였고 3.0이 되면서 .format을 활용한 출력방식이 쓰이기 시작
# - 다만 두 방식 전부 골고루 사용되므로 어떤 게 좋고 나쁘고 할 수가 없음.

# print % 출력
# - 출력 형식에 형식화된 문자열을 넣어 출력의 모양을 변경할 때 사용하는 방식
# - 문자열 안에 "%형식뭄ㄴ자"로 지정하면 %뒤의 출력 대상들이 1:1로 매핑되여 출력된다.
# - 형식문자는 %s(문자열), %ㅊ(문자열 하나), %d(정수), %f(부동 소수), %o(8진수), %ㅌ(16진수)등이 존재한다.

print("abc", "def", 1, 2, 3, sep="`", end="========<종료>=======\n")

print("내 이름은 %s입니다." % "noname")
print("내 이름은 %s입니다. 나이는 %d세이고, 성별은 %s입니다." % ("noname", 20, "남자"))

print("내 이름은 {}입니다.".format("noname"))
print("나이는 {1}이고, 성별은 {2}입니다. 내 이름은 {0}입니다.".format("noname", 20, "남자"))
print("나이는 {age}이고, 성별은 {gender}입니다. 내 이름은 {name}입니다.".format(name="noname", age="20", gender="남자"))

print("{0},{0},{0}".format("noname"))
# print format 출력
# - 출력 방식이 format 메서드를 통해 기술한 출력 대상들이 대응되어 출력되게 하는 방식
# - () 지정시 format에 대응된 대상들이 해당 자리에 1:1 매핑되어 출력된다.
# - (n) 안에 숫자를 지정하여 출력대상의 위치를 지정할 수 있다.
# - 동일한 데이터를 여러번 출력하는 것 또한 가능하다.