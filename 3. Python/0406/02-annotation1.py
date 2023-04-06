
# 데코레이터
def deco_function(original_function):
    def wrapper_function(*args, **kwargs):
        print("{} 함수가 호출되기전 입니다".format(original_function.__name__))
        return original_function(*args, **kwargs)
    return wrapper_function


@deco_function
def display_1():
    print("display_1 함수 실행")


@deco_function
def display_2(name, age):
    print(f"display_2 함수 실행. {name}, {age}")


class DecorationClass:
    def __init__(self, original_function):
        self.original_function = original_function

    def __call__(self, *args, **kwargs):
        print("{} 함수가 호출되기 전 입니다".format(self.original_function.__name__))
        return self.original_function(*args, **kwargs)


@DecorationClass
def display_3(name, age):
    print(f"display_3 함수 실행 {name}, {age}")


display_3("jhon", 25)
