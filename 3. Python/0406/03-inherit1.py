
class Parent:

    def __init__(self, a, b):
        self.a = a
        self.b = b

    def method1(self):
        print("부모에 있는 method1입니다")


class Child(Parent):

    # def __init__(self, c, d):
    #     super().__init__(c, d)

    def method1(self, param1):
        super().method1()
        print(f"자식에 있는 method1입니다, {param1}")

    def method2(self):
        print("자식에 있는 method2입니다")


class Child2:

    def __init__(self, Parent):
        self.Parent = Parent

    def my_method3(self):
        print("자식에 있는 method3입니다")


a = Child(3, 4)
a.method1("abc")
b = Child2(Parent)

c=[ "a"]

x = True