import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  cal: number
  threshold: number;
}

export const CalorieTextStyled = styled.span<Props>(
    ({ cal, threshold }): CSSObject => ({
      color: cal > threshold ? 'red' : cal > (threshold * 0.5) ? 'orange' : 'green',
    }),
);