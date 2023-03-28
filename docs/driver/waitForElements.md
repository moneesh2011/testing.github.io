---
title: ".waitForElements()"
---

Wait for specified element(s) to appear and returns them as an array

**Returns**: <code>\*</code> - Returns the array of WebElementPromises if found;

| Param    | Type                | Description                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| strategy | <code>string</code> | 'id', 'name', 'className', 'xpath', 'css', 'tagName', 'linkText', 'partialLinkText', 'accessibilityId' |
| locator  | <code>string</code> | value of element to search, corresponding to locator strategy                                          |
