# self
# self => js.this
class Class1:
    first = None
    # second = None
    # 논으로 날려도 괜찮음.
    def __init__(self, first, second, third, forth, fifth):
        super()
        self.first = first
        self.second = second
        self._third = third
        self.__forth = forth
        self.__fifth__ = fifth

    def set_data(self, first, second, third, forth):
        pass

a_cls = Class1("aaa", "bbb", "ccc", "ddd", "eee")
# a_cls.set_data("aaa","bbb")
print(a_cls.first)
print(a_cls.second)
print(a_cls._third)
# 보호된 값에 접근했다는 경고가 뜬다.
# print(a_cls.__forth)
# __가 붙으면 아예 접근이 안됨.
print(a_cls.__fifth__)

print(Class1.mro())




