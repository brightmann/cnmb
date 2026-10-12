import * as React from 'react';
import Mdx_fh from './fh.jsx';
import Mdx_sample_01 from './sample-01.jsx';
import Mdx_sample_02 from './sample-02.jsx';
import Mdx_sample_03 from './sample-03.jsx';
import Mdx_sample_04 from './sample-04.jsx';
import Mdx_sample_05 from './sample-05.jsx';
import Mdx_sample_06 from './sample-06.jsx';
import Mdx_sample_07 from './sample-07.jsx';
import Mdx_sample_08 from './sample-08.jsx';
import Mdx_sample_09 from './sample-09.jsx';
import Mdx_sample_10 from './sample-10.jsx';
import Mdx_sample_11 from './sample-11.jsx';
import Mdx_sample_12 from './sample-12.jsx';

const registry: Record<string, React.ComponentType> = {
  "fh": Mdx_fh,
  "sample-01": Mdx_sample_01,
  "sample-02": Mdx_sample_02,
  "sample-03": Mdx_sample_03,
  "sample-04": Mdx_sample_04,
  "sample-05": Mdx_sample_05,
  "sample-06": Mdx_sample_06,
  "sample-07": Mdx_sample_07,
  "sample-08": Mdx_sample_08,
  "sample-09": Mdx_sample_09,
  "sample-10": Mdx_sample_10,
  "sample-11": Mdx_sample_11,
  "sample-12": Mdx_sample_12,
};

export function getMdxComponent(slug: string): React.ComponentType | null {
  return registry[slug] ?? null;
}
