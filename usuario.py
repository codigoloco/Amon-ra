from conexionBD import conexion
from models.usuario import UsuarioM


class DataUsuario():
    # def __init__(self,user:UsuarioM):
    #     self.clav=user.clav
    #     self.user=user.user
    def login(self,user,clav):
        print(user,clav, "login")
        dat=conexion()
        query=f"select * from usuarios where coduser ='{user}'  and pass ='{clav}'"
        res=dat.execute_query(query)
        print(res.fetchall())

    