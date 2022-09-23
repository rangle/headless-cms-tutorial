//@ts-nocheck
import React from 'react'
import Link from 'next/link'
import { pascalCase } from 'pascal-case'
import {
  Figure,
  Quote
} from '../../design-system'

const Fallback = (props) => <div {...props} />
const components = {
  Figure,
  Quote
}

export const componentSelector = (componentType = '') => {
  return (
    components[pascalCase(componentType)] ||
    Fallback
  )
}

const isObject = (value) => {
  return typeof value === 'object' && !Array.isArray(value) && !!value
}

const hasSubComponent = (val) => {
  if (Array.isArray(val)) {
    return !!val.find(
      (content) =>
        !!content?._type && componentSelector(content._type) !== Fallback
    )
  }

  return !!val?._type && componentSelector(val?._type) !== Fallback
}

export const buildComponent = (componentData, buildContext) => {
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

  if (props._type === 'cloudinary.asset') {
    return props.secure_url
  }

  Object.keys(props).forEach((field) => {
    const val = props[field]
    if (hasSubComponent(val)) {
      if (Array.isArray(val)) {
        props[field] = val.map((sub) =>
            hasSubComponent(sub) ? buildComponent(sub, buildContext) : sub
          )
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
