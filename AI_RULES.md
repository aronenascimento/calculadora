# Regras do Editor AI para Dyad

Este documento descreve a pilha tecnológica e as diretrizes específicas para manter e estender o aplicativo.

## 1. Visão Geral da Pilha Tecnológica

*   **Framework:** React (utilizando TypeScript).
*   **Ferramenta de Build:** Vite.
*   **Roteamento:** React Router DOM.
*   **Estilização:** Tailwind CSS (abordagem utility-first).
*   **Biblioteca de Componentes:** shadcn/ui (construída sobre primitivos Radix UI).
*   **Gerenciamento de Estado/Busca de Dados:** TanStack Query (React Query).
*   **Gerenciamento de Formulários:** React Hook Form.
*   **Validação de Esquemas:** Zod.
*   **Ícones:** Lucide React.

## 2. Diretrizes de Uso de Bibliotecas

Para garantir consistência e manutenibilidade, siga as seguintes regras de uso de bibliotecas:

| Funcionalidade | Biblioteca Recomendada | Notas |
| :--- | :--- | :--- |
| **Componentes UI** | shadcn/ui | Utilize exclusivamente os componentes existentes em `src/components/ui/`. Não modifique esses arquivos; crie novos componentes se for necessária customização. |
| **Estilização** | Tailwind CSS | Use classes utilitárias do Tailwind CSS para toda a estilização. Garanta que todos os novos componentes sejam responsivos. |
| **Roteamento** | `react-router-dom` | Todas as rotas principais devem ser definidas em `src/App.tsx`. |
| **Busca de Dados** | `@tanstack/react-query` | Use para gerenciar estado do servidor, cache e operações assíncronas de dados. |
| **Formulários** | `react-hook-form` | Use para todo o gerenciamento de estado de formulários. |
| **Validação** | `zod` | Use para definir esquemas de formulário e lógica de validação, integrado ao React Hook Form. |
| **Ícones** | `lucide-react` | Use para todos os ícones gráficos. |
| **Notificações** | `sonner` | Use o componente `<Sonner />` para exibir notificações/toasts ao usuário. |

## 3. Estrutura e Convenções de Código

*   **Estrutura de Arquivos:**
    *   Páginas vão para `src/pages/`.
    *   Componentes reutilizáveis vão para `src/components/`.
    *   Funções utilitárias vão para `src/lib/`.
    *   Hooks vão para `src/hooks/`.
*   **Tamanho do Componente:** Priorize componentes pequenos e focados. Crie um novo arquivo para cada novo componente ou hook.
*   **Linguagem:** Todo o texto voltado para o usuário está em Português (pt-BR).