# Guia de Configuração: Funil Multi-Step com 3 Etapas e Delay (tindercheck.xyz)

Para o seu funil com a seguinte estrutura:
1.  **Home Page** (`https://tindercheck.store/`): Botão "Start Free Scan (1 Credit)" -> Leva para `step-2`.
2.  **Step-2 Page** (`https://tindercheck.store/step-2`) - Visualização Inicial: Botão "RUN DEEP SCAN" -> Leva para "Resultado do Scan" (ainda na mesma URL `/step-2`).
3.  **Step-2 Page** (`https://tindercheck.store/step-2`) - Visualização do Resultado: Botão "UNLOCK REPORT NOW" -> Leva para o Checkout.

Siga estas etapas de configuração no RedTrack para garantir o rastreamento correto de todas as transições.

## 1. Configuração das Páginas no RedTrack

No RedTrack, você deve cadastrar as duas URLs principais. A diferenciação das etapas dentro do `/step-2` será feita pela configuração dos botões e scripts.

| Página | Tipo no RedTrack | URL Base |
| :--- | :--- | :--- |
| **Pre-Landing** | **PRE-LANDING** | `https://tindercheck.store/` |
| **Landing** | **LANDING** | `https://tindercheck.store/step-2` |

## 2. Configuração dos Botões e Links

### a. Botão "Start Free Scan (1 Credit)" na Home Page (`https://tindercheck.store/`)
Este botão é a transição da Pre-Landing para a Landing (`step-2`).

**Ação do Botão:** O link deste botão deve ser a URL de **Pre-click** do RedTrack.
`https://45pbw.ttrk.io/preclick`

Ao clicar, o RedTrack registrará o clique na Pre-Landing e redirecionará o usuário para `https://tindercheck.store/step-2`, passando o `clickid`.

### b. Botão "RUN DEEP SCAN" na Step-2 Page (Visualização Inicial)
Este botão leva para a visualização do resultado do scan, **permanecendo na mesma URL** (`https://tindercheck.store/step-2`). Para rastrear essa interação interna, você deve usar um evento de clique do RedTrack.

**Ação do Botão:** Em vez de um link direto, você deve adicionar um script JavaScript ao evento de clique deste botão. O RedTrack oferece uma função para rastrear cliques internos na Landing Page. O link do botão em si pode ser `#` ou `javascript:void(0);`.

```javascript
// Exemplo de como rastrear o clique no botão 'RUN DEEP SCAN'
// Certifique-se de que o Universal Tracking Script do RedTrack já está carregado.
// Você pode usar um evento personalizado ou um sub-parâmetro para identificar este clique.

// Supondo que o botão tenha um ID 'runDeepScanButton'
document.getElementById('runDeepScanButton').addEventListener('click', function() {
    // Disparar um evento de clique para o RedTrack
    // Isso registrará um 'click' no RedTrack sem redirecionar a página.
    // O 'sub1' é um exemplo; você pode usar qualquer sub-parâmetro disponível.
    // A macro {clickid} será preenchida automaticamente pelo script universal.
    window.rtk.track('click', { sub1: 'run_deep_scan_clicked' });

    // Lógica para exibir o resultado do scan (seu código JavaScript existente)
    // ... (seu código para mostrar o resultado do scan)
});
```

### c. Botão "UNLOCK REPORT NOW" na Step-2 Page (Visualização do Resultado)
Este é o botão final que leva para o Checkout (Offer).

**Ação do Botão:** O link deste botão deve ser a URL de **Click** do RedTrack.
`https://rt.tinderchecks.store/click`

Ao clicar, o RedTrack registrará o clique final na Landing Page e redirecionará o usuário para a **Offer** (seu checkout) cadastrada na campanha, garantindo que o `clickid` seja passado para o Postback.

## 3. Configuração da Campanha (Funnel) no RedTrack

Dentro da sua Campanha no RedTrack, a estrutura do funil deve ser:

**Traffic Source** → **Pre-landing (Home Page)** → **Landing (Step-2)** → **Offer (Checkout)**

