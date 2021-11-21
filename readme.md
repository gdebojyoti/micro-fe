## My experiments with Micro frontend architecture

Random stuff related to the Micro frontend architecture


### Gotchas

- Element "id" (in host/container's index.html) cannot be the same as the remote app's "name" (in remote's webpack config)
[Error: `TypeError: fn is not a function while loading ./ProductsIndex from webpack/container/reference/products`]
