import Typed from 'typed.js';

export const TYPED_HERO_OPTIONS = Object.freeze({
    strings: ['Coder', 'Programmer', 'Developer'],
    startDelay: 300,
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
});

export function createTypedInstance(element, options) {
    return new Typed(element, options);
}

export function destroyTypedInstance(typedInstance) {
    typedInstance.destroy();
}
