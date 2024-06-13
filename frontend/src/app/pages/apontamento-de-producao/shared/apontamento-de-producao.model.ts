import { OrdemDeProducao } from "src/app/pages/ordem-de-producao/shared/ordem-de-producao.model";
import { Funcionario } from "src/app/pages/funcionario/shared/funcionario.model";

export class ApontamentoDeProducao {
    id?: any;
    codigo?: number;
    itemDeOP?: OrdemDeProducao;
    funcionario?: Funcionario;
    dataProducao?: any;
    quantidade?: number;
    cancelada?: boolean;
}

