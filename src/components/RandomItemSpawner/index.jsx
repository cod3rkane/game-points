import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, a } from 'react-spring';

import { ColorItem } from '../ColorItem';
import { CollectItem } from '../../entities/CollectItem';

export const RandomItemSpawner = ({ items, onCollectItem }) => {
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, margin: 'auto' },
    enter: { opacity: 1, margin: 'auto' },
    leave: { opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 10,
  });

  return (
    <div className="itemSpawner">
      {transitions.map(({ item, props, key }) => (
        <a.div key={key} style={props}>
          <ColorItem
            key={item.key}
            id={item.id}
            color={item.color}
            onClick={() => onCollectItem(item)}
          />
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
  onCollectItem: PropTypes.func.isRequired,
};

export default RandomItemSpawner;