1.  Na seção **Lander**, adicione a sua Pre-landing (`https://tindercheck.store/`).
2.  Clique no ícone de "+" ou "Add Step" para adicionar a Landing (`https://tindercheck.store/step-2`).
3.  Adicione a sua **Offer** (o link do checkout real).

## 4. Scripts Obrigatórios

Para que o rastreamento funcione corretamente e o `clickid` seja mantido através das transições e eventos internos, você deve instalar o **Universal Tracking Script** do RedTrack no `<head>` de **AMBAS** as páginas:
1.  `https://tindercheck.store/`
2.  `https://tindercheck.store/step-2`

O script garante que, mesmo com carregamentos dinâmicos e cliques internos, o RedTrack consiga identificar e manter a sessão do usuário.

## Resumo Técnico para Implementação:
*   **Botão "Start Free Scan (1 Credit)" na Home (`/`)**: Link para `https://rt.tinderchecks.store/preclick`
*   **Botão "RUN DEEP SCAN" no Step-2 (Visualização Inicial)**: Adicionar evento JavaScript para `window.rtk.track('click', { sub1: 'run_deep_scan_clicked' });` (ou similar).
*   **Botão "UNLOCK REPORT NOW" no Step-2 (Visualização do Resultado)**: Link para `https://rt.tinderchecks.store/click`
*   **Checkout**: Cadastrado apenas na aba **Offers** do RedTrack.
*   **Universal Tracking Script**: Instalar no `<head>` de `https://tindercheck.store/` e `https://tindercheck.store/step-2`.

## 5. Configuração de Postback (S2S) - Monetizze e Mundpay

Para que o RedTrack registre as vendas (conversões) que ocorrem na Monetizze ou Mundpay, você precisa configurar o Postback URL (Webhooks) na plataforma de pagamento.

### Como funciona no RedTrack
1. Quando o usuário clica no botão "UNLOCK REPORT NOW" (Link de Click do RedTrack), ele é redirecionado para o seu Checkout (Offer).
2. O RedTrack gera um ID único para esse clique (`clickid`) e anexa à URL do checkout.
3. A Monetizze/Mundpay armazena esse ID.
4. Quando a venda é concluída, a plataforma dispara um aviso (Postback/Webhook) de volta para o RedTrack avisando: "O click ID X gerou uma venda de Y valor".

### Configuração na Monetizze
Pela imagem e documentação da Monetizze, os macros (variáveis) corretos são `{chave_unica}` para o click ID e `{valor}` para o valor da venda.

1. Faça login na [Monetizze](https://app.monetizze.com.br/).
2. No menu superior, vá em **Ferramentas > Postback**.
3. Adicione uma nova configuração de Postback:
   - **Tipo:** Server to Server (S2S)
   - **Formato:** x-www-form-urlencoded (ou Get/JSON se preferir)
   - **Eventos:** Selecione "Venda Finalizada" (ou Venda Aprovada / PIX Gerado, de acordo com o que quer rastrear no RedTrack).
   - **URL de Postback:** 
     Cole a URL gerada pelo seu RedTrack (exemplo):
     `https://rt.tinderchecks.store/postback?clickid={chave_unica}&sum={valor}`
4. Salve e, se possível, clique em "Testar" para garantir que o RedTrack recebe a notificação.

### Importante sobre a Oferta (RedTrack)
No RedTrack (na sua configuração de "Offer" ou "Offer Source"):
- Certifique-se de que a **Offer URL** esteja passando o parâmetro `{clickid}` para a Monetizze. A URL da sua oferta no RedTrack geralmente se parece com: `https://app.monetizze.com.br/checkout/CODIGODA SUA_OFERTA?src={clickid}`. Dessa forma, o `{clickid}` entra no campo principal de rastreio da Monetizze e é devolvido no Postback sob o macro `{chave_unica}` ou `src`.
*(Se você configurou um sub-parâmetro diferente no Checkout, ajuste a URL de postback para usar o macro correspondente do painel da Monetizze).*
