import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, a } from 'react-spring';

import { ColorItem } from '../ColorItem';
import { CollectItem } from '../../entities/CollectItem';

export const RandomItemSpawner = ({ items, onCollectItem }) => {
  const transitions = useTransition(items, item => item.key, {
    unique: true,
    trail: 400 / items.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    update: item => [{ opacity: item.collected ? 0 : 1, transform: item.collected ? 'scale(0)' : 'scale(1)' }],
    config: { mass: 1, tension: 500, friction: 55 },
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
