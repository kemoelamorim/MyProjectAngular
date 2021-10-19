
import { Contas } from "./contas";
import { Info } from "./info";

export interface Pessoa {
    id: number;
    info: Info;
    contas: Contas[];
}
