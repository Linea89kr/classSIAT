# global
a1 = 1

def func1():
    a1 += 1
    return a1


def func2():
    global a1
    a1 += 1

    def func3():
        global a1
        print(a1 + 1)

    func3()


a1 = func1(a1)
print(a1)
func2()
# func1() < 그대로 쓰면 에러남!
func1(a1)
