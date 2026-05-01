import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyPtPt() {
  return (
    <>
      <p>
        ReLife (« a App », « nós ») é uma aplicação pessoal de produtividade e
        desenvolvimento pessoal. Esta Política de Privacidade explica como
        recolhemos, utilizamos e protegemos as suas informações quando utiliza o
        ReLife. Ao utilizar a App, aceita os termos abaixo.
      </p>

      <h2>1. Informações que recolhemos</h2>

      <h3>1.1. Informações que nos fornece</h3>
      <ul>
        <li>
          <strong>Dados de conta</strong>: endereço de correio eletrónico e palavra‑passe
          (geridos pelo nosso fornecedor de autenticação).
        </li>
        <li>
          <strong>Dados de tarefas</strong>: tarefas, listas, estado de conclusão,
          alterações de estatísticas, regras personalizadas.
        </li>
        <li>
          <strong>Definições</strong>: idioma, tema, preferências.
        </li>
      </ul>
      <p>
        Não recolhemos <em>nome completo</em>, número de telefone, morada física ou
        outros identificadores pessoais.
      </p>

      <h3>1.2. Dados automáticos</h3>
      <p>Podemos recolher:</p>
      <ul>
        <li>Tipo de dispositivo (iOS/Android)</li>
        <li>Versão da aplicação</li>
        <li>Sistema operativo</li>
        <li>Registos de falhas e dados de desempenho (para melhorar a estabilidade)</li>
      </ul>
      <p>
        Não recolhemos ID do dispositivo, ID de publicidade nem localização precisa.
      </p>

      <h3>1.3. Dados de subscrição</h3>
      <p>Se comprar uma subscrição:</p>
      <ul>
        <li>A Apple ou a Google fornece‑nos um token de transação seguro.</li>
        <li>
          O ReLife <strong>não</strong> vê nem armazena dados do seu cartão de pagamento.
        </li>
      </ul>
      <p>Os pagamentos são tratados de forma segura por:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(opcional) <strong>Stripe</strong> para pagamentos Web</li>
      </ul>

      <h2>2. Como utilizamos as suas informações</h2>
      <p>Utilizamos as suas informações para:</p>
      <ul>
        <li>Fornecer e sincronizar tarefas e estatísticas entre dispositivos</li>
        <li>Calcular progresso das estatísticas</li>
        <li>Ativar funcionalidades premium</li>
        <li>Melhorar o desempenho da aplicação</li>
        <li>Determinar o estado da subscrição</li>
        <li>Guardar preferências</li>
      </ul>
      <ul>
        <li>Não vendemos os seus dados</li>
        <li>Não partilhamos os seus dados com anunciantes</li>
        <li>Não o rastreamos entre aplicações ou websites</li>
      </ul>

      <h2>3. Armazenamento e segurança</h2>
      <p>Os seus dados são armazenados de forma segura com armazenamento na nuvem encriptado.</p>
      <p>Aplicamos medidas de segurança standard, incluindo:</p>
      <ul>
        <li>Comunicação HTTPS</li>
        <li>Bases de dados encriptadas</li>
        <li>Acesso limitado aos servidores</li>
      </ul>
      <p>Nenhum sistema garante segurança absoluta.</p>

      <h2>4. Serviços de terceiros</h2>
      <p>O ReLife utiliza fornecedores de confiança:</p>

      <h3>Autenticação e base de dados</h3>
      <ul>
        <li>Supabase (backend e autenticação seguros)</li>
      </ul>

      <h3>Compras na aplicação</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Faturação Google Play</li>
        <li>RevenueCat (gestão de subscrições)</li>
        <li>Stripe (checkout Web, se ativo)</li>
      </ul>

      <h3>Relatórios de falhas (opcional)</h3>
      <ul>
        <li>Sentry ou registos Expo</li>
      </ul>
      <p>Estes serviços recebem apenas o mínimo necessário.</p>

      <h2>5. Os seus direitos</h2>
      <p>Dependendo da sua jurisdição, poderá ter direito a:</p>
      <ul>
        <li>Aceder aos seus dados</li>
        <li>Atualizar ou corrigir dados</li>
        <li>Eliminar a conta e dados associados</li>
        <li>Exportar dados</li>
        <li>Opor‑se a analytics (quando aplicável)</li>
      </ul>
      <p>
        Para pedidos:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Privacidade infantil</h2>
      <p>O ReLife <strong>não se destina a menores de 13 anos</strong>.</p>
      <p>Não recolhemos conscientemente dados de crianças.</p>
      <p>Se acreditar que uma criança usou a App, contacte‑nos para eliminar dados.</p>

      <h2>7. Retenção</h2>
      <p>Conservamos dados enquanto mantiver conta.</p>
      <p>Ao eliminar a conta, os dados são removidos permanentemente dos servidores.</p>

      <h2>8. Alterações</h2>
      <p>Podemos atualizar esta política.</p>
      <p>Alterações aparecerão na App e neste site com data atualizada.</p>

      <h2>9. Contacto</h2>
      <p>Dúvidas sobre esta política:</p>
      <p><strong>Suporte ReLife</strong></p>
      <p>
        Telegram:{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        Email:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
