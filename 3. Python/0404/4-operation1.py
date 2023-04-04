# 조건문 if

x1 = 10
if x1 == 10:
    print("x1은 10입니다.")
    print("이건 if 문에서 실행된 문장이여")
print("이것도 치실랑가?")

if x1 == 10:
    pass
    print(id(x1))

# 정수형은 0일 경우 false, 0이 아닐 경우 true
n1 = 0
if not n1:
    print("짜잔! n1은 0입니다!")

# 문자열은 빈 문자열일 경우 false 값이 하나라도 있으면 true
n2 = ""
if not n2:
    print("n2는 빈 문자열입니다!")

# None == False

# set, dectionary, list, tuple => 전부 값이 비어있으면 false, 안에 값이 하나라도 있으면 true

print([] and (1, 2, 3))
print("abc" and "def")

# if else
n2 = 10
if n2 > 20:
    print("n2는 20보다 작습니다.")
else:
    print("n2는 20보다 큽니다!")

# in 연산자 if 혼용
n3 = ["햄버거", "감자튀김", "치킨너겟"]
if "치킨너겟" not in n3:
    pass
else:
    print("메뉴에 치킨너겟이 있습니다.")


# if ~ elif ~else
n4 = 70

if n4 > 90:
    print("a학점입니다.")
elif n4 > 80:
    print("B학점입니다.")
elif n4 > 70:
    print("C학점입니다.")
elif n4 > 60:
    print("F학점입니다.")
