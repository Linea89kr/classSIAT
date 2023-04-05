def clo1():
    hello = "hello world!"
    arr1 = [10, 20, 30]

    def inner_clo1():
        # hello = "hello python"
        nonlocal hello
        hello = "hello python"
        arr1[1] = 200
        print(hello)
        print(arr1)

    inner_clo1()
    print(hello)
    print(arr1)


clo1()


# 클로저2
def outer2():
    a = 3
    b = 5

    def inner2(x):
        return a + x + b

    return inner2


clo3 = outer2()
print(clo3(2))


# def outer3(funcA):
#     funcA()
#
#
# def inner3(x):
#     print(x ** x)
#
#
# outer3(inner(3))
# # 파이썬에서 자바스크립트하듯 인자값에 함수 넣어서 넘기는 건 사용할 수는 없다.

