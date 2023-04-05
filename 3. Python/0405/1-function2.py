# 사용자 정의 함수 예제2
x1 = [10, 20, 30]
x2 = [99, 88, 77]


def print_number(a, b, c):
    print(a, b, c)


print_number(*x1)
print_number(*x2)

# 사용자 저으이 함수 예제3

print("---------------------------------------------------------------------")


def personal_info(name, age, address):
    print(f'이름 : {name}')
    print(f'나이 : {age}')
    print(f'주소 : {address}')

x3 = {"name": "홍길동", "age": 30, "address": "수원시"}

personal_info(*x3)
personal_info(**x3)

print("---------------------------------------------------------------------")
# 사용자 정의 함수4
# x3 = {"name": "홍길동", "age": 30, "address": "수원시", "aaa":"bbb"} < name, age, address에 맞는 값이 없으니 에러남
# 그러면 가변적으로 인자를 바등려면...?
x4 = {"name": "홍길동", "age": 30, "address": "수원시"}

def personal_info(**kwargs):
# < 파이썬에서 정해둔 구문. 뭔진 모르겠지만 암튼 그거 있잖아 그 인자!
# < python: 하 참 어이가 없어서 암튼 내가 읽고 이해한대로 만들어는 준다.
    for kw, arg in kwargs.items():
        print(kw,":",arg)
# 키워드랑 args를 kwargs의 items를 돌며 찾아와줘

personal_info(**x4)
personal_info(name="고길동", age=43, address="쌍문동")

def custom_print(*args, **kwargs):
    print(*args)
    for kw, arg in kwargs.items():
        print(kw,":",arg,sep=" ")

custom_print(1,2,3, a="aaa", b="bbb")



print("---------------------------------------------------------------------")

def print_number(a,*args):
    print(a)
    print(args)

print_number(1)
print_number(1, 10, 20)
print_number(*[10, 20, 30])