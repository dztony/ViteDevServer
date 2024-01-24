function operateDom(): void {
  const dom = document.createElement('div');
  dom.innerText = 'value by util.ts file666';
  document.body.appendChild(dom);
}

setTimeout(() => {
  operateDom();
}, 1000 * 1.5);
