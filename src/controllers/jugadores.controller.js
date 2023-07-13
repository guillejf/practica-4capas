import { jugadoresService } from '../services/jugadores.service.js';

class JugadoresController {
  getAll(req, res) {
    //1 saca los datos del req
    //2 llama al servicio para que trabaje y logre lo que necesitamos
    const jugadorEncontrados = jugadoresService.getAll();
    //3 da la respuesta al usuario
    return res.json({
      status: 'success',
      payload: jugadorEncontrados,
    });
  }
  create(req, res) {
    //1 saca los datos del req
    const jugadorParaGuardar = req.body;
    //2 llama al servicio para que trabaje y logre lo que necesitamos
    const jugadorGuardado = jugadoresService.create(jugadorParaGuardar);
    //3 da la respuesta al usuario
    return res.json({
      status: 'success',
      payload: jugadorGuardado,
    });
  }
}

export const jugadoresController = new JugadoresController();
