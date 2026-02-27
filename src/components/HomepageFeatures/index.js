import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Arquitectura Moderna SPA',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aplicación web con arquitectura Single Page Application utilizando
        <strong> React 18</strong> en el frontend y <strong>Spring Boot 3</strong> 
        con Java 21 en el backend. API REST con Spring Security y JWT.
      </>
    ),
  },
  {
    title: 'Metodología Ágil',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Desarrollo siguiendo <strong>Scrum</strong> con 4 sprints planificados.
        Gestión en <strong>ZenHub</strong>, Git Flow para branching, 
        y Conventional Commits para control de versiones.
      </>
    ),
  },
  {
    title: 'Calidad y Testing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Testing exhaustivo con <strong>JUnit</strong> y <strong>Jest</strong>.
        Análisis de calidad con <strong>SonarQube</strong> y cobertura con 
        <strong>JaCoCo</strong>. Despliegue con <strong>Docker</strong>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
