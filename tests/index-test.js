import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import {
  Every,
  Filter,
  First,
  If,
  Last,
  Map,
  Some,
  Includes,
  Sort,
  Times
} from "../src"

describe('Components', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('render by every', () => {
    render((
      (
        <Every
          on={[1, 4, 9]}
          condition={v => v <= 10}
        >
          every
        </Every>
      )
    ), node, () => {
      expect(node.innerHTML).toContain("every")
    })
  })

  it("render by Filter", () => {
    // render((
    //   <Filter
    //     on={["banana", "kiwi"]}
    //     condition={v => v === "kiwi"}
    //   >
    //     {v => v}
    //   </Filter>
    // ), node, () => {
    //   console.log(node.innerHTML)
    //   expect(node.innerHTML).toContain("kiwi")
    // })
  })

  it("render by If", () => {
    render((
      <If condition={10 === 10}>
        by if
      </If>
    ), node, () => {
      expect(node.innerHTML).toContain("by if")
    })
  })

  it("render by else from If", () => {
    render((
      <If
        condition={10 === 1}
        elze={"fallback"}
      >
        by if
      </If>
    ), node, () => {
      expect(node.innerHTML).toBe("fallback")
    })
  })

  it("render by First", () => {
    render((
      <First
        on={["apple", "ananas"]}
      >
        {v => v}
      </First>
    ), node, () => {
      expect(node.innerHTML).toContain("apple")
    })
  })

  it("render by Last", () => {
    render((
      <Last
        on={["apple", "ananas"]}
      >
        {v => v}
      </Last>
    ), node, () => {
      expect(node.innerHTML).toContain("ananas")
    })
  })

  it("render by Map", () => {
    render((
      <Map
        on={["lemon", "watermelon"]}
      >
        {(v, i) => ` ${i}: ${v}`}
      </Map>
    ), node, () => {
      expect(node.innerHTML).toContain("0: lemon 1: watermelon")
    })
  })

  it("render by Some", () => {
    render((
      <Some
        on={["apricot", "avocado"]}
        condition={v => v === "apricot"}
      >
        "avocado"
      </Some>
    ), node, () => {
      expect(node.innerHTML).toContain("avocado")
    })
  })

  it("render by Includes", () => {
    render((
      <Includes
        on={["grape", "fig"]}
        searchElement="grape"
      >
        grape
      </Includes>
    ), node, () => {
      expect(node.innerHTML).toBe("grape")
    })
  })

  it("render by Times", () => {
    render((
      <Times n={2}>{i => "gg"}</Times>
    ), node, () => {
      expect(node.innerHTML).toBe("heyheyhey")
    })
  })
})
