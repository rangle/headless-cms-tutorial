//@ts-nocheck
import React from 'react'
import Link from 'next/link'
import { pascalCase } from 'pascal-case'
import { Figure, Link as DsLink, Navigation, Quote } from '../../design-system'

import * as cmsComponents from '../components'

const Fallback = (props) => <div {...props} />
const components = {
  Figure,
  DsLink,
  Navigation,
  Quote,
  ...cmsComponents
}

export const componentSelector = (componentType = '') => {
  return (
    components[`Ds${pascalCase(componentType)}`] ||
    components[pascalCase(componentType)] ||
    Fallback
  )
}

const isRichText = (val) => {
  return (
    Array.isArray(val) &&
    val.find((content) => {
      return content?._type === 'richText'
    })
  )
}

const isObject = (value) => {
  return typeof value === 'object' && !Array.isArray(value) && !!value
}

const hasSubComponent = (val) => {
  if (isRichText(val)) {
    return true
  }

  if (Array.isArray(val)) {
    return !!val.find(
      (content) =>
        !!content?._type && componentSelector(content._type) !== Fallback
    )
  }

  return !!val?._type && componentSelector(val?._type) !== Fallback
}

export const buildComponent = (componentData, buildContext) => {
  if (isRichText(componentData)) {
    const Component = componentSelector('richText')
    const props = componentData.map((item) => {
      return buildPageProps(item, buildContext)
    })

    return (
      <Component
        value={props}
        {...buildContext}
        frameworkLinkTag={Link}
        references={{}}
      />
    )
  }

  const Component = componentSelector(componentData._type)
  const props = buildPageProps(componentData, buildContext)

  return (
    <Component
      key={componentData._key}
      {...buildContext}
      {...props}
      frameworkLinkTag={Link}
      references={{}}
    />
  )
}
export const buildPageProps = (pageData, buildContext = {}) => {
  let props = { ...pageData }

  Object.keys(props).forEach((field) => {
    const val = props[field]
    if (hasSubComponent(val)) {
      if (Array.isArray(val)) {
        if (isRichText(val)) {
          props[field] = buildComponent(val, buildContext)
        } else {
          props[field] = val.map((sub) =>
            hasSubComponent(sub) ? buildComponent(sub, buildContext) : sub
          )
        }
      } else {
        props[field] = buildComponent(val, buildContext)
      }
    } else if (isObject(val)) {
      props[field] = buildPageProps(val, buildContext)
    } else if (Array.isArray(val)) {
      props[field] = val.map((item) =>
        isObject(item) ? buildPageProps(item, buildContext) : item
      )
    }
  })

  return props
}
