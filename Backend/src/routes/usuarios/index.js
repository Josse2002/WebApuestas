const express = require("express");
const app = express();
const bd = require("../../database/config");

app.get("/", (req, res) => {
  const sql = "SELECT * FROM usuarios";

  bd.query(sql, (error, resultado) => {
    if (error) {
      console.log(error, "Error al mostrar los datos");
      res.json({
        status: false,
        mensaje: error,
        alerta: "No se pudo  obtener la información",
      });
    }

    if (resultado) {
      res.json({
        status: true,
        mensaje: "Datos obtenidos",
        data: resultado
      });
    }
  });
});

app.post("/", (request, response) => {
  const { nombreUsuario, apellidoUsuario, dui, email, userName, clave, idRol } = request.body; 

  
  const sql = "INSERT INTO usuarios SET ?";

  bd.query(sql,{nombreUsuario, apellidoUsuario, dui, email, userName, clave , idRol},
    (error, resultado) => {
      if (error) {
        response.json({
          status: false,
          mensaje: error,
          alerta: "Error al insertar",
        });
      }
      if (resultado) {
        response.json({
          status: true,
          mensaje: "Agregado correctamente",
          data: resultado
        });
      }
    }
  );
});

app.delete('/:id', (req, res) =>{
    const id =  req.params.id;
    const sql = "DELETE FROM usuarios WHERE idUsuario = ?"

    bd.query(sql, [id], (error, result) =>{
        if(error){
            res.json({
                status: false,
                mensaje: error,
                alerta:"No se pudo eliminar el usuario"
            })
        }

        if(result){
            res.json({
                status:true,
                mensaje:"Usuario eliminado completamente",
                data: result
            })
        }

    })

})


//editar
app.put('/:id', (req,res) => {
    const id = req.params.id;
    const {nombreUsuario, apellidoUsuario, dui, email, userName, clave, idRol} = req.body;

    const sql = `UPDATE usuarios SET nombreUsuario = ?, apellidoUsuario = ?, dui = ?, email = ?, userName = ?, clave = MD5(?), idRol = ? where idUsuario = ${id} `
    
    bd.query(sql, [nombreUsuario, apellidoUsuario, dui, email, userName, clave, idRol], 
        (error, result) =>{
            if(error){
                res.json({
                    status: false,
                    mensaje: error,
                    alerta: "No se modificaron los datos"
                })
            }
            if(result){
                res.json({
                    status: true,
                    mensaje: "Datos modificados",
                    data: result
                })
            }

        })


})


module.exports = app;