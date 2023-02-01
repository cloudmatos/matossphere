import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure your cloud from build to runtime',
    Svg: require('@site/static/img/feat-1.svg').default,
    description: (
      <>
        MatosSphere continuously assess, detect, govern, and remediate misconfigurations and 
        threats in your build, deploy and cloud (AWS, GCP, Azure and Kubernetes) environments.
      </>
    ),
  },
  {
    title: 'Shift-left security and IaC scanning',
    Svg: require('@site/static/img/feat-2.svg').default,
    description: (
      <>
        The build-in checks ensure infrastructure configurations are secure and adhere to 
        best practices and compliance standards. MatosSphere identifies misconfigurations and 
        provides the solutions directly within developer workflows. Each time 
        infrastructure is built, the system detects, identifies, and helps to resolve IaC issues 
        productively during the development cycle.
      </>
    ),
  },
  {
    title: 'Open integration with platform APIs',
    Svg: require('@site/static/img/feat-3.svg').default,
    description: (
      <>
        With our open integrations with REST APIs and ability to utilize our platform from 
        anywhere, you can automate your CI/CD, and incident/risk management processes to 
        leverage all the advanced features of Matossphere. Our platform is SOAR-friendly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4 ms-card')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row ms-row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
