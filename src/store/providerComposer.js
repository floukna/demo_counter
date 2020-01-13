import React, { cloneElement } from "react"

// import providers
import { CounterProvider } from "./CounterProvider"

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids
      }),
    children
  )
}
export default function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[<CounterProvider />]}
    >
      {children}
    </ProviderComposer>
  )
}
