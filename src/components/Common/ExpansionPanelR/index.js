import React from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import SlideDown from 'arui-feather/slide-down';
import './styles.scss';
import Link from 'arui-feather/link';
import IconArrowDown from 'arui-feather/icon/ui/arrow-down';

/**
 * Expansion Panel
 */
export default function ExpansionPanelR({ title, content, isExpanded, className, onClickExpand }) {
  const classes = classNames('expansion-panel-r', className);
  return(
    <div className={classes}>
      <Link
        pseudo
        onClick={onClickExpand}
        icon={<IconArrowDown className={`${isExpanded ? 'link__icon-open' : 'link__icon-close'}`}/>}
        iconPosition="right"
      />
      {!isExpanded
        ? (
          <div className="expansion-panel-r-title">
            {title}
          </div>
        ): (
          <div className="expansion-panel-r-content-open">
            <SlideDown isExpanded={isExpanded}>
              {content}
            </SlideDown>
          </div>
        )
      }
    </div>
  )
}

ExpansionPanelR.propTypes = {
  title: Type.node.isRequired,
  content: Type.node.isRequired,
  onClickExpand: Type.func.isRequired,
  isExpanded: Type.bool,
  className: Type.string,
};

ExpansionPanelR.defaultProps = {
  isExpanded: false,
  className: '',
};


