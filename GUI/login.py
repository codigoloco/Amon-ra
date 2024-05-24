from PyQt6 import uic
from usuario import DataUsuario

class Login():
    def __init__(self) :
        self.login=uic.loadUi("GUI/login.ui")
        self.login.lblMesg.setText("")
        self.initGUI()
        self.login.show()


    def initGUI(self):
        self.login.Aceptar.clicked.connect(self.ingresar)

    def ingresar(self):
        if len(self.login.TexUsuario.text())<2:
            self.login.lblMesg.setText("Ingrese un usuario valido")
            self.login.TexUsuario.setFocus()
                
            
        elif len(self.login.TxClave.text())<2:
            self.login.lblMesg.setText("Ingrese una contraseña  valida")
            self.login.TxClave.setFocus()
            
        else:
            self.login.lblMesg.setText("")
            dt=DataUsuario()
            res=dt.login(self.login.TexUsuario.text(),self.login.TxClave.text())
            if res is not None:
                self.login.Hide()
                
            