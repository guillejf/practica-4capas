let jugadores = [];

//SOLO ACCEDE A LA BASE DE DATOS/ARCHIVO/ARRAY PARA HACER UNA OPERACION DE CRUD.
//LO QUE HACE ES SUPER ATOMICO. POCO. CORTO. PREFERENTEMENTE SIN LOOPS NI IFS.

class JugadoresModel {
  getAll() {
    //const jugadorEncontrados = JugadoresMongooseModel.find({})
    //const jugadorEncontrados = fs.redFile....parse...
    const jugadorEncontrados = jugadores;
    return jugadorEncontrados;
  }
  create(jugadorParaGuardar) {
    const jugadorGuardado = { ...jugadorParaGuardar, _id: (Math.random() + '').slice(2) };
    jugadores.push(jugadorGuardado);
    return jugadorGuardado;
  }
}

export const jugadoresModel = new JugadoresModel();
