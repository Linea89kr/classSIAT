
#재귀함수

for a in range(1,6):
    print("hello world!")


def call_hello(a):
    if a == 0:
        return
    print("hello world!")
    call_hello(a-1)

    call_hello(5)