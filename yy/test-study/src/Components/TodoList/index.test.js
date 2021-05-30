import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '.';
import { todos } from '../../../fixtures';

describe('TodoList', () => {
  test('todos가 존재할 때 TodoList 렌더링', () => {
    const { queryAllByRole } = render(<TodoList todos={todos} />);
    const items = queryAllByRole('listitem');
    expect(items).toHaveLength(todos.length);
  });
  test('todos가 없을 때 TodoList 렌더링', () => {
    const { queryAllByRole, getByText } = render(<TodoList todos={[]} />);
    const items = queryAllByRole('listitem');
    expect(items).toHaveLength(0);
    expect(getByText('empty')).not.toBeNull();
  });
});
