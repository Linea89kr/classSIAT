
# 리턴타입 함수 예제1
def add(a,b):
    return a+b

x1 = add(10,20)
print(x1)


def not_ten(a):
    if a == 10:
        return 10
    print(a, "입니다", sep = " ")


x2 = not_ten(11)

print("--------------------------------------------------------------")
# 리턴타입 함수 예제2

def add_sub(a,b):
    return a+b, a-b
# return (a+b, a-b) 요게 생략된 것.
x, y = add_sub(4,10)
print(x,y)

def add_sub2(a,b):
    return a+b, a-b, a^b

# x,y = add_sub2(20,10)
# print(x)
# print(y) 이러면 에러남!

x, *y = add_sub2(20,10)
print(x)
print(y)

# *를 붙여서 받은 값은 리스트 형태로 들어온다.


def print_def(dic1):
    print(dic1)
    dic1["name"] = "dic2"

dic = {"name" : "dic1", "num1" : 1234}
print_def(dic)
print(dic)