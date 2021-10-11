## Assuntos Importantes:

__Componentes__

** Cada componente terá tres arquivos base:

    - app.componente.html: Contem o template com a estrutura html
    - app.componente.css: Contem o style da estrututa html do componente 
    - app.componente.ts: Arquivo encapsula o seletor(com prefixo) o template e o style e exporta o componente através de uma class, tornando o componente acessível em outros lugares da Aplicação
    
    ** Obs: O componente app é o o componente que carrega o módulo principal da aplicação 
        > Comando que gera um componente: <ng g c nome-do-componente>
---
    - app-routing.module.ts: Arquivo que contem as rotas (routes) da aplicação
    - app.module.ts: É responsavel por carregar todos os módulos da Aplicação(Os baixados e criados)

__Diretivas__:
    
    **Atibuto(Attribute):
        - Altera a aparencia e o comportamento de um elemento, componente ou outra diretiva;
    
    **Estrutura(Estruct):
        - Altera o layout adicionando e removendo elementos da DOM. Ex: *ngIf;

    > Comando para criar uma Diretiva: <ng g d upperCase>

__DataBinding__:
    ** Obs: Para conectar(binding) propriedades, metodos(que retornam um valor) e variáveis da clase ao template do componente, utilizamos uma sintax especial:
        Interpolação: {{objeto.atributo}};
        propertyBinding: 
            [propriedade] = "valor"     | Sai da class -> para o template;
            (evento) = "handler"        | Escuta o evento no template -> Executa evento na class;
            [(ngModel)] = "propriedade" | Atualiza a propriedade da classe <-> e o valor no template;

__AngularRouter__:
    ** Obs: O componente é carregado no Router Outlet de acordo com a rota 