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
  Times,
  Fill,
  Find,
  FindIndex,
  Join,
  Reverse,
  FilterBy,
  Reduce
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
    render((
      <Filter
        on={["really", "wtf", "amazing"]}
        predicate={v => v !== "wtf"}
      >
        {wordsFiltered => (
          <Join
            on={wordsFiltered}
            separator=" ✌️ "
          >
            {v => v}
          </Join>
        )}
      </Filter>
    ), node, () => {
      expect(node.innerHTML).toBe("really ✌️ amazing")
    })
  })

  it("render by FilterBy", () => {
    render((
      <FilterBy
        on={[
          { type: "a", name: "A" },
          { type: "b", name: "B" },
          { type: "c", name: "C" }
        ]}
        property="type"
        predicate={v => v !== "c"}
      >
        {v => (
          <Join
            on={v.map(v => v.name)}
          >
            {v => v}
          </Join>
        )}
      </FilterBy>
    ), node, () => {
      expect(node.innerHTML).toBe("A,B")
    })
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
    // render((
    //   <Times n={2}>{i => "gg"}</Times>
    // ), node, () => {
    //   expect(node.innerHTML).toBe("heyheyhey")
    // })
  })

  it("render by Fill", () => {
    render((
      <Fill
        on={["peach", "orange", "papaya"]}
        value="peach"
      >
        {v => v}
      </Fill>
    ), node, () => {
      expect(node.innerHTML).toBe("peachpeachpeach")
    })
  })

  it("render by Find", () => {
    render((
      <Find
        on={["nectarine", "orange"]}
        predicate={v => v === "orange"}
      >
        {v => v}
      </Find>
    ), node, () => {
      expect(node.innerHTML).toBe("orange")
    })
  })

  it("render by FindIndex", () => {
    render((
      <FindIndex
        on={["pear", "lime", "peach"]}
        predicate={v => v === "peach"}
      >
        {v => v}
      </FindIndex>
    ), node, () => {
      expect(node.innerHTML).toBe("2")
    })
  })

  it("render by Join", () => {
    render((
      <Join
        on={["fig", "lychee", "mango"]}
        separator=" - "
      >
        {v => v}
      </Join>
    ), node, () => {
      expect(node.innerHTML).toBe("fig - lychee - mango")
    })
  })

  it("render by Reverse", () => {
    render((
      <Reverse
        on={["raspberry", "quince"]}
      >
        {v => v}
      </Reverse>
    ), node, () => {
      expect(node.innerHTML).toBe("quinceraspberry")
    })
  })

  it("readme Map If example", () => {
    render((
      <Map
        on={[
          { username: "Francis" },
          { username: "John" },
          { username: "Kit" }
        ]}
      >
        {user => (
          <If condition={user.username === "Francis"}>
            {user.username}
          </If>
        )}
      </Map>
    ), node, () => {
      expect(node.innerHTML).toBe("Francis")
    })
  })

  it("render by Reduce", () => {
    render((
      <Reduce
        on={[3, 5, 7]}
        initialValue={0}
        callback={((prev, curr) => prev + curr)}
      >
        {v => v}
      </Reduce>
    ), node, () => {
      expect(node.innerHTML).toBe("15")
    })
  })
})

