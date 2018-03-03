import Service from '@ember/service';

export default Service.extend({
  oldRouteName: '',
  newRouteName: '',
  direction: '',

  setRoutes(sourceRouteName, targetRouteName){
    const source = sourceRouteName.split('.');
    const target = targetRouteName.split('.');

    let transitionDirection;

    // detect whether we are moving up or down the route hierarchy
    if(source.length === target.length){
      const sourceIsIndex = source[source.length - 1 ] === 'index';
      const targetIsIndex = target[target.length - 1] === 'index';

      if(sourceIsIndex === targetIsIndex){
        transitionDirection = false;
      } else if(targetIsIndex){
        transitionDirection = 'up';
      } else if(sourceIsIndex){
        transitionDirection = 'down';
      }
    } else if(source.length > target.length){
      transitionDirection = 'up';
    } else {
      transitionDirection = 'down';
    }

    this.set('oldRouteName', sourceRouteName);
    this.set('newRouteName', targetRouteName);
    this.set('direction', transitionDirection);
  }
});
