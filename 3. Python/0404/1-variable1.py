# num
a1 = 123
a2 = -456
a3 = 12.34

# 8진수
a4 = 0o12
# 16진수
a5 = 0x12

# 복소수
a6 = 1 + 2j
# 복소수는 실수와 허수의 결합체.
# 주로 벡터나 기하 연산 같은 곳에서 필요함.
# 매트랩 대신 파이썬으로 쓸 때도 있음.

# 지수 표현 방식
a7 = 4.3E10
# e는 소문자이건 대문자이건 차이 없음!
a8 = 4.3e-10

# string
b1 = 'abcd'
b2 = "abcd"
b3 = '''abcd
5dsaf489e
dsf
'''
b4 = """abcd"""
b5 = "abcd"
print(b5 * 5)
print(b5[0])
print(b5[0:2])
print(b5[0:-1])
print(b5[0:3])
print(b5[2:4])
print(b5[2:])
print(b5[:2])

b99 = """강한 힘에는 '강한 책임' 력시 따른다는 것을 동지는 알아야 할 것이오"""
print(b99)

b6 = "w e l c o m e"
print(b6[::2])
b7 = "pithon"
print(b7[:1] + "y" + b7[2:])
print(b7[::-1])

# 문자열 포매팅
# $ = f""
c1 = "ma name"
c2 = 23
print(f'제 이름은 'f'{c1}입니다')
print(f"제 입사일은 {c2 + 1}입니다.")

print(f'{c1:<20}')
print(f'{c1:>20}')
print(f'{c1:^20}')
print("*********************************************", end="\n\n")

# List
d1 = []
d2 = [1, 2, 3, 'lite']
print(d1)
print(d2, type(d2))
# print(d2, type(d2))
# print(type(1))
# print(type("abc"))


# slicing
print(d2[1])
print(d2[:2])

d3 = [1, 2, 3, ['a', 'b', 'c']]
print(d3[3][1])  # 3번째 항목의 1번째 항목을 주세요.

d4 = list("python")
d4[4] = 'i'
print(d4)
d4[4:] = []
print(d4)

d5 = ["a", "b", "c"]
d6 = ["d", "e", "f"]
print(d5 + d6)

# 튜플 list에 const를 걸어둔 형태.
e1 = (1, 2, 3)
print(e1)

e2 = True, "a", 3, "b"
print(e2)
print(e2[1])
print(e2[:2])

e3 = False, 4
print(e2 + e3)
print(e3 * 2)

# e3[0] = 3 에러
# del e3[0] 에러
# e3[:1] = 2,3,4
# print(e3)
print(list(e3))
e4 = [1, 2, 3, 4]
print(tuple(e4))

# set / 집합

f1 = {1, 1, 2, 3, 4, 4, 5, 6, }
print(f1)
# 중복허용 불가, brace를 통해 만들어진다
f2 = {3, 2, 3, 4}
print(set(f2))
f3 = {1, 2, 3, 4}
f4 = {3, 6, 5, 6}
print(f3 & f4)
print(f3 | f4)
print(f3 - f4)
print(list(f3 - f4))

# dictionary 객체처럼 사용할 수 있는 것.
g1 = {"a1": 1, "b1": "abc", "c1": [1, 2, 3], 1: (9, 8, 7), 3: ("x", "y"), (2, 3): "xyz", "c1": "abcde"}
# 배열은 안되지만 튜플은 됨.
print(g1)
print(g1["a1"])
g1["a1"] = 10;  # 갱신 가능

#key나 값만 받고 싶을 때
print(g1.keys())
print(g1.values())
# logic

h1 = True
h2 = False
