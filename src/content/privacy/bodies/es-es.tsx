import { siteConfig } from "@/lib/site-config";

export function PrivacyBodyEsEs() {
  return (
    <>
      <p>
        ReLife («la App», «nosotros») es una aplicación personal de productividad y
        desarrollo personal. Esta Política de privacidad explica cómo recopilamos,
        usamos y protegemos tu información cuando utilizas ReLife. Al usar la App,
        aceptas los términos que figuran a continuación.
      </p>

      <h2>1. Información que recopilamos</h2>

      <h3>1.1. Información que nos proporcionas</h3>
      <ul>
        <li>
          <strong>Datos de cuenta</strong>: correo electrónico y contraseña (gestionados
          por nuestro proveedor de autenticación).
        </li>
        <li>
          <strong>Datos de tareas</strong>: tareas, listas, estado de finalización,
          cambios de estadísticas, reglas personalizadas.
        </li>
        <li>
          <strong>Ajustes</strong>: idioma, tema, preferencias.
        </li>
      </ul>
      <p>
        <em>No</em> recopilamos tu nombre, número de teléfono, dirección física ni otros
        identificadores personales.
      </p>

      <h3>1.2. Datos automáticos</h3>
      <p>Podemos recopilar:</p>
      <ul>
        <li>Tipo de dispositivo (iOS/Android)</li>
        <li>Versión de la aplicación</li>
        <li>Sistema operativo</li>
        <li>Registros de fallos y datos de rendimiento (para mejorar la estabilidad)</li>
      </ul>
      <p>
        <strong>No</strong> recopilamos el ID del dispositivo, el ID publicitario ni la
        ubicación precisa.
      </p>

      <h3>1.3. Datos de suscripción</h3>
      <p>Si compras una suscripción:</p>
      <ul>
        <li>Apple o Google nos proporciona un token de transacción seguro.</li>
        <li>
          ReLife <strong>no</strong> ve ni almacena los datos de tu tarjeta de pago.
        </li>
      </ul>
      <p>Los pagos se procesan de forma segura mediante:</p>
      <ul>
        <li><strong>Apple App Store</strong></li>
        <li><strong>Google Play Store</strong></li>
        <li>(opcional) <strong>Stripe</strong> para pagos web</li>
      </ul>

      <h2>2. Cómo usamos tu información</h2>
      <p>Usamos tu información para:</p>
      <ul>
        <li>Proporcionar y sincronizar tareas y estadísticas entre dispositivos</li>
        <li>Calcular el progreso de estadísticas</li>
        <li>Habilitar funciones premium</li>
        <li>Mejorar el rendimiento de la aplicación</li>
        <li>Determinar el estado de la suscripción</li>
        <li>Guardar tus preferencias</li>
      </ul>
      <ul>
        <li>No vendemos tus datos</li>
        <li>No los compartimos con anunciantes</li>
        <li>No te rastreamos entre aplicaciones o sitios web</li>
      </ul>

      <h2>3. Almacenamiento y seguridad</h2>
      <p>Tus datos se almacenan de forma segura con almacenamiento en la nube cifrado.</p>
      <p>Aplicamos medidas de seguridad habituales, entre ellas:</p>
      <ul>
        <li>Comunicación HTTPS</li>
        <li>Bases de datos cifradas</li>
        <li>Acceso limitado a los servidores</li>
      </ul>
      <p>Ningún sistema puede garantizar una seguridad absoluta.</p>

      <h2>4. Servicios de terceros</h2>
      <p>ReLife utiliza proveedores de confianza:</p>

      <h3>Autenticación y base de datos</h3>
      <ul>
        <li>Supabase (backend y autenticación seguros)</li>
      </ul>

      <h3>Compras en la aplicación</h3>
      <ul>
        <li>Apple App Store (StoreKit)</li>
        <li>Facturación de Google Play</li>
        <li>RevenueCat (gestión de suscripciones)</li>
        <li>Stripe (pago web si está habilitado)</li>
      </ul>

      <h3>Informes de fallos (opcional)</h3>
      <ul>
        <li>Sentry o registros de errores de Expo</li>
      </ul>
      <p>Estos servicios solo reciben los datos mínimos necesarios.</p>

      <h2>5. Tus derechos</h2>
      <p>Según tu jurisdicción, puedes tener derecho a:</p>
      <ul>
        <li>Acceder a tus datos</li>
        <li>Actualizarlos o corregirlos</li>
        <li>Eliminar tu cuenta y datos asociados</li>
        <li>Exportar tus datos</li>
        <li>Oponerte al análisis/analytics (cuando corresponda)</li>
      </ul>
      <p>
        Solicitudes:{" "}
        <a href={`mailto:${siteConfig.dataRightsEmail}`}>
          {siteConfig.dataRightsEmail}
        </a>
      </p>

      <h2>6. Privacidad infantil</h2>
      <p>
        ReLife <strong>no está destinada a menores de 13 años</strong>.
      </p>
      <p>No recopilamos datos de niños de forma deliberada.</p>
      <p>Si crees que un menor ha usado la App, contáctanos para eliminar los datos.</p>

      <h2>7. Conservación</h2>
      <p>Conservamos tus datos mientras mantengas una cuenta.</p>
      <p>Si eliminas tu cuenta, tus datos se borran permanentemente de nuestros servidores.</p>

      <h2>8. Cambios</h2>
      <p>Podemos actualizar esta política.</p>
      <p>Los cambios se publicarán en la App y en este sitio web con la fecha actualizada.</p>

      <h2>9. Contacto</h2>
      <p>Si tienes preguntas sobre esta política:</p>
      <p><strong>Soporte ReLife</strong></p>
      <p>
        Telegram:{" "}
        <a href={siteConfig.telegramUrl} rel="noopener noreferrer">
          @{siteConfig.telegramUsername}
        </a>
      </p>
      <p>
        Correo:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </>
  );
}
