import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyPtBr() {
  return (
    <>
      <p>
        ReLife (&quot;o App&quot;, &quot;nós&quot;) é um aplicativo pessoal de produtividade e
        autodesenvolvimento. Esta Política de Privacidade explica como coletamos,
        usamos e protegemos suas informações quando você usa o ReLife. Ao usar o
        App, você concorda com os termos abaixo.
      </p>

      <h2>1. Informações que coletamos</h2>

      <h3>1.1. Informações que você fornece</h3>
      <ul>
        <li>
          <strong>Dados da conta</strong>: e‑mail e senha (gerenciados pelo nosso
          provedor de autenticação).
        </li>
        <li>
          <strong>Dados de tarefas</strong>: tarefas, listas, status de conclusão,
          mudanças de stats, regras personalizadas.
        </li>
        <li>
          <strong>Configurações</strong>: idioma, tema, preferências.
        </li>
      </ul>
      <p>
        Nós <em>não</em> coletamos seu nome completo, telefone, endereço físico ou
        outros identificadores pessoais.
      </p>

      <h3>1.2. Dados automáticos</h3>
      <p>Podemos coletar:</p>
      <ul>
        <li>Tipo de dispositivo (iOS/Android)</li>
        <li>Versão do app</li>
        <li>Sistema operacional</li>
        <li>Logs de falhas e dados de desempenho (para melhorar a estabilidade)</li>
      </ul>
      <p>
        Nós <strong>não</strong> coletamos ID do dispositivo, ID de publicidade nem
        localização precisa.
      </p>

      <h3>1.3. Dados de assinatura</h3>
      <p>Se você comprar uma assinatura:</p>
      <ul>
        <li>A Apple ou o Google nos fornece um token de transação seguro.</li>
        <li>
          O ReLife <strong>não</strong> vê nem armazena dados do seu cartão.
        </li>
      </ul>
      <p>Pagamentos são processados com segurança por:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(opcional) <strong>Stripe</strong> para pagamentos na web</li>
      </ul>

      <h2>2. Como usamos suas informações</h2>
      <p>Usamos suas informações para:</p>
      <ul>
        <li>Fornecer e sincronizar tarefas e estatísticas entre dispositivos</li>
        <li>Calcular progresso das estatísticas</li>
        <li>Habilitar recursos premium</li>
        <li>Melhorar o desempenho do app</li>
        <li>Detectar status de assinatura</li>
        <li>Salvar preferências</li>
      </ul>
      <ul>
        <li>Não vendemos seus dados</li>
        <li>Não compartilhamos seus dados com anunciantes</li>
        <li>Não rastreamos você entre apps ou sites</li>
      </ul>

      <h2>3. Armazenamento e segurança</h2>
      <p>Seus dados são armazenados com segurança usando nuvem criptografada.</p>
      <p>Aplicamos medidas de segurança padrão, incluindo:</p>
      <ul>
        <li>Comunicação HTTPS</li>
        <li>Bancos de dados criptografados</li>
        <li>Acesso limitado aos servidores</li>
      </ul>
      <p>Nenhum sistema garante segurança absoluta.</p>

      <h2>4. Serviços de terceiros</h2>
      <p>O ReLife usa provedores confiáveis:</p>

      <h3>Autenticação e banco de dados</h3>
      <ul>
        <li>Supabase (backend e autenticação seguros)</li>
      </ul>

      <h3>Compras no app</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Faturamento Google Play</li>
        <li>RevenueCat (gestão de assinaturas)</li>
        <li>Stripe (checkout web, se habilitado)</li>
      </ul>

      <h3>Relatórios de falhas (opcional)</h3>
      <ul>
        <li>Sentry ou logs de erro Expo</li>
      </ul>
      <p>Esses serviços recebem apenas o mínimo necessário.</p>

      <h2>5. Seus direitos</h2>
      <p>Dependendo da sua jurisdição, você pode ter direito a:</p>
      <ul>
        <li>Acessar seus dados</li>
        <li>Atualizar ou corrigir dados</li>
        <li>Excluir conta e dados associados</li>
        <li>Exportar dados</li>
        <li>Optar por não participar de analytics (quando aplicável)</li>
      </ul>
      <p>
        Solicitações:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Privacidade infantil</h2>
      <p>O ReLife <strong>não é destinado a menores de 13 anos</strong>.</p>
      <p>Não coletamos dados de crianças intencionalmente.</p>
      <p>Se você acredita que uma criança usou o App, fale conosco para excluir dados.</p>

      <h2>7. Retenção</h2>
      <p>Mantemos dados enquanto você mantiver uma conta.</p>
      <p>Ao excluir a conta, seus dados são removidos permanentemente dos servidores.</p>

      <h2>8. Alterações</h2>
      <p>Podemos atualizar esta política.</p>
      <p>Mudanças aparecerão no App e neste site com data atualizada.</p>

      <h2>9. Contato</h2>
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
