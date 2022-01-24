import styled from 'styled-components'
import PillButton from './PillButton'
import React, { useState } from 'react'

export const colors = {
  all: {
    text: '#004b23',
    bg: '#e9fdaa',
  },
  vegetarian: {
    text: '#0b4727',
    bg: '#d0ecdd',
  },
  quick: {
    text: '#154677',
    bg: '#c6dff9',
  },
  beef: {
    text: '#8f027c',
    bg: '#fee7fe',
  },
  baking: {
    text: '#432f7e',
    bg: '#dad1f5',
  },
  healthy: {
    text: '#a03800',
    bg: '#f9e1cd',
  },
  seafood: {
    text: '#015153',
    bg: '#c5f1f3',
  },
  spicy: {
    text: '#711617',
    bg: '#fae0e0',
  },
  chicken: {
    text: '#5a4a02',
    bg: '#fef3bc',
  },
  egg: {
    text: '#4f400c',
    bg: '#e8e5da',
  },
  rice: {
    text: '#01156d',
    bg: '#d5ddfe',
  },
  sweet: {
    text: '#9f1957',
    bg: '#feebf3',
  },
}

export default function CategoryPills({ onChangeTag, currentTag }) {
  return (
    <Categories>
      <PillButton
        color={colors.all}
        name="all"
        onClick={() => onChangeTag('all')}
        isSelected={currentTag === 'all'}
      />

      <PillButton
        color={colors.vegetarian}
        name="vegetarian"
        onClick={() => onChangeTag('vegetarian')}
        isSelected={currentTag === 'vegetarian'}
      />

      <PillButton
        color={colors.rice}
        name="noodles"
        onClick={() => onChangeTag('noodles')}
        isSelected={currentTag === 'noodles'}
      />

      <PillButton
        color={colors.healthy}
        name="healthy"
        onClick={() => onChangeTag('healthy')}
        isSelected={currentTag === 'healthy'}
      />

      <PillButton
        color={colors.baking}
        name="baking"
        onClick={() => onChangeTag('baking')}
        isSelected={currentTag === 'baking'}
      />

      <PillButton
        color={colors.beef}
        name="beef"
        onClick={() => onChangeTag('beef')}
        isSelected={currentTag === 'beef'}
      />

      <PillButton
        color={colors.seafood}
        name="seafood"
        onClick={() => onChangeTag('seafood')}
        isSelected={currentTag === 'seafood'}
      />

      <PillButton
        color={colors.spicy}
        name="spicy"
        onClick={() => onChangeTag('spicy')}
        isSelected={currentTag === 'spicy'}
      />
      <PillButton
        color={colors.chicken}
        name="chicken"
        onClick={() => onChangeTag('chicken')}
        isSelected={currentTag === 'chicken'}
      />
      <PillButton
        color={colors.egg}
        name="egg"
        onClick={() => onChangeTag('egg')}
        isSelected={currentTag === 'egg'}
      />
      <PillButton
        color={colors.quick}
        name="quick & easy"
        onClick={() => onChangeTag('quick')}
        isSelected={currentTag === 'quick'}
      />

      <PillButton
        color={colors.rice}
        name="rice"
        onClick={() => onChangeTag('rice')}
        isSelected={currentTag === 'rice'}
      />

      <PillButton
        color={colors.sweet}
        name="sweety sweet things"
        onClick={() => onChangeTag('sweet')}
        isSelected={currentTag === 'sweet'}
      />
    </Categories>
  )
}

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 35px;
`
