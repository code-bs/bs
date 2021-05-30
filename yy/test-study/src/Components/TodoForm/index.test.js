import React from 'react';
import { render } from '@testing-library/react';
import Editor from '.';
import { todos } from '../../../fixtures';
import userEvent from '@testing-library/user-event';

describe('Editor', () => {
  test('Editor 렌더링', () => {
    const { queryByPlaceholderText, queryByText } = render(<Editor todos={todos} />);
    expect(queryByPlaceholderText('할일을 입력하시오')).not.toBeNull();
    expect(queryByText('추가')).not.toBeNull();
  });
  test('Editor 값 변경', () => {
    const { queryByPlaceholderText } = render(<Editor todos={todos} />);
    const input = queryByPlaceholderText('할일을 입력하시오');
    userEvent.type(input, 'hallo');
    expect(input.value).toEqual('hallo');
  });
});
