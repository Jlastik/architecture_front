import styled from 'styled-components';
import React from 'react';

import { TextSecondary } from '../text';
import { spacing } from '../../theme';
import { FieldPrimaryPropsType } from './field.type';

import { text } from '../../common/text';

export function FieldPrimary(props: FieldPrimaryPropsType) {
  const { titleTid, onChange, onBlur, value, name, plcaeholderTid, error } =
    props;
  return (
    <Container>
      <Title tid={titleTid} />
      <Input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(plcaeholderTid)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

const Title = styled(TextSecondary)`
  margin-bottom: ${spacing(1)};
`;

const Input = styled.input`
  background: #f0f0f0;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.span`
  color: red;
  fonst-size: 14px;
`;
