export function inicioRender() {
  let inicio = `
<div class="inicio mb-5">



<div class="d-flex justify-content-evenly flex-wrap p-3">

    <div class="d-flex flex-column bg-danger p-2 m-1 rounded text-center"
        style="width: 200px; height:112px">
        <div class="d-flex  align-items-center justify-content-center">
            <i class="fas fa-history me-2 fa-lg"></i>
            <span class="fs-2">006</span>
        </div>
        <div class="text-center">
            <p class="text-wrap">
                Mensagens nos últimos 7 dias
            </p>
        </div>
    </div>

    <div class="d-flex flex-column bg-danger p-2 m-1 rounded "
        style="width: 200px; height:112px">
        <div class="d-flex  align-items-center justify-content-center">
            <i class="fas fa-cloud-upload-alt me-2 fa-lg"></i>
            <span class="fs-2">006</span>
        </div>
        <div class="text-center">
            <p class="text-wrap">
                Mensagens enviadas via chat
            </p>
        </div>
    </div>

    <div class="d-flex flex-column bg-danger p-2 m-1 rounded "
        style="width: 200px; height:112px">
        <div class="d-flex  align-items-center justify-content-center">
            <i class="fas fa-cloud-download-alt me-2 fa-lg"></i>
            <span class="fs-2">006</span>
        </div>
        <div class="text-center">
            <p class="text-wrap">
                Mensagens recebidas via chat
            </p>
        </div>
    </div>

    <div class="d-flex flex-column bg-danger p-2 m-1 rounded "
        style="width: 200px; height:112px">
        <div class="d-flex  align-items-center justify-content-center">
            <i class="fas fa-code me-2 fa-lg"></i>
            <span class="fs-2">006</span>
        </div>
        <div class="text-center">
            <p class="text-wrap">
                Mensagens enviadas via api
            </p>
        </div>
    </div>


</div>
<div class="d-flex justify-content-between">
    <div class="d-flex align-items-center">
        <h3>Mensagens recebidas nas últimas 24h</h3>
    </div>
    <div class=" d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center input-group">
            <input type="text" class="form-control" placeholder="Encontre mensagens"
                aria-label="Username" aria-describedby="basic-addon1">


        </div>

    </div>

</div>
<div class=" mt-3">
    <table class="table">
        <thead class="table-dark">
            <tr>

                <td class="col-7">MENSAGEM</td>
                <td class="col-3 text-center">CONTATO</td>
                <td class="col-2 text-center"> - </td>
            </tr>


        </thead>
        <tbody>
            <tr>

                <td class="col-7">teste</td>
                <td class="col-3 text-center">(61) 9 9999 - 9999</td>
                <td class="col-2 text-center">
                    <span class="bg-success p-1 rounded">ativo</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>


</div>
`;

  return inicio;
}
