// @ts-ignore
import React, { useRef, useEffect } from "react";
import "./JsDos.css";

import { DosFactory } from "js-dos";
require("js-dos");
const Dos = (window as any).Dos as DosFactory;

const JsDos: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref !== null) {
      const ciPromise = Dos(ref.current as HTMLCanvasElement, {
        wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
        cycles: 1000,
      }).then((runtime) => {
        return runtime.fs
          .extract("https://js-dos.com/6.22/current/test/digger.zip")
          .then(() => {
            return runtime.main(["-c", "DIGGER.COM"]);
          });
      });

      return () => {
        ciPromise.then((ci) => ci.exit());
      };
    }
  }, [ref]);

  // @ts-ignore
    return <canvas ref={ref} />;
};

export default JsDos;
