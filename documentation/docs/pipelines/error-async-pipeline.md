---
title: ErrorAsyncPipeline
---

The `ErrorAsyncPipeline` component should be placed within another pipeline and will trigger its pipes in parallel whenever its parent pipeline throws an error
or if one of its pipes rejects a promise.
