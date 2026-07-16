---
name: Placewise
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7ebf7'
  surface-container-high: '#dee3f2'
  surface-container-highest: '#d3daea'
  on-surface: '#191c23'
  on-surface-variant: '#434751'
  outline: '#747782'
  outline-variant: '#c4c6d1'
  primary: '#4f46e5'
  on-primary: '#ffffff'
  primary-container: '#e0e0ff'
  on-primary-container: '#00006e'
  secondary: '#585e71'
  on-secondary: '#ffffff'
  secondary-container: '#dde2f9'
  on-secondary-container: '#151b2c'
  tertiary: '#725572'
  on-tertiary: '#ffffff'
  tertiary-container: '#fdd7fa'
  on-tertiary-container: '#2a132c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#410002'
typography:
  font-family: Inter, sans-serif
  display-lg:
    size: 57px
    weight: 400
    line-height: 64px
  headline-md:
    size: 28px
    weight: 600
    line-height: 36px
  body-md:
    size: 16px
    weight: 400
    line-height: 24px
  label-md:
    size: 12px
    weight: 500
    line-height: 16px
spacing:
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
rounding:
  radius-md: 12px
  radius-lg: 16px
---

# Placewise Design Documentation

## Overview
Placewise is a modern, AI-powered placement readiness platform. The design system uses a primary Indigo palette to convey confidence and intelligence, balanced with generous whitespace and rounded UI elements for an approachable student experience.

## Screens Overview

### 1. Landing Page ({{DATA:SCREEN:SCREEN_118}})
- **Purpose**: Brand introduction and portal entry.
- **Key Features**: Hero section with clear CTAs for Students and Admins. Feature grid highlighting AI capabilities.

### 2. Student Dashboard ({{DATA:SCREEN:SCREEN_117}})
- **Purpose**: Personal progress tracking.
- **Key Features**: Radar chart for skill visualization, readiness score, and a sequential learning roadmap.

### 3. Admin Dashboard ({{DATA:SCREEN:SCREEN_119}})
- **Purpose**: Student management and analytics.
- **Key Features**: Sidebar navigation, searchable student table with eligibility status badges, and a skill-gap heatmap for cohort analysis.

### 4. Assessment Interface ({{DATA:SCREEN:SCREEN_103}})
- **Purpose**: Performance evaluation.
- **Key Features**: Focused coding environment with a split-pane layout for problem text and code editor, plus a persistent timer.

## Component Specifications
- **Navigation**: Top navigation for student flows; sidebar navigation for administrative functions.
- **Cards**: All modules are contained within rounded white cards (16px radius) with subtle shadows (4-8px blur).
- **Badges**: 
  - Ready: Success Green
  - At Risk: Warning Amber
  - Ineligible: Danger Red
