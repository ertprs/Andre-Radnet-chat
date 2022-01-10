export function automaticasRender() {
  let automaticas = `
    <div class="automaticas mb-5 ">
    <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
            <h3>Mensagens automáticas</h3>
        </div>
        <div class=" d-flex justify-content-center align-items-center">
            <div class="d-flex align-items-center input-group">
                <input type="text" class="form-control" placeholder="Encontre mensagens"
                    aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <i class="fas fa-plus bg-success pt-2 pb-2 pe-3 ps-3 rounded ms-3 me-3"></i>
        </div>
    
    </div>
    <div class=" mt-3">
        <table class="table">
            <thead class="table-dark">
                <tr>
    
    
                    <td class="col-6">DESCRIÇÃO</td>
                    <td class="col-2 text-center">USUÁRIO</td>
                    <td class="col-2 text-center">CANAIS</td>
                    <td class="col-2 text-center"> STATUS </td>
                </tr>
    
    
            </thead>
            <tbody>
                <tr>
    
    
                    <td class="col-6">teste</td>
                    <td class="col-2 text-center">YASMIN</td>
                    <td class="col-2 text-center">VARIOS</td>
                    <td class="col-2 text-center">
                        <span class="bg-success p-1 rounded">ativo</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    
    `;

  return automaticas;
}
