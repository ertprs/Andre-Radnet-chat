export function modelosRender(ip_servidor) {
  let modelo = `
    <div class="MensagensModelo">
        <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <h3>Mensagens modelos</h3>
            </div>
            <div class=" d-flex justify-content-center align-items-center">
                <div class="d-flex align-items-center input-group">
                    <input type="text" class="form-control" placeholder="Encontre mensagens"
                        aria-label="Username" aria-describedby="basic-addon1">
    
    
                </div>
                <i class="fas fa-plus bg-success pt-2 pb-2 pe-3 ps-3 rounded ms-3 me-3"></i>
            </div>
    
        </div>
        <div class="mt-3">
        <table class="table">
        <thead class="table-dark">
            <tr>
      
                <td class="col-10">DESCRIÇÃO</td>
                <td class="col-2 text-center">STATUS</td>
            </tr>
      
      
        </thead>
        <tbody class="mensagensTabela">
       
        </tbody>
      </table>
        </div>
    </div>`;

  return modelo;
}
