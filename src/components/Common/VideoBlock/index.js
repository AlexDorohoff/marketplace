import React, {Component} from 'react';
import IconPlay from '../../../theme/images/icons/player-play.svg';
import TeacherImg from '../../../theme/images/rs11974184792950.jpg';
import './styles.scss';
import IconButton from 'arui-feather/icon-button';

const VideoBlock = ({ bannerSrc, videoId }) => {

  const handleClickPlay = () => {};

  return (
    <div className="video-block">
      <div className="video-block-image">
        <img src={TeacherImg} alt="" />
      </div>
      <IconButton size="xl" onClick={handleClickPlay}>
        <img src={IconPlay} alt="" />
      </IconButton>
    </div>
  );
};

export default VideoBlock;
