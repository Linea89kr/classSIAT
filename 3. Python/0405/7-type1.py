# 타입 명시

# 기존
def func1(a):
    return a + 1


# 타입 명시
def func11(a: int, b: str):
    print(b)
    return a + 1


print(func1(1))


# 타입 일치 안하면 에러남
# print(func1(asdf))

# 반환하는 타입을 명확하게 하기 위해 등장.
# python 3.6에 등장.

def func2(a: int) -> int:
    return a + 10


print(func2(3))
