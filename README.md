# Container addon with busy state for Grommet 2

> ⚠️ This version is based on grommet/2.0.0-alpha.9.

There's no behavior or styles changes on the grommet components.

## Components

### Container
Container is based on the Stack and Box components. It renders a horizontal section, you can call it everytime you want to:

```javascript
  <Box direction="row">
    <Box elevation="small" basis="3/4"> // Container props extends this Box only
        // section content
    </Box>
  </Box>
```

In addition to the Box props, there are also:

- *basic* (bool): a shortcut to clear the elevation prop.
- *busy* (bool): Adds a loading state to the container that also prevents any modification on it
- *spinner* (node, optional): You can extend the Busy component with your own animation.


### Busy
It's a lottie-web wrapper based on the Box component, which you can extend or overwrite the default props. In addition, the following props will control the animation state:

- *animationData*: a lottie json data. If not provided, it will you a default one.
- *autoplay* (boolean)
- *loop* (boolean)


> At this time, a default animation is buddled up within this library. The main reason is to showcase how far we can go with a solid component base. Grommet let you focus on the essential. If you think this my be a great addon in the feature, PR's are welcomed.
