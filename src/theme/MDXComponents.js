import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

const Setting = ({children}) => (
    <span className="setting-name">{children}</span>
);

const Mod = ({children}) => (
    <span className="mod-name">{children}</span>
);

const SettingSection = ({children}) => (
    <span className="setting-section-name">{children}</span>
);

export default {
    ...MDXComponents,
    Setting,
    Mod,
    SettingSection
};