---
title: "Tags for desktop and mobile tests"
sidebar_label: "Test tagging"
sidebar_position: 2
---

The framework uses `@mobile` and `@desktop` tags for identifying desktop and mobile tests respectively. Both these tags are reserved and should not be used outside of this context.

### Differentiating desktop and mobile tests

To indicate that a scenario is desktop-specific, you need to tag that scenario with `@desktop`, and all mobile-specific scenario as `@mobile`.
By default, all chrome/firefox/safari tests will exclude scenarios that have `@mobile` tag and all android/ios executions will exclude scenarios that have `@desktop` tag.
If your tests are cross-compatible with desktop & mobile, you do not need to tag them with `@desktop` or `@mobile`.
