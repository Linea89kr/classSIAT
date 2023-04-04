import sys
from PyQt5.QtWidgets import QWidget, QApplication


class MyApp(QWidget):

    def __init__(self):
        super().__init__()
        self.init_ui()

    def init_ui(self):
        self.setWindowTitle("내 첫 윈도우 어플리케이션")
        self.move(300, 300)
        self.resize(300, 300)
        self.show()

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = MyApp()
    sys.exit(app.exec_())
