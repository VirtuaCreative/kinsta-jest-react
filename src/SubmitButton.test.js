import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitButton from './SubmitButton';

test('SubmitButton becomes disabled after click', () => {
	const submitMock = jest.fn();

	render(
		<SubmitButton id="submit-details" label="Submit" onSubmit={submitMock} />
	);

	expect(screen.getByTestId('submit-details')).not.toBeDisabled();

	fireEvent.submit(screen.getByTestId('submit-details'));

	expect(screen.getByTestId('submit-details')).toBeDisabled();
});
