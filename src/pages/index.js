import Contactos from '../components/Contactos/Contactos';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Title from '../components/Title/Title';
import Servicios from '../components/Servicios/Servicios';
import Herramientas from '../components/Herramientas/Herramientas';
import RFA from '../components/RFA/RFA';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Title />
        <BgAnimation />
      </Section>
      <RFA />
      <Servicios />
      <Herramientas />
      <Contactos />
    </Layout>
  );
};

export default Home;
