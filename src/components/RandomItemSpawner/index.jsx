import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';

import { ColorItem } from '../ColorItem';
import { CollectItem } from '../../entities/CollectItem';

export const RandomItemSpawner = ({ items }) => {
  const list = map(
    e => <ColorItem key={e.key} id={e.id} color={e.color} onClick={console.log} />,
    items,
  );

  return <div>{list}</div>;
};

RandomItemSpawner.defaultProps = {
  items: [],
};

RandomItemSpawner.propTypes = {
  items: PropTypes.arrayOf(CollectItem),
};

export default RandomItemSpawner;
