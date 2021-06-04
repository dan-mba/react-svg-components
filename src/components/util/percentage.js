function isPercentage(props, propName, componentName) {
  if(typeof props[propName] === 'number') {
    if(props[propName] < 0 || props[propName] > 100) {
      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);
    }
  } else {
    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);
  }
}

export default isPercentage;