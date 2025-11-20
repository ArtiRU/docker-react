import React from 'react';

import { render } from '@testing-library/react';

import { buttonContent, buttonTexts } from '@/components/button/__mocks__/button';
import Button from '@/components/button/button';
import { contactTexts } from '@/components/contact/__mocks__/contact';

import { UserConfig } from '@/types/common';

import { normalizeSpaces } from '@/utils/helpers';

import { ButtonType } from '@/components/button/types/button-types';
import { Date } from '@/types/date';

import { buttonHelper } from '@/components/button/utils/button-helper';
import { getTimeFromDate } from '@/utils/time-date';

export const buttonTests = [buttonTexts, buttonContent, contactTexts];
export const arr: UserConfig[] = [];
export const date: Date = {};
export const button: ButtonType = {};
export const btnHelp = buttonHelper();
export const dateIso = normalizeSpaces('sd');
export const time = getTimeFromDate('time');

describe(Button, () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Button>text</Button>);

    expect(getByTestId('button')).toBeInTheDocument();
  });
});
