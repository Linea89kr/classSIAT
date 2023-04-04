
def func1():
    print("이것은 func1 함수입니다.")

func1()

def func2(a):
    print(f"a는 {a}입니다")

func2(123)

def func3(a,b, c=3):
    print(f"a는 {a} b는 {b} c는 {c}")

func3(1,2, 123)

# 함수 선언부의 위치에 따라 위치가 정렬됨.
def func4(name1, name2, name3):
    print(name1, name2, name3)

func4(name2="Y", name3="P", name1="J")

#가변 값. 리스트 형태로 온다.
def func5(*number):
    for n in number:
        print(n, end=" ")

func5(2,5,3,7,1)


