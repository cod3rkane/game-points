import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useTransition, a } from 'react-spring';

import { ColorItem } from '../ColorItem';
import { CollectItem } from '../../entities/CollectItem';
import ClickSound from '../../assets/ballon-click.mp3';

export const RandomItemSpawner = ({ items, onCollectItem }) => {
  const audio = useRef(null);
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, margin: 'auto' },
    enter: { opacity: 1, margin: 'auto' },
    leave: { opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  const onTap = (item) => {
    onCollectItem(item);
    audio.current.play();
  };

  return (
    <div className="itemSpawner">
      {transitions.map(({ item, props, key }) => (
        <a.div key={key} style={props}>
          <ColorItem
            key={item.key}
            id={item.id}
            color={item.color}
            onClick={() => onTap(item)}
          />
        </a.div>
      ))}
      <audio ref={audio}>
        <track kind="captions" />
        <source src={ClickSound} type="audio/mpeg" />
      </audio>
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
