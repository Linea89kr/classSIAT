# 산술연산자
a = 10
b = 3
print(a + b)
print(a - b)
print(a * b)
print(a / b)  # 소수점까지 표시
print(a // b)  # 소수점 생략
print(a % b)
print(a ** b)

c = 10;
d = 0.3
print(c + d)

print(10 // 3)
print(-10 // 3)

# 비교연산자
print(10>3)

# 논리연산자
print(True and True)
print(True and False)
print(True or False)
print(not False)

# 비트연산자
# 안 써.

# 할당연산자
# 똑같아.

# 삼항연산자
# if (조건식)?참값:거짓값
# 참값 if (조건식) else 거짓인 경우 값.
print(10 if 10 > 3 else 3)

# 멤버 연산자
list1 = [1, 2, 3, 4]
print("참" if 1 in list1 else "거짓")
print(1 in list1)
print(1 not in list1)

# 아이디 연산자
x1 = 10
print("x1: ", id(x1))
x2 = 11
x3 = 11
print("x2: ", id(x2))
print("x3: ", id(x3))
x3 = 12
print("x3-2: ", id(x3))
x4 = [1, 2, 3]
x5 = [1, 2, 3]
print("x4: ", id(x4))
print("x5: ", id(x5))
x6 = (2,3)
x7 = (2,3)
print("x6: ", id(x6))
print("x7: ", id(x7))
x8={2,3}
x9={2,3}
print("x8: ", id(x8))
print("x9: ", id(x9))

# 임의의 저장한 겂에 아이디를 저장. 동일한 값이라면 같은 아이디라 절약이 되지만, 서로 다른 값이면 계속 아이디를 새로 넣어줌.
