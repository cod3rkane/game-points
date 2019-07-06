import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, a } from 'react-spring';

import { ColorItem } from '../ColorItem';
import { CollectItem } from '../../entities/CollectItem';

export const RandomItemSpawner = ({ items }) => {
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, margin: 'auto' },
    enter: { opacity: 1, margin: 'auto' },
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div className="itemSpawner">
      {transitions.map(({ item, props, key }) => (
        <a.div key={key} style={props}>
          <ColorItem key={item.key} id={item.id} color={item.color} onClick={console.log} />
        </a.div>
      ))}
    </div>
  );
};

RandomItemSpawner.defaultProps = {
  items: [],
};

RandomItemSpawner.propTypes = {
  items: PropTypes.arrayOf(CollectItem),
};

export default RandomItemSpawner;
