import sqlite3

class conexion():
    def __init__(self) :
        try:
            self.con= sqlite3.connect("./Bas_Datos/Productos.db")
        except Exception as ex:
            print(ex)
    
    def execute_query(self,query):
        print(query, self.con)
        self.cursor=self.con.cursor()
        res=self.cursor.execute(query)    
        return res
    
    def clos_conect(self):
        self.cursor.close()
        self.con.close()

