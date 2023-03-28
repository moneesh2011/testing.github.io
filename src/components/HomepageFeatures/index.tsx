import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Developer-friendly",
    Svg: require("@site/static/img/ts_js.svg").default,
    description: (
      <>
        Use your favorite developer-friendly Typescript version, or just use
        plain-old Javascript, with support upto ES7.
      </>
    ),
  },
  {
    title: "Browsers & Devices",
    Svg: require("@site/static/img/browsers.svg").default,
    description: (
      <>
        Write once, and run across different browsers, even mobile browsers.
        Mobile app automation is also supported.
      </>
    ),
  },
  {
    title: "Extensible",
    Svg: require("@site/static/img/puzzles.svg").default,
    description: (
      <>
        With Cucumber-js and Node.js, your test suite is more extensible than
        ever. Plug-and-play with any open-source libraries.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
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
