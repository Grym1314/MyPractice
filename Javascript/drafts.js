/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';
import MainFAQS from './MainFAQS';
import { Collapse } from 'antd';

const { Panel } = Collapse;
export default function Faqs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function callback(key) {}
  return (
    <div className="FaqsContainer">
      <h1>Sección de Preguntas Frecuentes</h1>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <div
          className="panel1"
          header="1. ¿Qué pasa si no se dónde está mi AFORE?"
          key="1"
        >
          <p>
            Si no conoces en que AFORE estás inscrito, puedes consultarlo en la
            siguiente liga oficial:{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.e-sar.com.mx/PortalEsar/public/consultaAforeInicio.do"
            >
              https://www.e-sar.com.mx/PortalEsar/public/consultaAforeInicio.do
            </a>
          </p>
        </div>
        <div
          className="panel"
          header="2. ¿Qué mecanismos de ahorro tengo disponibles?"
          key="2"
        >
          <p>
            Puedes ahorrar a través de compras con tu tarjeta de crédito o
            débito, así como domiciliaciones y/o aportaciones de única vez.
          </p>
        </div>
        <div
          className="panel"
          header="3. ¿El ahorro que realizo es adicional a mis compras?"
          key="3"
        >
          <p>
            Si, Inkom conoce el monto de tus compras y dependiendo del
            porcentaje que elijas, recibirás un mensaje por correo electrónico
            para autorizar un cargo en la tarjeta (o tarjetas) que hayas
            registrado. Este cargo es mensual.{' '}
          </p>
        </div>
        <div
          className="panel"
          header="4. ¿Qué debo hacer si quiero ahorrar más?"
          key="4"
        >
          <p>
            Puedes modificar el porcentaje de ahorro cuando compras, puedes
            agregar tarjetas bancarias, domiciliar pagos o realizar aportaciones
            únicas. Todas estas opciones se pueden realizar al mismo tiempo.
            También, te brindamos recomendaciones de acuerdo a tus flujos de
            gasto para que ahorres más sin que lo resienta tu presupuesto.{' '}
          </p>
        </div>
        <div
          className="panel"
          header="5. ¿Puedo modificar la información de mis tarjetas o cambiarlas?"
          key="5"
        >
          <p>
            Si, en la plataforma de Inkom tienes la opción de agregar, eliminar
            o modificar las tarjetas que hayas registrado en cualquier momento.{' '}
          </p>
        </div>
        <div
          className="Panel"
          header="6. ¿Puedo dar de alta diferentes tarjetas?"
          key="6"
        >
          <p>
            Si, puedes tener distintas tarjetas registradas, de esta manera
            incrementas tu ahorro. .
          </p>
        </div>
        <div
          className="panel"
          header="7. ¿Hay algún cobro de comisión?"
          key="7"
        >
          <p>Únicamente se cobra una mínima comisión de 5 pesos al mes. </p>
        </div>
        <div
          className="panel"
          header="8. ¿Por qué es necesario que sincronice mi cuenta bancaria en Paybook?"
          key="8"
        >
          <p>
            Para poder determinar el monto de tus compras, debes sincronizar tus
            cuentas bancarias con Paybook. Tanto Inkom como Paybook no tienen
            acceso a tu cuenta, y tenemos sistemas de seguridad que nos impide
            conocer información personal o que terceros accedan a ella.
          </p>
        </div>
        <div
          className="panel"
          header="9. ¿Cómo se llevan a cabo los cobros para el ahorro?"
          key="9"
        >
          <p>
            Recibirás un mensaje por correo electrónico para autorizar un cargo
            en la tarjeta (o tarjetas) que hayas registrado. Este cargo es
            mensual.{' '}
          </p>
        </div>
        <div
          className="panel"
          header="10. ¿Qué mecanismos de seguridad tiene Inkom?"
          key="10"
        >
          <p>
            Inkom tiene una encriptación de información y distintas capas de
            seguridad de acuerdo a estándares internacionales.{' '}
          </p>
        </div>

        <div
          className="panel"
          header="11. ¿Inkom tiene acceso a la información de mis cuentas bancarias?"
          key="11"
        >
          <p>
            No, Inkom no cuenta con acceso a tus cuentas y no requiere de
            información de tus tarjetas, únicamente el número, para poder
            realizar los cobros que van a tu cuenta de ahorro de AFORE.{' '}
          </p>
        </div>
        <div
          className="panel"
          header="12. ¿Cuándo puedo ver los montos de mi ahorro adicional reflejados en la cuenta de AFORE?"
          key="12"
        >
          <p>
            En general, una vez que hagamos el cargo, tu aportación se vera
            reflejada entre 3 y 5 días hábiles. Ello lo puedes consultar en las
            distintas plataformas de tu AFORE.
          </p>
        </div>
        <div
          className="panel"
          header="13. ¿El saldo de mi AFORE aparece en la plataforma de Inkom?"
          key="13"
        >
          <p>
            Inkom no tienes acceso al saldo de tu AFORE, mediante herramientas
            analíticas estimamos los montos.
          </p>
        </div>
        <div
          className="panel"
          header="14. ¿Puedo disponer de mi ahorro?"
          key="14"
        >
          <p>
            Si, dependiendo de la opción que elijas: 2 o 6 meses, después de 5
            años o al momento del retiro.
          </p>
        </div>
        <div
          className="panel"
          header="15. ¿Cómo funcionan las tarjetas de socios de Inkom?"
          key="15"
        >
          <p>
            Los socios estratégicos de Inkom aportan ahorro a tus cuentas de
            AFORE dependiendo del convenio. En este caso, este ahorro es directo
            de los socios participante y tu no tienes que poner ninguna cantidad
            adicional de tu bolsillo.{' '}
          </p>
        </div>
        <div
          className="panel"
          header="16. ¿Con qué periodicidad ahorro cuando compro?"
          key="16"
        >
          <p>
            Cada mes se hará un corte en el que se contabilizarán tus compras.
          </p>
        </div>
        <div
          className="panel"
          header="17. ¿De qué manera Inkom conoce el monto de mis compras?"
          key="17"
        >
          <p>A través de la plataforma de Paybook.</p>
        </div>
      </Collapse>
    </div>
  );
}