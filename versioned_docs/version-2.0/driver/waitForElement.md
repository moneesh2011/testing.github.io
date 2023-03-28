---
title: ".waitForElement()"
---

Wait for A SINGLE specified element to appear and returns them as an array

**Returns**: <code>WebElementPromise</code> - Returns a WebElementPromise if found;

| Param    | Type                | Description                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| strategy | <code>string</code> | 'id', 'name', 'className', 'xpath', 'css', 'tagName', 'linkText', 'partialLinkText', 'accessibilityId' |
| locator  | <code>string</code> | value of element to search, corresponding to locator strategy                                          |
