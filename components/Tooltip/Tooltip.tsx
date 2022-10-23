import React, { FC } from 'react';
import { Tooltip as AntTooltip, TooltipProps } from 'antd';

type Props = TooltipProps & React.RefAttributes<unknown>;

export const TooltipOrDiv: FC<Props> = props => {
  const { children, title } = props;

  return title ? <AntTooltip {...props}>{children}</AntTooltip> : <>{children}</>;
};
