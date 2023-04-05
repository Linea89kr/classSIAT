
# 클래스
class Person1:
    x = "welcome"

    def greeting(self):
        print("hello")

obj1 = Person1()
obj1.greeting()
print(obj1.x)

obj2 = Person1()
obj2.x = "greeting"
print(obj1.x)
print(obj2.x)

print("--------------------------------------------------------------------")
obj3 = obj2
obj2.x = "how R U"
print(obj2.x)
print(obj3.x)
# 기존에 선언해둔 객체를 불러온다면 얕은 복사를 실행한다.
# mutable이니 얕은 복사가 일어남.

str1 = "abcd"
print(type(str1))