import React, { FC } from 'react';
import { useStyles } from '@grafana/ui';
import { DataFrame } from '@grafana/data';
import { config } from 'app/core/config';
import { FeatureLike } from 'ol/Feature';

export interface Props {
  data?: DataFrame; // source data
  feature?: FeatureLike;
  rowIndex?: number; // the hover row
  columnIndex?: number; // the hover column
}

export const DataClickableView: FC<Props> = () => {
  const style = useStyles(config.theme);
  const grafanearstaSlack = 'slack://channel?team=T02S4RCS0&id=C02NZP90728';

  if (!data || rowIndex == null) {
    return null;
  }
  return (
    <table className={style.infoWrap}>
      <tbody>
        {Object.entries(feature.getProperties()).map(
          (e, i) =>
            e[0] === 'geometry' || ( //don't include geojson feature geometry
              <tr key={`${e}-${i}`}>
                <th>{`${e[0]}: `}</th>
                <td>{`${e[1]}`}</td>
                <a href={grafanearstaSlack}>
                  <strong>slack link</strong>
                </a>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};
