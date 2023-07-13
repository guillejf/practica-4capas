import { jugadoresModel } from '../models/jugadores.model.js';

class JugadoresService {
  getAll() {
    //PROGRAMACION VERDADERA. LLAMAR A FUNCIONES AUX. LOOPS. IFS. ACCESOS A LA BASE SIEMPRE JUGANDO CON EL MODELO (sin acceder directamente).
    const jugadorEncontrados = jugadoresModel.getAll();
    return jugadorEncontrados;
  }
  create(jugadorParaGuardar) {
    //PROGRAMACION VERDADERA. LOOPS. IFS. ACCESO A LA BASE SIEMPRE JUGANDO CON EL MODELO.
    const jugadorGuardado = jugadoresModel.create(jugadorParaGuardar);
    return jugadorGuardado;
  }
}

export const jugadoresService = new JugadoresService();
