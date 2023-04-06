

class Class1:

    def __init__(self, name):
        self.name = name

    def method1(self):
        print("method1")

    def __del__(self):
        print("이 인스턴스는 삭제됩니다.")

cls1 = Class1("홍길동")
del cls1
# cls1.method1()


class Class2:
    # 클래스 필드
    # 해당 클래스를 사용하는 모든 인스턴스에서 값이 공유가 된다
    bag1 = []

    def __init__(self):
        # 인스턴스 필드
        # 인스턴스 내에서만 사용되는 필드
        self.bag2 = []

    def put_bag1(self, stuff):
        self.bag1.append(stuff)

    def put_bag2(self, stuff):
        self.bag2.append(stuff)

    @staticmethod
    def func_a():
        print("function call")

    @classmethod
    def func_b(cls):
        print("class function call")
        print(cls.__dict__)


james = Class2()
james.put_bag1("책")
james.put_bag2("차")

maria = Class2()
maria.put_bag1("열쇠")
maria.put_bag2("집")

print(james.bag1)
print(james.bag2)

print(maria.bag1)
print(maria.bag2)

print(Class2.funcA())