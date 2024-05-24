# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'Login.ui'
##
## Created by: Qt User Interface Compiler version 6.7.0
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide6.QtWidgets import (QApplication, QDialog, QLabel, QLineEdit,
    QPushButton, QSizePolicy, QWidget)

class Ui_Dialog(object):
    def setupUi(self, Dialog):
        if not Dialog.objectName():
            Dialog.setObjectName(u"Dialog")
        Dialog.resize(400, 300)
        Dialog.setStyleSheet(u"background-color: rgb(255, 255, 255);")
        self.label = QLabel(Dialog)
        self.label.setObjectName(u"label")
        self.label.setGeometry(QRect(60, 90, 71, 41))
        self.label_2 = QLabel(Dialog)
        self.label_2.setObjectName(u"label_2")
        self.label_2.setGeometry(QRect(40, 130, 91, 31))
        self.TexUsuario = QLineEdit(Dialog)
        self.TexUsuario.setObjectName(u"TexUsuario")
        self.TexUsuario.setGeometry(QRect(140, 100, 171, 22))
        self.TexUsuario.setStyleSheet(u"border: 1px solid #2d8ecb ;\n"
"border-radius:8px;\n"
"\n"
"")
        self.TxClave = QLineEdit(Dialog)
        self.TxClave.setObjectName(u"TxClave")
        self.TxClave.setGeometry(QRect(140, 140, 171, 22))
        self.TxClave.setStyleSheet(u"border:1px solid #2d8ecb;;\n"
"border-radius:8px;\n"
"")
        self.TxClave.setEchoMode(QLineEdit.Password)
        self.label_3 = QLabel(Dialog)
        self.label_3.setObjectName(u"label_3")
        self.label_3.setGeometry(QRect(140, 60, 171, 31))
        self.Aceptar = QPushButton(Dialog)
        self.Aceptar.setObjectName(u"Aceptar")
        self.Aceptar.setGeometry(QRect(100, 210, 101, 31))
        font = QFont()
        font.setPointSize(12)
        font.setBold(True)
        self.Aceptar.setFont(font)
        self.Aceptar.setCursor(QCursor(Qt.OpenHandCursor))
        self.Aceptar.setStyleSheet(u"background-color:rgb(67, 189, 216);\n"
"\n"
"color:rgb(255, 255, 255);\n"
"border-radius:8px;\n"
"border: 1px solid #9166ff;\n"
"")
        self.Cerrar = QPushButton(Dialog)
        self.Cerrar.setObjectName(u"Cerrar")
        self.Cerrar.setGeometry(QRect(220, 210, 101, 31))
        self.Cerrar.setFont(font)
        self.Cerrar.setStyleSheet(u"background-color:rgb(132, 132, 132);\n"
"border-radius:8px;\n"
"border: 1px solid #799d95;\n"
"color:rgb(255, 255, 255);")
        self.lblMesg = QLabel(Dialog)
        self.lblMesg.setObjectName(u"lblMesg")
        self.lblMesg.setGeometry(QRect(140, 270, 131, 16))
        self.lblMesg.setLayoutDirection(Qt.LeftToRight)
        self.lblMesg.setAlignment(Qt.AlignCenter)

        self.retranslateUi(Dialog)

        QMetaObject.connectSlotsByName(Dialog)
    # setupUi

    def retranslateUi(self, Dialog):
        Dialog.setWindowTitle(QCoreApplication.translate("Dialog", u"Dialog", None))
        self.label.setText(QCoreApplication.translate("Dialog", u"<html><head/><body><p><span style=\" font-size:14pt;\">Usuario</span></p></body></html>", None))
        self.label_2.setText(QCoreApplication.translate("Dialog", u"<html><head/><body><p><span style=\" font-size:14pt;\">contrase\u00f1a</span></p></body></html>", None))
        self.label_3.setText(QCoreApplication.translate("Dialog", u"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><meta charset=\"utf-8\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"hr { height: 1px; border-width: 0; }\n"
"li.unchecked::marker { content: \"\\2610\"; }\n"
"li.checked::marker { content: \"\\2612\"; }\n"
"</style></head><body style=\" font-family:'Segoe UI'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:14pt;\">INICIO DE SESSION</span></p></body></html>", None))
        self.Aceptar.setText(QCoreApplication.translate("Dialog", u"Acceder", None))
        self.Cerrar.setText(QCoreApplication.translate("Dialog", u"Cerrar", None))
        self.lblMesg.setText(QCoreApplication.translate("Dialog", u"Message", None))
    # retranslateUi

