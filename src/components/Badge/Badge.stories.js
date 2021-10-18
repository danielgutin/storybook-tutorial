import React from 'react';
import Badge from './Badge';

export default {
    title: 'Data Display/Badge',
    component: Badge,
    args: {
        text: 'Hello World',
    }
}


// Stories
// Badge Types
const Template = args => <Badge {...args} />

export const BadgeDefault = Template.bind({});
BadgeDefault.args = {
    type: 'default',
    text: process.env.BUTTON_TEXT
}

export const BadgeInfo = Template.bind({});
BadgeInfo.args = {
    type: 'info'
}

export const BadgeWarning = Template.bind({});
BadgeWarning.args = {
    type: 'warning',
}

export const BadgeError = Template.bind({});
BadgeError.args = {
    type: 'error',
}

export const BadgeSuccess = Template.bind({});
BadgeSuccess.args = {
    type: 'success',
}
