import {render, screen, cleanup} from '@testing-library/react';
import Todo from '../Todo';

afterEach( () => {
    cleanup()
})

test("Should render non-completed Todo", () => {
    const todo = { id: 1, title: "Git practice", completed: false}
    render(<Todo todo={todo} />); // Render Component
    const todoElement = screen.getByTestId('todo-1'); // select element
     // Assertions
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Git practice");
    expect(todoElement).not.toContainHTML('<strike>');
})

test("Should render completed Todo", () => {
    const todo = { id: 2, title: "React Practice", completed: true}
    render(<Todo todo={todo} />); // Render Component
    const todoElement = screen.getByTestId('todo-2'); // select element
     // Assertions
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("React Practice");
    expect(todoElement).toMatchSnapshot('<strike>');
})